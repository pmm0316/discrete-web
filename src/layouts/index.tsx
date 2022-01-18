import React from 'react';
import { history } from 'umi';
import ProLayout from '@ant-design/pro-layout';
import AppContainer from './AppContainer';
const RouterConfig = require('../../config/routes').default;

console.log('RouterConfig', RouterConfig);

const route = {
  path: '/',
  routes: RouterConfig,
};

export default (props: any) => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        route={route}
        // menuItemRender={(item, dom) => <div>pre {dom}</div>}
        // subMenuItemRender={(_, dom) => <div>pre {dom}</div>}
        title="app"
        headerRender={false}
        pageTitleRender={false}
        // breadcrumbRender={false}
        headerTitleRender={false}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              history.push({ pathname: item.path });
            }}
          >
            {dom}
          </a>
        )}
        // logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div id="customize_menu_header">{logo}</div>
        )}
        location={{
          pathname: '/welcome',
        }}
      >
        <AppContainer>{props.children}</AppContainer>
      </ProLayout>
    </div>
  );
};
