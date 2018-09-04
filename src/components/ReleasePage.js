import React from 'react'
import {Link, withRouteData} from 'react-static'
import ReleaseTitle from "./ReleaseTitle";
import ReleaseContent from "./ReleaseContent";

export default withRouteData(({release}) => (
    <React.Fragment>
        <Link to="/">
            <h1>Distribrewtion Releases</h1>
        </Link>
        <hr/>
        <ReleaseTitle release={release}/>
        <ReleaseContent release={release}/>
    </React.Fragment>
))
