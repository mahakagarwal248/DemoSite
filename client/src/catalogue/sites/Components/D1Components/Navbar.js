import React, { useContext } from "react";
import "./Navbar.css";
import Workingcontext from "../../../../contexts/workngalert/workingcontext";

function Navbar() {
  const notworkcontext = useContext(Workingcontext);
  const developmentstate = () => {
    notworkcontext.notworkingalert();
  };
  return (
    <div className="d1navbar">
      <div className="logo">
        <span>D</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span style={{ color: "red" }}>R</span>
        <span>R</span>
      </div>
      <div className="D1navcontents">
        <h5 className="hoverclass" onClick={developmentstate}>
          Home
        </h5>
        <h5 className="hoverclass" onClick={developmentstate}>
          Services
        </h5>
        <h5 className="hoverclass" onClick={developmentstate}>
          Our Work
        </h5>
        <h5 className="hoverclass" onClick={developmentstate}>
          Customer Reviews
        </h5>
        <h5 className="hoverclass" onClick={developmentstate}>
          Our Team
        </h5>
        <h5 className="hoverclass" onClick={developmentstate}>
          Contact
        </h5>
        <h5 className="hoverclass" onClick={developmentstate}>
          Hire Us
        </h5>
      </div>
    </div>
  );
}

export default Navbar;
