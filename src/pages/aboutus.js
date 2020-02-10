import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"

import 'bootstrap/dist/css/bootstrap.css';
import MainAboutus from "../components/MainAboutus";
import Footer from "../components/Footer";

const aboutus = () => (
  <div className="CartorioGustavoPinto">
    <Header></Header>
      <SEO title="Cartório Gustavo Pinto" />
      <MainAboutus></MainAboutus>
      <Footer></Footer>
    </div>
)

export default aboutus
