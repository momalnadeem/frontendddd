// import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg  " style={{"background":"white"}}>
          <div className="container-fluid">
            <div id="grad">
              <h6 className="flex logo " id="grad">
              InventoryManagement 
              </h6>
            </div>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>

            <div
              className="collapse navbar-collapse color"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 color links">
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/">
                    <span className="Home hm">Home</span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/stock">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                  My Stock
                    </span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/add">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      ADD New
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
