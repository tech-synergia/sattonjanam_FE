import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "antd";
import male_avatar from "../assets/male_avatar.jpg";
import female_avatar from "../assets/female_avatar.jpg";
import "../scss/ProfileCard.scss";
import UserApi from "./API/UserApi";
import { GlobalContext } from "../GlobalContext";

function ProfileCard() {
  const [profile, setProfile] = useState([]);
  // const context = useContext(GlobalContext)
  // const [user] = context.useAuth.user

  const fetchProfile = async () => {
    try {
      const response = await UserApi.getAll("image", "sjId");
      const verifiedProfile = response.data.users.filter(
        (profileData) => profileData.isVerified
      );

      setProfile(verifiedProfile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <section id="section-1">
      <div className="content-container">
        <div className="content">
          <h2>Premium Members</h2>
          <div className="pros-grid">
          {/* <Carousel autoplay className="carousel"> */}
         
            {profile &&
              profile.map((profileData) => (
                <div className="profile" key={profileData._id}>
                  <img
                    src={profileData.image}
                    // src={
                    //   profileData.gender === "male" ? male_avatar : female_avatar
                    // }
                    alt=""
                  />
                  <h3 className="text-center">Id: {profileData.sjId}</h3>
                </div>
              ))}
         
          {/* </Carousel> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;

// import React, { useState, useEffect } from "react";
// import { Carousel } from "antd";
// import { EditOutlined } from "@ant-design/icons";
// import male_avatar from '../assets/male_avatar.jpg';
// import female_avatar from '../assets/female_avatar.jpg';
// import UpdateForm from "./UpdateForm"; // Import the UpdateForm component
// import UserApi from './API/UserApi';

// function ProfileCard() {
//   const [profile, setProfile] = useState([]);
//   const [editUserId, setEditUserId] = useState(null);

//   const fetchProfile = async () => {
//     try {
//       const response = await UserApi.getAll("profileDetailsValue", "careerDetailsValue", "familyDetailsValue");
//       const verifiedProfile = response.data.users;
//       setProfile(verifiedProfile);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const showEditForm = (userId) => {
//     setEditUserId(userId);
//   };

//   const handleEditFormCancel = () => {
//     setEditUserId(null);
//   };

//   const handleEditFormSubmit = (values) => {
//     // Update the user data in the profile state and API as needed
//     console.log("Edited data:", values);
//     setEditUserId(null);
//   };

//   return (
//     <section id="section-1">
//       <div className="content-container">
//         <div className="content">
//           <h2>Premium Members</h2>
//           <div className="carousel-container">
//             {/* <Carousel className="slider"> */}
//               {profile.map((profileData) => (
//                 <div className="profile" key={profileData._id}>
//                   <img
//                     src={
//                       profileData.gender === "male" ? male_avatar : female_avatar
//                     }
//                     alt=""
//                   />
//                   <h3 className="text-center">{profileData.userName}</h3>
//                   {/* <EditOutlined onClick={() => showEditForm(profileData._id)} /> */}
//                 </div>
//               ))}
//             {/* </Carousel> */}
//           </div>
//           {/* {editUserId !== null && (
//             <UpdateForm
//               initialValues={profile.find((p) => p._id === editUserId)}
//               onCancel={handleEditFormCancel}
//               onFinish={handleEditFormSubmit}
//             />
//           )} */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProfileCard;
