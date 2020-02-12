import React from "react"

import SEO from "../../components/seo"
import Header from "../../components/header"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const contacts = () => (
  <Router>
  <div className="CartorioGustavoPinto">
    <Header/>
      <SEO title="Cartório Gustavo Pinto" />
      <Main/>
      <Footer/>
    </div>
    </Router>
)

export default contacts
