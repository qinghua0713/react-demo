import React from "react"
import { increaseAction, decreaseAction, resetAction } from "../../../actions/counter";
  import reducer from '../../../reducers/counter'
import { createStore } from "redux";
import { Button } from 'antd'
const store = createStore(reducer)
class aboutSonTwo extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            counter: 0,
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
                <h1>{this.state.counter}</h1>
				<Button  onClick={() => store.dispatch({type: 'INCREASE'})}>+1</Button>
				<Button  onClick={() => store.dispatch({type: 'DECREASE'})}>-1</Button>
				<Button  onClick={() => store.dispatch({type: 'RESET'})}>0</Button>
                这是第二个er子页面
                卧槽
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
                <div>{this.props.msg}</div>
                <button onClick={this.change}>点击</button>
            </div>
        )
    }
}

export default aboutSonTwo