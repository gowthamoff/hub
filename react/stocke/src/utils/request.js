import axios from 'axios'
import { message } from "antd";
// create an axios instance
const service = axios.create({
  baseURL: ""

})

// request interceptor
service.interceptors.request.use(
  serviceConfig => {
    return serviceConfig
  },
  error => {
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if ((response.status === 200 || response.status === 201) && res.display) {
    //   message(res.message, 'success')
    // }
    return response
  },
  error => {  console.log('error.response',error);

  if(error.message == 'Network Error') {
    message.info({
      type: 'info',
      content: 'Please turn on Network CORS',
    });
  }
    if (error.response) {
    
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const res = error.response
      // Unauthorized
      return res
    } else if (error.request) {
      // The request was made but no response was received
      // message('Please try again later', 'error')
    }
    // return Promise.reject(error.response)
  }
)

export default service
