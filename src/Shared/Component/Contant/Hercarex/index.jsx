import React from "react";
import "./index.css";
import photooo from "../../../Image/a5c75c7e-fe8c-4df1-a2af-a298fd76b05d.jfif";


const Hercarex = () => {

    return (
        <>
        {/* npm i react-slideshow-image   ye chalna hai  */}
            <br />
      <br />
      <br />
      <br />

      
      <div className="hercare_box_big">
        <div className="hercare_box1">
          <ul>
            <li>
              <a href="/page">
                <img src={photooo} alt="" />
              </a>
            </li>
            <br />
            <li>
              <a href="/page">
                <h2>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit, dicta.
                </h2>
              </a>
            </li>
            <br />
            <li>
              <a href="/page">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  aspernatur quam accusantium amet est exercitationem nulla
                  itaque illum molestias, cupiditate atque odit unde. Doloremque
                  rerum voluptatum perspiciatis eos ullam voluptatibus
                  reiciendis fugit necessitatibus maxime fuga. Eveniet atque a
                  temporibus consectetur. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Rem, est quod. Placeat
                  repudiandae porro vel eos culpa fugit suscipit similique ipsum
                  nam nihil quaerat, quia soluta velit cumque ullam esse.
                </p>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/page">
                <img src={photooo} alt="" />
              </a>
            </li>
            <br />
            <li>
              <a href="/page">
                {" "}
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
              </a>
            </li>
            <br />
            <li>
              <a href="/page">
                {" "}
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque dolorem dolores suscipit mollitia ex laboriosam
                  nesciunt. Ea minus reiciendis, distinctio vero at rerum culpa
                  minima atque totam sunt qui tenetur magnam est vitae dolorem
                  odio voluptate a omnis, perferendis, nostrum non commodi.
                  Fuga, accusantium dolore est, rem magni labore, odit non natus
                  beatae molestiae deserunt veniam ad dignissimos debitis
                  officia?
                </p>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/page">
                <img src={photooo} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>


            </>
    )
}

export default Hercarex;