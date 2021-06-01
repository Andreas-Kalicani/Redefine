import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content container-thin">
                <div className="footer-blurb">
                    <h5 className="footer-blurb-title title title-xs">Okay, so is it a bird,then?</h5>
                    <p>
                        We can help you seize new business opportunities and new growth potential. 
                        We add real value and we are told that we are a breeze to work with.
                    </p>
                </div>

                <address className="footer-address">
                    <LocationOnIcon></LocationOnIcon>
                    <br/>
                    IS IT A BIRD
                    <br/>
                    Trekronergade 149C
                    <br/>
                    2500 Valby, Copenhagen
                    <br/>
                    Denmark
                    <br/>
                    <br/>
                    CIF B8694340
                    <br/>
                    Maps
                    <br/>
                    Privacy Policy
                </address>

                <div className="footer-contact">
                    <div className="footer-contact-details">
                        <br/>
                        <b>projects</b>@isitabird.dk
                        <br/>
                        +45 60 29 30 29
                        <br/>
                        <br/>
                        <b>admin</b>@isitabird.dk
                        <br/>
                        +45 60 29 30 29
                        <br/>
                        <br/>
                        <b>job</b>@isitabird.dk
                        <br/>
                        +45 60 29 30 29
                    </div>
                </div>

                <div className="footer-contact-signup">
                    <p>Sign up to receive invitations to our talks and get the latest on innovation.</p>
                    <div className="form">
                        <input 
                            type="text"
                            className="newsletter form-email"
                            placeholder="Enter your email"
                        />
                        <button className="form-button"></button>
                    </div>
                    <div className="icons">
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
