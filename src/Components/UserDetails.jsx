import React, {useState, useContext,  useEffect} from 'react'
import { Table, Button, Modal, Form, Input } from "antd";
import { Typography } from 'antd';
import axios from "axios";
import { GlobalContext } from '../GlobalContext'
import '../scss/UserDetails.scss'
import UserApi from "./API/UserApi";

const { Title } = Typography;

function UserDetails() {
    const [profileData, setProfileData] = useState([]);
    const context = useContext(GlobalContext)
    console.log(context)
    const token = context.token

  const fetchProfile = async () => {
    console.log(token)
    try {
      const response = await axios.get(`https://sattonjanam-be.onrender.com/api/v1/auth/currentUser`,  {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
    
      setProfileData(response.data.user);
      console.log(profileData)
    } catch (error) {
      console.error("Error fetching professionals:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  
  return (
    <div>
      <Form className="popUpForm">
          <Title level={5}>Profile Details</Title>
          
            <Form.Item label="User Name" >
              <Input value={profileData.userName} readOnly/>
            </Form.Item>
            <Form.Item label="Email Id" >
              <Input value={profileData.email} readOnly/>
            </Form.Item>
            <Form.Item label="Mobile Number" >
              <Input value={profileData.phoneNumber} readOnly/>
            </Form.Item>
            <Form.Item label="Religion" >
              <Input value={profileData.religion} readOnly />
            </Form.Item>
            <Form.Item label="Age" >
              <Input value={profileData.age} readOnly />
            </Form.Item>
            <Form.Item label="Caste" >
              <Input value={profileData.caste} readOnly/>
            </Form.Item>
            <Form.Item label="Sub-caste">
              <Input value={profileData.subCaste} readOnly />
            </Form.Item>
            <Form.Item label="Gotra">
              <Input value={profileData.gotra} readOnly/>
            </Form.Item>
            <Form.Item label="Hobbies">
              <Input value={profileData.hobbies} readOnly />
            </Form.Item>
            <Form.Item label="Color">
              <Input value={profileData.color} readOnly/>
            </Form.Item>
            <Form.Item label="Mother Tongue" >
              <Input value={profileData.motherTongue} readOnly/>
            </Form.Item>
            <Form.Item label="Married Status">
              <Input value={profileData.maritalStatus} readOnly />
            </Form.Item>
            <Form.Item label="Smoking Habit" >
              <Input value={profileData.smoking} readOnly />
            </Form.Item>
            <Form.Item label="Drinking Habit">
              <Input value={profileData.drinking} readOnly />
            </Form.Item>

              <Title level={5}>Career Details</Title>
            <Form.Item label="Country">
              <Input value={profileData.country} readOnly/>
            </Form.Item>
            <Form.Item label="State">
              <Input value={profileData.state} readOnly/>
            </Form.Item>
            <Form.Item label="City">
              <Input value={profileData.city} readOnly/>
            </Form.Item>
            <Form.Item label="Pin code">
              <Input value={profileData.pinCode} readOnly/>
            </Form.Item>
            <Form.Item label="Highest Qualification">
              <Input value={profileData.highestDegree} readOnly/>
            </Form.Item>
            <Form.Item label="Employed In">
              <Input value={profileData.employedIn} readOnly/>
            </Form.Item>
            <Form.Item label="Occupation">
              <Input value={profileData.occupation} readOnly/>
            </Form.Item>
            <Form.Item label="Business">
              <Input value={profileData.business} readOnly/>
            </Form.Item>
            <Form.Item label="Job">
              <Input value={profileData.job} readOnly/>
            </Form.Item>
            <Form.Item label="Annual Income">
              <Input value={profileData.annualIncome} readOnly/>
            </Form.Item>
            <Form.Item label="About Myself">
              <Input value={profileData.mySelf} readOnly/>
            </Form.Item>

            <Title level={5}>Family Details</Title>
            <Form.Item label="Family Type">
              <Input value={profileData.familyType} readOnly/>
            </Form.Item>
            <Form.Item label="Father Occupation">
              <Input value={profileData.fatherOccupation} readOnly/>
            </Form.Item>
            <Form.Item label="Mother Occupation">
              <Input value={profileData.motherOccupation} readOnly/>
            </Form.Item>
            <Form.Item label="Brother">
              <Input value={profileData.brother} readOnly/>
            </Form.Item>
            <Form.Item label="Sister">
              <Input value={profileData.sister} readOnly/>
            </Form.Item>
            <Form.Item label="Family Living In">
              <Input value={profileData.familyLivingIn} readOnly/>
            </Form.Item>
            <Form.Item label="Contact Details">
              <Input value={profileData.contactAddress} readOnly/>
            </Form.Item>
            <Form.Item label="About Family">
              <Input value={profileData.aboutFamily} readOnly/>
            </Form.Item>
          </Form>
    </div>
  )
}

export default UserDetails
