import React from "react"
import "../css/index.css"

import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => (

    <div className="footer-area">
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <span>Copyright © 2020 Cartório Gustavo Pinto</span>
                            </div>
                            <div className="col-lg-6 col-12">
                                <ul className="d-flex">
                                    <li><a href="/#"><i className="fa fa-facebook" ></i></a></li>
                                    <li><a href="/#"><i className="fa fa-twitter" ></i></a></li>
                                    <li><a href="/#"><i className="fa fa-linkedin" ></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)

export default Footer
