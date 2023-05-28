import React, { useState } from "react";
import "./LoginPage.css";

import Authorisation from "../../services/Authorisation";
import MessageBox from "../../components/MessageBox/MessageBox";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [apiStatus, setApiStatus] = useState(null);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setShowMessageBox(false);
    setMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowMessageBox(false);
    setMessage("");
  };

  const userDetails = {
    username: username,
    password: password,
  };

  const handleSubmit = () => {
    setShowMessageBox(false);
    setMessage("");

    if (!username || !password) {
      setShowMessageBox(true);
      setMessage("Please enter username/ password");
    }

    try {
      Authorisation.validate(userDetails)
        .then((response) => {
          console.log(response)

          if (response && response.data) {
            const token  = response.data;



            localStorage.setItem('token', token);
            setApiStatus(response.status);
            console.log("Token", token);
            setShowMessageBox(true);
            setApiStatus(response.status);
            setMessage("WHOOP WHOOP");
          } else {
            console.error('Invalid response:', response);
            setShowMessageBox(true);
            setApiStatus(400);
            setMessage("Invalid login details. Try again");
          }
        })
    } catch (error) {
      console.error('Login failed:', error);
    }

  };

  return (
    <div className="login-container">
      <div className="login-border">
        <h2 className="login-title">Login to FlexiDesk</h2>
        <div className="login-details">
          <h3 className="login-details-label">EIN: </h3>
          <input
            className="text-box ein"
            type="number"
            name="username"
            placeholder="Enter your EIN..."
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="login-details">
          <h3 className="login-details-label">Password: </h3>
          <input
            className="text-box"
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="login-button">
          <button className="primary-btn" onClick={handleSubmit}>
            Login
          </button>
        </div>
        {showMessageBox && <MessageBox message={message} status={apiStatus} />}
      </div>
    </div>
  );
};
export default LoginPage;
