import React from 'react'
import {useRouteData} from 'react-static'
import {Release} from 'types'
import {Link} from '@reach/router'
import {ReleaseTitle} from 'components/release-title'
import {ReleaseContent} from 'components/release-content'

export default () => {
    const {releases}: { releases: Release[] } = useRouteData()
    return (
        <>
            <h1>Distribrewtion Releases</h1>
            <h2>{releases.length} releases and counting 🎉</h2>
            {releases.map(release =>
                <React.Fragment key={release.date}>
                    <hr/>
                    <section>
                        <Link to={`/releases/${release.date}`}>
                            <ReleaseTitle release={release}/>
                        </Link>
                        <ReleaseContent release={release}/>
                    </section>
                </React.Fragment>
            )}
        </>
    )
}
