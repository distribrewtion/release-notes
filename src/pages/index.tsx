import React from 'react'
import {useRouteData} from 'react-static'
import {Release} from 'types'
import {Link} from '@reach/router'
import {ReleaseTitle} from 'components/release-title'
import {ReleaseContent} from 'components/release-content'
import {releasePath} from '../path'

export default () => {
    const {releases}: { releases: Release[] } = useRouteData()
    return (
        <>
            <h1>Distribrewtion Releases</h1>
            <h2>{releases.length} releases and counting 🎉</h2>
            {releases.map(release =>
                <React.Fragment key={`${release.date}${release.build ? `-${release.build}` : ''}`}>
                    <hr/>
                    <section>
                        <Link to={releasePath(release)}>
                            <ReleaseTitle release={release}/>
                        </Link>
                        <ReleaseContent release={release}/>
                    </section>
                </React.Fragment>
            )}
        </>
    )
}
