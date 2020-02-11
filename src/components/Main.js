import React from "react"
import { Trans } from 'react-i18next';

import "../css/index.css"
import 'bootstrap/dist/css/bootstrap.css';
import lawyer from "../images/lawyer.png";
import law from "../images/law.png";
import meeting from "../images/meeting.png";
import accident from "../images/accident.png";
import employee from "../images/employee.png";
import employees from "../images/employees.png";
import home from "../images/home.png";
import thief from "../images/thief.png";
import university from "../images/university.png";

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
                                        <i className="fi flaticon-lawyer">
                                            <img src={lawyer} alt="lawyer"></img>
                                        </i>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div className="service-text">
                                        <span>Book Your</span>
                                        <h3>Appointment</h3>
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
                                        <i className="fi flaticon-scale">
                                            <img src={law} alt="law"></img>
                                        </i>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div className="service-text">
                                        <span>Get Free</span>
                                        <h3>Expert Advice</h3>
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
                                        <i className="fi flaticon-network">
                                            <img src={meeting} alt="meeting"></img>
                                        </i>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div className="service-text">
                                        <span>You Can Easily</span>
                                        <h3>Join Our Team</h3>
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
                <span>Area Of Practice</span>
                <h2><Trans i18nKey="HowCanWe">How Can We Help You</Trans></h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-parents">
                                <img className="MainIcons" src={employees} alt="employees"></img>
                            </i>
                        </div>
                  
                        <div className="service-text">
                            <h3>Join Our Team</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-wounded">
                                <img className="MainIcons" src={accident} alt="accident"></img>
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Personal Injury</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-employee">
                                <img className="MainIcons" src={employee} alt="employee"></img>
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Business Law</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-thief">
                                <img className="MainIcons" src={thief} alt="thief"></img>
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Criminal Law</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-university-graduate-hat">
                                <img className="MainIcons" src={university} alt="university"></img>
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Education Law</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="row">
                        <div className="service-icon">
                            <i className="fi flaticon-house">
                                <img className="MainIcons" src={home} alt="home"></img>
                            </i>
                        </div>
                        <div className="service-text">
                            <h3>Real Estate Law</h3>
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
