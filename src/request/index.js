import axios from 'axios'
import { message } from 'antd';
const service = axios.create({
    baseURL: 'https://5b5e71c98e9f160014b88cc9.mockapi.io',
    timeout:  5000
})
service.interceptors.request.use((config) => {
    console.log(config)
    const token = window.localStorage.token
    if (token) config.headers['token'] = token
    return config
}, (error) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response) => {
    const dataAxios = response?.data
    const { code } = dataAxios
    if (code === undefined) {
        return dataAxios
    } else {
        switch (code) {
            case 0:
                return dataAxios || dataAxios.data
            default:
                message.error(`${dataAxios.msg}: ${response?.config.url}`);
                break;

        }
    }
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400: message.error('请求错误'); break
            case 401: message.error('未授权，请登录'); break
            case 403: message.error('拒绝访问'); break
            case 404: message.error(`请求地址出错: ${error.response.config.url}`); break
            case 408: message.error('请求超时'); break
            case 500:  message.error('服务器内部错误'); break
            case 501:  message.error('服务未实现'); break
            case 502:  message.error('网关错误'); break
            case 503:  message.error('服务不可用'); break
            case 504:  message.error('网关超时'); break
            case 505:  message.error('HTTP版本不受支持') ; break
            default: break
          }
    }
    return Promise.reject(error)
})

export default service