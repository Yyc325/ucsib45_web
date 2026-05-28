import Axios from "@/utils/axios";

export const fileTransform = (data: any) => {
  return Axios.request({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "deal/pdfToWord",
    method: "post",
    data,
  });
};
