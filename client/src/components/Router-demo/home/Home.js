// import React, { useState } from 'react';
// import './Home.css';
// import Login from '../login/Login';
// import Register from '../register/Register';
// import Achievements from '../achievements/Achievements';

// function Home() {
//     const [isLogin, setIsLogin] = useState(true);

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//     };

//     return (
//         <div className='home-container' id='about'>
//             <div className='hero-section'>
//                 <div className='container text-center'>
//                     <div className='hero-overlay'>
//                         <h1 className='hero-title'>Faculty Achievements Portal</h1>
//                         <p className='hero-subtitle'>Showcasing Excellence and Achievements</p>
                        
//                     </div>
//                 </div>
//             </div>
//             <div className='content container'>
//             <div className='main-login'>
//                             <div className='form-switch'>
//                                 <button 
//                                     className={`form-toggle-btn ${isLogin ? 'active' : ''}`} 
//                                     onClick={() => setIsLogin(true)}
//                                 >
//                                     Login
//                                 </button>
//                                 <button 
//                                     className={`form-toggle-btn ${!isLogin ? 'active' : ''}`} 
//                                     onClick={() => setIsLogin(false)}
//                                 >
//                                     Register
//                                 </button>
//                             </div>
//                             {isLogin ? <Login /> : <Register />}
//                         </div>
//                 <section  className='intro py-5'>
//                 <h1 className='about-title text-center'>About</h1>
//                     <p className='description'>
//                         The Faculty Achievement Portal is an online platform designed to showcase and recognize the professional accomplishments of faculty members within our academic institution. This portal serves as a comprehensive repository of achievements, fostering a culture of excellence and continuous improvement.
//                     </p>
//                 </section>
//                 <section id='features' className='features py-5'>
//                     <h2 className='features-title text-center'>Key Features</h2>
//                     <div className='row'>
//                         <div className='col-md-4'>
//                             <div className='feature-box'>
//                                 <h4>Detailed Profiles</h4>
//                                 <p>Comprehensive profiles highlighting individual faculty achievements and contributions.</p>
//                             </div>
//                         </div>
//                         <div className='col-md-4'>
//                             <div className='feature-box'>
//                                 <h4>Achievement Highlights</h4>
//                                 <p>Showcasing significant accomplishments and milestones.</p>
//                             </div>
//                         </div>
//                         <div className='col-md-4'>
//                             <div className='feature-box'>
//                                 <h4>Search and Filter</h4>
//                                 <p>Easy access to specific achievements through search and filter options.</p>
//                             </div>
//                         </div>
//                         <div className='col-md-4'>
//                             <div className='feature-box'>
//                                 <h4>Interactive Dashboards</h4>
//                                 <p>Visual representation of data and achievements.</p>
//                             </div>
//                         </div>
//                         <div className='col-md-4'>
//                             <div className='feature-box'>
//                                 <h4>Secure Submissions</h4>
//                                 <p>Ensuring the integrity and confidentiality of submitted information.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section id='benefits' className='benefits py-5'>
//                     <h2 className='benefits-title text-center'>Benefits</h2>
//                     <p className='benefits-description'>
//                         The portal enhances motivation and morale by celebrating success, promotes transparency and accountability with clear record-keeping, and fosters collaboration and networking opportunities. It also bolsters the institution’s reputation by highlighting faculty strengths, aids in professional development by documenting career progress, and serves as a valuable resource for performance reviews and promotions.
//                     </p>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default Home;



import React, { useState } from 'react';
import './Home.css';
import Login from '../login/Login';
import Register from '../register/Register';
import NavigationBar from '../navigationbar/NavigationBar';
import { Element } from 'react-scroll';

function Home() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='home-container'>
            <NavigationBar />
            <div className='content'>
                <div className='hero-section' id='about'>
                    <video className='hero-video' autoPlay muted loop>
                        <source src="https://vnrvjiet.ac.in/assets/images/Website Hero Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className='hero-overlay'>
                        <h1 className='hero-title'>Faculty Achievements Portal</h1>
                        <p className='hero-subtitle'>Showcasing Excellence and Achievements</p>
                    </div>
                </div>
                <div className='main-content container'>
                    <div className='gap'></div>
                    <div className='form-switch'>
                        <button 
                            className={`form-toggle-btn ${isLogin ? 'active' : ''}`} 
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button 
                            className={`form-toggle-btn ${!isLogin ? 'active' : ''}`} 
                            onClick={() => setIsLogin(false)}
                        >
                            Register
                        </button>
                    </div>
                    <div className='gap'></div>
                    <div className='form-container'>
                        {isLogin ? <Login /> : <Register />}
                    </div>
                    <div className='gap'></div>
                    <div className='about-card'>
                        <Element name="about" className='intro py-5'>
                            <h1 className='about-title text-center'>About</h1>
                            <p className='description'>
                                The Faculty Achievement Portal is an online platform designed to showcase and recognize the professional accomplishments of faculty members within our academic institution. This portal serves as a comprehensive repository of achievements, fostering a culture of excellence and continuous improvement.
                            </p>
                        </Element>
                    </div>
                    <div className='gap'></div>
                    <Element name="features" className='features py-5'>
                        <h2 className='features-title text-center'>Key Features</h2>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='feature-box'>
                                    <h4 className='textcontent'>Detailed Profiles</h4>
                                    <p className='textcontent'>Comprehensive profiles highlighting individual faculty achievements and contributions.</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature-box'>
                                    <h4 className='textcontent'>Achievement Highlights</h4>
                                    <p className='textcontent'>Showcasing significant accomplishments and milestones.</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature-box'>
                                    <h4 className='textcontent'>Search and Filter</h4>
                                    <p className='textcontent'>Easy access to specific achievements through search and filter options.</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature-box'>
                                    <h4 className='textcontent'>Interactive Dashboards</h4>
                                    <p className='textcontent'>Visual representation of data and achievements.</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature-box'>
                                    <h4 className='textcontent'>Secure Submissions</h4>
                                    <p className='textcontent'>Ensuring the integrity and confidentiality of submitted information.</p>
                                </div>
                            </div>
                        </div>
                    </Element>
                    <div className='gap'></div>
                    <div className='about-card'>
                        <Element name="benefits" className='intro py-5'>
                            <h2 className='about-title text-center'>Benefits</h2>
                            <p className='description'>
                                The portal enhances motivation and morale by celebrating success, promotes transparency and accountability with clear record-keeping, and fosters collaboration and networking opportunities. It also bolsters the institution’s reputation by highlighting faculty strengths, aids in professional development by documenting career progress, and serves as a valuable resource for performance reviews and promotions.
                            </p>
                        </Element>
                    </div>
                    <div className='gap'></div>
                </div>


                <footer className="footer-sec">
            <div className="footer-content">
                <div className="footer-left">
                    <img
                        src="https://vnrvjiet.ac.in/assets/images/Footer Logo.png"
                        alt="VNRVJIET Logo"
                        className="footer-logo"
                    />
                    <div >
                        <h3 className="address-title">Address</h3>
                        <p >
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
                        <div className="footer-icons">
                            <a
                                href="https://www.facebook.com/profile.php?id=100064949286608"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/vnrvjiet.hyd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://twitter.com/vnrvjiethyd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/school/vnrvjiethyd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/@vnrvjiethyd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
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
                            {/* <a
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
                            </a> */}
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
                            {/* <a href="#">Events</a>
                            <a href="#">ICT</a> */}
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
        
            </div>
        </div>
    );
}

export default Home;








