import request from '../../utils/request'
import apiUrl from '../../utils/api'

function getAllProducts(userid) {
  return request({
    url: `${apiUrl.getProducts}?id=0&userid="${userid}"`,
    method: 'get'
  })
}

function setProduct(data) {
  return request({
    url: `${apiUrl.setProduct}`,
    method: 'post',
    data
  })
}

export default { getAllProducts, setProduct }