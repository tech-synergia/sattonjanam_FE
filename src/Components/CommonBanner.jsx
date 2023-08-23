import React from 'react';
import { Layout } from 'antd';
import '../scss/CommonBanner.scss'

const { Content } = Layout;

const CommonBanner = ({ title, children }) => {
  return (
    <Layout className="common-background">
      <Content>
        <div className="content">
          <h1>Contact</h1>
        </div>
      </Content>
      {children}
    </Layout>
  );
};

export default CommonBanner;
