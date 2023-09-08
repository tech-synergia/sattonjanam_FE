import React, { useContext, useState } from "react";
import { Form, Input, Select, Radio, Steps, Alert, Checkbox, Button, Space, Upload } from "antd";
import "../scss/RegisterPage.scss";
import { UploadOutlined } from '@ant-design/icons';
import UserApi from './API/UserApi'
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext'
import axios from 'axios'
import { useEffect } from "react";
import logo from '../assets/sattonjanamLogo.svg'

const { Step } = Steps;
const { Option } = Select;
const {TextArea} = Input;

const RegisterPage = (props) => {
  const [wordCount, setWordCount] = useState(0); 
  const [images, setImages] = useState([]);

  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [isCareerDetailsFilled, setIsCareerDetailsFilled] = useState(false); 
  const [isFamilyDetailsFilled, setIsFamilyDetailsFilled] = useState(false);

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
    myself: "",
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
    partnerAge: "",
    partnerHeight: "",
    partnerCommunity:"",
    partnerCast:"",
    partnerEductation:"",
    partnerGotra: "",
    partnerEducation: "",
    partnerIncome: "",
    partnerFatherOccupation: "",
    partnerMotherOccupation: "",
    partnerLocation: "",
    partnerMaritalStatus: "",
  })

  const allIndiaStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Abroad",
    "Assam",
    "Bihar",
    "Chattisgarh",
    "Delhi",
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
    "New Delhi",
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

  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const token = context.token

  
  const validateFields = () => {
    // Implement your validation logic here
    const requiredFields = [
      profileDetails.registeredFor,
      profileDetails.userName,
      profileDetails.religion,
      profileDetails.gender,
      profileDetails.email,
      profileDetails.phoneNumber,
      profileDetails.password,
      profileDetails.age,
      profileDetails.caste,
      profileDetails.gotra,
      profileDetails.hobbies,
      profileDetails.height,
      profileDetails.color,
      profileDetails.motherTongue,
      profileDetails.maritalStatus,
      profileDetails.manglik,
      profileDetails.smoking,
      profileDetails.drinking,
    ];

    const allFieldsFilled = requiredFields.every((field) => field !== "");

    setIsAllFieldsFilled(allFieldsFilled);
  };

  const validateCareerDetailsFields = () => {
    // Implement your validation logic here
    const requiredFields = [
      careerDetails.country,
      careerDetails.state,
      careerDetails.city,
      careerDetails.pinCode,
      careerDetails.highestDegree,
      careerDetails.employedIn,
      careerDetails.occupation,
      careerDetails.business,
      careerDetails.job,
      careerDetails.annualIncome,
      careerDetails.myself,
    ];

    const allFieldsFilled = requiredFields.every((field) => field !== "");
    const isPinCodeValid = /^\d{6}$/.test(careerDetails.pinCode);
    setIsCareerDetailsFilled(allFieldsFilled && isPinCodeValid);
  };

  const validateFamilyDetailsFields = () => {
    // Implement your validation logic here
    const requiredFields = [
      familyDetails.familyType,
      familyDetails.fatherOccupation,
      familyDetails.motherOccupation,
      familyDetails.brother,
      familyDetails.sister,
      familyDetails.familyLivingIn,
      familyDetails.contactAddress,
      familyDetails.aboutFamily,
    ];

    const allFieldsFilled = requiredFields.every((field) => field !== "");
    setIsFamilyDetailsFilled(allFieldsFilled);
  };

  useEffect(() => {
    validateFields();
    validateCareerDetailsFields();
    validateFamilyDetailsFields();
  }, [profileDetails, careerDetails, familyDetails]);

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
    for (let feet = 5; feet <= 7; feet++) {
      for (let inches = 0; inches <= 5; inches++) {
        const height = `${feet} foot ${inches} inches`;
        heightOptions.push(height);
      }
    }

    // Assuming you have an array of age options from 18 to 60
    const ageOptions = Array.from({ length: 43 }, (_, index) => ({ value: 18 + index, label: (18 + index).toString() }));

  const handleInputChange = (e) => {
    // uploadHandler()
    const { name, value } = e.target;
    if (name === "myself" || name === "aboutFamily") {
      // Calculate the current word count
      const currentWordCount = countWords(value);
  
      // Check if the word count exceeds 100
      if (currentWordCount > 100) {
        // If it exceeds, truncate the input to the first 100 words
        const truncatedValue = value.split(/\s+/).slice(0, 100).join(" ");
        setCareerDetails((prevData) => ({ ...prevData, mySelf: truncatedValue }));
      } else {
        // If it doesn't exceed, update the value as usual
        setCareerDetails((prevData) => ({ ...prevData, [name]: value }));
      }

      if (currentWordCount > 50) {
        // If it exceeds, truncate the input to the first 100 words
        const truncatedValue = value.split(/\s+/).slice(0, 100).join(" ");
        setFamilyDetails((prevData) => ({ ...prevData, aboutFamily: truncatedValue }));
      } else {
        // If it doesn't exceed, update the value as usual
        setFamilyDetails((prevData) => ({ ...prevData, [name]: value }));
      }
  
      // Update the word count state
      setWordCount(currentWordCount);
    } else {
    // setImages({ images, [name]: value})
    setProfileDetails((prevData) => ({ ...prevData, [name]: value }));
    setCareerDetails((prevData) => ({ ...prevData, [name]: value }));
    setFamilyDetails((prevData) => ({ ...prevData, [name]: value }));
    setPartnerDetails((prevData) => ({ ...prevData, [name]: value }))
  };
}

  
  const handleOnSubmit = async (e) => {
    try {
      const newImage = {
          ...profileDetails,
          image: {
              
              url: images.url
          }
        }
        console.log(newImage.image.url)
      const response = await UserApi.create(profileDetails,careerDetails,familyDetails,partnerDetails,profileDetails.image.url= images.url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    axios.post(`https://sattonjanam-be.onrender.com/api/v1/sendmail`, {email: profileDetails.email, userName: profileDetails.userName})

    axios.post(`https://sattonjanam-be.onrender.com/api/v1/sendmailadmin`, { userName: profileDetails.userName})

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
      navigate('/successMessage')
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

  function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
  }
  

  const steps = [
    {
      title: "Profile Details",
      content: (
        <Form>
          <Form.Item label="Registered for" htmlFor="registeredFor">
            <Select
              name="registeredFor"
              id="registeredFor"
              value={profileDetails.registeredFor}
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
              value={profileDetails.religion}
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
            <Radio.Group name="gender" id="gender" value={profileDetails.gender} onChange={handleInputChange}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          {/* <Form.Item label="Upload Profile Pic" htmlFor="image">
          <Space
              direction="horizontal"
              style={{
                width: '50%',
              }}
              size="medium"
            >
              <Upload label="Upload Profile Pic"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={5}
                name="image"
                id="image"
                value={profileDetails.image}
                onChange={uploadHandler}
                multiple
              >
                <Button icon={<UploadOutlined />}>Upload (Max: 5)</Button>
              </Upload>
          </Space>
          </Form.Item> */}
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
              value={profileDetails.email}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Phone Number" htmlFor="phone">
            <Input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={profileDetails.phoneNumber}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Password" htmlFor="password">
            <Input.Password
              type="password"
              name="password"
              id="password"
              value={profileDetails.password}
              rules={[{ required: true, message: "Please input your password!" }]}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Age" htmlFor="age">
            <Select 
               
                name="age"
                id="age"
                value={profileDetails.age}
                onChange={(value) =>
                  handleInputChange({ target: { name: "age", value } })
                }
            >
              {ageOptions.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                ))}

            </Select>
            </Form.Item>
            <Form.Item label="Height" htmlFor="height">
              <Select
                name="height"
                id="height"
                value={profileDetails.height}
                onChange={(value) =>
                  handleInputChange({ target: { name: "height", value } })
                }
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
              value={profileDetails.caste}
              id="caste"
              onChange={handleInputChange} 
            />
          </Form.Item>
          <Form.Item label="Gotra" htmlFor="gotra">
            <Input
              type="text"
              name="gotra"
              id="gotra"
              value={profileDetails.gotra}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Hobbies" htmlFor="hobbies">
            <Input
              type="text"
              name="hobbies"
              id="hobbies"
              value={profileDetails.hobbies}
              required
              onChange={handleInputChange}
            />
          </Form.Item>
         
          <Form.Item label="Color" htmlFor="color">
            <Select
              name="color"
              id="color"
              value={profileDetails.color}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "color", value } })
              }
            >
              <Option value="fair">Fair</Option>
              <Option value="veryFair">Very Fair</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mother Tongue" htmlFor="motherTongue">
            <Select
              name="motherTongue"
              id="motherTongue"
              value={profileDetails.motherTongue}
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
          <Form.Item label="Marital Status" htmlFor="maritalStatus">
            <Select
              name="maritalStatus"
              id="maritalStatus"
              value= {partnerDetails.maritalStatus}
              placeholder="Select Your Status"
              onChange={(value) =>
                handleInputChange({ target: { name: "maritalStatus", value } })
              }
            >
              <Option value="unmarried">Unmarried</Option>
              <Option value="married">Married</Option>
              <Option value="awaiting">Awaiting Divorce</Option>
              <Option value="divorced">Divorced</Option>
              <Option value="widowed">Widowed</Option>
              <Option value="annulled">Annulled</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Are you Manglik?" htmlFor="manglik">
            <Select
              name="manglik"
              id="manglik"
              value={profileDetails.manglik}
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
              value={profileDetails.smoking}
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
              value={profileDetails.drinking}
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
          <Button type="primary" onClick={handleNext} disabled={!isAllFieldsFilled} >
            Next
          </Button>
          <p style={{textAlign: "center"}}>
            Already Have an Account? <Link to={"/login"}>Login</Link>
          </p>
        </Form>
      ),
    },
    {
      title: "Career Details",
      content: (
        <Form>
          <Form.Item label="Country" htmlFor="country">
            <Select 
              name="country"
              id="country"
              value={careerDetails.country}
              required
              placeholder="Select Your Country"
              onChange={(value) =>
                handleInputChange({ target: { name: "country", value } })
              }
            >
              <Option value="INDIA">India</Option>
              <Option value="ABROAD">Abroad</Option>
            </Select>
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
                onChange={(e) => {
                  const inputPinCode = e.target.value;
                  if (/^\d{0,6}$/.test(inputPinCode)) { // Limit input to 6 digits
                    handleInputChange({ target: { name: "pinCode", value: inputPinCode } });
                  }
                }}
              />
            </Form.Item>
          <Form.Item label="Highest Degree" htmlFor="highestDegree">
            <Select
              name="highestDegree"
              id="highestDegree"
              value={careerDetails.highestDegree}
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
              value={careerDetails.employedIn}
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
              value={careerDetails.occupation}
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
              value={careerDetails.job}
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
                  <Option value="5lakhs-10lakhs">5lakhs - 10lakhs</Option>
                  <Option value="10lakhs-20lakhs">10lakhs - 20lakhs</Option>
                  <Option value="20lakhs-30lakhs">20lakhs - 30lakhs</Option>
                  <Option value="30lakhs-40lakhs">30lakhs - 40lakhs</Option>
                  <Option value="40lakhs-50lakhs">40lakhs - 50lakhs</Option>
                  <Option value="50lakhs-60lakhs">50lakhs - 60lakhs</Option>
                  <Option value=">60lakhs-70lakhs">60lakhs - 70lakhs</Option>
                  <Option value="70lakhs-80lakhs">70lakhs - 80lakhs</Option>
                  <Option value="80lakhs-90lakhs">80lakhs - 90lakhs</Option>
                  <Option value="90lakhs-1crore">90lakhs - 1crore</Option>
                  <Option value="More than 1crore">More than 1crore</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="About My self"
            htmlFor="myself"
          >
            <TextArea
              name="myself"
              id="myself"
              rows={3}
              cols={10}
              value={careerDetails.myself}
              onChange={handleInputChange}
              maxLength={100}
            />
              <div style={{ marginTop: "8px" }}>
                Word Count: {wordCount}/100
              </div>
          </Form.Item>
          <Button type="primary" onClick={handleNext} disabled={!isCareerDetailsFilled}>
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
              value={familyDetails.familyType}
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
              value={familyDetails.fatherOccupation}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "fatherOccupation", value },
                })
              }
            >
              <Option value="Business/Entrepreneur">Business/Entrepreneur</Option>
              <Option value="Private Service">Private Service</Option>
              <Option value="Government Service">Government Service</Option>
              <Option value="Self Employed">Self Employed</Option>
              <Option value="Expired">Expired</Option>
              <Option value="Retired">Retired</Option>
              <Option value="Army">Army</Option>
              <Option value="CivilServices">CivilServices</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mother Occupation" htmlFor="motherOccupation">
            <Select
              name="motherOccupation"
              id="motherOccupation"
              value={familyDetails.motherOccupation}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "motherOccupation", value },
                })
              }
            >
              <Option value="Business/entrepreneur">Business/Entrepreneur</Option>
              <Option value="Private service">Private Service</Option>
              <Option value="teacher">Teacher</Option>
              <Option value="House wife">House Wife</Option>
              <Option value="Government service">Government Service</Option>
              <Option value="Self employed">Self Employed</Option>
              <Option value="expired">Expired</Option>
              <Option value="retired">Retired</Option>
              <Option value="army">Army</Option>
              <Option value="Civil services">CivilServices</Option>
            
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
              value={familyDetails.sister}
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
              <Option value="India">India</Option>
              <Option value="Abroad">Abroad</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Contact Address" htmlFor="contactAddress">
            <TextArea
              name="contactAddress"
              id="contactAddress"
              value={familyDetails.contactAddress}
              rows={3}
              cols={10}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="About My Family" htmlFor="aboutFamily">
            <TextArea
              name="aboutFamily"
              id="aboutFamily"
              value={familyDetails.aboutFamily}
              rows={3}
              cols={10}
             
              onChange={handleInputChange}
            />
           <div style={{ marginTop: "8px" }}>
                Word Count: {wordCount}/300(Min. 50 words)
              </div>
          </Form.Item>
          <Button type="primary" onClick={handleNext} disabled={!isFamilyDetailsFilled}>
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
            <Form.Item label="Age" htmlFor="partnerAge">
              <Select
               type="number"
               name="partnerAge"
               id="partnerAge"
               value={partnerDetails.partnerAge}
               onChange={(value) =>
                handleInputChange({ target: { name: "partnerAge", value } })
              }
              >
                {ageOptions.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                ))}
              </Select>
              {/* <Input
               
              /> */}
            </Form.Item>
            <Form.Item label="Height" htmlFor="partnerHeight">
              <Select
                name="partnerHeight"
                id="partnerHeight"
                value={partnerDetails.partnerHeight}
                onChange={(value) =>
                  handleInputChange({ target: { name: "partnerHeight", value } })
                }
                placeholder="Select height"
              >
                {heightOptions.map(option => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
          </Form.Item>
          <Form.Item label="Caste" htmlFor="partnerCaste">
            <Input 
              type="text"
              name="partnerCast"
              id="partnerCast"
              value={partnerDetails.partnerCast}
              onChange={handleInputChange} 
            />
          </Form.Item>
          <Form.Item label="Gotra" htmlFor="partnerGotra">
            <Input 
                name="partnerGotra"
                id="partnerGotra"
                value={partnerDetails.partnerGotra}
                onChange={handleInputChange}
                
            />
          </Form.Item>
          
          <Form.Item label="Education" htmlFor="partnerEducation">
            <Select
              name="partnerEductation"
              id="partnerEductation"
              value={partnerDetails.partnerEductation}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({ target: { name: "partnerEductation", value } })
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
          <Form.Item label="Father Occupation" htmlFor="partnerFatherOccupation">
            <Select
              name="partnerFatherOccupation"
              id="partnerFatherOccupation"
              value={familyDetails.partnerFatherOccupation}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "partnerFatherOccupation", value },
                })
              }
            >
              <Option value="Business">Business/Entrepreneur</Option>
              <Option value="private service">Private Service</Option>
              <Option value="government service">Government Service</Option>
              <Option value="self employed">Self Employed</Option>
              <Option value="EXPIRED">Expired</Option>
              <Option value="RETIRED">Retired</Option>
              <Option value="ARMY">Army</Option>
              <Option value="civil  ervices">CivilServices</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mother Occupation" htmlFor="partnerMotherOccupation">
            <Select
              name="partnerMotherOccupation"
              id="partnerMotherOccupation"
              value={familyDetails.partnerMotherOccupation}
              placeholder="Select"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "partnerMotherOccupation", value },
                })
              }
            >
              <Option value="Business/Entrepreneur">Business/Entrepreneur</Option>
              <Option value="tEACHER">Teacher</Option>
              <Option value="house wife">House Wife</Option>
              <Option value=">privateservice">Private Service</Option>
              <Option value="governmentservice">Government Service</Option>
              <Option value="self employed">Self Employed</Option>
              <Option value="expired">Expired</Option>
              <Option value="retired">Retired</Option>
              <Option value="army officer">Army</Option>
              <Option value="Civil Service">CivilServices</Option>
             
            </Select>
          </Form.Item>
          <Form.Item label="Annual Income" htmlFor="partnerIncome">
            <Select 
              name="partnerIncome"
              id="partnerIncome"
              value={partnerDetails.partnerIncome}
              required
              onChange={(value) =>
                handleInputChange({ target: { name: "partnerIncome", value } })
              }>
                 
                  <Option value="5lakh-10lakh">5lakhs - 10lakhs</Option>
                  <Option value="10lakh-20lakh">10lakhs - 20lakhs</Option>
                  <Option value="20lakh-30lakh">20lakhs - 30lakhs</Option>
                  <Option value="30lakh-40lakh">30lakhs - 40lakhs</Option>
                  <Option value="40lakh-50lakh">40lakhs - 50lakhs</Option>
                  <Option value="50lakh-60lakh">50lakhs - 60lakhs</Option>
                  <Option value="60lakh-70lakh">60lakhs - 70lakhs</Option>
                  <Option value="70lakh-80lakh">70lakhs - 80lakhs</Option>
                  <Option value="80lakh-90lakh">80lakhs - 90lakhs</Option>
                  <Option value="90lakh-1crore">90lakhs - 1crore</Option>
                  <Option value="more than 1crore">More than 1crore</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Location" htmlFor="partnerLocation">
            <Select
              showSearch
              name="partnerLocation"
              id="partnerLocation"
              value={careerDetails.partnerLocation}
              required
              placeholder="Select Your Partner Location"
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
          <Form.Item label="Marital Status" htmlFor="partnerMaritalStatus">
            <Select
              name="partnerMaritalStatus"
              id="partnerMaritalStatus"
              value= {partnerDetails.partnerMaritalStatus}
              placeholder="Select Your Status"
              onChange={(value) =>
                handleInputChange({ target: { name: "partnerMaritalStatus", value } })
              }
            >
              <Option value="UNMARRRIED">Unmarried</Option>
              <Option value="MARRIED">Married</Option>
              <Option value="AWAITING">Awaiting Divorce</Option>
              <Option value="DIVORCED">Divorced</Option>
              <Option value="WIDOWED">Widowed</Option>
              <Option value="ANNULLED">Annulled</Option>
            </Select>
          </Form.Item>
          <Form.Item  htmlFor="termsCondition">
            <Checkbox checked={partnerDetails.termsCondition}
              onChange={(e) =>
                handleInputChange({
                  target: { name: "termsCondition", value: e.target.checked },
                })
              }> 
              <a href="/terms&privacy"> I have agreed to the Terms & conditions & have read & understood the privacy policy
              </a>
            </Checkbox>
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
      <img src={logo} alt="no image" width={100} height={100}/>
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
