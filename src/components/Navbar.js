import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import React,{useState} from "react";
import {connect } from "react-redux";
import {setActivities} from "../store/actions/actions";
import moment from "moment";
import {FaWifi} from "react-icons/fa";
import {GiBatteryPackAlt,GiSpeaker} from "react-icons/gi";
import {AiFillSound} from "react-icons/ai";
import {RiArrowDropDownFill} from "react-icons/ri";
import {Modal} from "react-bootstrap";

const Navbar = (props) => {
const {Activities,setActivities} = props;

  return(
      <Container fluid className="d-flex justify-content-between headerset ">
      <span className={` Navbar ${Activities ? "bord": ""} `}
      onClick= {() => {setActivities(!Activities)}}  style={{marginLeft: "-1%"}}>
          Activites
      </span>
      <span className="Navbar " style={{width: "auto"}}>
          {moment().format('ddd  H:mm')}
      </span>

      <div className="Navbar iconsleft">
          <FaWifi size = {18}  className="iconsEach" />
          <GiSpeaker size = {23} className="iconsEach"/>
          <GiBatteryPackAlt size = {18} className="iconsEach" />
          <RiArrowDropDownFill size = {28} className="iconsEach" />
      </div>
      {/*<Modal show={true}>
      <Modal.Body  className="rightmini">

      </Modal.Body>
      </Modal>
*/}
      </Container>
  );
}

export default connect(
  (state) => ({
  Activities: state.Activities,

}),
{setActivities})
(Navbar);

// export default connect(
//   (state) => ({
//     currentLanguage: state.currentLanguage,
//     darkTheme: state.darkTheme,
//   }),
//   { changeLanguage, setDarkTheme }
// )(NavBar);
