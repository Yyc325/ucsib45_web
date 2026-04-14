import Axios from "@/utils/axios";

/**
 * @description: 获取评论列表
 */
export const get_comments = () => {
  return Axios.request<any>({
    url: "/api/comments/",
    method: "GET",
  });
};

export const post_comment = (data: { content: string }) => {
  return Axios.request<any>({
    url: "/api/comments/",
    method: "POST",
    data,
  });
};
