import React from "react"

import "../css/index.css"
import 'bootstrap/dist/css/bootstrap.css';

const Maincontacts = () => (

    <div className="Main">
            <div class="contact-page-area section-padding">
   <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-12">
                <div class="contact-page-item">
                    <h2>Our Contacts</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <div class="adress">
                        <h3>Address</h3>
                        <span>245 King Street, Touterie Victoria 8520 Australia</span>
                    </div>
                    <div class="phone">
                        <h3>Phone</h3>
                        <span>0-123-456-7890</span>
                        <span>0-123-456-7890</span>
                    </div>
                    <div class="email">
                        <h3>Email</h3>
                        <span>sample@gmail.com</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-12">
                <div class="contact-area contact-area-2 contact-area-3">
                    <h2>Quick Contact Form</h2>
                    <div class="contact-form">
                        <form method="post" class="contact-validation-active ng-pristine ng-valid" id="contact-form">
                            <div class="half-col">
                                <input type="text" name="name" id="name" class="form-control" placeholder="Your Name"></input>
                            </div>
                            <div class="half-col">
                                <input type="email" name="email" id="email" class="form-control" placeholder="Your Email"></input>
                            </div>
                            <div class="half-col">
                                <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone"></input>
                            </div>
                            <div class="half-col">
                                <input type="text" name="address" id="address" class="form-control" placeholder="Address"></input>
                            </div>
                            <div>
                                <textarea class="form-control" name="note" id="note" placeholder="Case Description..."></textarea>
                            </div>
                            <div class="submit-btn-wrapper">
                                <button type="submit" class="theme-btn-s3">Appointment</button>
                                <div id="loader">
                                    <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                </div>
                            </div>
                            <div class="clearfix error-handling-messages">
                                <div id="success">Thank you</div>
                                <div id="error"> Error occurred while sending email. Please try again later. </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col col-xs-12">
                <div class="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
       </div>
)

export default Maincontacts
