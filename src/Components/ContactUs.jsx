import React from 'react';
import BreadcrumbComponent from './BreadCrumb';

const ContactUs = () => {
  const breadcrumbPaths = [
    { name: 'Home', link: '>>' },
    { name: 'Contact Us' },
  ];

  return (
    <div>
      <BreadcrumbComponent paths={breadcrumbPaths} />
    </div>
  );
};

export default ContactUs;
