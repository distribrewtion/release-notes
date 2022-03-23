import {Release} from 'types/index'

export const releasePath = (release: Release) => `/releases/${release.build || release.date}`
