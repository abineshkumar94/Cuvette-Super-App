import React, { useState, useEffect } from "react";
import "./Catagory.css";
import catimg1 from "../images/action.png";
import catimg2 from "../images/drama.png";
import catimg3 from "../images/romance.png";
import catimg4 from "../images/thriller.png";
import catimg5 from "../images/western.png";
import catimg6 from "../images/horror.png";
import catimg7 from "../images/fantasy.png";
import catimg8 from "../images/music.png";
import catimg9 from "../images/fiction.png";

const Page2 = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [hideMinimumCategoriesText, setHideMinimumCategoriesText] = useState(false);
  const [hideNextButton, setHideNextButton] = useState(true);

  useEffect(() => {
    
    if (selectedCategories.length >= 3) {
      setHideMinimumCategoriesText(true);
      setHideNextButton(false);
    } else {
      setHideMinimumCategoriesText(false);
      setHideNextButton(true);
    }
  }, [selectedCategories]);

  const handleCategoryClick = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
      
      const categoryButton = document.querySelector(`.btn${category}`);
      if (categoryButton) {
        categoryButton.classList.add("selected-card");
      }
    }
  };

  const removeCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
    
    const categoryButton = document.querySelector(`.btn${category}`);
    if (categoryButton) {
      categoryButton.classList.remove("selected-card");
    }
  };

  return (
    <div>
      <h2 className="super-app1">Super app</h2>
      <div className="choose">
        <span className="line">Choose your</span>
        <br />
        <span className="line">entertainment</span>
        <br />
        <span className="line">category</span>
      </div>
      <div className="btn-container">
        <div className="btn-row">
          {/* Buttons for selecting categories */}
          <button
            className={`btn1 ${
              selectedCategories.includes("action") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("action")}
          >
            <img
              src={catimg1}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn2 ${
              selectedCategories.includes("drama") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("drama")}
          >
            <img
              src={catimg2}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn3 ${
              selectedCategories.includes("romance") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("romance")}
          >
            <img
              src={catimg3}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn4 ${
              selectedCategories.includes("thriller") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("thriller")}
          >
            <img
              src={catimg4}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn5 ${
              selectedCategories.includes("western") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("western")}
          >
            <img
              src={catimg5}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn6 ${
              selectedCategories.includes("horror") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("horror")}
          >
            <img
              src={catimg6}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn7 ${
              selectedCategories.includes("fantasy") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("fantasy")}
          >
            <img
              src={catimg7}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn8 ${
              selectedCategories.includes("music") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("music")}
          >
            <img
              src={catimg8}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
          <button
            className={`btn9 ${
              selectedCategories.includes("fiction") ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("fiction")}
          >
            <img
              src={catimg9}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </button>
        </div>
      </div>
      {/* Selected categories */}
      {selectedCategories.length > 0 && (
        <div className="selected-categories-container">
          {selectedCategories.map((category) => (
            <button
              key={category}
              className={`selected-category-button ${category}`}
            >
              {category}
              <span
                className="close-button"
                onClick={() => removeCategory(category)}
              >
                × {/* Close icon */}
              </span>
            </button>
          ))}
        </div>
      )}
      {/* Minimum 3 category required text */}
      {!hideMinimumCategoriesText && (
        <div className="error-selection">
          <p>Minimum 3 categories required</p>
        </div>
      )}
      {/* Next page button */}
      {!hideNextButton && (
        <div className="next-btn-div">
          <button className="btn-next">
            <p className="btn-next-text">Next page</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Page2;

