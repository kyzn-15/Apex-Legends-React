import "../../src/index.css";
import "../../src/blogs.css";
import "../../src/App.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/apex-logo-white.png'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="80" height="55" className="d-inline-block align-text-top ms-4" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">NEWS</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/blogs" id="link-over">BLOG</Link>
              </li>
              <li className="nav-item">
                <Link className="over nav-link" to="/create-blog">CREATE A BLOG</Link>
              </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SOSIAL MEDIA
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://x.com/PlayApex" target="_blank">Twitter</a></li>
                  <li><a className="dropdown-item" href="https://www.instagram.com/playapex/" target="_blank">Instagram</a></li>
                  <li><a className="dropdown-item" href="https://www.tiktok.com/@PLAYAPEX" target="_blank">TikTok</a></li>
                  <li><a className="dropdown-item" href="https://www.facebook.com/playapex" target="_blank">Facebook</a></li>
                  <li><a className="dropdown-item" href="https://www.youtube.com/playapex" target="_blank">Youtube</a></li>
                  <li><a className="dropdown-item" href="https://www.twitch.tv/playapex" target="_blank">Twitch</a></li>
                </ul>
              </li>
              <a className="button-download" href="https://www.ea.com/games/apex-legends/buy/pc" target="_blank">Download for Free</a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
