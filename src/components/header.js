import React, {Component} from "react"
import { withRouter } from 'react-router-dom';

import "../css/index.css"
import 'bootstrap/dist/css/bootstrap.css';

import logo from "../images/logo.jpg"
import background from "../images/background.jpg"

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

import { withTranslation, Trans } from 'react-i18next';
import "./../i18n";



const sectionStyle = {
	backgroundImage: `url(${background})`,
	backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: `600px`,
}

class Header extends Component{
    state={
        aa: ".."
    }

    changeCountry = (lang) => {
        console.log(lang.toLowerCase());
        this.props.i18n.changeLanguage(lang.toLowerCase());
        this.props.history.replace('/'+lang.toLowerCase()+this.props.location.pathname.substring(3));   
        window.location.reload();
    }

render(){

    const route= this.props.location.pathname.substring(1,3) ? this.props.location.pathname.substring(1,3) : "pt";
    return(

    <div className="header">
        <section className="header-area" style={sectionStyle}>
        <div className="container">
        <header className="header-style-3">
            <div className="header-area header-area2 header-area-3">
                <div className="header-shot">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-10 col-sm-10 col-8 text-center">
                                <div className="logo">
                                    <a ui-sref="main" href="/"><img src={logo} alt="" width="25%"></img></a>
                                </div>
                            </div>
                                <div className="main-menu">
                                    <nav className="nav_mobile_menu">
                                        <ul>
                                            <li><a ui-sref="aboutus" ui-sref-active="active" href="/aboutus" className=""><Trans i18nKey="Aboutus">O notário e a função notarial</Trans></a></li>
                                            <li><a ui-sref="services" ui-sref-active="active" href="/services">Serviços Prestados</a></li>
                                            <li><a ui-sref="contacts" ui-sref-active="active" href="/contacts">Contactos</a></li>
                                            <li><ReactFlagsSelect className="flags" defaultCountry={route.toUpperCase()} countries={["ES", "GB", "FR", "PT"]} showSelectedLabel={false} showOptionLabel={false} onSelect={(lang) => this.changeCountry(lang)} />
                                            </li>
                                        </ul>
                                    </nav>
                            </div>
                            <div className="col-12 d-block d-lg-none">
                                <div className="mobile_menu">
                                    <div className="slicknav_menu">

                                        <a href="/" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed">
                                            <span className="slicknav_menutxt">MENU</span>
                                            <span className="slicknav_icon">
                                                <span className="slicknav_icon-bar"></span>
                                                <span className="slicknav_icon-bar"></span>
                                                <span className="slicknav_icon-bar"></span>
                                            </span>
                                        </a>
                                        <nav className="slicknav_nav slicknav_hidden" aria-hidden="true">
                                            <ul>
                                                <li><a ui-sref="aboutus" ui-sref-active="active" href="/aboutus" className="">O notário e a função notarial</a></li>
                                                <li><a ui-sref="services" ui-sref-active="active" href="/services">Serviços Prestados</a></li>
                                                <li><a ui-sref="contacts" ui-sref-active="active" href="/contacts">Contactos</a></li>
                                                <li>
                                                    <ReactFlagsSelect className="flags"
                                                        defaultCountry={route.toUpperCase()}
                                                        countries={["ES", "GB", "FR", "PT"]}
                                                        showSelectedLabel={false}
                                                        showOptionLabel={false}
                                                        onSelect={(lang) => this.changeCountry(lang)}
                                                            />
                                                </li>
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
);
}
}

export default withTranslation('translation')(withRouter(Header));