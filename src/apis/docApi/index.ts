import Axios from "@/utils/axios";

/**
 * @description 文档新增
 * @param {string} title 文档标题
 * @param {string} content 文档内容
 *
 */

export const createDocument = (data: { title: String; content: String }) => {
  return Axios.request({
    url: "doc/createDoc",
    method: "POST",
    data,
  });
};

export const queryDocument = (params: { id:String|Number }) => {
  return Axios.request({
    url: "doc/getDocById",
    method: "GET",
    params,
  });
};

export const updateDocument = (data:{id:String,title:String,content:String}) => {
  return Axios.request({
    url: "doc/updateDoc",
    method: "POST",
    data,
  });
};
