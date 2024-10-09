import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../src/index.css";
import "../../src/blogs.css";
import "../../src/App.css";
import Logo from '../assets/favicon.png'
import Favicon from "../assets/favicon_com.png";
import Head from "./Head";
import Footer from "./Footer";
import Nav from './Nav'

function Layout() {
  return (
    <>
        <Head/>

        <Nav/>
        <Outlet/>
        <Footer/>

    </>
  );
}

export default Layout;
