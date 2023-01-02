import React from "react";

function NavbarLateral() {
  return (
    <nav>
      {/* <!-- Navigation --> */}
      <div className="relative flex justify-end flex-auto h-full text-xl font-bold uppercase font-secondary">
        <div className="nav-lateral-link border-solid border-[1px] -right-[2rem] border-accent flex justify-center items-center  rounded-l-[1.25rem] z-[1] bg-primary max-w-[35px] relative navbar-link">
          <span className="text-vertical-navbar">
            <a href="">Bambino</a>
          </span>
        </div>
        <div className="nav-lateral-link border-solid border-[1px] border-accent flex justify-center items-center  rounded-l-[1.25rem]  -right-[1rem] z-[2] bg-primary max-w-[35px]  relative  navbar-link">
          <span className="text-vertical-navbar">
            <a href="">Uomo</a>
          </span>
        </div>
        <div className="nav-lateral-link border-solid border-[1px] border-accent flex justify-center items-center  rounded-l-[1.25rem] z-[3] bg-primary max-w-[35px] navbar-link">
          <span className="text-vertical-navbar">
            <a href="">Donna</a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLateral;
