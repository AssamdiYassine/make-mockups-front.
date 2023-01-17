import React from "react";
import Brande from './image/Artboard 1.png'
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm px-3 mb-5  sticky-top"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="container  d-flex justify-content-between ">
        <div>
        <div className="navbar-brand text-dark">
        <img className="d-block  " width={110}   src={Brande} alt="First slide" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button></div>
        <div> <div className="collapse navbar-collapse px-4  " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-5  btn btn-outline-dark ">Edit </li> 
            <div className="px-2"></div>
            <li className="nav-item btn btn-outline-dark px-5  ">
              About{" "}
            </li>
          </ul>
        </div></div>

       
      </div>
    </nav>
  );
}

export default Navbar;
