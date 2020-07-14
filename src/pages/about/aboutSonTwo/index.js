import React from "react"
import { Button } from 'antd';
class aboutSonTwo extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            name: 'xpy',
            age: 6,
            msg: '来自小朋友的消息'
        }
    }
    
    change = () => {
        
        this.props.callback(this.state.msg, this.state.name, this.state.age)
    }
    render () {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
                <div>{this.props.msg}</div>
                <button onClick={this.change}>点击</button>
                {/* <Button onClick={this.change}>点击</Button> */}
            </div>
        )
    }
}

export default aboutSonTwo