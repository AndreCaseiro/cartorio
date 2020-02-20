import React from "react"

import SEO from "../../components/seo"
import Header from "../../components/header"
import MainServices from "../../components/Mainservices"
import Footer from "../../components/Footer"

import 'bootstrap/dist/css/bootstrap.css';

const services = () => (
  <div className="CartorioGustavoPinto">
    <Header/>
      <SEO title="Cartório Gustavo Pinto" />
      <MainServices/>
      <Footer/>
    </div>
)

export default services
