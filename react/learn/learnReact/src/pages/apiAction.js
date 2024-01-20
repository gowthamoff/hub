import apiUrl from "../utils/api";
import request from "../utils/request";

function getProducts() {
  return request({
    url: apiUrl.getProduct,
    method: "GET",
    data: {
        "httpMethod" :"GET" ,
        "body":{
            "name":"erf"
        }
    }
  });
}

export default { getProducts }