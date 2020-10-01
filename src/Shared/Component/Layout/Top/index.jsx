import React from "react";
import "./index.css";
import Logo from "../../../Image/LOGO.png"

function togglesidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
//time h ye
const a = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = a.toLocaleDateString(undefined, options);

function Top() {
  return (
    <>
      <div className="tbtb">
        <div className="toggle-btn" onClick={togglesidebar}>
          <span className="jan"></span>
          <span className="jan"></span>
          <span className="jan aman"></span>
        </div>
        <div className="top">
          <a href="/" >
            <img src={Logo} alt=""  />
          </a>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};

export default Top;
