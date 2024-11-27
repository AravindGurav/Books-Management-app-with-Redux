import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Books
          </Link>

          {/* <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/classView">
                  Class
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/school">
                  School
                </Link>
              </li>
            </ul> */}
        </div>
      </nav>
    </div>
  );
}
