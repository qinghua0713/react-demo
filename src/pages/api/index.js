import request from '../../request'

export default function list (data)  {
    return request({
        url: '/api/v1/lists',
        method: 'get'
    })
}