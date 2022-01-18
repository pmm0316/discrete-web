import React from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';

const AppContainer: React.FC<{}> = (props) => {
  return (
    <PageContainer pageHeaderRender={false}>{props.children}</PageContainer>
  );
};

export default AppContainer;
