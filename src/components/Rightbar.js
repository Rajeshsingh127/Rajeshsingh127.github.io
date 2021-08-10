import Container from "react-bootstrap/Container";
import React,{useState, useEffect} from "react";
import {BsTerminalFill} from "react-icons/bs";
import {ImChrome} from "react-icons/im";
import {AiFillFilePdf} from "react-icons/ai";
import {BsFillInboxesFill} from "react-icons/bs";
import {IoMdMailOpen} from "react-icons/io";
import {Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import {connect} from "react-redux";

const Rightbar = (props) => {
const {Activities} = props;

const rightAnim = useSpring({
opacity: Activities ? 1 : 0,
marginRight: Activities ? -30 : -100,
config: {
    duration: 270,
}
});

  return(
      <animated.div className="d-flex flex-column leftBar" style={rightAnim}>
          <BsTerminalFill  size={55}  className="my-2"/>
          <ImChrome size={55} className="my-2"/>
          <AiFillFilePdf size={55} className="my-2"/>
          <BsFillInboxesFill size={55} className="my-2"/>
          <IoMdMailOpen size={55} className="my-2"/>
        </animated.div>
  );
}

export default connect(
  (state) => ({
    Activities: state.Activities,
}))
(Rightbar);
