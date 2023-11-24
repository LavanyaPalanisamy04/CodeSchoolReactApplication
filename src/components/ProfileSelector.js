// ProfileSelector.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import './ProfileSelector.css';
import axios from 'axios';

// const profiles = [
//   { id: 'person1', name: 'Person 1' },
//   { id: 'Person 2', name: 'Person 2' },
// ];

// const [profiles, setProfiles] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     // Fetch profiles from the backend API
//     const userId = localStorage.getItem('userId');
//     const fetchProfiles = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/users/getChildren/${userId}');
//         setProfiles(response.data);
//       } catch (error) {
//         console.error('Error fetching profiles:', error);
//       }
//     };

//     fetchProfiles();
//   }, []);

// const getRandomColor = () => {
//   // Generate a random pastel color
//   const hue = Math.floor(Math.random() * 360);
//   const pastelColor = `hsl(${hue}, 100%, 80%)`;
//   return pastelColor;
// };

const ProfileSelector = () => {
  // Map profiles to include a random color and the initial
  console.log(localStorage.getItem('userId'));
  const history = useHistory(); // Create history object

  /******************api call ************ */


  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    // Fetch profiles from the backend API
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/getChildren/${userId}`);
        setProfiles(response.data);
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
  const selectProfile = () => {
    history.push('/'); // Redirect to the home page
  };

  const handleclick = () => {
    history.push('/addchild')
  };
  const profilesWithColor = profiles.map(profile => ({
    ...profile,
    color: getRandomColor(),
    initial: profile.name.charAt(0)
  }));

  return (
    <div className="profile-selector-container">
      <h1>Who's Profile You want to see?</h1>
      <div className="profile-subtitle">
      Select your child’s profile to tailor their learning journey with content just for them.
      </div>
      <div className="profiles">
        {profilesWithColor.map(profile => (
          <div key={profile.id} className="profile" onClick={selectProfile}>
            <div className="profile-icon" style={{ backgroundColor: profile.color }}>
              {profile.initial}
            </div>
            <div className="profile-name">{profile.name}</div>
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
