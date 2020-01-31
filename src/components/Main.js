import React from "react"

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
        <div class="service-area service-area2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-3 icon-c">
                                    <div class="service-icon">
                                        <i class="fi flaticon-lawyer">
                                            <img src={lawyer}></img>
                                        </i>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div class="service-text">
                                        <span>Book Your</span>
                                        <h3>Appointment</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-3 icon-c">
                                    <div class="service-icon">
                                        <i class="fi flaticon-scale">
                                            <img src={law}></img>
                                        </i>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div class="service-text">
                                        <span>Get Free</span>
                                        <h3>Expert Advice</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-3 icon-c">
                                    <div class="service-icon">
                                        <i class="fi flaticon-network">
                                            <img src={meeting}></img>
                                        </i>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div class="service-text">
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
                <div class="about-area about-area2 section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about-text">
                            <h2>autenticidade e fé pública, segurança jurídica e força executiva dos atos jurídicos extrajudiciais</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="practice-area practice-area2 practice-area-3">
    <div class="container">
        <div class="col-l2">
            <div class="section-title text-center">
                <span>Area Of Practice</span>
                <h2>How Can We Help You</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="service-item">
                    <div class="row">
                        <div class="service-icon">
                            <i class="fi flaticon-parents">
                                <img className="MainIcons" src={employees}></img>
                            </i>
                        </div>
                  
                        <div class="service-text">
                            <h3>Join Our Team</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="service-item">
                    <div class="row">
                        <div class="service-icon">
                            <i class="fi flaticon-wounded">
                                <img className="MainIcons" src={accident}></img>
                            </i>
                        </div>
                        <div class="service-text">
                            <h3>Personal Injury</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="service-item">
                    <div class="row">
                        <div class="service-icon">
                            <i class="fi flaticon-employee">
                                <img className="MainIcons" src={employee}></img>
                            </i>
                        </div>
                        <div class="service-text">
                            <h3>Business Law</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="service-item">
                    <div class="row">
                        <div class="service-icon">
                            <i class="fi flaticon-thief">
                                <img className="MainIcons" src={thief}></img>
                            </i>
                        </div>
                        <div class="service-text">
                            <h3>Criminal Law</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="service-item">
                    <div class="row">
                        <div class="service-icon">
                            <i class="fi flaticon-university-graduate-hat">
                                <img className="MainIcons" src={university}></img>
                            </i>
                        </div>
                        <div class="service-text">
                            <h3>Education Law</h3>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="service-item">
                    <div class="row">
                        <div class="service-icon">
                            <i class="fi flaticon-house">
                                <img className="MainIcons" src={home}></img>
                            </i>
                        </div>
                        <div class="service-text">
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
