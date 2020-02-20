import React from "react"
import { Trans } from 'react-i18next';

import "../css/index.css"
import 'bootstrap/dist/css/bootstrap.css';
import '../css/flaticon.css';

const Main = () => (

    <div className="Main">
        <div className="service-area service-area2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-3 icon-c">
                                    <div className="service-icon">
                                        <i className="fi flaticon-lawyer" alt="lawyer">
                                        </i>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div className="service-text">
                                        <span>Marque a sua</span>
                                        <h3>Consulta!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-3 icon-c">
                                    <div className="service-icon">
                                        <i className="fi flaticon-scale" alt="law">
                                        </i>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div className="service-text">
                                        <span>Obtenha aconselhamento</span>
                                        <h3>Especializado!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-3 icon-c">
                                    <div className="service-icon">
                                        <i className="fi flaticon-network" alt="meeting">
                                        </i>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div className="service-text">
                                        <span>Conheça</span>
                                        <h3>A Nossa equipa!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="about-area about-area2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-text">
                            <h2>autenticidade e fé pública, segurança jurídica e força executiva dos atos jurídicos extrajudiciais</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="practice-area practice-area2 practice-area-3">
    <div className="container">
        <div className="col-l2">
            <div className="section-title text-center">
                <span>Área de serviços</span>
                <h2><Trans i18nKey="HowCanWe">How Can We Help You</Trans></h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-parents" alt="employees">
                            </i>
                        </div>
                  
                        <div className="service-text">
                            <h3>Entre na nossa equipa!</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-wounded" alt="accident">
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Acidente com Lesão pessoal</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-employee" alt="employee">
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Direitos empresariais</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-thief" alt="thief">
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Lei Criminal</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-university-graduate-hat" alt="university">
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Lei da Educação</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-house" alt="home">
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Direito imobiliário</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
)

export default Main
