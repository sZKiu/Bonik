import React from "react";
import "./HeaderAdds.css"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs";

function HeaderHelp() {
  return (
    <div className="header_help" >
      <ul className="header_help-contact" >
        <li className="header_help-item" >
          <BsFillTelephoneFill />

          <span>+88012 3457 7592</span>
        </li>
        <li className="header_help-item">
          <AiOutlineMail/>

          <span>example@gmail.com</span>
        </li>
      </ul>

      <ul className="header_help-info" >
        <li>Theme FAQ'S</li>
        <li>Need Help</li>
        <li>EN</li>
        <li>USD</li>
      </ul>
    </div>
  );
}

export default HeaderHelp;
