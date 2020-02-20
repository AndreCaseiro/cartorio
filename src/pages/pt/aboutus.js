import React from "react"

import SEO from "../../components/seo"
import Header from "../../components/header"
import MainAboutus from "../../components/MainAboutus"
import Footer from "../../components/Footer"

import 'bootstrap/dist/css/bootstrap.css';

const aboutus = () => (
  <div className="CartorioGustavoPinto">
    <Header/>
      <SEO title="Cartório Gustavo Pinto" />
      <MainAboutus/>
      <Footer/>
    </div>
)

export default aboutus
