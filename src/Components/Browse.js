import React, { useEffect } from "react";
import "./Browse.css";
import Profilimg from "../images/lastimg.svg";
import { useNavigate } from "react-router-dom";

const Browse = ({ selectedCategories }) => {
  const navigate = useNavigate();
  const handleHomePageButtonClick = () => {
    navigate("/Page2");
  };
  useEffect(() => {
    
    if (Array.isArray(selectedCategories) && selectedCategories.length > 0) {
      
      const apiKey = "fcfb39436d69ce329a28514ec3a2034c";
      const genreIds = selectedCategories.join(",");
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?language=en&api_key=${apiKey}&with_genres=${genreIds}`;

      
      const headers = {
        accept: "application/json",
        Authorization: "Bearer fcfb39436d69ce329a28514ec3a2034c",
      };
      
      fetch(apiUrl, { headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          
          console.log("API response:", data);

          
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }
  }, [selectedCategories]);

  return (
    <div>
      <p className="first-heading">Super app</p>
      <h3 className="second-heading">Entertainment according to your choice</h3>
      <img
        src={Profilimg}
        alt=""
        style={{ width: "30px", height: "30px" }}
        className="proo-img"
      />
      <div className="h-btn" >
        <button className="homepage-btn" onClick={handleHomePageButtonClick} >Home Page</button>
      </div>
    </div>
  );
};

export default Browse;




