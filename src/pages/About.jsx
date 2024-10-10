// pages/index.jsx
import { useEffect, useState, useContext } from "react";
import Layout from "./Layout";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "./Head";
import '../../src/index.css';
import '../../src/blogs.css';
import GampeplayVidio from '../assets/boodhound.mp4'; 
import Card1 from '../assets/card1.jpg'
import Card2 from '../assets/card2.jpg'
import Card3 from '../assets/card3.jpg'

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


function About() {
  return (
    <>
      <section className="banner" style={AppStyles.root}>
        <video src={GampeplayVidio} autoPlay muted loop style={AppStyles.bannerVideo}></video>
        <div className="teks" style={AppStyles.teks}>
            <h1 style={AppStyles.teksH1}>APEX</h1>
            <h2 style={AppStyles.teksH2}>--LEGENDS--</h2>
            <div className="button-wrap" style={AppStyles.buttonWrap}>
                <a href="#" className="button-banner" style={AppStyles.buttonBanner}>Play Free Now</a>
                <a href="#" className="button-banner" style={AppStyles.buttonBanner}>Watch Gameplay Trailer</a>
            </div>
        </div>
      </section>
      
      <section className="news-overview" style={AppStyles.newsOverview}>
        <div className="card-about" style={AppStyles.cardAbout}>
            <div className="card-about-img" style={AppStyles.cardAboutImg}></div>
            <div className="desc" style={AppStyles.desc}>
                <h1 style={AppStyles.descH1}>The Legends</h1>
                <p style={AppStyles.descP}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repudiandae sequi hic repellat, repellendus corporis error dolore facere eaque minima quis ducimus porro ratione quasi omnis numquam molestiae aspernatur sint. Voluptas facilis hic quaerat ipsum consequatur quis qui necessitatibus voluptate.
                </p>
                <a href="#" className="button-banner" style={AppStyles.buttonBanner}>See The Roaster</a>
            </div>
        </div>

        <div className="about-foto" style={AppStyles.aboutFoto}></div>
        <h5 className="about-heading" style={AppStyles.aboutHeading}>Your Squad</h5>
        <p className="about-text" style={AppStyles.aboutText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet blanditiis sapiente omnis repellat similique possimus? Deleniti dolores dignissimos eligendi.
        </p>

        <div className="card-about genap" style={{ ...AppStyles.cardAbout, ...AppStyles.genap }}>
            <div className="card-about-img genap" style={AppStyles.cardAboutImg}></div>
            <div className="desc" style={AppStyles.desc}>
                <h1 style={AppStyles.descH1}>Beyond The Battle Royale</h1>
                <p style={AppStyles.descP}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repudiandae sequi hic repellat, repellendus corporis error dolore facere eaque minima quis ducimus porro ratione quasi omnis numquam molestiae aspernatur sint. Voluptas facilis hic quaerat ipsum consequatur quis qui necessitatibus voluptate.
                </p>
                <a href="#" className="button-banner" style={AppStyles.buttonBanner}>See The Modes</a>
            </div>
        </div>
      </section>

      <section className="invisible-card" style={AppStyles.invisibleCard}>
        <div className="inv-card" style={AppStyles.invCard}>
            <img src={Card1} alt="Card 1" style={AppStyles.invCardImg} />
            <h1 style={AppStyles.invCardH1}>Strategic Squad Play</h1>
            <p style={AppStyles.invCardP}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia est enim quibusdam similique veniam. Impedit ea aliquam corporis hic laboriosam excepturi. Omnis autem consequatur veritatis nihil modi minus dolore voluptate?
            </p>
        </div>
        <div className="inv-card" style={AppStyles.invCard}>
            <img src={Card2} alt="Card 2" style={AppStyles.invCardImg} />
            <h1 style={AppStyles.invCardH1}>Strategic Squad Play</h1>
            <p style={AppStyles.invCardP}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia est enim quibusdam similique veniam. Impedit ea aliquam corporis hic laboriosam excepturi. Omnis autem consequatur veritatis nihil modi minus dolore voluptate?
            </p>
        </div>
        <div className="inv-card" style={AppStyles.invCard}>
            <img src={Card3} alt="Card 3" style={AppStyles.invCardImg} />
            <h1 style={AppStyles.invCardH1}>Strategic Squad Play</h1>
            <p style={AppStyles.invCardP}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia est enim quibusdam similique veniam. Impedit ea aliquam corporis hic laboriosam excepturi. Omnis autem consequatur veritatis nihil modi minus dolore voluptate?
            </p>
        </div>
      </section>
    </>
  );
}

export default About;
