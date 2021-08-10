import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import React,{useState, useEffect} from "react";
import Rightbar from"./Rightbar";
import {Row,Col,Modal } from "react-bootstrap";
import {connect} from "react-redux";

const Home = (props) => {

const {Activities} = props;

  return(
    <div style={{backgroundImage: `url(${fedora})`, height: "100vh",
     backgroundRepeat: "repeat", width: "100vw",backgroundPosition: "center", backgroundSize: "cover"}}>

      <Navbar />
      <div className="d-flex justify-content-between mainpage align-items-center" style={{height:"calc(100vh - 28px)"}}>

          <Leftbar />
          <Rightbar />
        
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
      Activities: state.Activities

  }))
 (Home);
