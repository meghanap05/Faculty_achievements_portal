import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <footer className="footer-sec">
            <div className="footer-content">
                <div className="footer-left">
                    <img
                        src="https://vnrvjiet.ac.in/assets/images/Footer Logo.png"
                        alt="VNRVJIET Logo"
                        className="footer-logo"
                    />
                    <div className="footer-address">
                        <h3 className="address-title">Address</h3>
                        <p>
                            Vignana Jyothi Nagar, Pragathi Nagar, Nizampet (S.O), Hyderabad,
                            Telangana, India - 500 090
                        </p>
                        <a
                            className="gd-btn"
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Directions
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <div className="contact-info">
                            <p>Ph. No. : 91-040-230427 58/59/60</p>
                            <p>Fax : 91-040-23042761</p>
                            <p>E-mail : postbox@vnrvjiet.ac.in</p>
                        </div>
                    </div>
                    <div className="footer-icons">
                        <a
                            href="https://www.facebook.com/profile.php?id=100064949286608"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/vnrvjiet.hyd/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://twitter.com/vnrvjiethyd"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/school/vnrvjiethyd/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/@vnrvjiethyd"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-links">
                        <h2 className="footer-links-title">Approvals and Accreditations</h2>
                        <div className="departments-links">
                            <a href="#">AICTE Approvals</a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                NBA
                            </a>
                            <a href="#">
                                Minutes of Statutory Bodies
                            </a>
                            <a href="#">
                                AICTE Mandatory Disclosure
                            </a>
                            <a href="#">NAAC</a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                DAP-DATA-JNTUH
                            </a>
                            <a href="#">
                                Accreditation Status
                            </a>
                            <a href="#">NIRF</a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                JNTUH-Principal and Faculty details
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                JNTUH Affiliation Order 2023-24
                            </a>
                            <a href="#">ARIIA Report</a>
                            <a href="#">TEQIP-II Activities</a>
                            <a href="#">UGC Undertaking</a>
                            <a href="#">
                                QS I-Guage Rating
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SSR Cycle - 3
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h2 className="footer-links-title">Spotlight</h2>
                        <div className="departments-links">
                            <a href="#">Fee Payment</a>
                            <a href="#">Academic Regulations</a>
                            <a href="#">Examination Cell</a>
                            <a href="#">Alumni</a>
                            <a href="#">Circulars &amp; Notices</a>
                            <a href="#">Media</a>
                            <a href="#">Hostel</a>
                            <a href="#">Training &amp; Placement</a>
                            <a href="#">Events</a>
                            <a href="#">ICT</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="copyright-text">
                    &copy; 1995-22 VNRVJIET. All Rights Reserved
                </p>
                <div className="bottom-right">
                    <p className="sl-credit">
                        Made with Love <span>Socialight</span>
                    </p>
                    <p>
                        Careers | Disclaimer | Privacy Policy | Sitemap |{' '}
                        <a
                            href="#"
                            style={{ color: '#ffffff' }}
                        >
                            Screen Reader
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


// import React from 'react';
// import './Footer.css';
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

// function Footer() {
//     return (
//         <footer className="footer-sec">
//             <div className="footer-content">
//                 <div className="footer-left">
//                     <img
//                         src="https://vnrvjiet.ac.in/assets/images/Footer Logo.png"
//                         alt="VNRVJIET Logo"
//                         className="footer-logo"
//                     />
//                     <div className="footer-address">
//                         <h3 className="address-title">Address</h3>
//                         <p>
//                             Vignana Jyothi Nagar, Pragathi Nagar, Nizampet (S.O), Hyderabad,
//                             Telangana, India - 500 090
//                         </p>
//                         <a
//                             className="gd-btn"
//                             href="/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Get Directions
//                             <i className="fa-solid fa-arrow-up-right-from-square"></i>
//                         </a>
//                         <div className="contact-info">
//                             <p>Ph. No. : 91-040-230427 58/59/60</p>
//                             <p>Fax : 91-040-23042761</p>
//                             <p>E-mail : postbox@vnrvjiet.ac.in</p>
//                         </div>
//                     </div>
//                     <div className="footer-icons">
//                         <a
//                             href="https://www.facebook.com/profile.php?id=100064949286608"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaFacebookF />
//                         </a>
//                         <a
//                             href="https://www.instagram.com/vnrvjiet.hyd/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaInstagram />
//                         </a>
//                         <a
//                             href="https://twitter.com/vnrvjiethyd"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaTwitter />
//                         </a>
//                         <a
//                             href="https://www.linkedin.com/school/vnrvjiethyd/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaLinkedin />
//                         </a>
//                         <a
//                             href="https://www.youtube.com/@vnrvjiethyd"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaYoutube />
//                         </a>
//                     </div>
//                 </div>
//                 <div className="footer-right">
//                     <div className="footer-links">
//                         <h2 className="footer-links-title">Approvals and Accreditations</h2>
//                         <div className="departments-links">
//                             <a href="#">AICTE Approvals</a>
//                             <a
//                                 href="#"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 NBA
//                             </a>
//                             <a href="#">
//                                 Minutes of Statutory Bodies
//                             </a>
//                             <a href="#">
//                                 AICTE Mandatory Disclosure
//                             </a>
//                             <a href="#">NAAC</a>
//                             <a
//                                 href="#"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 DAP-DATA-JNTUH
//                             </a>
//                             <a href="#">
//                                 Accreditation Status
//                             </a>
//                             <a href="#">NIRF</a>
//                             <a
//                                 href="#"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 JNTUH-Principal and Faculty details
//                             </a>
//                             <a
//                                 href="#"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 JNTUH Affiliation Order 2023-24
//                             </a>
//                             <a href="#">ARIIA Report</a>
//                             <a href="#">TEQIP-II Activities</a>
//                             <a href="#">UGC Undertaking</a>
//                             <a href="#">
//                                 QS I-Guage Rating
//                             </a>
//                             <a
//                                 href="/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 SSR Cycle - 3
//                             </a>
//                         </div>
//                     </div>
//                     <div className="footer-links">
//                         <h2 className="footer-links-title">Spotlight</h2>
//                         <div className="departments-links">
//                             <a href="#">Fee Payment</a>
//                             <a href="#">Academic Regulations</a>
//                             <a href="#">Examination Cell</a>
//                             <a href="#">Alumni</a>
//                             <a href="#">Circulars &amp; Notices</a>
//                             <a href="#">Media</a>
//                             <a href="#">Hostel</a>
//                             <a href="#">Training &amp; Placement</a>
//                             <a href="#">Events</a>
//                             <a href="#">ICT</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//                 <p className="copyright-text">
//                     &copy; 1995-22 VNRVJIET. All Rights Reserved
//                 </p>
//                 <div className="bottom-right">
//                     <p className="sl-credit">
//                         Made with Love <span>Socialight</span>
//                     </p>
//                     <p>
//                         Careers | Disclaimer | Privacy Policy | Sitemap |{' '}
//                         <a
//                             href="#"
//                             style={{ color: '#ffffff' }}
//                         >
//                             Screen Reader
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
