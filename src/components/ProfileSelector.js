// ProfileSelector.js
import React from 'react';
import './ProfileSelector.css';

const profiles = [
  { id: 'person1', name: 'Person 1' },
  { id: 'Person 2', name: 'Person 2' },
];

const getRandomColor = () => {
  // Generate a random pastel color
  const hue = Math.floor(Math.random() * 360);
  const pastelColor = `hsl(${hue}, 100%, 80%)`;
  return pastelColor;
};

const ProfileSelector = () => {
  // Map profiles to include a random color and the initial
  const profilesWithColor = profiles.map(profile => ({
    ...profile,
    color: getRandomColor(),
    initial: profile.name.charAt(0)
  }));

  return (
    <div className="profile-selector">
      <h1>Who's Profile You want to see?</h1>
      <div className="profile-subtitle">
      Select your child’s profile to tailor their learning journey with content just for them.
      </div>
      <div className="profiles">
        {profilesWithColor.map(profile => (
          <div key={profile.id} className="profile">
            <div className="profile-icon" style={{ backgroundColor: profile.color }}>
              {profile.initial}
            </div>
            <div className="profile-name">{profile.name}</div>
          </div>
        ))}
        <div className="profile add-profile">
          <div className="profile-icon">+</div>
          <div className="profile-name">Add</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelector;
