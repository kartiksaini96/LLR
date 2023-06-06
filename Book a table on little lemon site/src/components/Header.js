import React, { useState } from "react";
import logo from "../assets/Asset 16@4x.png";
import classes from "./Header.module.css";

export default function Header({ onOpenLayout }) {
  const [drawerOpen, setDawerOpen] = useState(false);

  function drawerToggleHandlerByKSaini() {
    setDawerOpen(!drawerOpen);
  }

  return (
    <header className={classes.mainHeader}>
      <nav className={classes.nav}>
        <div className={classes.logoDrawerContainer}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div
            className={classes.drawerButton}
            onClick={drawerToggleHandlerByKSaini}
          >
            <span></span>
            {/*ByKSaini*/}
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={`${classes.navUl} ${drawerOpen && classes.drawerOpen}`}>
          <li>
            <a href="/">Home</a>
          </li>

          <li>About</li>
          {/*To prevent redirect, 
          remove the link for now,
          ByKSaini
          */}

          <li>Menu</li>
          {/*To prevent redirect, 
          remove the link for now,
          ByKSaini
          */}

          <li
            onClick={() => {
              onOpenLayout();
            }}
          >
            Reservation
          </li>
          {/*To prevent redirect, 
          remove the link for now,
          ByKSaini
          */}

          <li>Order Online</li>
          {/*To prevent redirect, 
          remove the link for now,
          ByKSaini
          */}

          <li>Login</li>
          {/*To prevent redirect, 
          remove the link for now,
          ByKSaini
          */}
        </ul>
      </nav>
    </header>
  );
}
