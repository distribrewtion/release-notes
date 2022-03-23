import axios from 'axios'
import path from 'path'
import jdown from 'jdown'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

const sortString = (value) => `${value.date}-${value.build || 0}`
const sortReleases = (a, b) => sortString(b).localeCompare(sortString(a))

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const releases = await jdown('content').then(data => data.releases.sort(sortReleases))
    return [
      {
        path: '/',
        getData: () => ({releases}),
        children: releases.map(release => ({
          path: `/releases/${release.build || release.date}`,
          template: 'src/containers/release',
          getData: () => ({release}),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
