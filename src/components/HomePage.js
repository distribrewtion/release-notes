import React from 'react'
import {Link, withRouteData} from 'react-static'
import moment from 'moment'
import ReleaseTitle from './ReleaseTitle'
import ReleaseContent from './ReleaseContent'

const sortReleases = (a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
};

export default withRouteData(({releases}) => (
    <div>
        <h1>Distribrewtion Releases</h1>
        <h2>{releases.length} releases and counting 🎉</h2>
        {releases.sort(sortReleases).map((release, index) =>
            <section key={index}>
                <Link to={`/releases/${moment(release.date).format('YYYY-MM-DD')}`}>
                    <ReleaseTitle release={release}/>
                </Link>
                <ReleaseContent release={release}/>
            </section>
        )}
    </div>
))
