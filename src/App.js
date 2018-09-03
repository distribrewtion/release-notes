import React from 'react'
import {Router} from 'react-static'
import {hot} from 'react-hot-loader'
import Routes from 'react-static-routes'
import beer from './beer.svg'

import './app.css'

const App = () => (
    <Router>
        <div className="app">
            <a href="https://distribrewtion.com" className="logo">
                <img src={beer} className="logo-icon"/>
            </a>
            <div className="content">
                <Routes/>
            </div>
        </div>
    </Router>
)

export default hot(module)(App)
