import React from "react";
import "./index.css";



document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

function Loader() {
  return (
    <>
      <div id="loader" className="center">
        <div className="sliderss">
          <div className="cccc">~LOADING~</div>
        </div>
      </div>
    </>
  );
}
export default Loader;
