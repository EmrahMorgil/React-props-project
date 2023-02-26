import React from "react";
import heart from "../icons/heart.png";
import account from "../icons/account.png";
import whiteshop from "../icons/whiteshop.png";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
        <a className="navbar-brand nav-header" href="#">
          Morfit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="heart-icon" src={heart} />
                Favourites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="heart-icon" src={account} />
                Account <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="whiteshop-icon" src={whiteshop} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
