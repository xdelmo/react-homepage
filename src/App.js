// import logo from "./logo.svg";
import "./App.css";
import Circle from "./components/Circle";
import DropdownMobile from "./components/DropdownMobile";
import FooterMobile from "./components/FooterMobile";
import MainHomepage from "./components/MainHomepage";
import MarqueeAnimation from "./components/MarqueeAnimation";
import NavbarLateral from "./components/NavbarLateral";

function App() {
  return (
    <div className="App bg-primary font-main">
      {/* MOBILE APP */}
      <div className="flex flex-col min-h-screen md:hidden bg-primary">
        <DropdownMobile />
        <main>
          {/* CAROSELLO */}

          {/* img */}
          <figure className="mx-8 my-6">
            {" "}
            <img
              src="https://source.unsplash.com/random/?jewelry"
              alt="jewelry"
              className="border-[1px] w-full img-main border-solid border-accent rounded-t-[100vmax] rounded-b-[100vmax] "
            />{" "}
          </figure>

          {/* <---! BARRA NAVIGAZIONE ---> */}
          <div className="flex items-center justify-between mx-5 mb-7">
            {/* freccia sinistra */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            {/* icona categoria */}
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

            {/* freccia destra */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </main>
        {/* FOOTER */}

        <div className="mt-auto">
          <FooterMobile />
        </div>
      </div>

      {/* DESKTOP APP */}
      <div className="hidden md:block">
        <div class="container-grid">
          <header className="grid mb-3">
            {/* <!-- Header content --> */}
            <div className="flex items-center justify-center text-xl grid-span-1 border-b-[1px] border-solid border-accent uppercase">
              <span className="p-3">Scopri il nostro brand</span>
            </div>
            {/* <!-- MarqueeAnimation --> */}
            <div className="grid-span-2 border-accent border-solid border-[1px] border-t-0 overflow-hidden flex items-center">
              <MarqueeAnimation />
            </div>
            {/* icona lente */}
            <div className="flex items-center justify-center grid-span-3 border-b-[1px] border-solid border-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </header>
          <NavbarLateral />
          <MainHomepage />
          {/* <!-- Sidebar / Ads --> */}
          <aside className="flex items-center border-accent border-l-[1px] justify-center overflow-hidden">
            <div className="font-bold uppercase font-main text-[6rem] lg:text-[8rem] xl:text-[9.5rem] text-vertical-right">
              Occasioni
            </div>
          </aside>
          <footer className="bg-primary border-t-[1px] border-b-[0px] border-solid border-accent">
            {/* <!-- Footer content --> */}
            <div className="flex items-center justify-center gap-5 font-semibold uppercase border-solid grid-span-1 font-secondary border-r-[1px] border-accent">
              <span>
                <a href="">FB</a>
              </span>
              <span>
                <a href="">IG</a>
              </span>
            </div>
            <div className="flex items-center justify-center text-5xl font-semibold uppercase grid-span-2 font-main">
              <span>Lasciati consigliare</span>
            </div>
            {/* <!-- Cerchio --> */}
            <Circle />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
