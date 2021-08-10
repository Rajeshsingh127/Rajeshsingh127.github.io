import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import React,{useState} from "react";
import {connect } from "react-redux";
import {setActivities} from "../store/actions/actions";
import moment from "moment";
const Navbar = (props) => {
const {Activities,setActivities} = props;

  return(
      <Container fluid className="d-flex justify-content-between headerset ">
      <span className={` Navbar ${Activities ? "bord": ""} `}
      onClick= {() => {setActivities(!Activities)}} >
          Activites
      </span>
      {console.log("redux value changing", Activities)}
      <span className="Navbar">
          {moment().format('ddd  H:m')}
      </span>
      <span className="Navbar">
          icons
      </span>

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
