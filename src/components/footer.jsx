import React from "react";
function Footer() {
  return (
    <footer
      style={{ backgroundColor: "blue", padding: "10px", textAlign: "center" }}
    >
      <p style={{ color: "white" }}>
        © 2023 Garang Craft. All rights reserved.
      </p>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <li style={{ color: "white" }}>Privacy Policy</li>
        <li style={{ color: "white" }}>Terms of Service</li>
        <li style={{ color: "white" }}>Contact Us</li>
      </ul>
    </footer>
  );
}
export default Footer;
// This is a simple Footer component that includes copyright information and links to privacy policy, terms of service, and contact us.
