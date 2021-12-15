//import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
          className="navbar navbar-light navbar-expand-lg navigation-clean"
          style={{ "font-family": "calibri" }}
        >
          <div className="container">
            <a
              className="navbar-brand"
              href="https://www.w3schools.com/react/react_getstarted.asp"
              style={{ "font-family": "tahoma" }}
            >
              Company Name
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="https://www.w3schools.com/react/react_getstarted.asp"
                    style={{ "font-family": "tahoma" }}
                  >
                    First Item
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.w3schools.com/react/react_getstarted.asp"
                    style={{ "font-family": "tahoma" }}
                  >
                    Second Item
                  </a>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="https://www.w3schools.com/react/react_getstarted.asp"
                    style={{ "font-family": "tahoma" }}
                  >
                    Dropdown{" "}
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/react/react_getstarted.asp"
                    >
                      First Item
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/react/react_getstarted.asp"
                    >
                      Second Item
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/react/react_getstarted.asp"
                    >
                      Third Item
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
