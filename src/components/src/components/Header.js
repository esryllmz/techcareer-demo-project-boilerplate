import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
         
          <a className="navbar-brand" href="#">
            <img
              src="img/techcareer-logo.svg"
              alt="Techcareer Logo"
              height="40"
            />
          </a>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex ms-auto me-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Etkinlikler, İş İlanı, Blog Ara"
                aria-label="Search"
              />
            </form>

         
            <ul className="navbar-nav mb-2 mb-lg-0">
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="eventsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Etkinlikler</b>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="eventsDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/bootcamp"
                    >
                      Bootcamp
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/hackathon"
                    >
                      Hackathon
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/hiring-challenge"
                    >
                      Hiring Challenge
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/events"
                    >
                      Tüm Etkinlikler
                    </a>
                  </li>
                </ul>
              </li>

             
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.techcareer.net/jobs"
                  data-bs-toggle="tooltip"
                  title="Yeni işinle sen de hayalindeki kariyere kavuşabilirsin! Senin için topladığımız iş fırsatlarını şimdi incele!"
                >
                  <b>İş İlanları</b>
                </a>
              </li>

             
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.techcareer.net/courses"
                >
                  <span className="me-1" style={{ color: "#00c26d" }}>●</span>
                  <b>Eğitimler</b>
                </a>
              </li>

             
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="communityDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Komünite</b>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="communityDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/community"
                    >
                      Komüniteye Katıl
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://tr.techcareer.net/community/techcareernet-developer-clubs/"
                    >
                      TDC
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/podcast"
                    >
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/kariyer-rehberi-fikirleri-ve-basamaklari"
                    >
                      Kariyer Rehberi
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.techcareer.net/dictionary"
                    >
                      Teknik Sözlük
                    </a>
                  </li>
                </ul>
              </li>

              
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.techcareer.net/sirketler-icin"
                >
                  <b>Şirketler</b>
                </a>
              </li>
            </ul>

            
            <button className="btn btn-success ms-3">Giriş / Üye Ol</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
