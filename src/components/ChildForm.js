import React, { useState } from 'react';
import './ChildForm.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ChildForm() {
  const parentId = localStorage.getItem('userId');
  console.log("printing uparnt id ",parentId);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');


  const history = useHistory();

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

    
  
  axios
  .post('http://localhost:8080/api/users/addChild', childData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log(response)
    if (response.status === 201) {
      // setIsRegistered(true);
      console.log("inside success")
      history.push('/children');
    } else {
      console.log('Add child failed:', response.data.message);
    }
  })
  .catch((error) => {
    console.error('Add child failed:', error);
  });

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
              <option value="">Select Age Group</option> {/* Add a default option */}
              <option value="SIX_TO_NINE">6 - 9 years</option>
              <option value="TEN_TO_SEVENTEEN">10 - 17 years</option>
            </select>
            <button type="submit">Add Child</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChildForm;
