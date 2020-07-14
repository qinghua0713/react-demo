import React from "react"
import { useHistory } from 'react-router-dom'
const Home = () => {
    const history = useHistory()
    const loginOut = () => {
        window.localStorage.removeItem('token')
        history.push('/login')
    }
    return (
        <div>
            欢迎，这里是Home页
            <button onClick = { loginOut }>退出登陆</button>
        </div>
    )
}

export default Home