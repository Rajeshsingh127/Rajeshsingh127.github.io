import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import React,{useState, useEffect, lazy} from "react";
import Rightbar from"./Rightbar";
import Iconbar from "./Iconbar";
import {Row,Col,Modal,Form, InputGroup, FormControl,
FormGroup,
 } from "react-bootstrap";
 import {AiOutlineSearch} from "react-icons/ai";
import {connect} from "react-redux";
import WindowBase from "./base/Window";

const Home = (props) => {

const {Activities} = props;

  return(
    <div style={{backgroundImage: !Activities ? (`url(${fedora})`):(`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${fedora})`), height: "100vh",
     backgroundRepeat: "repeat", width: "100vw",backgroundPosition: "center", backgroundSize: "cover"}}>

      <Navbar />
      <Iconbar />
      <div className="d-flex justify-content-between mainpage align-items-center" style={{height:"calc(100vh - 28px)"}}>

          <Leftbar />
          {/*  <WindowBase />*/}
          <Rightbar />

          <div className="searchbox">
          {Activities? (<Form>
          <FormGroup>
            <InputGroup className="mb-0">
              <InputGroup.Text style={{background: "#2a3133",border: "1px solid rgba(255,255,255,0)", borderRight: "0px"}}
              className="text-white"><AiOutlineSearch /></InputGroup.Text>
              <FormControl type="text"  placeholder="Type to search..." style={{background: "#2a3133",
            border: "1px solid rgba(255,255,255,0)" , borderLeft: "0px"}} />
            </InputGroup>
          </FormGroup>
          </Form>): ("")}
      </div>

      </div>
    </div>
  );
}

export default connect(
  (state) => ({
      Activities: state.Activities

  }))
 (Home);
