import React from "react";

function MainImg({ borderLateral }) {
  console.log(borderLateral);
  return (
    <div
      className={`flex-1 ${
        borderLateral ? `border-l-[1px] border-r-[1px]` : ""
      } border-solid border-accent flex flex-col justify-center items-center`}
    >
      {/* 1 img */}
      <div className="m-8 mb-0">
        {" "}
        <img
          src="https://source.unsplash.com/random/?jewelry"
          alt="jewelry"
          className="border-[1px] w-full img-main border-solid border-accent rounded-t-[100vmax] rounded-b-[100vmax] "
        />{" "}
      </div>
      <div className="flex items-center justify-center my-10 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-11 h-11"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default MainImg;
