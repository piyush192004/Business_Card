import React from "react";
import "./Header.css";
import photo from "../image/photo.jpg";
function Header() {
  return (
    <header>
      <div className="image">
        <img src={photo} className="photo" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
