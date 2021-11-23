import { useEffect, useState } from "react";
import Nav from "./Nav";

import "./Header.scss";

export function Header() {

  const [isCollapsed, setIsCollapsed] = useState("");
  const [mobileNav, setMobileNav] = useState(false);




  useEffect(() => {
    window.onscroll = function (i: any) {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setIsCollapsed("");
      } else {
        setIsCollapsed("is-collapsed");
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize",() => {
        if (window.innerWidth > 1023) {
          setMobileNav(false);
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileNav]);


  return (
    <header className={`${isCollapsed} ${mobileNav ? "mobileIsOpened" : ""}`}>
      <div className="container">
        <div className="brand">
          <h1>Site Title</h1>
            <svg>
              <use xlinkHref="#logo" />
            </svg>
        </div>
        <Nav />
        <div className={`mobile-nav`}>
          <div className="nav-icon" onClick={() => setMobileNav(!mobileNav)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
          <div className="mobile-menu">
            <Nav />
          </div>
      </div>
    </header>
  );
}
