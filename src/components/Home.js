import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import React,{useState, useEffect} from "react";
import Rightbar from"./Rightbar";
import {Row,Col } from "react-bootstrap";

const Home = (props) => {


const [showActive,setshowActive] = useState(false);

 // useEffect(() => {
 //   console.log("homecomponent: " + showLeft);
 // });

  return(
    <div style={{backgroundImage: `url(${fedora})`, height: "100vh"}}>
      <Navbar setshowActive={setshowActive} />
      <div className="d-flex justify-content-between mainpage align-items-center" style={{height:"calc(100vh - 28px)"}}>
        <Leftbar  dispLeft={showActive} />
        <Rightbar dispRight={showActive} />
      </div>
    </div>
  );
}

export default Home;
