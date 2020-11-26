import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import Header from "../Header/Header";
import NewArrival from "./NewArrival";
import Slideshow from "../Slideshow/Slideshow";
import Sale from "./Sale";
import Footer from "../Footer/Footer";
import "./Home.css";
const Home = () => {
  const [add, setAdd] = React.useState(false);
  console.log(add);
  return (
    <div>
      <Header className="header" />
      <div>
        <Slideshow></Slideshow>
      </div>
      <div>
        <NewArrival />
      </div>
      <div>
        <Sale></Sale>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
