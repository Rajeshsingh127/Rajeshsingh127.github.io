import fedora from "../resources/fedora.jpg";
import Container from "react-bootstrap/Container";
import React,{useState} from "react";

const Navbar = (props) => {

const [active, setActive] = useState(false);

  return(
      <Container fluid className="d-flex justify-content-between headerset ">
      <span className={` Navbar ${active ? "bord": ""} `}
      onClick={() => {setActive(!active);
                           props.setshowActive(!active) }}>
          Activites
      </span>
      <span className="Navbar">
          Tue 08:37
      </span>
      <span className="Navbar">
          icons
      </span>

      </Container>
  );
}

export default Navbar;
