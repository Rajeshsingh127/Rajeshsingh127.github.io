import {React} from "react";
import {Modal} from "react-bootstrap";
import {Slider,  ThemeProvider, withStyles} from "@material-ui/core";
import {AiFillSound,AiFillSetting} from "react-icons/ai";
import {MdBrightness7} from 'react-icons/md';
import {FaWifi,FaUserAlt,FaLock,FaPowerOff} from "react-icons/fa";
import {GiBatteryPackAlt,GiSpeaker} from "react-icons/gi";
import {BiBluetooth} from "react-icons/bi";
import {RiArrowRightSFill} from "react-icons/ri";
import {connect} from "react-redux";

const PrettoSlider = withStyles({
  root: {
    color: '#0492c2',
    height: 5,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    marginTop: -9,
    marginLeft: 9,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 4,
    marginTop: -5,
    marginLeft: 7,
  },
  rail: {
    height: 5,
    borderRadius: 4,
    marginTop: -5,
    marginLeft: 7,
  },
})(Slider);

const Iconbar = (props) => {
const {Iconbar} = props;

if(!Iconbar){
  return ""
}
else{
return(
  <div className="mainsidebar d-flex flex-column p-3 text-light ">
    <div className="topsidebar">
        <div className="sound d-flex flex-row">
            <AiFillSound size={20} />
            <PrettoSlider aria-labelledby="input-slider"/>
        </div>

        <div className="brightness d-flex flex-row ">
          <MdBrightness7 size={20} aria-labelledby="input-slider"/>
          <PrettoSlider />
        </div>

    </div>

    <div className="midsidebar d-flex flex-column mt-4">
      <table>
          <tr>
            <td><FaWifi /></td>
            <td><span>IPHONE 12</span></td>
            <td><RiArrowRightSFill /></td>
          </tr>

          <tr>
            <td><BiBluetooth /></td>
            <td><span>Off</span></td>
            <td><RiArrowRightSFill /></td>
          </tr>

          <tr>
            <td><GiBatteryPackAlt /></td>
            <td><span>Full Charge</span></td>
            <td><RiArrowRightSFill /></td>
          </tr>

          <tr>
            <td><FaUserAlt /></td>
            <td><span>LoneWolf</span></td>
            <td><RiArrowRightSFill /></td>
          </tr>
      </table>
    </div>

      <div className="endsidebar d-flex flex-row justify-content-between">
        <div className="endicons">
            <AiFillSetting />
        </div>

        <div className="endicons">
          <FaLock />
        </div>

        <div className="endicons">
          <FaPowerOff />
        </div>

      </div>

  </div>

);
}
}

export default connect(
  (state) => ({
    Iconbar: state.Iconbar,
  }),{})
  (Iconbar);
