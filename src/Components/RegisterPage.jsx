import React, { useContext, useState } from "react";
import { Form, Input, Select, Radio, Button, Steps, Alert, Upload, Checkbox } from "antd";
import "../scss/RegisterPage.scss";
import TextArea from "antd/es/input/TextArea";
import UserApi from './API/UserApi'
import { useNavigate, NavLink } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext'
import axios from 'axios'
import { useEffect } from "react";

const { Step } = Steps;
const { Option } = Select;


const RegisterPage = (props) => {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [profileDetails, setProfileDetails] = useState({
    registeredFor: "",
    userName: "",
    religion: "",
    gender: "",
    email: "",
   image:{},
    phoneNumber: "",
    password: "",
    age: "",
    caste: "",
    subCaste: "",
    gotra: "",
    hobbies: "",
    height: "",
    color: "",
    createProfileFor: "",
    motherTongue: "",
    maritalStatus: "",
    manglik: "",
    smoking: "",
    drinking: "",
  });
  const [careerDetails, setCareerDetails] = useState({
    country: "",
    state: "",
    city: "",
    pinCode: "",
    highestDegree: "",
    employedIn: "",
    occupation: "",
    business: "",
    job: "",
    annualIncome: "",
    mySelf: "",
  });
  const [familyDetails, setFamilyDetails] = useState({
    familyType: "",
    fatherOccupation: "",
    motherOccupation: "",
    brother: "",
    sister: "",
    familyLivingIn: "",
    contactAddress: "",
    aboutFamily: "",
  });
  const [partnerDetails, setPartnerDetails] = useState({
    pAge: "",
    pHeight: "",
    pCaste: "",
    community: "",
    pEducation :"",
    personalIncome: "",
    maritalStatusPartner: ""
  })

  const allIndiaStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [images, setImages] = useState({})
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const token = context.token

  const uploadHandler = async (e) => {
    // to upload image
    // e.preventDefault();
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
            setImages(res.data.result)
            console.log(res.data.result)

            
    } catch (err) {
        console.log(err.response.data.msg)
    }

  
}
    const heightOptions = [];
    for (let feet = 5; feet <= 6; feet++) {
      for (let inches = 0; inches <= 5; inches++) {
        const height = `${feet} foot ${inches} inches`;
        heightOptions.push(height);
      }
    }

  const handleInputChange = (e) => {
    // uploadHandler()
    const { name, value } = e.target;
    // setImages({ images, [name]: value})
    setProfileDetails((prevData) => ({ ...prevData, [name]: value }));
    setCareerDetails((prevData) => ({ ...prevData, [name]: value }));
    setFamilyDetails((prevData) => ({ ...prevData, [name]: value }));
    setPartnerDetails((prevData) => ({ ...prevData, [name]: value }))
  };

  
  const handleOnSubmit = async (e) => {
    try {
      const newImage = {
          ...profileDetails,
          image: {
              
              url: images.url
          }
        }
        console.log(newImage.image.url)
      const response = await UserApi.create(profileDetails,careerDetails,familyDetails,partnerDetails,profileDetails.image= images.url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    axios.post(`https://sattonjanam-be.onrender.com/api/v1/sendmail`, {email: profileDetails.email, userName: profileDetails.userName})
      .then(res => {
        setAlertData({
          type: "success",
          message: "Registration successful!",
          show: true,
        });
      }).catch(err => {
        setAlertData({
          type: "error",
          message: err.response.data.msg,
          show: true,
        });
      })
      navigate('/')
    } catch (error) {
      setAlertData({
        type: "error",
        message: error.response.data.msg,
        show: true,
      });
    }
  };
     

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const steps = [
    {
      title: "Profile Details",
      content: (
        <Form>
          <Form.Item label="Registered for" htmlFor="registeredFor">
            <Select
              name="registeredFor"
              id="registeredFor"
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "registeredFor", value } })
              }
            >
              <Option value="myself">Myself</Option>
              <Option value="son">Son</Option>
              <Option value="daughter">Daughter</Option>
              <Option value="sister">Sister</Option>
              <Option value="brother">Brother</Option>
              <Option value="relative">Relative</Option>
              <Option value="friend">Friend</Option>
            </Select>
          </Form.Item>
          <Form.Item label="User Name" htmlFor="userName">
            <Input
              type="text"
              name="userName"
              id="userName"
              value={profileDetails.userName}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Religion" htmlFor="religion">
            <Select
              name="religion"
              id="religion"
              placeholder="Select Your Religion"
              onChange={(value) =>
                handleInputChange({ target: { name: "religion", value } })
              }
            >
              <Option value="hindu">Hindu</Option>
              <Option value="muslim">Muslim</Option>
              <Option value="christian">Christian</Option>
              <Option value="sikh">Sikh</Option>
              <Option value="parsi">Parsi</Option>
              <Option value="jain">Jain</Option>
              <Option value="buddhist">Buddhist</Option>
              <Option value="noReligion">No religion</Option>
              <Option value="spiritual">Spiritual</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Gender" htmlFor="gender">
            <Radio.Group name="gender" id="gender" onChange={handleInputChange}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Upload Profile Pic">
            
            <Input
              type="file"
              name="image"
              id="image"
              required
              onChange= {uploadHandler}
            />
          </Form.Item>
          <Form.Item label="Email" htmlFor="email">
            <Input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Phone Number" htmlFor="phone">
            <Input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Password" htmlFor="password">
            <Input
              type="password"
              name="password"
              id="password"
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Age" htmlFor="age">
              <Input
                type="number"
                name="age"
                id="age"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Height" htmlFor="height">
              <Select
                onChange={handleInputChange}
                placeholder="Select height"
              >
                {heightOptions.map(option => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
          </Form.Item>
          <Form.Item label="Caste" htmlFor="caste">
            <Input 
              type="text"
              name="caste"
              id="caste"
              onChange={handleInputChange} 
            />
          </Form.Item>
          <Form.Item label="Gotra" htmlFor="gotra">
            <Input
              type="text"
              name="gotra"
              id="gotra"
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Hobbies" htmlFor="hobbies">
            <Input
              type="text"
              name="hobbies"
              id="hobbies"
              required
              onChange={handleInputChange}
            />
          </Form.Item>
         
          <Form.Item label="Color" htmlFor="color">
            <Select
              name="color"
              id="color"
              defaultValue="Fair"
              onChange={(value) =>
                handleInputChange({ target: { name: "color", value } })
              }
            >
              <Option value="">Fair</Option>
              <Option value="veryFair">Very Fair</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mother Tongue" htmlFor="motherTongue">
            <Select
              name="motherTongue"
              id="motherTongue"
              placeholder="Select Your Mother Tongue"
              onChange={(value) =>
                handleInputChange({ target: { name: "motherTongue", value } })
              }
            >
              <Select.OptGroup label="North">
                <Option value="Hindi">Hindi</Option>
                <Option value="Punjabi">Punjabi</Option>
                <Option value="Himachali">Himachali</Option>
                <Option value="Kashmiri">Kashmiri</Option>
                <Option value="Sindhi">Sindhi</Option>
                <Option value="Urdu">Urdu</Option>
              </Select.OptGroup>
              <Select.OptGroup label="West">
                <Option value="Marathi">Marathi</Option>
                <Option value="Gujarathi">Gujarathi</Option>
                <Option value="Hindi">Hindi</Option>
              </Select.OptGroup>
              <Select.OptGroup label="South">
                <Option value="Telugu">Telugu</Option>
                <Option value="Tamil">Tamil</Option>
                <Option value="Kannada">Kannada</Option>
                <Option value="Malayalam">Malayalam</Option>
                <Option value="Tulu">Tulu</Option>
                <Option value="Urdu">Urdu</Option>
              </Select.OptGroup>
              <Select.OptGroup label="East">
                <Option value="Bengali">Bengali</Option>
                <Option value="Oriya">Oriya</Option>
                <Option value="Assamese">Assamese</Option>
                <Option value="Sikkim/Nepali">Sikkim/Nepali</Option>
              </Select.OptGroup>
              <Option value="english">Other (English)</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Create Profile For" htmlFor="createProfileFor">
            <Select
              name="createProfileFor"
              id="createProfileFor"
              defaultValue="Self"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "createProfileFor", value },
                })
              }
            >
              <Option value="self">Self</Option>
              <Option value="Brother">Brother</Option>
              <Option value="Sister">Sister</Option>
              <Option value="Son">Son</Option>
              <Option value="Daughter">Daughter</Option>
              <Option value="Sibling">Sibling</Option>
              <Option value="Relative">Relative/Friend</Option>
            </Select>
          </Form.Item>
          
          <Form.Item label="Are you Manglik?" htmlFor="manglik">
            <Select
              name="manglik"
              id="manglik"
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "manglik", value } })
              }
            >
              <Option value="Manglik">Manglik</Option>
              <Option value="NonManglik">Non-Manglik</Option>
              <Option value="anshikManglik">Anshik Manglik</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Smoking" htmlFor="smoking">
            <Select
              name="smoking"
              id="smoking"
              placeholder="Are you smoking?"
              onChange={(value) =>
                handleInputChange({ target: { name: "smoking", value } })
              }
            >
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Drinking" htmlFor="drinking">
            <Select
              name="drinking"
              id="drinking"
              placeholder="Are you drinking?"
              onChange={(value) =>
                handleInputChange({ target: { name: "drinking", value } })
              }
            >
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>
          <Form.Item  htmlFor="termsCondition" style={{marginLeft: "0px"}}>
            <Checkbox>I am ready to marry people of all castes</Checkbox>
          </Form.Item>
          <Button type="primary" onClick={handleNext} >
            Next
          </Button>
          <p style={{textAlign: "center"}}>
            Already Have an Account? <a href="/login">Login</a>
          </p>
        </Form>
      ),
    },
    {
      title: "Career Details",
      content: (
        <Form>
          <Form.Item label="Country" htmlFor="country">
            <Input
              type="text"
              name="country"
              id="country"
              value={careerDetails.country}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="State" htmlFor="state">
            <Select
              showSearch
              name="state"
              id="state"
              value={careerDetails.state}
              required
              placeholder="Select Your State"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={(value) =>
                handleInputChange({ target: { name: "state", value } })
              }
            >
              {allIndiaStates.map((state) => (
                <Select.Option key={state} value={state}>
                  {state}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="City" htmlFor="city">
            <Input
              type="text"
              name="city"
              value={careerDetails.city}
              id="city"
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Pin Code" htmlFor="pinCode">
            <Input
              type="number"
              name="pinCode"
              id="pinCode"
              value={careerDetails.pinCode}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Highest Degree" htmlFor="highestDegree">
            <Select
              name="highestDegree"
              id="highestDegree"
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "highestDegree", value } })
              }
            >
              <Option value="engineering">Engineering/Technology/Design</Option>
                  <Option value="be">B.E/B.Tech</Option>
                  <Option value="bPharmacy">B.Pharmacy</Option>
                  <Option value="me">M.E</Option>
                  <Option value="mtech">M.Tech</Option>
                  <Option value="mPharmacy">M.Pharmacy</Option>
                  <Option value="ms">
                    M.S(Engineering,B.Arch,M.Arch,B.Des,M.Des)
                  </Option>
              <Option value="computers">Computers(MCA,BCA,B.IT)</Option>
              <Option value="finance">Finance/Commerce/Economics</Option>
              <Option value="bcom">B.Com</Option>
              <Option value="mcom">M.Com</Option>
              <Option value="ca">CA</Option>
              <Option value="cfa">CFA</Option>
              <Option value="cs">CS</Option>
              <Option value="icwa">ICWA</Option>
              <Option value="management">Management</Option>
              <Option value="mba">MBA/PGDM</Option>
              <Option value="bba">BBA</Option>
              <Option value="phm">PHM</Option>
              <Option value="medicine">Medicine/Health</Option>
              <Option value="MBBS">MBBS</Option>
              <Option value="MD">M.D</Option>
              <Option value="BAMS">BAMS</Option>
              <Option value="BHMS">BHMS</Option>
              <Option value="MSMedicine">M.S(MEDICINE)</Option>
              <Option value="MVSC">MVSC</Option>
              <Option value="BVSC">BVSC</Option>
              <Option value="MDS">MDS</Option>
              <Option value="BPT">BPT</Option>
              <Option value="MPT">MPT</Option>
              <Option value="DM">DM</Option>
              <Option value="MCH">MCH</Option>
              <Option value="LAW">LAW</Option>
              <Option value="LLB">L.L.B</Option>
              <Option value="LLM">L.L.M</Option>
              <Option value="art">ART AND SCIENCE</Option>
              <Option value="BA">B.A</Option>
              <Option value="BED">B.ED</Option>
              <Option value="MFA">MFA</Option>
              <Option value="BSC">B.SC</Option>
              <Option value="MED">M.ED</Option>
              <Option value="BJMC">BJMC</Option>
              <Option value="MA">M.A</Option>
              <Option value="MSW">MSW</Option>
              <Option value="MJMC">MJMC</Option>
              <Option value="MSC">M.SC</Option>
              <Option value="BFA">BFA</Option>
              <Option value="DOCTORATE">DOCTORATE</Option>
              <Option value="PHD">PHD</Option>
              <Option value="MPHIL">M.PHIL</Option>
              <Option value="NotGraduate">NOT GRADUATE</Option>
              <Option value="Diploma">DIPLOMA</Option>
              <Option value="HighSchool">HIGH SCHOOL</Option>
              <Option value="TradeSchool">TRADE SCHOOL</Option>
              <Option value="OTHERDEGREE">OTHER</Option>
            </Select>
         
          </Form.Item>
          <Form.Item label="Employed In" htmlFor="employedIn">
            <Select
              name="employedIn"
              id="employedIn"
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "employedIn", value } })
              }
            >
              <Option value="privateSector">Private Sector</Option>
              <Option value="govtSector">Government Sector</Option>
              <Option value="selfEmployed">Self Employed</Option>
              <Option value="Business">Business</Option>
              <Option value="notWorking">Not Working</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Occupation" htmlFor="occupation">
            <Select
              name="occupation"
              id="occupation"
              placeholder="Select Your Occupation"
              onChange={(value) =>
                handleInputChange({ target: { name: "occupation", value } })
              }
            >
              <Option value="administration">Administration</Option>
              <Option value="media">Media/Advertisement/Entertainment</Option>
              <Option value="agriculture">Agriculture</Option>
              <Option value="airline">Airline/Aviation</Option>
              <Option value="bpo">BPO</Option>
              <Option value="architecture">Architecture</Option>
              <Option value="banking">Banking&Finance</Option>
              <Option value="corporate">Corporate Professionals</Option>
              <Option value="sales">Sales & Marketing</Option>
              <Option value="doctor">Doctor</Option>
              <Option value="edu&training">Education&Training</Option>
              <Option value="hospitality">Hospitality</Option>
              <Option value="engOcc">Engineering</Option>
              <Option value="legal">Legal</Option>
              <Option value="merchant">MERCHANT NAVY</Option>
              <Option value="SOFTWARE">MEDICAL&HEALTHCARE/SOFTWARE/IT</Option>
              <Option value="TOPMANAGEMNT">TOP MANAGEMENT</Option>
              <Option value="OTHEROCC">OTHERS</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Business" htmlFor="business">
            <Input
              type="text"
              name="business"
              id="business"
              value={careerDetails.business}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Job" htmlFor="job">
            <Select
              name="job"
              id="job"
              placeholder="Select Your job type"
              onChange={(value) =>
                handleInputChange({ target: { name: "job", value } })
              }
            >
              <Option value="privateJob">Private Job</Option>
              <Option value="govtJob">Govt job</Option>
              <Option value="entrepreneur">Entrepreneur</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Actual Income Per Annum" htmlFor="annualIncome">
            <Select 
              name="annualIncome"
              id="annualIncome"
              value={careerDetails.annualIncome}
              required
              onChange={(value) =>
                handleInputChange({ target: { name: "annualIncome", value } })
              }>
                  <Option value="range1">1lakh - 5lakhs</Option>
                  <Option value="range2">5lakhs - 10lakhs</Option>
                  <Option value="range3">10lakhs - 25lakhs</Option>
                  <Option value="range4">25lakhs - 50lakhs</Option>
                  <Option value="range4">50lakhs - 1crore</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="About My self"
            htmlFor="mySelf"
            placeholder="Minimum words 30"
          >
            <TextArea
              name="mySelf"
              id="mySelf"
              rows={3}
              cols={10}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
        </Form>
      ),
    },
    {
      title: "Family Details",
      content: (
        <Form>
          <Form.Item label="Family Type" htmlFor="familyType">
            <Select
              name="familyType"
              id="familyType"
              placeholder="Select"
            
              onChange={(value) =>
                handleInputChange({ target: { name: "familyType", value } })
              }
            >
              <Option value="joint">Joint Family</Option>
              <Option value="nuclear">Nuclear Family</Option>
              <Option value="OtherFamilyType">Others</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Father Occupation" htmlFor="fatherOccupation">
            <Select
              name="fatherOccupation"
              id="fatherOccupation"
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "fatherOccupation", value },
                })
              }
            >
              <Option value="fatherOcc1">Business/Entrepreneur</Option>
              <Option value="fatherOcc2">Private Service</Option>
              <Option value="fatherOcc3">Government Service</Option>
              <Option value="fatherOcc4">Self Employed</Option>
              <Option value="fatherOcc5">Expired</Option>
              <Option value="fatherOcc6">Retired</Option>
              <Option value="fatherOcc7">Army</Option>
              <Option value="fatherOcc8">CivilServices</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mother Occupation" htmlFor="motherOccupation">
            <Select
              name="motherOccupation"
              id="motherOccupation"
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "motherOccupation", value },
                })
              }
            >
              <Option value="motherOcc1">Business/Entrepreneur</Option>
              <Option value="motherOcc2">Private Service</Option>
              <Option value="motherOcc3">Government Service</Option>
              <Option value="motherOcc4">Self Employed</Option>
              <Option value="motherOcc5">Expired</Option>
              <Option value="motherOcc6">Retired</Option>
              <Option value="motherOcc7">Army</Option>
              <Option value="motherOcc8">CivilServices</Option>
              <Option value="motherOcc9">Teacher</Option>
              <Option value="motherOcc10">House Wife</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Brother" htmlFor="brother">
            <Input
              type="text"
              name="brother"
              id="brother"
              value={familyDetails.brother}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Sister" htmlFor="sister">
            <Input
              type="text"
              name="sister"
              id="sister"
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Family Living in" htmlFor="familyLivingIn">
            <Select
              name="familyLivingIn"
              id="familyLivingIn"
              value={familyDetails.familyLivingIn}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "familyLivingIn", value } })
              }
            >
              <Option value="india">India</Option>
              <Option value="abroad">Abroad</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Contact Address" htmlFor="contactDetails">
            <TextArea
              name="contactDetails"
              id="contactDetails"
              rows={3}
              cols={10}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="About My Family" htmlFor="aboutMyFamily">
            <TextArea
              name="aboutMyFamily"
              id="aboutMyFamily"
              rows={3}
              cols={10}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
          
        </Form>
      ),
    },
    {
      title: "Partner Preference",
      content: (
        <Form>
            <Form.Item label="Age" htmlFor="pAge">
              <Input
                type="number"
                name="pAge"
                id="pAge"
                value={partnerDetails.pAge}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Height" htmlFor="pHeight">
              <Select
                onChange={handleInputChange}
                placeholder="Select height"
              >
                {heightOptions.map(option => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
          </Form.Item>
          <Form.Item label="Community" htmlFor="community">
              <Select
                name="community"
                id="community"
                value={partnerDetails.community}
                onChange={handleInputChange}
                placeholder="Select Community"
              >
                <Option value=""></Option>
              </Select>
          </Form.Item>
          <Form.Item label="Caste" htmlFor="pCaste">
            <Input 
              type="text"
              name="pCaste"
              id="pCaste"
              value={partnerDetails.pCaste}
              onChange={handleInputChange} 
            />
          </Form.Item>
          <Form.Item label="Education" htmlFor="pEducation">
            <Select
              name="pEducation"
              id="pEducation"
              value={partnerDetails.pEducation}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "pEducation", value } })
              }
            >
              <Option value="Engineering">Engineering/Technology/Design</Option>
                  <Option value="Be">B.E/B.Tech</Option>
                  <Option value="BPharmacy">B.Pharmacy</Option>
                  <Option value="Me">M.E</Option>
                  <Option value="Mtech">M.Tech</Option>
                  <Option value="MPharmacy">M.Pharmacy</Option>
                  <Option value="Ms">
                    M.S(Engineering,B.Arch,M.Arch,B.Des,M.Des)
                  </Option>
              <Option value="Computers">Computers(MCA,BCA,B.IT)</Option>
              <Option value="Finance">Finance/Commerce/Economics</Option>
              <Option value="Bcom">B.Com</Option>
              <Option value="Mcom">M.Com</Option>
              <Option value="Ca">CA</Option>
              <Option value="Cfa">CFA</Option>
              <Option value="Cs">CS</Option>
              <Option value="Icwa">ICWA</Option>
              <Option value="Management">Management</Option>
              <Option value="Mba">MBA/PGDM</Option>
              <Option value="Bba">BBA</Option>
              <Option value="Phm">PHM</Option>
              <Option value="Medicine">Medicine/Health</Option>
              <Option value="Mbbs">MBBS</Option>
              <Option value="Md">M.D</Option>
              <Option value="Bams">BAMS</Option>
              <Option value="Bhms">BHMS</Option>
              <Option value="MsMedicine">M.S(MEDICINE)</Option>
              <Option value="Mvsc">MVSC</Option>
              <Option value="Bvsc">BVSC</Option>
              <Option value="Mds">MDS</Option>
              <Option value="Bpt">BPT</Option>
              <Option value="Mpt">MPT</Option>
              <Option value="Dm">DM</Option>
              <Option value="Mvh">MCH</Option>
              <Option value="Law">LAW</Option>
              <Option value="Llb">L.L.B</Option>
              <Option value="Llm">L.L.M</Option>
              <Option value="Art">ART AND SCIENCE</Option>
              <Option value="Ba">B.A</Option>
              <Option value="Bed">B.ED</Option>
              <Option value="Mfa">MFA</Option>
              <Option value="Bsc">B.SC</Option>
              <Option value="Med">M.ED</Option>
              <Option value="Bjmc">BJMC</Option>
              <Option value="Ma">M.A</Option>
              <Option value="Msw">MSW</Option>
              <Option value="Mjmc">MJMC</Option>
              <Option value="Msc">M.SC</Option>
              <Option value="Bfa">BFA</Option>
              <Option value="Doctorate">DOCTORATE</Option>
              <Option value="Phd">PHD</Option>
              <Option value="Mphil">M.PHIL</Option>
              <Option value="NotGrad">NOT GRADUATE</Option>
              <Option value="DIPLOMA">DIPLOMA</Option>
              <Option value="HIGHSCHOOL">HIGH SCHOOL</Option>
              <Option value="TRADE">TRADE SCHOOL</Option>
              <Option value="OtherDeg">OTHER</Option>
            </Select>
         
          </Form.Item>
          <Form.Item label="Personal Income" htmlFor="personalIncome">
            <Select 
              name="personalIncome"
              id="personalIncome"
              value={partnerDetails.personalIncome}
              required
              onChange={(value) =>
                handleInputChange({ target: { name: "personalIncome", value } })
              }>
                 
                  <Option value="Range1">5lakhs - 10lakhs</Option>
                  <Option value="Range2">10lakhs - 20lakhs</Option>
                  <Option value="Range3">20lakhs - 30lakhs</Option>
                  <Option value="Range4">30lakhs - 40lakhs</Option>
                  <Option value="Range5">40lakhs - 50lakhs</Option>
                  <Option value="Range6">50lakhs - 60lakhs</Option>
                  <Option value="Range7">60lakhs - 70lakhs</Option>
                  <Option value="Range8">70lakhs - 80lakhs</Option>
                  <Option value="Range9">80lakhs - 90lakhs</Option>
                  <Option value="Range0">90lakhs - 1crore</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Marital Status" htmlFor="maritalStatusPartner">
            <Select
              name="maritalStatusPartner"
              id="maritalStatusPartner"
              value= {partnerDetails.maritalStatusPartner}
              placeholder="Select Your Status"
              onChange={(value) =>
                handleInputChange({ target: { name: "maritalStatusPartner", value } })
              }
            >
              <Option value="UNMARRRIED">UnMarried</Option>
              <Option value="MARRIED">Married</Option>
              <Option value="AWAITING">Awaiting Divorce</Option>
              <Option value="DIVORCED">Divorced</Option>
              <Option value="WIDOWED">Widowed</Option>
              <Option value="ANNULLED">Annulled</Option>
            </Select>
          </Form.Item>
          <Form.Item  htmlFor="termsCondition">
            <Checkbox> <a href="/terms&privacy"> I have agreed to the Terms & conditions & have read & understood the privacy policy</a></Checkbox>
          </Form.Item>
          <Button type="primary" onClick={handleOnSubmit}>
            Submit
          </Button>
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
        </Form>
      )
    }
  ];

  return (
    <div className="form-container">
      <h2>Register Form</h2>
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
      <Steps size="small" current={currentStep}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[currentStep].content}</div>
      
    </div>
  );
};

export default RegisterPage;
