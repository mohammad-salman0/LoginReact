import axios from "axios";
import { useState } from "react";
export default function Profile() {
  let [userData, setUserData] = useState();
  let getProfileData = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", config)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>Profile</p>
      <button onClick={getProfileData}>get Profile Data</button>
      {/* <button onClick={handleLogOut}>Log Out</button> */}

      {userData && (
        <div>
          <p>Name: {userData?.name || "N/A"}</p>
          <p>Email: {userData?.email || "N/A"}</p>
          <p>Password: {userData?.password || "N/A"}</p>
        </div>
      )}
    </div>
  );
}
