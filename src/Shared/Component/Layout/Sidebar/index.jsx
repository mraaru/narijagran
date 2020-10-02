import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../../Image/logo.jpeg";



function togglesidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
function togglesubmenu() {
  document.getElementById("sidesubbar").classList.toggle("show");
}
function togglesubmenua() {
  document.getElementById("sidesubbar1").classList.toggle("show");
}
function togglesubmenub() {
  document.getElementById("sidesubbar2").classList.toggle("show");
}
function togglesubmenuc() {
  document.getElementById("sidesubbar3").classList.toggle("show");
}
function togglesubmenud() {
  document.getElementById("sidesubbar4").classList.toggle("show");
}
function togglesubmenue() {
  document.getElementById("sidesubbar5").classList.toggle("show");
}
function togglesubmenuf() {
  document.getElementById("sidesubbar6").classList.toggle("show");
}
function togglesubmenug() {
  document.getElementById("sidesubbar7").classList.toggle("show");
}
function togglesubmenuh() {
  document.getElementById("sidesubbar8").classList.toggle("showo");
}

const Sidebar = () => {
  return (
    <>
      <div className="outli">
        <nav id="sidebar">
          <div className="mpp">
            <div className="toggle-btn" onClick={togglesidebar}>
              <span className="jan"></span>
              <span className="jan"></span>
              <span className="jan aman"></span>
            </div>
            <div className="logosidebar">
            
                <Link to="/"><img src={Logo} alt=""/></Link>
              
            </div>
          </div>
          <br />

          <ul>
            <li>
              <a href="/">
                <i className="fa fa-home" aria-hidden="true"></i> Home
              </a>
            </li>
            <li onClick={togglesubmenu}>
              <a href="#">
                <i className="fa fa-gavel" aria-hidden="true"></i> HerRight
              </a>
              <ul id="sidesubbar">
                <li>
                  <a href="">Know Your Right</a>
                </li>
                <li>
                  <a href="">Child Right</a>
                </li>
                <li>
                  <a href="">Complain To NCW</a>
                </li>
              </ul>
            </li>
            <li onClick={togglesubmenua}>
              <a href="#">
                <i className="fa fa-book" aria-hidden="true"></i> HerStory
              </a>
              <ul id="sidesubbar1">
                <li>
                  <a href="">Article</a>
                </li>
                <li>
                  <a href="">Biography</a>
                </li>
                <li>
                  <a href="">Interviews</a>
                </li>
                <li>
                  <a href="">Share With Us</a>
                </li>
              </ul>
            </li>
            <li onClick={togglesubmenub}>
              <a href="#">
                <i className="fa fa-heart" aria-hidden="true"></i> HerCare
              </a>
              <ul id="sidesubbar2">
                <li>
                  <a href="">Fitness Tips</a>
                </li>
                <li>
                  <a href="">Skin Care</a>
                </li>
                <li>
                  <a href="">Hair Care</a>
                </li>
                <li>
                  <a href="">Beauty Tips</a>
                </li>
              </ul>
            </li>
            <li onClick={togglesubmenuc}>
              <a href="#">
                <i className="fa fa-h-square" aria-hidden="true">
                  {" "}
                </i>{" "}
                HerHealth
              </a>
              <ul id="sidesubbar3">
                <li>
                  <a href="">Ayurveda</a>
                </li>
                <li>
                  <a href="">Yoga</a>
                </li>
                <li>
                  <a href="">Mental Wellness</a>
                </li>
              </ul>
            </li>
            <li onClick={togglesubmenud}>
              <a href="#">
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> InNews
              </a>
              <ul id="sidesubbar4">
                <li>
                  <a href="">Daily News</a>
                </li>
                <li>
                  <a href="">Opinion</a>
                </li>
                <li>
                  <a href="">OP-ED Column</a>
                </li>
                <li>
                  <a href="">Contributors</a>
                </li>
              </ul>
            </li>
            <li onClick={togglesubmenue}>
              <a href="#">
                <i className="fa fa-globe" aria-hidden="true"></i> Art & Culture
              </a>
              <ul id="sidesubbar5">
                <li>
                  <a href="">Indian Culture</a>
                </li>
                <li>
                  <a href="">Movies</a>
                </li>
                <li>
                  <Link to="/book">Books</Link>
                </li>
                <li>
                  <a href="">Theatre </a>
                </li>
                <li>
                  <a href="">Travel India</a>
                </li>
              </ul>
            </li>
            <li onClick={togglesubmenuf}>
              <a href="#">
                <i className="fa fa-tree" aria-hidden="true"></i> HerHome
              </a>
              <ul id="sidesubbar6">
                <li>
                  <a href="">Food Recipe</a>
                </li>
                <li>
                  <a href="">Home Decor</a>
                </li>
                <li>
                  <a href="">Family Care</a>
                </li>
                <li>
                  <a href="">Gardening</a>
                </li>
              </ul>
            </li>
            <li onClick={togglesubmenug}>
              <a href="#">
                <i className="fa fa-list-alt" aria-hidden="true"></i> Acumen
                Others
              </a>
              <ul id="sidesubbar7">
                <li>
                  <a href="">Know The Loan</a>
                </li>
                <li>
                  <a href="">Startup</a>
                </li>
                <li>
                  <a href="">How To Start Business</a>
                </li>
                <li>
                  <a href="">Government Schemes</a>
                </li>
                <li>
                  <a href="">Corrections</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
