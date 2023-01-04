import React from "react";

function FooterMobile() {
  return (
    <div className="border-t border-solid border-accent grid-footer-mobile">
      <div className="flex items-center justify-center grid-span-1-3">
        <span className="font-semibold uppercase font-main text-[1.75rem]">
          Lasciati consigliare
        </span>
      </div>
      <div className="flex  items-center justify-end border-l-[1px] border-solid grid-span-3 border-accent">
        <div className="w-12 h-12 m-4 rounded-full bg-accent"></div>
      </div>
    </div>
  );
}

export default FooterMobile;
