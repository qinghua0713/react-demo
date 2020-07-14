import Home from '../pages/home'
import About from '../pages/about'
import AboutSon from '../pages/about/aboutSon'
import AboutSonTwo from '../pages/about/aboutSonTwo'
import Login from '../pages/login'
import notFound from '../pages/notFound'

const routers = [
    {
        path:  '/',
        component:  Home,
        exact: true,
        auth: true
    },
    {
        path: '/about',
        component: About,
        auth: true,
        routes: [
            {
                path: '/about/',
                component: AboutSon,
                auth: true
            },
            {
                path: '/about/aboutSonTwo',
                component: AboutSonTwo,
                auth: true
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '*',
        component: notFound,
    }
]

export default routers