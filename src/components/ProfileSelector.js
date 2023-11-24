// ProfileSelector.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import './ProfileSelector.css';
import axios from 'axios';

const ProfileSelector = () => {
  // Map profiles to include a random color and the initial
  console.log(localStorage.getItem('userId'));
  const history = useHistory(); // Create history object

  /******************api call ************ */


  const [profiles, setProfiles] = useState([]);
  
  // const [selectedProfileId, setSelectedProfileId] = useState(null);


  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(userId);

    // Fetch profiles from the backend API
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/getChildren/${userId}`);
        console.log("response DATA " ,response.data);
        setProfiles(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    if (userId) {
      fetchProfiles();
    }
  }, []); // Run this effect once when the component mounts

  const getRandomColor = () => {
    // Generate a random pastel color
    const hue = Math.floor(Math.random() * 360);
    const pastelColor = `hsl(${hue}, 100%, 80%)`;
    return pastelColor;
  };


  /******************api call ************ */

  // Function to handle profile selection
  const selectProfile = (profile) => {
    history.push({
      pathname: '/dashboard',
      state: { profile } // Pass the profile object in the state
    });
  };

  const handleclick = () => {
    history.push('/addchild')
  };
  console.log("profiles: ",profiles);
  const profilesWithColor = profiles.map(profile => ({
    ...profile,
    color: getRandomColor(),
    initial: profile.user.firstName.charAt(0).toUpperCase()
  }));

  return (
    <div className="profile-selector-container">
      <h1>Who's Profile You want to see?</h1>
      <div className="profile-subtitle">
      Select your child’s profile to tailor their learning journey with content just for them.
      </div>
      <div className="profiles">
      {profilesWithColor.map(profile => (
        <div key={profile.id} className="profile" onClick={() => selectProfile(profile)}>
          <div className="profile-icon" style={{ backgroundColor: profile.color }}>
            {profile.initial}
          </div>
          <div className="profile-name">{profile.user.firstName}</div>
        </div>
      ))}
        <div className="profile add-profile">
          <div className="profile-icon" onClick={handleclick}>+</div>
          <div className="profile-name">Add</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelector;
