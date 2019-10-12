import 'sanitize.css'
import './app.css'
import 'typeface-roboto'

import React from 'react'
import {Root, Routes} from 'react-static'
import {Router} from '@reach/router'
import beer from './beer.svg'

export const App = () => (
    <Root>
        <div className="app">
            <a href="https://distribrewtion.com" className="logo">
                <img src={beer} className="logo-icon"/>
            </a>
            <div className="content">
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Router>
                        <Routes path="*"/>
                    </Router>
                </React.Suspense>
            </div>
        </div>
    </Root>
);
