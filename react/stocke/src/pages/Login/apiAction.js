import request from '../../utils/request'
import apiUrl from '../../utils/api'

function setLogin(data) {
    return request({
        url: `${apiUrl.setlogin}`,
        method: 'post',
        data
    })
}

function getLoginAuth(email,password){
    return request({
        url: `${apiUrl.getLoginAuth}?email="${email}"&password="${password}"`,
        method: 'get'
    })
}
    

export default { setLogin , getLoginAuth}