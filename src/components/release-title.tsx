import React from 'react'
import moment from 'moment'
import {Release} from "types/index";

export const ReleaseTitle = ({release}: {release: Release}) => <h3>{moment(release.date).format('dddd, MMMM Do YYYY')}</h3>
