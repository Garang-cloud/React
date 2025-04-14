import React from "react";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import Services from "./components/services";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Landing /> 
      <Body />
      <Gallery />
      <Contact />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
// This is the main App component that imports and renders other components.
// It includes the Navbar, Landing, Body, Gallery, Contact, About, Services, and Footer components.
// The components are organized in a way that allows for easy navigation and a cohesive layout.
// The App component is styled with CSS to create a visually appealing user interface.
// The Navbar component provides links to different sections of the website.
// The Landing component serves as the homepage with a welcome message.
// The Body component contains the main content of the website.