import React, { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import '../scss/ScrollToTop.scss'
import { UpOutlined } from '@ant-design/icons';

function ScrollToTop() {
     // State to track whether the button should be visible
  const [visible, setVisible] = useState(false);

  // Function to check scroll position and toggle visibility
  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BackTop visibilityHeight={400} duration={500}>
    <div className={`scroll-to-top ${visible ? 'show' : 'hide'}`}>
      <UpOutlined />
    </div>
  </BackTop>
  )
}

export default ScrollToTop
