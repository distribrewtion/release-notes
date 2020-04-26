import axios from 'axios'
import path from 'path'
import jdown from 'jdown'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

const sortReleases = (a, b) => {
  if (a.date < b.date) return 1
  if (a.date > b.date) return -1
  return 0
}

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const releases = await jdown('content').then(data => data.releases.sort(sortReleases))
    return [
      {
        path: '/',
        getData: () => ({releases}),
        children: releases.map(release => ({
          path: `/releases/${release.date}`,
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
