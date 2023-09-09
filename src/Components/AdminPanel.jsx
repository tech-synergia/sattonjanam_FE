import React, { useState, useEffect, useContext } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { Typography } from 'antd';
import UserApi from "./API/UserApi";
import { useNavigate, NavLink } from 'react-router-dom';
import '../scss/AdminPanel.scss'
import axios from "axios";
import logo from '../assets/sattonjanamLogo.svg'
import { GlobalContext } from '../GlobalContext'

const { Title } = Typography;

const AdminPanel = () => {
  const [profileData, setProfileData] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const context = useContext(GlobalContext)
  const token = localStorage.getItem("accessToken")
  // const token = context.token
  console.log(token)
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      // const response = await UserApi.getAll();
      const response = await axios.get(`https://sattonjanam-be.onrender.com/api/v1/all/users`, {
        headers : {
          'Content-Type': 'application/json',
              'Authorization': token
        }
      })
      setProfileData(response.data.users);
    } catch (error) {
      console.error("Error fetching professionals:", error);
    }
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      render: (text, record) => (
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => handleNameClick(record)}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          {record.isVerified ? (<Button className="btn3" onClick={() => handleDelete(record)}>
            Delete
          </Button>):(
            <>
              <Button className="btn3" onClick={() => handleUser(record)}>Accept</Button>
          
              <Button className="btn3" onClick={() => handleDelete(record)}>
              Delete
              </Button>
            </>
          )}
          
        </span>
      ),
    },
  ];

  const handleNameClick = (record) => {
    setSelectedRecord(record);
    setModalVisible(true);
  };

  const navigate = useNavigate()

  const handleDelete = async (record) => {
    try {
      const response = await UserApi.delete(record._id);
      if (response.status === 200) {
        console.log("Profile data deleted:", record);
        const updatedData = profileData.filter((prof) => prof._id !== record._id);
        setProfileData(updatedData);
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };
  const handleUser = async (record) => {
    try {
    //   const response = await UserApi.getSingle(record._id,{
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': token
    //     }
    // });

    const response = await UserApi.update(record._id,{
      headers : {
        'Content-Type': 'application/json',
            'Authorization': token
      }
    });
      if (response.status === 200) {
        console.log("Profile data :", record);
        const updatedData = profileData.map((prof) =>
          prof._id === record._id ? { ...prof, isVerified: true} : prof
        )
        setProfileData(updatedData)
        // const res = await UserApi.create(profileData,{
        //   headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': token
        //   }})
        navigate(`/profileCard`)
      }
    } catch (error) {
      console.error("Error Fetching profile:", error);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="adminPanel">
      <img src={logo} alt="no image" width={100} height={100}/>
      <Table
        dataSource={profileData}
        columns={columns}
        className="tableAdmin"
      />
      <Modal
        title="Profile Details"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedRecord && (
          <Form className="popUpForm">
            <Form.Item label="User Name" >
              <Input value={selectedRecord.userName} readOnly/>
            </Form.Item>
            <Form.Item label="Email Id" >
              <Input value={selectedRecord.email} readOnly/>
            </Form.Item>
            <Form.Item label="Mobile Number" >
              <Input value={selectedRecord.phoneNumber} readOnly/>
            </Form.Item>
            <Form.Item label="Religion" >
              <Input value={selectedRecord.religion} readOnly />
            </Form.Item>
            <Form.Item label="Age" >
              <Input value={selectedRecord.age} readOnly />
            </Form.Item>
            <Form.Item label="Caste" >
              <Input value={selectedRecord.caste} readOnly/>
            </Form.Item>
            <Form.Item label="Gotra">
              <Input value={selectedRecord.gotra} readOnly/>
            </Form.Item>
            <Form.Item label="Hobbies">
              <Input value={selectedRecord.hobbies} readOnly />
            </Form.Item>
            <Form.Item label="Color">
              <Input value={selectedRecord.color} readOnly/>
            </Form.Item>
            <Form.Item label="Mother Tongue" >
              <Input value={selectedRecord.motherTongue} readOnly/>
            </Form.Item>
            <Form.Item label="Married Status">
              <Input value={selectedRecord.maritalStatus} readOnly />
            </Form.Item>
            <Form.Item label="Smoking Habit" >
              <Input value={selectedRecord.smoking} readOnly />
            </Form.Item>
            <Form.Item label="Drinking Habit">
              <Input value={selectedRecord.drinking} readOnly />
            </Form.Item>

            <Title level={5}>Career Details</Title>
            <Form.Item label="Country">
              <Input value={selectedRecord.country} readOnly/>
            </Form.Item>
            <Form.Item label="State">
              <Input value={selectedRecord.state} readOnly/>
            </Form.Item>
            <Form.Item label="City">
              <Input value={selectedRecord.city} readOnly/>
            </Form.Item>
            <Form.Item label="Pin code">
              <Input value={selectedRecord.pinCode} readOnly/>
            </Form.Item>
            <Form.Item label="Highest Qualification">
              <Input value={selectedRecord.highestDegree} readOnly/>
            </Form.Item>
            <Form.Item label="Employed In">
              <Input value={selectedRecord.employedIn} readOnly/>
            </Form.Item>
            <Form.Item label="Occupation">
              <Input value={selectedRecord.occupation} readOnly/>
            </Form.Item>
            <Form.Item label="Business">
              <Input value={selectedRecord.business} readOnly/>
            </Form.Item>
            <Form.Item label="Job">
              <Input value={selectedRecord.job} readOnly/>
            </Form.Item>
            <Form.Item label="Annual Income">
              <Input value={selectedRecord.annualIncome} readOnly/>
            </Form.Item>
            {/* <Form.Item label="About Myself">
              <Input value={selectedRecord.mySelf} readOnly/>
            </Form.Item> */}

            <Title level={5}>Family Details</Title>
            <Form.Item label="Family Type">
              <Input value={selectedRecord.familyType} readOnly/>
            </Form.Item>
            <Form.Item label="Father Occupation">
              <Input value={selectedRecord.fatherOccupation} readOnly/>
            </Form.Item>
            <Form.Item label="Mother Occupation">
              <Input value={selectedRecord.motherOccupation} readOnly/>
            </Form.Item>
            <Form.Item label="Brother">
              <Input value={selectedRecord.brother} readOnly/>
            </Form.Item>
            <Form.Item label="Sister">
              <Input value={selectedRecord.sister} readOnly/>
            </Form.Item>
            <Form.Item label="Family Living In">
              <Input value={selectedRecord.familyLivingIn} readOnly/>
            </Form.Item>
            <Form.Item label="Contact Details">
              <Input value={selectedRecord.contactAddress} readOnly/>
            </Form.Item>
            {/* <Form.Item label="About Family">
              <Input value={selectedRecord.aboutFamily} readOnly/>
            </Form.Item> */}
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default AdminPanel;

