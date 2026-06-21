import axios from "axios";
import { useState } from "react";
import "./profile.css";

export default function Profile() {
  let [userData, setUserData] = useState();

  let handleLogOut = () => {
    alert("succesfully logged off");
    localStorage.removeItem("token");
    setUserData();
  };
  let getProfileData = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", config)
      .then((res) => {
        alert("user details fetched");
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("you are not logged in");
      });
  };

  return (
    <div className="profile-page">
      <p className="profile-title">Profile</p>

      <div className="profile-actions">
        <button onClick={getProfileData} className="profile-btn fetch">
          Get Profile Data
        </button>
        <button onClick={handleLogOut} className="profile-btn logout">
          Log Out
        </button>
      </div>

      {userData && (
        <div className="profile-data">
          <div className="profile-row">
            <span className="profile-row-label">Name</span>
            <span className="profile-row-value">{userData?.name || "N/A"}</span>
          </div>
          <div className="profile-row">
            <span className="profile-row-label">Email</span>
            <span className="profile-row-value">
              {userData?.email || "N/A"}
            </span>
          </div>
          <div className="profile-row">
            <span className="profile-row-label">Password</span>
            <span className="profile-row-value">
              {userData?.password || "N/A"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
