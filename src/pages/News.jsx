// pages/News.jsx
import { useEffect, useState, useContext } from "react";
import Layout from "./Layout";
import "../../src/index.css";
import "../../src/blogs.css";
import Nav from "./Nav";
import Head from "./Head";
import Footer from "./Footer";
import GameplayVideo from "../assets/Apex Gameplay 30s.mp4";

const AppStyles = {
  root: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "rgb(101, 74, 36)",
    overflowX: "hidden",
    scrollBehavior: "smooth"
  },
  navbar: {
    backgroundColor: "black",
    fontFamily: "'Bebas Neue', sans-serif",
    height: "75px"
  },
  navLink: {
    color: "white",
    fontSize: "1.5rem",
    margin: "0 0.5rem"
  },
  over: {
    width: "8rem"
  },
  navbarCollapseShow: {
    backgroundColor: "black"
  },
  navLinkHover: {
    color: "rgb(218, 41, 42)"
  },
  dropdownMenu: {
    backgroundColor: "rgb(218, 41, 42)",
    border: "2px solid black"
  },
  dropdownItem: {
    color: "white",
    fontSize: "1.2rem"
  },
  dropdownItemHover: {
    backgroundColor: "black",
    color: "rgb(218, 41, 42)"
  },
  navbarTogglerIcon: {
    fontSize: "2rem",
    color: "rgb(218, 41, 42)"
  },
  buttonDownload: {
    width: "10vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: "rgb(218, 41, 42)",
    fontSize: "1.2rem",
    color: "white",
    borderRadius: "0.2rem",
    margin: "0 40vw"
  },
  buttonDownloadHover: {
    backgroundColor: "rgb(166, 31, 32)"
  },
  teks: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textShadow: "10px 0px 10px black"
  },
  teksH1: {
    color: "white",
    fontSize: "10rem",
    fontWeight: 600,
    textAlign: "center"
  },
  teksH2: {
    fontSize: "5rem",
    color: "white",
    fontWeight: 600,
    textAlign: "center"
  },
  bannerVideo: {
    marginTop: "4rem",
    width: "100vw"
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem"
  },
  buttonBanner: {
    width: "20vw",
    height: "8vh",
    backgroundColor: "rgb(218, 41, 42)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
    fontSize: "1.8rem",
    textAlign: "center",
    borderRadius: "0.3rem"
  },
  buttonBannerHover: {
    backgroundColor: "black",
    color: "rgb(218, 41, 42)",
    transform: "scale(1.05)",
    transition: "transform 0.2s linear"
  },
  flyer: {
    marginTop: "-0.5rem",
    width: "100vw",
    height: "50vh",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem"
  },
  flyerH1: {
    color: "white",
    fontSize: "4rem",
    textAlign: "center",
    textShadow: "10px 0px 10px black"
  },
  flyerP: {
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
    textShadow: "10px 0px 10px black"
  },
  newsOverview: {
    backgroundColor: "rgb(255, 247, 236)",
    paddingTop: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Bebas Neue', sans-serif",
    marginTop: "-0.5rem"
  },
  cardWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
  },
  news: {
    flexWrap: "wrap",
    gap: "1rem"
  },
  preview: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30vw",
    color: "white",
    marginBottom: "10vh",
    marginTop: "3vh"
  },
  newsCard: {
    marginBottom: "0.1rem",
    marginTop: "0.1rem"
  },
  gambar: {
    width: "30vw",
    height: "30vh",
    backgroundColor: "gray",
    backgroundImage: "url(../src/assets/news-1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginBottom: "1.5rem"
  },
  date: {
    display: "flex",
    alignItems: "center",
    width: "30vw"
  },
  dateH5: {
    margin: "0 1rem",
    marginBottom: "2rem"
  },
  gameName: {
    color: "rgb(218, 41, 42)"
  },
  previewP: {
    marginBottom: "19vh",
    marginTop: "1rem",
    fontSize: "1.2rem",
    textAlign: "center"
  },
  strip: {
    width: "30vw",
    height: "1vh",
    backgroundColor: "rgb(218, 41, 42)"
  },
  cardAbout: {
    display: "flex",
    backgroundColor: "rgb(30, 29, 29)",
    width: "90vw",
    marginBottom: "1.5rem"
  },
  cardAboutImg: {
    backgroundColor: "red",
    width: "70vw",
    height: "25rem",
    marginRight: "2rem",
    backgroundImage: "url(../src/assets/about.jpeg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: "90vw"
  },
  descH1: {
    fontSize: "4.5rem"
  },
  descP: {
    fontSize: "1.5rem",
    maxWidth: "40vw",
    textWrap: "wrap",
    textAlign: "justify"
  },
  aboutFoto: {
    marginTop: "2rem",
    width: "45rem",
    height: "45rem",
    backgroundImage: "url(../src/assets/about-legends.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  aboutHeading: {
    marginTop: "3rem",
    marginBottom: "2rem",
    fontSize: "3rem"
  },
  aboutText: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: "3rem"
  },
  genap: {
    flexDirection: "row-reverse",
    margin: 0
  },
  invisibleCard: {
    paddingTop: "2rem",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 247, 236)",
    gap: "1rem",
    paddingBottom: "2rem"
  },
  invCard: {
    maxWidth: "30vw"
  },
  invCardImg: {
    width: "30vw",
    height: "35vh"
  },
  invCardH1: {
    marginTop: "1.5rem",
    marginLeft: "5%"
  },
  invCardP: {
    marginLeft: "5%",
    textAlign: "justify",
    width: "25vw",
    fontSize: "1.2rem"
  },
  newsBanner: {
    width: "100vw",
    backgroundColor: "rgb(254, 0, 0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30rem",
    marginTop: "4rem"
  },
  newsBannerH1: {
    marginTop: "-10rem",
    color: "white",
    fontSize: "3rem"
  },
  newsContainer: {
    width: "100vw",
    backgroundColor: "rgb(255, 247, 236)"
  }
};

function News() {
  return (
    <>
      <section className="news-banner" style={AppStyles.newsBanner}>
        <svg
          width="155px"
          height="157px"
          viewBox="0 0 85 87"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="Production" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(0.000000, -89.000000)" fill="#FFFF">
              <polygon
                id="Fill-1"
                points="42.5000837 89 0 163.534692 11.5912668 175.150521 37.6550002 157.326026 21.7545741 157.326026 42.5000837 120.94332 63.2455933 157.326026 47.3448324 157.326026 73.4089007 175.150521 85 163.534692"
              />
            </g>
          </g>
        </svg>
        <h1 style={{ color: "white", textAlign: "center" }}>APEX LEGENDS NEWS</h1>
      </section>

      <section className="news-container" style={AppStyles.newsContainer}>
        <div className="card-wrap" id="news" style={AppStyles.cardWrap}>
          {Array(2)
            .fill()
            .map((_, index) => (
              <div className="preview" id="news-card" key={index} style={AppStyles.preview}>
                <div className="gambar" style={AppStyles.gambar}></div>
                <div className="date" style={AppStyles.date}>
                  <h5 id="game-name" style={{ margin: "0" }}>APEX LEGENDS</h5>
                  <h5 style={{ margin: "0" }}>AGUG 22 2024</h5>
                </div>
                <h2 style={{ margin: "0" }}>APEX LEGENDS ANTI-CHEAT</h2>
                <p style={{ margin: "0" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, animi.</p>
                <div className="strip" style={AppStyles.strip}></div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default News;
