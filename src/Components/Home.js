import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import { useDispatch } from "react-redux";
import { addUser } from "../State/UserSlice";

const Home = () => {

const dispatch = useDispatch();

  const handleAddUser = async (userData) => {
    try {
      // Assuming you have an API endpoint for creating a user
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        // Dispatch an action to add the user to the Redux store
        dispatch(addUser(json.user));
      } else {
        // Handle error, show a message, etc.
        console.error("Failed to add user:", json.error);
      }
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  }

  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const handleGetInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/auth/protected', {
        method: 'GET',
        headers: {
          'auth-token': token,
        },
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('User is logged in successfully!');
      } else {
        console.error('Error while fetching user data:', data.error);
      }
    } catch (error) {
      console.error('Error during API request:', error.message);
    }
  };
  
  

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login if token is not present
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:5000/api/auth/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      });

      const json = await response.json();
      if (json) {
        setUserData(json);
      } else {
        // If there's an issue with token, redirect to login
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome to the Home Page</h2>
          <UserForm onAddUser={handleAddUser}/>
          <button onClick={handleGetInfo}>Get Info</button>
          <p>User Details:</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Please log in to view the Home Page.</p>
      )}
    </div>
  );
};

export default Home;
