import React from "react"

import SEO from "../../components/seo"
import Header from "../../components/header"
import MainContacts from "../../components/MainContacts"
import Footer from "../../components/Footer"

import 'bootstrap/dist/css/bootstrap.css';

const contacts = () => (
  <div className="CartorioGustavoPinto">
    <Header/>
      <SEO title="Cartório Gustavo Pinto" />
      <MainContacts/>
      <Footer/>
    </div>
)

export default contacts
