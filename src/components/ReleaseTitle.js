import React from 'react'
import moment from 'moment'

export default ({release}) => <h3>{moment(release.date).format('dddd, MMMM Do YYYY')}</h3>
