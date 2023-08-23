import React from 'react';
import BreadcrumbComponent from './BreadCrumb';

const Home = () => {
  const breadcrumbPaths = [
    { name: 'Home' },
  ];

  return (
    <div>
      <BreadcrumbComponent paths={breadcrumbPaths} />
    </div>
  );
};

export default Home;
