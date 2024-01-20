const baseURL1 = "https://bxogqjcxj3.execute-api.us-east-1.amazonaws.com/dev/" // getRecords
const baseURL2 = "https://5lo2v60gq0.execute-api.us-east-1.amazonaws.com/dev/" // insert
const baseURL3 = "https://xvqvli4xd7.execute-api.us-east-1.amazonaws.com/dev/" // delete
const baseURL4 = "https://r4z03837u9.execute-api.us-east-1.amazonaws.com/default/stockePut" //edit
const baseURL5 = "https://bxogqjcxj3.execute-api.us-east-1.amazonaws.com/dev/" //getProductInfo
const baseURL6 = "https://aevs548h49.execute-api.us-east-1.amazonaws.com/dev/" // register
const baseURL7 = "https://aevs548h49.execute-api.us-east-1.amazonaws.com/dev/" //login

export default {
  getProducts: baseURL1,
  setProduct: baseURL2,
  deleteProduct: baseURL3,
  updateProduct: baseURL4,
  getProduct: baseURL5,
  setlogin: baseURL6,
  getLoginAuth: baseURL7
};
