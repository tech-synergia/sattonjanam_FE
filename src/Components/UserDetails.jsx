import React, {useState, useContext,  useEffect} from 'react'
import { Table, Button, Modal, Form, Input , Image, Alert} from "antd";
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from 'antd';
import axios from "axios";
import { GlobalContext } from '../GlobalContext'
import '../scss/UserDetails.scss'
import UserApi from "./API/UserApi";
import logo from '../assets/websiteLogo.svg'

const { Title } = Typography;

function UserDetails() {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });
    const [images, setImages] = useState([])
    const [profileData, setProfileData] = useState([]);
    const token = localStorage.getItem("accessToken")
    // const context = useContext(GlobalContext)
    // console.log(context)
    // const token = context.token
    const params = useParams()
    const navigate = useNavigate()

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
      setImages(response.data.user.image)
      console.log(profileData)
    } catch (error) {
      console.error("Error fetching professionals:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const deleteHandler = async (e) => {
    try {
        if(window.confirm(`Are you sure to delete an image?`)) {
            // setLoading(true)
           const res = await axios.post(`https://sattonjanam-be.onrender.com/api/v1/image/destroy`, {public_id: images }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // setImages({})
            setImages('')
            // setLoading(false)
            console.log(res.data.msg)
        }
    } catch (err) {
        console.log(err.response.data.msg)
    }
  }
  

  const uploadHandler = async (e) => {
    // to upload image
    e.preventDefault();
    try {
        const file = e.target.files[0];
        console.log('image data =', file);

        if(!file)
            return console.log('image not exists.. choose image to upload.')
        
        if(file.size > 5 * 1024 * 1024)
                return console.log('File size must be less than 5Mb')

            let formData = new FormData()
            formData.append('profile', file)
            // setLoading(true)

            // post the file content to server
            const res = await axios.post(`https://sattonjanam-be.onrender.com/api/v1/image/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // setProfileData(res.data.result)
            // setImages(true)
            setImages(res.data.result)
            console.log(res.data.result)

            
    } catch (err) {
        console.log(err.response.data.msg)
    }

  
}


  const readValue = (e) => {
    const {name, value} = e.target
    setProfileData({ ...profileData, [name]: value})
    // setImages({ ...profileData.image, [name]: value})
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newUser = { ...profileData,
        image: {
              
          url: images.url
      } }
    console.log(newUser.image.url)
      // console.log(newUser)
      const res = await axios.patch(`https://sattonjanam-be.onrender.com/api/v1/user/update/${profileData._id}`, newUser, profileData.image=images.url ,  {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      })
      .then(res => {
        setAlertData({
          type: "success",
          message: "User data updated successfully!",
          show: true,
        });
      }).catch(err => {
        setAlertData({
          type: "error",
          message: err.response.data.msg,
          show: true,
        });
      })
      console.log(res.data.msg)
      navigate(`/userdetails`)
      
    } catch (error) {
      // console.log(error.response.data.msg)
      setAlertData({
        type: "error",
        message: error.response.data.msg,
        show: true,
      });
    }
  }

  const handleCancel = () => {
    navigate('/');
  };
  
  return (
    <div>
      
      <Form className="popUpUserForm">
      
          <img src={logo} alt="no image" width={100} height={100}/>
          <Title level={5}>Profile Details</Title>
            <Form.Item  label="Update profile Picture">
            {
                            images ? (
                                <Button onClick={deleteHandler} > 
                                    <i className="bi bi-trash"></i>
                                 </Button>
                            ) : null 
              }
              {
                            images ? (
                                <Image src={images ? images.url : ''} alt="no image" height={200} width={200} style={{objectFit:"cover"}}/>
                            ): (
                                <span style={{ fontSize: '5em'}}>
                                    <i className="bi bi-file-arrow-up"></i>
                                </span>
                            )
                }
                {
                  images ? null : <Input
                  type="file"
                  name="image"
                  id="image"
                  required
                  // value={profileData.image}
                  onChange= {uploadHandler} 
                />
                }
                {/* <Image src={profileData.image} height={300} width={250} /> */}
              </Form.Item>
            <Form.Item label="User Name" >
              <Input value={profileData.userName} readOnly/>
            </Form.Item>
            <Form.Item label="Email Id" >
              <Input value={profileData.email} readOnly/>
            </Form.Item>
            <Form.Item label="Mobile Number" >
              <Input value={profileData.phoneNumber} readOnly/>
            </Form.Item>
            <Form.Item label="Religion" htmlFor="religion">
              <Input name="religion"
              id="religion" value={profileData.religion} onChange={readValue}  />
            </Form.Item>
            <Form.Item label="Age" >
              <Input value={profileData.age} readOnly />
            </Form.Item>
            <Form.Item label="Gender" htmlFor="gender" >
              <Input name="gender" id="gender" value={profileData.gender} readOnly />
            </Form.Item>
            <Form.Item label="Caste" htmlFor="caste">
              <Input name="caste"
              id="caste" value={profileData.caste} onChange={readValue}/>
            </Form.Item>
            {/* <Form.Item label="Sub-caste">
              <Input value={profileData.subCaste} readOnly />
            </Form.Item> */}
            <Form.Item label="Gotra" htmlFor="gotra">
              <Input name="gotra"
              id="gotra" value={profileData.gotra} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Hobbies" htmlFor="hobbies">
              <Input  name="hobbies"
              id="hobbies" value={profileData.hobbies} onChange={readValue}  />
            </Form.Item>
            <Form.Item label="Color" htmlFor="color">
              <Input  name="color"
              id="color" value={profileData.color} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Mother Tongue" htmlFor="motherTongue">
              <Input name="motherTongue"
              id="motherTongue" value={profileData.motherTongue} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Married Status" htmlFor="maritalStatus">
              <Input  name="maritalStatus"
              id="maritalStatus" value={profileData.maritalStatus} onChange={readValue} />
            </Form.Item>
            <Form.Item label="Smoking Habit" htmlFor="smoking" >
              <Input name="smoking"
              id="smoking" value={profileData.smoking} onChange={readValue} />
            </Form.Item>
            <Form.Item label="Drinking Habit" htmlFor="drinking">
              <Input  name="drinking"
              id="drinking" value={profileData.drinking} onChange={readValue} />
            </Form.Item>

              <Title level={5}>Career Details</Title>
            <Form.Item label="Country" htmlFor="country">
              <Input name="country"
              id="country" value={profileData.country} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="State" htmlFor="state">
              <Input name="state"
              id="state" value={profileData.state} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="City" htmlFor="city">
              <Input name="city"
              id="city" value={profileData.city} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Pin code" htmlFor="pinCode">
              <Input name="pinCode"
                id="pinCode" value={profileData.pinCode} onChange={readValue}/>
            </Form.Item >
            <Form.Item label="Highest Qualification" htmlFor="highestDegree">
              <Input  name="highestDegree"
              id="highestDegree" value={profileData.highestDegree} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Employed In" htmlFor="employedIn">
              <Input name="employedIn"
              id="employedIn" value={profileData.employedIn} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Occupation" htmlFor="occupation">
              <Input  name="occupation"
              id="occupation" value={profileData.occupation} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Business" htmlFor="business">
              <Input name="business"
              id="business" value={profileData.business} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Job" htmlFor="job">
              <Input name="job"
              id="job" value={profileData.job} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Annual Income" htmlFor="annualIncome">
              <Input name="annualIncome"
              id="annualIncome" value={profileData.annualIncome} onChange={readValue}/>
            </Form.Item>
            {/* <Form.Item label="About Myself" htmlFor="mySelf">
              <Input  name="mySelf"
              id="mySelf" value={profileData.mySelf} onChange={readValue}/>
            </Form.Item> */}

            <Title level={5}>Family Details</Title>
            <Form.Item label="Family Type" htmlFor="familyType">
              <Input name="familyType"
              id="familyType" value={profileData.familyType} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Father Occupation" htmlFor="fatherOccupation">
              <Input name="fatherOccupation"
              id="fatherOccupation" value={profileData.fatherOccupation} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Mother Occupation" htmlFor="motherOccupation">
              <Input name="motherOccupation"
              id="motherOccupation" value={profileData.motherOccupation} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Brother" htmlFor="brother">
              <Input name="brother"
              id="brother" value={profileData.brother} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Sister" htmlFor="sister">
              <Input name="sister"
              id="sister" value={profileData.sister} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Family Living In" htmlFor="familyLivingIn">
              <Input name="familyLivingIn"
              id="familyLivingIn" value={profileData.familyLivingIn} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Contact Details" htmlFor="contactAddress">
              <Input  name="contactAddress"
              id="contactAddress" value={profileData.contactAddress} onChange={readValue}/>
            </Form.Item>
            {/* <Form.Item label="About Family" htmlFor="aboutFamily">
              <Input  name="aboutFamily"
              id="aboutFamily" value={profileData.aboutFamily} onChange={readValue}/>
            </Form.Item> */}
            

            <Title level={5}>Partner Preference</Title>
            <Form.Item label="Partner Age" htmlFor="partnerAge">
              <Input name="partnerAge"
               id="partnerAge" value={profileData.partnerAge}  onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Partner Height" htmlFor="partnerHeight">
              <Input name="partnerHeight"
                id="partnerHeight" value={profileData.partnerHeight} onChange={readValue} />
            </Form.Item>
            {/* <Form.Item label="Partner Community" >
              <Input value={profileData.partnerCommunity} readOnly />
            </Form.Item> */}
            <Form.Item label="Partner Caste" htmlFor="partnerCast">
              <Input  name="partnerCast"
              id="partnerCast" value={profileData.partnerCast} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Partner Education"  htmlFor="partnerEductation">
              <Input name="partnerEductation"
              id="partnerEductation" value={profileData.partnerEductation}  onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Partner Income" htmlFor="partnerIncome">
              <Input name="partnerIncome"
              id="partnerIncome" value={profileData.partnerIncome} onChange={readValue}/>
            </Form.Item>
            <Form.Item label="Partner Marital Status" htmlFor="partnerMaritalStatus">
              <Input name="partnerMaritalStatus"
              id="partnerMaritalStatus" value={profileData.partnerMaritalStatus} onChange={readValue}/>
            </Form.Item>
            {alertData.show && (
                <Alert
                  message={alertData.message}
                  type={alertData.type}
                  showIcon
                  closable
                  onClose={() => setAlertData({ ...alertData, show: false })}
                  style={{ marginTop: "20px" }}
                />
            )}
            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button htmlType='submit' className='userBtn' onClick={submitHandler}>
                Update
              </Button>
              <Button className='userBtn' onClick={handleCancel}> 
                Cancel
              </Button>
            </Form.Item>
            
          </Form>
    </div>
  )
}

export default UserDetails
