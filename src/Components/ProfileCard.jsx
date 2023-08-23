import axios from "axios";
import React, { useEffect, useState } from "react";
import male_avatar from '../assets/male_avatar.jpg'
import female_avatar from '../assets/female_avatar.jpg'
import '../scss/ProfileCard.scss'

function ProfileCard() {
  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        "https://sattonjanamm.onrender.com/user/all"
      );
      const verifiedProfile= response.data.pros;
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
          <h2 className="mt-5">Premium Members</h2>
          <div className="prof-grid">
            {profile.map((profileData) => (
              <div className="profile" key={profileData._id}>
                 <img
                src={
                    profileData.gender === "male" ? male_avatar : female_avatar
                }
                alt=""
              />
                <h3 className="text-center">{profileData.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;

