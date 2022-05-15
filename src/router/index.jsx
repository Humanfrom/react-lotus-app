import Library from '../pages/Library.js'
import General from '../pages/General.js'
import News from '../pages/News.js'
import Profile from '../pages/Profile.js'
import Videos from '../pages/Videos.js'
import Error from '../pages/Error.js'
import Login from '../pages/Login.js'

export const privateRoutes = [
    {path: '/', component: <General/>, replace: true},
    {path: '/library', component: <About/>, replace: true},
    {path: '/news', component: <Posts/>, replace: true},
    {path: '/videos', component: <Videos/>, replace: true},
    {path: '/profile', component: <Profile/>, replace: true},
    {path: '/*', component: <Error/>, replace: true}
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, replace: true}
]
