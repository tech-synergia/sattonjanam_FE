import React from 'react';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom'; 
import '../scss/BreadCrumb.scss'

const BreadCrumb = ({ paths }) => {
  return (
    <Breadcrumb className='breadCrumb'>
      {paths.map((path, index) => (
        <Breadcrumb.Item key={index}>
          {path.link ? <NavLink to={path.link}>{path.name}</NavLink> : path.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
