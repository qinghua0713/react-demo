import React from 'react';
import {  Link, Route } from "react-router-dom"
import List from '../api'
import AboutSonTwo from './aboutSonTwo'
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '这是父组件的消息',
            name: 'yz',
            age:20,
            dataList: []
        }
    }
    callback = (msg, name, age) => {
        this.setState({ msg, name, age })
    }
    request = async () => {
      const res = await List ()
    }
    componentDidMount = () => [
        this.request()   
    ]
    render() {
        return (
            <div className='user'>
               <div className='content'>
                    <div className='left'>
                        <Link to='/about/'>第一个儿子</Link>
                        <br/><br/>
                        <Link to='/about/aboutSonTwo'>第二个儿子</Link>
                    </div>

                    <div className='right'>
                        <AboutSonTwo  callback={this.callback} name={this.state.name} age={this.state.age} msg={this.state.msg}></AboutSonTwo>
                        {
                            this.props.routes.map((item, index)=> {
                                return <Route key= { index } exact path = { item.path  } component = { item.component } />
                            })
                        } 
                          
                    </div>
               </div>
               

            </div>
            
        );
    }
}

export default About;