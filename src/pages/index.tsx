import React from 'react'
import {useRouteData} from "react-static";
import {Release} from "types/index";
import {ReleaseTitle} from "components/release-title";
import {ReleaseContent} from "components/release-content";
import {Link} from "@reach/router";

export default () => {
    const {releases}: {releases: Release[]} = useRouteData()
    return (
        <>
            <h1>Distribrewtion Releases</h1>
            <h2>{releases.length} releases and counting 🎉</h2>
            {releases.map((release, index) =>
                <React.Fragment key={index}>
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
    );
}
