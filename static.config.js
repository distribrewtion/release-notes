import {reloadRoutes} from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import moment from 'moment'

chokidar.watch('content').on('all', () => reloadRoutes());

export default {
    getSiteData: () => ({
        title: 'Distribrewtion Releases',
    }),
    getRoutes: async () => {
        const {releases} = await jdown('content');
        return [
            {
                path: '/',
                component: 'src/components/HomePage',
                getData: () => ({releases}),
            },
            {
                path: '/releases',
                getData: () => ({releases}),
                children: releases.map(release => ({
                    path: `${moment(release.date).format('YYYY-MM-DD')}`,
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
