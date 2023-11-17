import React, { useState } from 'react';
import './ChildForm.css';

function ChildForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ageGroup, setAgeGroup] = useState('SIX_TO_NINE');
  const [parentId, setParentId] = useState('252');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the data to your backend or perform necessary actions
    const childData = {
      userName,
      password,
      email,
      firstName,
      lastName,
      ageGroup,
      parentId,
    };
    console.log('Child Data:', childData);
    // You can handle API requests or further actions here
  };

  return (
    <div className="child-form-container">
      <h2>Add Child Profile</h2>
      <div className="form-wrapper">
        <div className="child-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
              <option value="SIX_TO_NINE">6 - 9 years</option>
              <option value="NINE_TO_TWELVE">9 - 12 years</option>
              <option value="TWELVE_TO_FIFTEEN">12 - 15 years</option>
            </select>
            <button type="submit">Add Child</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChildForm;
