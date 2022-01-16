import Nav from "./Nav";

import "./Header.scss";

export function Header() {


  return (
    <header>
      <div className="inner">
        <div className="brand">
            <svg>
              <use xlinkHref="#logo" />
            </svg>
        </div>
        <Nav />
      </div>
    </header>
  );
}
