from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Comment
from .serializers import CommentSerializer
from admin_role import service
import jwt

@api_view(["GET", "POST"])
def comment_list(request):
    if request.method == "GET":
        comments = Comment.objects.order_by("-created_at")
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        token = request.headers.get("Authorization", "").replace("Bearer ", "")
        if not token:
            return Response({"status": "error", "message": "请先登录后再发表评论"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            payload = jwt.decode(token, service.SECRET_KEY, algorithms=["HS256"])
            user_info = payload.get("user_info", {})
            author = user_info.get("real_name") or user_info.get("user_name") or "Student"
        except jwt.exceptions.InvalidTokenError:
            return Response({"status": "error", "message": "无效的 token"}, status=status.HTTP_401_UNAUTHORIZED)

        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=author)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
