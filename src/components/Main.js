import React from "react";
import "./Main.css";
function Main() {
  return (
    <div className="box">
      <div className="intro">
        <h2>Piyush Kumar Singh</h2>
        <p className="post">FrontEnd Developer</p>
        <p className="website">singhkpiyush.com</p>
        <button className="email">
          <i className="email-icon" class="fa-solid fa-envelope"></i> Email
        </button>
      </div>
      <div className="about">
        <h2 className="heading">About</h2>
        <small>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </small>
      </div>
      <div className="intrests">
        <h2 className="heading">Intrests</h2>
        <small>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </small>
      </div>
    </div>
  );
}

export default Main;
