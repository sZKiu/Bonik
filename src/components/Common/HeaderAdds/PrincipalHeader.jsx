import React, { useState } from "react";
import Logo from "../../../assets/android-chrome-512x512.png";
import { AiOutlineUser, AiFillCar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { GiAmpleDress, GiBookshelf, GiChipsBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PrincipalHeader() {
  const [search, setSearch] = useState("");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [Categories, setCategorie] = useState("All");
  const products = useSelector((state) => state.product);

  return (
    <div className="principal_header">
      <Link to="/">
        <img src={Logo} alt="Logo" className="principal_header-img" />
      </Link>

      <form
        className="principal_header-search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search and hit enter..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="principal_header-search-input"
        />

        <div
          className="principal_header-search-button"
          onClick={() => setShowAllCategories(!showAllCategories)}
        >
          {showAllCategories ? (
            <>
              Close
              <ul className="principal_header-categories">
                <li onClick={() => setCategorie("Fashion")}>
                  {" "}
                  <GiAmpleDress /> <span>Fashion</span>
                </li>
                <li onClick={() => setCategorie("Electronics")}>
                  {" "}
                  <FaTv /> <span>Electronics</span>
                </li>
                <li onClick={() => setCategorie("Cars")}>
                  {" "}
                  <AiFillCar /> <span>Cars</span>
                </li>
                <li onClick={() => setCategorie("Books")}>
                  {" "}
                  <GiBookshelf /> <span>Books</span>
                </li>
                <li onClick={() => setCategorie("Groceries")}>
                  {" "}
                  <GiChipsBag /> <span>Groceries</span>
                </li>
              </ul>
            </>
          ) : (
            "All Category"
          )}
        </div>
      </form>

      <div className="principal_header-icons">
        <Link>
          <AiOutlineUser />
        </Link>

        <Link to={"/cart"}>
          {products.length > 0 ? (
            <div>
              <span>{products.length}</span>
            </div>
          ) : null}
          <BsFillBagFill />
        </Link>
      </div>
    </div>
  );
}

export default PrincipalHeader;
