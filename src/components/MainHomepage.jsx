import React from "react";
import MainImg from "./MainImg";

function MainHomepage() {
  return (
    <main className="flex border-solid border-t-[1px] border-b-[1px] border-r-[0px] border-l-[0px] border-accent">
      {/* <!-- Main content --> */}
      <MainImg borderLateral={false} />
      <MainImg borderLateral={true} />
      <MainImg borderLateral={false} />
    </main>
  );
}

export default MainHomepage;
