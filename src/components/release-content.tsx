import {Release} from 'types/index'
import React from 'react'

export const ReleaseContent =  ({release}: {release: Release}) => <div dangerouslySetInnerHTML={{__html: release.contents}}/>
