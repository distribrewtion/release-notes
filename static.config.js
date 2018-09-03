import {reloadRoutes} from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes());

export default {
    getSiteData: () => ({
        title: 'Distribrewtion Releases',
    }),
    siteRoot: 'https://releases.distribrewtion.com',
    getRoutes: async () => {
        const {releases} = await jdown('content');
        return [
            {
                path: '/',
                component: 'src/components/HomePage',
                getData: () => ({releases}),
                children: releases.map(release => ({
                    path: `/releases/${release.date}`,
                    component: 'src/components/ReleasePage',
                    getData: () => ({release}),
                })),
            },
            {
                is404: true,
                component: 'src/components/404',
            },
        ];
    },
};
