import Container from "react-bootstrap/Container";
import React,{useState} from "react";
import {BsTerminalFill} from "react-icons/bs";
import {ImChrome} from "react-icons/im";
import {AiFillFilePdf} from "react-icons/ai";
import {BsFillInboxesFill} from "react-icons/bs";
import {IoMdMailOpen} from "react-icons/io";
import {Row } from "react-bootstrap";

const Leftbar = (props) => {

  return(
      <div className="d-flex flex-column leftBar" >
          <BsTerminalFill  size={55}  className="my-2"/>
          <ImChrome size={55} className="my-2"/>
          <AiFillFilePdf size={55} className="my-2"/>
          <BsFillInboxesFill size={55} className="my-2"/>
          <IoMdMailOpen size={55} className="my-2"/>
        </div>
  );
}

export default Leftbar;
