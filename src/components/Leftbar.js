import Container from "react-bootstrap/Container";
import React,{useState, useEffect} from "react";
import {BsTerminalFill} from "react-icons/bs";
import {ImChrome} from "react-icons/im";
import {AiFillFilePdf} from "react-icons/ai";
import {BsFillInboxesFill} from "react-icons/bs";
import {IoMdMailOpen} from "react-icons/io";
import {Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const Leftbar = (props) => {
const  [viewLeft, setviewLeft] = useState(false);

const leftAnim = useSpring({
opacity: viewLeft ? 1 : 0,
marginLeft: viewLeft ? 0 : -500,
config: {
    duration: 270,
}
});

useEffect(() => {
    setviewLeft(props.dispLeft);
},[props]);



  return(
      <animated.div className="d-flex flex-column leftBar"  style={leftAnim}>
          <BsTerminalFill  size={55}  className="my-2"/>
          <ImChrome size={55} className="my-2"/>
          <AiFillFilePdf size={55} className="my-2"/>
          <BsFillInboxesFill size={55} className="my-2"/>
          <IoMdMailOpen size={55} className="my-2"/>
        </animated.div>
  );
}

export default Leftbar;
