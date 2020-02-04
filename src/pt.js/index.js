import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Main from "../components/Main"
import Footer from "../components/Footer"

import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => (
  <div className="CartorioGustavoPinto">
    <Header></Header>
      <SEO title="Cartório Gustavo Pinto" />
      <Main></Main>
      <Footer></Footer>
    </div>
)

export default IndexPage
