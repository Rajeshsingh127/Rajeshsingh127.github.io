import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import React,{useState, useEffect} from "react";
import {connect } from "react-redux";
import {setActivities,setIconbar} from "../store/actions/actions";
import moment from "moment";
import {FaWifi} from "react-icons/fa";
import {GiBatteryPackAlt,GiSpeaker} from "react-icons/gi";
import {AiFillSound} from "react-icons/ai";
import {RiArrowDropDownFill} from "react-icons/ri";
import {Modal} from "react-bootstrap";

const Navbar = (props) => {
const {Activities,setActivities} = props;
const {Iconbar, setIconbar} = props;

  return(
      <Container fluid className="d-flex justify-content-between headerset ">
        <div className={` Navbar ${Activities ? "bord": ""}`}
        onClick= {() => {setActivities(!Activities)}} style={{marginLeft: "-25px", cursor: "default",
      minWidth: "100px"}}>
              Activites
        </div>
      <span className="Navbar " style={{width: "auto"}}>
          {moment().format('ddd  H:mm')}
      </span>

      <div className={`Navbar iconsleft ${Iconbar ? "bord": " "}`} onClick={() => {setIconbar(!Iconbar)}}>
          <FaWifi size = {18}  className="iconsEach" />
          <GiSpeaker size = {23} className="iconsEach"/>
          <GiBatteryPackAlt size = {18} className="iconsEach" />
          <RiArrowDropDownFill size = {28} className="iconsEach" />
      </div>

      </Container>
  );
}

export default connect(
  (state) => ({
  Activities: state.Activities,
  Iconbar: state.Iconbar,
}),
{setActivities,setIconbar})
(Navbar);

// export default connect(
//   (state) => ({
//     currentLanguage: state.currentLanguage,
//     darkTheme: state.darkTheme,
//   }),
//   { changeLanguage, setDarkTheme }
// )(NavBar);
