import React, { useEffect, useState } from "react";
import male_avatar from '../assets/male_avatar.jpg'
import female_avatar from '../assets/female_avatar.jpg'
import '../scss/ProfileCard.scss'
import UserApi from './API/UserApi'
import Carousel from "react-multi-carousel";

function ProfileCard() {
  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    try {
      const response = await UserApi.getAll("profileDetailsValue", "careerDetailsValue", "familyDetailsValue");
      const verifiedProfile = response.data.users;
      setProfile(verifiedProfile);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    fetchProfile();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="section-1">
      <div className="content-container">
        <div className="content">
          <h2>Premium Members</h2>
         
            
            <Carousel responsive={responsive} className="carousel">
              <div className="prof-grid">
                {profile.map((profileData) => (
                  <div className="profile" key={profileData._id}>
                      <img
                      src={
                          profileData.gender === "male" ? male_avatar : female_avatar
                      }
                      alt=""
                      />
                      <h3 className="text-center">{profileData.userName}</h3>
                  </div>
                ))}
                </div>
              </Carousel>
            
         
         
          </div>
      </div>
    </section>
  );
}

export default ProfileCard;

