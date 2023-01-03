import React from "react";

function NavbarLateral() {
  return (
    <nav>
      {/* <!-- Navigation --> */}
      <div className="relative flex justify-end flex-auto h-full text-xl font-bold uppercase font-secondary">
        <div className="border-solid border-[1px] -right-[2rem] border-accent flex justify-center items-center rounded-l-[1.25rem] z-[1] bg-primary w-[35px] relative navbar-link ">
          <a href="" className="text-vertical-navbar">
            <span>Bambino</span>
          </a>
        </div>
        <div className="border-solid border-[1px] border-accent flex justify-center items-center rounded-l-[1.25rem] -right-[1rem] z-[2] bg-primary w-[35px] relative  navbar-link">
          <a href="" className="text-vertical-navbar">
            <span>Uomo</span>
          </a>
        </div>
        <div className="border-solid border-[1px] border-accent flex justify-center items-center rounded-l-[1.25rem] z-[3] bg-primary w-[35px]">
          <a href="" className="text-vertical-navbar">
            <span>Donna</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLateral;
