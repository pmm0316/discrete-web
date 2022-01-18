import { MenuDataItem } from '@ant-design/pro-layout';

const routes: MenuDataItem[] = [
  { exact: true, path: '/', component: 'index', name: '首页' },
  { exact: true, path: '/test', component: 'Test', name: 'abc' },
  {
    exact: true,
    path: '/aa',
    name: '多级菜单',
    routes: [
      {
        path: '/aa/1',
        name: '多级菜单1',
      },
    ],
  },
];
export default routes;
