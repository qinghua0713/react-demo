import React from "react"
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
       // this.props.callback(this.state.msg, this.state.name, this.state.age)
    }
    render () {
        return (
            <div>
                这是第二个er子页面
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
                <div>{this.props.msg}</div>
                <button onClick={this.change}>点击</button>
            </div>
        )
    }
}

export default aboutSonTwo