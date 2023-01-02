import React from "react";

function NavbarLateral() {
  return (
    <nav>
      {/* <!-- Navigation --> */}
      <div className="flex justify-end h-full text-xl font-bold uppercase font-secondary">
        <div className="border-solid border-[1px] border-accent flex justify-center items-center overflow-hidden rounded-l-[1.25rem] z-[1] bg-primary relative -right-[4.5rem] navbar-link">
          <span className="text-vertical-right-navbar">
            <a href="">Bambino</a>
          </span>
        </div>
        <div className="border-solid border-[1px] border-accent flex justify-center items-center overflow-hidden rounded-l-[1.25rem] relative z-[2] bg-primary -right-7 navbar-link">
          <span className="text-vertical-right-navbar">
            <a href="">Uomo</a>
          </span>
        </div>
        <div className="border-solid border-[1px] border-accent flex justify-center items-center overflow-hidden rounded-l-[1.25rem] z-[3] bg-primary navbar-link">
          <span className="text-vertical-right-navbar">
            <a href="">Donna</a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLateral;
