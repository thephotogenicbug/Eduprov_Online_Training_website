import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand me-2" href="https://mdbgo.com/">
          <img
            src="https://eduprov.com/images/favicon.png"
            className="logo"
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars navbar-icon"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                HOME
              </a>
            </li>
            <div class="dropdown mt-2 m-2 text-dark">
              <a
                class="text-reset dropdown-toggle hidden-arrow text-dark"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICES
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                ABOUT US
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                CONTACT US
              </a>
            </li>
          </ul>

          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-primary me-3">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar