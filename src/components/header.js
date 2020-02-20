import React, { Component } from 'react';

import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../i18n';
import 'react-flags-select/css/react-flags-select.css';

import ReactFlagsSelect from 'react-flags-select';
import { withTranslation, Trans } from 'react-i18next';
import logo from '../images/logo.jpg';
import { slide as Menu } from 'react-burger-menu'


class Header extends Component {
    state = {
        country: 'pt',
        area: 'home',
    }

    componentDidMount() {
        const { location: { pathname } } = window;
        const country = pathname.substring(1, 3) ? pathname.substring(1, 3) : 'pt';
        const area = pathname.length >= 4 ? pathname.substring(4, pathname.length -1) : 'home';
        this.setState({ country });
        this.setState({ area });
    }

    changeCountry = (lang) => {
        const country = lang.toLowerCase();
        const { pathname } = window.location;
        this.props.i18n.changeLanguage(country);
        window.location.replace(`/${country}${pathname.substring(3)}`);
        this.setState({ country });
    }
    render() {
      const {
        state: {
          country,
        },
        changeCountry,
      } = this;
      const CountrySelector = () => (
        <ReactFlagsSelect
          className="flags"
          defaultCountry={country.toUpperCase()}
          countries={['ES', 'GB', 'FR', 'PT']}
          showSelectedLabel={false}
          showOptionLabel={false}
          onSelect={(lang) => changeCountry(lang)}
        />
      );

      const services = {
        backgroundImage: `url('/images/${this.state.area}.jpg')`,
        backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          minHeight: '600px',
      }

      return (

        <div className="header">
          <section className="header-area" style={services}>
            <div className="container">
              <header className="header-style-3">
                <div className="header-area header-area2 header-area-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-10 text-center logo-header">
                            <div className="logo">
                                <a ui-sref="main" href="/"><img src={logo} alt="logo" width="100px" /></a>
                              </div>
                          </div>
                        <div className="main-menu">
                            <nav className="nav_mobile_menu">
                                <ul>
                                    <li><a ui-sref="aboutus" ui-sref-active="active" href={`/${country}/aboutus`} className=""><Trans i18nKey="Aboutus">O notário e a função notarial</Trans></a></li>
                                    <li><a ui-sref="services" ui-sref-active="active" href={`/${country}/services`}><Trans i18nKey="services">Serviços Prestados</Trans></a></li>
                                    <li><a ui-sref="contacts" ui-sref-active="active" href={`/${country}/contacts`}><Trans i18nKey="contacts">Contactos</Trans></a></li>
                                    <li><CountrySelector /></li>
                                </ul>
                              </nav>
                          </div>
                      </div>
                      <Menu>
                        <ul>
                            <li><a ui-sref="aboutus" ui-sref-active="active" href={`/${country}/aboutus`} className=""><Trans i18nKey="Aboutus">O notário e a função notarial</Trans></a></li>
                            <li><a ui-sref="services" ui-sref-active="active" href={`/${country}/services`}><Trans i18nKey="services">Serviços Prestados</Trans></a></li>
                            <li><a ui-sref="contacts" ui-sref-active="active" href={`/${country}/contacts`}><Trans i18nKey="contacts">Contactos</Trans></a></li>
                            <li><CountrySelector /></li>
                          </ul>
                      </Menu>
                  </div>
                </div>
              </header>
            </div>
          </section>
        </div>
      );
    }
}

export default withTranslation('translation')((Header));
