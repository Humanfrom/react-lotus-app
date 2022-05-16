import React from 'react';
import Library from '../pages/Library.jsx'
import General from '../pages/General.jsx'
import News from '../pages/News.jsx'
import Profile from '../pages/Profile.jsx'
import Videos from '../pages/Videos.jsx'
import Error from '../pages/Error.jsx'
import Login from '../pages/Login.jsx'

export const privateRoutes = [
    {path: '/', component: <General/>, name: 'Главная', replace: true},
    {path: '/videos', component: <Videos/>, name: 'Видео', replace: true},
    {path: '/library', component: <Library/>, name: 'Библиотека', replace: true},
    {path: '/news', component: <News/>, name: 'Новости', replace: true},
    {path: '/profile', component: <Profile/>, name: 'Профиль', replace: true},
    {path: '/*', component: <Error/>, name: 'Ошибка', replace: true}
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, name: 'Войти', replace: true},
    {path: '/*', component: <Error/>, name: 'Ошибка', replace: true}
]
