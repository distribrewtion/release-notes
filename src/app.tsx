import 'sanitize.css'
import './app.css'
import 'typeface-roboto'

import React from 'react'
import {Head, Root, Routes} from 'react-static'
import {Router} from '@reach/router'
import beer from './beer.svg'

export const App = () => (
    <>
        <Head>
            <meta name="robots" content="noindex, nofollow"></meta>
        </Head>
        <Root>
            <div className="app">
                <a href="https://distribrewtion.com" className="logo">
                    <img src={beer} alt="Distribrewtion"/>
                </a>

                <div className="content">
                    <React.Suspense fallback={<h1>Loading...</h1>}>
                        <Router>
                            <Routes path="*"/>
                        </Router>
                    </React.Suspense>
                </div>
            </div>
        </Root>
    </>
)
