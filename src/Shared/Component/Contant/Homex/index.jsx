import React from "react";
import Global from "../../../Image/s2.jpg";
import Persevering from "../../../Image/kishwar-kaniz-shy-bride.jpg";
import Womenpoewr from "../../../Image/Women-Power.jpg";
import Social from "../../../Image/pppp.jpg";
import "./index.css";


function Homex() {
  return (
    <>
      <div className="welcome">
        <ul>
          <li>
            <h1>Conception</h1>
            <br />
            <p>
              We shall put forth our focus, as much as possible, on
              women-centric issues and help in eliminating discrimination
              against women by recognising, protecting and promoting their
              rights, especially those in the marginalised sector. We intend to
              create an environment which would lead to the fight against the
              evil practices of our society and it's very own attitude that
              fails to provide for mechanisms to offset or address sex or
              gender-based disadvantages and limitations of women, as a result
              of which women are denied or restricted in the recognition and
              protection of their rights and their access to the enjoyment of
              opportunities, benefits and privileges. We pledge to raise voice
              as well as fight for the protection and security of women during
              the current pandemic or any upcoming disaster, calamities and
              other crises especially in all phases of relief, recovery,
              rehabilitation including the state's review and would divulge
              against the existing laws that are discriminatory to women. It
              will always be our aim to promote harmony and equanimity among our
              society and to interpret correctly the feelings of the individual
              and to create confidence between all the sections of our society,
              but when women-centric questions involve the interest of political
              and social character we shall keep our columns open to any prudent
              remarks and criticisms.
            </p>
          </li>
          <li>
            <div className="container"></div>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div className="start00">
        <ul>
          <li>
            <a href="/page">
              <img src={Global} alt="" />
            </a>
          </li>
          <br/>
          <li>
            <a href="/page">
              <h1>Global Role</h1>
            </a>
            <br />
            <p>
              Throughout history, the central role of women in society has
              ensured the stability, progress and long-term development of
              nations. Globally, women comprise 43 percent of the world’s
              agricultural labor force – rising to 70 percent in some countries.
            </p>
          </li>
        </ul>
        <br />
        <br />
        <ul>
          <li>
            <a href="./page">
              <img src={Persevering} alt="" />
            </a>
          </li>
          <br/>
          <li>
            <a href="./page">
              <h1>Persevering indian Women</h1>
            </a>
            <br />
            <p>
              Indian women are the embodiment of the divinity not just because
              females are also depicted as gods in our society but because of
              their arduous nature and our acceptance to it by pushing them into
              the daily household chores, it's a fact that cannot be denied by
              our conventional society who thinks that it's their duty to
              perform such tasks.
            </p>
          </li>
        </ul>
        <br />
        <br />
        <ul>
          <li>
            <a href="/page">
              <img src={Womenpoewr} alt="" />
            </a>
          </li>
          <br/>
          <li>
            <a href="/page">
              <h1>Two steps at a time</h1>

              <br />
              <p>
                Throughout history, we survive together by cooperation and now
                is the time to repeat history and change the world into a better
                place for us. After all, progress is real and useful only when
                we all move ahead at the same time.
              </p>
            </a>
          </li>
        </ul>
        <br />
        <br />
        <ul>
          <li>
            <a href="/page">
              <img src={Social} alt="" />
            </a>
          </li>
          <br/>
          <li>
            <a href="/page">
              <h1>Social Appurtenance</h1>
            </a>
            <br />
            <p>
              Two thirds believe that women won’t achieve equality in their
              country unless men take actions to support women’s rights too.
              However, opinion is split on whether too much is being expected of
              men to help the fight for equality.
            </p>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
export default Homex;
