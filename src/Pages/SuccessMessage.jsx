import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../scss/SuccessMessage.scss'; // Create this CSS file for styling

const SuccessMessage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <CheckCircleOutlined className="success-icon" />
      <p className="success-text">
       Registration Completed Successfully
      </p>
      <Button className="navigate-button" type="primary" onClick={handleNavigate}>
       Go to Home
      </Button>
    </div>
  );
};

export default SuccessMessage;
