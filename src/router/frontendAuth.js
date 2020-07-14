import * as React from 'react';
import { Route,Redirect } from 'react-router-dom';
export default class FrontendAuth extends React.Component {
    render () {
        const { location, config } = this.props
        const { pathname } = location
        const isLogin = window.localStorage.getItem('token')
        // 如果该路由不用进行权限校验，登录状态下登陆页除外
        // 因为登陆后，无法跳转到登陆页
        // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
        var  targetRouterConfig = config.find((value => {
            if ( value.path === pathname) {
                return  value.path === pathname
            } else {
                return  value.routes ? value.routes.find((value) => value.path === pathname) : undefined
            }
        } ))
        if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
            const { component } = targetRouterConfig
            return <Route  path = { pathname } component = {component} render={props => (
                <targetRouterConfig.component {...props} routes={targetRouterConfig.routes}/>
                )}
             />
        }
        if (isLogin) {
            // 如果是登陆状态，想要跳转到登陆，重定向到主页
            if (pathname === '/login') {
                return <Redirect to = '/' />
            } else {
                // 如果路由合法，就跳转到相应的路由
                if (targetRouterConfig) {
                    return <Route path = { pathname } render={props => (
                        <targetRouterConfig.component {...props} routes={targetRouterConfig.routes}/>
                        )} />
                } else {
                    console.log('111')
                    return <Redirect to ='/404' />
                }
            }
        } else {
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if (targetRouterConfig && targetRouterConfig.auth) {
                return <Redirect to = '/login' />
            } else {
                console.log('222')
                // 非登陆状态下，路由不合法时，重定向至 404
                return <Redirect to ='/404' />
            }
        }
    }
}