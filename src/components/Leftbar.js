import Container from "react-bootstrap/Container";
import React,{useState, useEffect} from "react";
import {BsTerminalFill} from "react-icons/bs";
import {ImChrome} from "react-icons/im";
import {AiFillFilePdf} from "react-icons/ai";
import {BsFillInboxesFill,BsGrid3X3Gap} from "react-icons/bs";
import {IoMdMailOpen} from "react-icons/io";
import {Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import {connect } from "react-redux";
import Chrome from "../resources/icons/chrome.png";
import Contact from "../resources/icons/contact.png";
import File from "../resources/icons/file.png";
import Terminal from "../resources/icons/terminal.png";

const Leftbar = (props) => {

const {Activities} = props;

const leftAnim = useSpring({
opacity: Activities ? 1 : 0,
marginLeft: Activities ? 0 : -500,
config: {
    duration: 200,
}
});
  console.log("Activites in leftbar", Activities);
  return(
      <animated.div className="d-flex flex-column leftBar" style ={leftAnim}>
          <img src = {Chrome} className=" leftbaricon" />
          <img src = {Contact} className=" leftbaricon" />
          <img src = {File} className=" leftbaricon" />
          <img src = {Terminal} className=" leftbaricon" />
          <BsGrid3X3Gap  size={70} className=" leftbaricon mx-auto mb-1 text-white" />
        </animated.div>
  );
}

export default connect(
  (state) => ({
  Activities: state.Activities,

}))
(Leftbar);
