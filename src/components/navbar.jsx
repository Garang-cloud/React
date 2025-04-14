import React from "react";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "blue", padding: "10px" }}>
      <h1 style={{ color: "white" }}>Garang Craft</h1>
      <ul style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
        <li style={{ color: "white" }}>Home</li>
        <li style={{ color: "white" }}>About</li>
        <li style={{ color: "white" }}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
// This is a simple Navbar component that includes the site name and navigation links. The styles are applied inline for simplicity.
// This is a simple Navbar component that includes the site name and navigation links. The styles are applied inline for simplicity.