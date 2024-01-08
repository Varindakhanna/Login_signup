
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from '../State/UserSlice';

const UserForm = ({ onAddUser }) => {
  
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    isActive: true, // Add a checkbox or toggle for activation
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(addUser(userData));
    if (typeof onAddUser === 'function') {
      onAddUser(userData);
    }
    // Clear the form after submission if needed
    setUserData({ name: "", email: "", password: "", isActive: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          Active:
          <input
            type="checkbox"
            name="isActive"
            checked={userData.isActive}
            onChange={() =>
              setUserData({ ...userData, isActive: !userData.isActive })
            }
          />
        </label>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
