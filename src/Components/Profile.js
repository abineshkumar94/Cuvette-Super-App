import "./Profile.css";
import React from "react";
import proimg from "../images/profileimg.png";
import { useNavigate } from "react-router-dom";
import Note from "./Notes";
import Weather from "./Weather";
import Timebox from "./Timebox";
import News from "./News";

const Profile = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const selectedCategories =
    JSON.parse(localStorage.getItem("selectedCategories")) || [];
  const handleBrowseButtonClick = () => {
    navigate("/Browse");
  };
  return (
    <div className="pro-box">
      <div className="pro-img">
        <img src={proimg} alt="" style={{ width: "30px", height: "80px" }} />
      </div>
      <div className="pro-info">
        <h2 className="pro-one"> {userData.name}</h2>
        <h2 className="pro-three"> {userData.username}</h2>
        <h2 className="pro-two"> {userData.email}</h2>
        {selectedCategories.map((category, index) => (
          <span className={`cat-${index + 1}`} key={category}>
            {category}
          </span>
        ))}
      </div>
      <div>
        <Weather />
        <Note />
        <Timebox />
        <News />
      </div>

      <div className="b-btn">
        <button className="browse-btn" onClick={handleBrowseButtonClick}>
          Browse
        </button>
      </div>
    </div>
  );
};

export default Profile;
