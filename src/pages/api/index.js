import request from '../../request'

export default function list ()  {
    return request({
        url: '/api/v1/lists',
        method: 'get'
    })
}