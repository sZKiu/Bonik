import React from "react";
import "./HomeData.css";
import { FaTruck, FaIdCard, FaShieldAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function HomeData() {
  return (
    <div className="homedata_container">
      <div>
        <div>
          <FaTruck />
        </div>
        <h4>Worldwide Delivery</h4>
        <p>
          We offer competitive prices on our 100 millon plus product any range
        </p>
      </div>

      <div>
        <div>
          <FaIdCard />
        </div>
        <h4>Safe Payment</h4>
        <p>
          We offer competitive prices on our 100 millon plus product any range
        </p>
      </div>

      <div>
        <div>
          <FaShieldAlt />
        </div>
        <h4>Shop With Confidence</h4>
        <p>
          We offer competitive prices on our 100 millon plus product any range
        </p>
      </div>

      <div>
        <div>
          <BiSupport />
        </div>
        <h4>24/7 Support</h4>
        <p>
          We offer competitive prices on our 100 millon plus product any range
        </p>
      </div>
    </div>
  );
}

export default HomeData;
