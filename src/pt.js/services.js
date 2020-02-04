import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/Footer";
import Mainservices from "../components/Mainservices"

import "../css/index.css"
import 'bootstrap/dist/css/bootstrap.css';


const services = () => (
  <div className="CartorioGustavoPinto">
    <Header></Header>
      <SEO title="Cartório Gustavo Pinto" />
      <Mainservices></Mainservices>
      <Footer></Footer>
    </div>
)

export default services
