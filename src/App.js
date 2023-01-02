// import logo from "./logo.svg";
import "./App.css";
import MainHomepage from "./components/MainHomepage";
import MarqueeAnimation from "./components/MarqueeAnimation";
import NavbarLateral from "./components/NavbarLateral";

function App() {
  return (
    <div className="App bg-primary font-main">
      <div class="container-grid">
        <header className="grid mb-3">
          {/* <!-- Header content --> */}
          <div className="flex items-center justify-center text-xl grid-span-1 border-b-[1px] border-solid border-accent uppercase">
            <span>Scopri il nostro brand</span>
          </div>
          <div className="grid-span-2 border-accent border-solid border-[1px] overflow-hidden">
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

        <aside className="flex items-center border-accent border-l-[1px] justify-center overflow-hidden">
          {/* <!-- Sidebar / Ads --> */}
          <div className="font-bold uppercase text-[9.5rem] text-vertical-right">
            occasioni
          </div>
        </aside>

        <footer className="bg-primary">
          {/* <!-- Footer content --> */}
          <div className="flex items-center justify-center gap-5 font-semibold uppercase grid-span-1 font-secondary border-t-[1px] border-solid border-accent">
            <span>
              <a href="">FB</a>
            </span>
            <span>
              <a href="">IG</a>
            </span>
          </div>
          <div className="grid-span-2 border-x-accent border-solid border-[1px] font-main uppercase font-semibold text-5xl flex justify-center items-center">
            <span>Lasciati consigliare</span>
          </div>
          <div className="flex items-center justify-end grid-span-3 border-t-[1px] border-solid border-accent">
            <div className="m-5 rounded-full w-9 h-9 bg-accent"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
