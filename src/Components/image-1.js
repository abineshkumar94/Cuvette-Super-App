import React from "react";
import img1 from "../images/image1.jpg";
import "./image-1.css";

const Image1 = () => {
    return (
        <div className="img-container" >
            <img src={img1} alt="" style={{ width: '380px', height: '375px' }} />
            <h1 className="container-text" >Discover new things on </h1>
            <h1 className="container-text-1" >Superapp</h1>
        </div>
    )
}

export default Image1;
