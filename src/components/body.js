import React from "react";
import farmImage from "./assets/farm.jpg"; // Import the image using its relative path

function Body() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "blue" }}>Welcome to Garang Craft</h1>
      <h1>Garang craft. Welcome</h1>
      <p>
        The world has failed us by allowing the forces of evil to prevail. It is
        now easy for people to join the side that is winning.
      </p>
      <img
        src={farmImage} // Use the imported image here
        alt="Beautiful scenery"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default Body;
// This is the Body component that includes a welcome message and an image. The image is imported using its relative path and displayed with a responsive width.
