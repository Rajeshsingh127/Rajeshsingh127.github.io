import Container from "react-bootstrap/Container";
import React,{useState, useEffect} from "react";
import {BsTerminalFill} from "react-icons/bs";
import {ImChrome} from "react-icons/im";
import {AiFillFilePdf} from "react-icons/ai";
import {BsFillInboxesFill} from "react-icons/bs";
import {IoMdMailOpen} from "react-icons/io";
import {Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const Rightbar = (props) => {
const  [viewRight, setviewRight] = useState(false);

const RightAnim = useSpring({
opacity: viewRight ? 1 : 0,
marginLeft: viewRight ?  0: +200,
config: {
    duration: 270,
}
});

useEffect(() => {
    setviewRight(props.dispRight);
},[props]);



  return(
      <animated.div className="d-flex flex-column leftBar"  style={RightAnim}>
          <BsTerminalFill  size={55}  className="my-2"/>
          <ImChrome size={55} className="my-2"/>
          <AiFillFilePdf size={55} className="my-2"/>
          <BsFillInboxesFill size={55} className="my-2"/>
          <IoMdMailOpen size={55} className="my-2"/>
        </animated.div>
  );
}

export default Rightbar;
