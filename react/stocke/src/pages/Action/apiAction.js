import request from '../../utils/request'
import apiUrl from '../../utils/api'

function deleteProduct(data) {
    return request({
        url: `${apiUrl.deleteProduct}`,
        method: 'delete',
        data
    })
}

function updateProduct(data) {
    return request({
        url: `${apiUrl.updateProduct}`,
        method: 'put',
        data
    })
}

function getProduct(id,userid) {
    return request({
        url: `${apiUrl.getProduct}?id=${id}&userid="${userid}"`,
        method: 'get'
    })
}

export default { deleteProduct, updateProduct, getProduct }    