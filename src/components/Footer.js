import React from "react"
import "../css/index.css"
import 'font-awesome/css/font-awesome.min.css';


import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => (

    <div className="footer-area">
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <span>Copyright © 2020 Cartório Gustavo Pinto</span>
                                <br></br>
                                <br></br>
                                <span>By <a href="http://versatil-contexto.pt" target="_blank" rel="noopener noreferrer">Versátil Contexto</a></span>
                            </div>
                            <div className="col-lg-6 col-12">
                                <ul className="d-flex">
                                    <li><a href="https://fb.me/cngustavopessoapinto" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" ></i></a></li>
                                    <li><a href="https://linkedin.com/in/gustavo-pessoa-pinto-notário-3508aa1a0" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" ></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)

export default Footer
