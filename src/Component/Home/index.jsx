import React from "react";
import Top from "../../Shared/Component/Layout/Top";
import Footer from "../../Shared/Component/Layout/Footer";
import Sidebar from "../../Shared/Component/Layout/Sidebar";
import Menu from "../../Shared/Component/Layout/Menu";
import Homex from "../../Shared/Component/Contant/Homex"
import Newsx from "../../Shared/Component/Contant/News/Newsx";
import Sliderr from "../../Shared/Component/Layout/Slider"
import Loader from "../../Shared/Component/Layout/Loader"
const Home = () => {
  return (
    <>
      <Sliderr />
      <Homex />
      <Newsx />
      <Menu />
      <Footer />
      <Top />
      <Sidebar />
      <Loader />


      </>
  );
};


export default Home;



