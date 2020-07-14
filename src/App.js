import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css'
import routes from './router'


class App extends React.Component {
    render () {
        
        return (
            <Router>
                <div>
                      <header>
                          <Link style = {{marginLeft: 8}} to='/login'>Login页</Link>
                          <Link style = {{marginLeft: 8}} to='/about'>About页</Link>
                          <Link style = {{marginLeft: 8}} to='/about/aboutSon'>About第一个儿子页</Link>
                          <Link style = {{marginLeft: 8}} to='/about/aboutSonTwo'>About第二个儿子页</Link>
                          <Link style = {{marginLeft: 8}} to='/'>首页</Link>
                      </header>
                </div>
                <Switch>
                {/* <FrontendAuth config = {routes} ></FrontendAuth> */}
                {
                    routes.map((route, key)=>{
                        if(route.exact){
                            return <Route  key={key}  exact path={route.path}                     
                                render={props => (
                                    <route.component {...props} routes={route.routes}/>
                                    )}
                            />
                        }else{
                            return <Route  key={key}  path={route.path} 
                                render={props => (
                                    <route.component {...props} routes={route.routes} />
                                )}
                            />

                        }
                    })
                }        
                </Switch>
            </Router>
        )
    }
}
export default App
