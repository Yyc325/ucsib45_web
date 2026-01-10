import Axios from "@/utils/axios";

/**
 * @description: 获取评论列表
 */
export const get_comments = () => {
  return Axios.request<any>({
    // 如果 baseURL 是 /api，这里只需要写 "comments/"
    // 如果没有 baseURL，这里保留 "/api/comments/" 但要确保只有一个 api
    url: "/comments/", 
    method: "GET",
  });
};

export const post_comment = (data: { content: string }) => {
  return Axios.request<any>({
    url: "/comments/",
    method: "POST",
    data,
  });
};