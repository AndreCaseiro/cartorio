import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/Footer";

import "../css/index.css"
import 'bootstrap/dist/css/bootstrap.css';
import Maincontacts from "../components/MainContacts";


const services = () => (
  <div className="CartorioGustavoPinto">
    <Header></Header>
      <SEO title="Cartório Gustavo Pinto" />
      <Maincontacts></Maincontacts>
      <Footer></Footer>
    </div>
)

export default services
