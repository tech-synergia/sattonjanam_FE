import React from 'react';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom'; 

const BreadCrumb = ({ paths }) => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {paths.map((path, index) => (
        <Breadcrumb.Item key={index}>
          {path.link ? <NavLink to={path.link}>{path.name}</NavLink> : path.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
