import React from 'react'
import {useRouteData} from 'react-static'
import {Link} from '@reach/router'
import {Release} from '../../types'
import {ReleaseTitle} from "components/release-title";
import {ReleaseContent} from "components/release-content";

export default () => {
    const {release}: { release: Release } = useRouteData()
    return (
        <>
            <Link to="/">
                <h1>Distribrewtion Releases</h1>
            </Link>
            <hr/>
            <ReleaseTitle release={release}/>
            <ReleaseContent release={release}/>
        </>
    )
}
