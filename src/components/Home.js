import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import React,{useState} from "react";
import Rightbar from"./Rightbar";
import {Row,Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const Home = (props) => {


const [showactive,setShowactive] = useState(false);

const leftBarAnim = useSpring({
  opacity: showactive ? 1 : 0,
  marginLeft: showactive ? 0 : -500
});

  return(

    <div style={{backgroundImage: `url(${fedora})`, height: "100vh"}}>
      <Navbar />
      <div className="d-flex justify-content-between mainpage align-items-center" style={{height:"calc(100vh - 28px)"}}>
      <animated.div style={leftBarAnim}>
        <h1> Hello World</h1>
      </animated.div>
        <Leftbar  setShowactive={setShowactive} />
        "this is just a trail"
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
