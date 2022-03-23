import {Release} from 'types/index'
import React from 'react'

export const ReleaseAttributes = ({release}: { release: Release }) => (
    <>
        {release.build && <div className="release-attribute">Build: {release.build}</div>}
        {release.commit && <div className="release-attribute">Commit: {release.commit.substring(0, 7)}</div>}
    </>
)
