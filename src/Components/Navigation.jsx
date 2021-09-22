import React from "react";
import "./Style.css";

const Navigation = () => {
  return (
    <>
      <ul>
        <li className="active ">
          <a className="listname" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="listname" href="#">
            About Us
          </a>
        </li>
        <li>
          <a className="listname" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="listname" href="#">
            Products
          </a>
        </li>
        <li>
          <a className="listname" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
