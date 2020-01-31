import React from "react"
import "../css/index.css"

import 'bootstrap/dist/css/bootstrap.css';
import background from "../images/background.jpg"
import test from "../images/gatsby-icon.png"

const sectionStyle = {
	backgroundImage: `url(${background})`,
	backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: `600px`,
}

const Header = () => (
  <div className="header">
      <section className="header-area" style={sectionStyle}>
      <div className="container">
      <header class="header-style-3">
            <div class="header-area header-area2 header-area-3">
                <div class="header-shot">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-10 col-sm-10 col-8 text-center">
                                <div class="logo">
                                    <a ui-sref="main" href="/"><img src={test} alt="" width="25%"></img></a>
                                </div>
                            </div>
                            <div class="col-lg-8 d-none d-lg-block">
                                <div class="main-menu">
                                    <nav class="nav_mobile_menu">
                                        <ul>
                                            <li><a ui-sref="aboutus" ui-sref-active="active" href="/aboutus" class="">O notário e a função notarial</a></li>
                                            <li><a ui-sref="services" ui-sref-active="active" href="/services">Serviços Prestados</a></li>
                                            <li><a ui-sref="contacts" ui-sref-active="active" href="/contacts">Contactos</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-12 d-block d-lg-none">
                                <div class="mobile_menu">
                                    <div class="slicknav_menu">
                                        <a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed">
                                            <span class="slicknav_menutxt">MENU</span>
                                            <span class="slicknav_icon">
                                                <span class="slicknav_icon-bar"></span>
                                                <span class="slicknav_icon-bar"></span>
                                                <span class="slicknav_icon-bar"></span>
                                            </span>
                                        </a>
                                        <nav class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu">
                                            <ul>
                                                <li><a ui-sref="aboutus" ui-sref-active="active" href="#!/aboutus" class="">O notário e a função notarial</a></li>
                                                <li><a ui-sref="services" ui-sref-active="active" href="#!/services">Serviços Prestados</a></li>
                                                <li><a ui-sref="contacts" ui-sref-active="active" href="#!/contacts">Contactos</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</div>
      </section>

      </div>
)

export default Header
