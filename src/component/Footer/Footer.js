import React from 'react'
import "./Footer.css"
import { MdLocationOn, MdCall, MdEmail, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { RiExternalLinkLine } from "react-icons/ri"
function Footer() {
    return (
        <div className='footer-image' id="contact">
            <div className='container'>
                <div className='row d-flex justify-content-center pt-5'>
                    <div className='col-12'>
                        <div href="#home" className='logobrand text-white'>
                            Maryam Mahmood<br />
                            <span className=' col-4 arbitech-box ' style={{ marginBottom: "150px" }}>Full Stack Developer</span>
                        </div>

                        <div className="social-menu pt-3">
                            <ul>
                                <li><a href="https://github.com/ArbitechSolution" target="blank"><i className="fab fa-github"></i></a></li>

                                <li><a href="https://www.linkedin.com/in/maryam-mahmood-6b8926212/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>

                            </ul>
                        </div>

                    </div>
                    <div className='col-md-5 col-11 text-white text-start mt-4'>
                        <h2 className='footer-h2'>About</h2>
                        <p className='footer-pp'>I am a blockchain developer. I have over 4+ Years of experience in blockchain development , building cryptocurrencies, NFT staking, minting and marketplace dapps, defi dapps, decentralized exchange and decentralized donation platform. If you have any queries , I am Available 24/7 get in touch to discuss details.</p>
                    </div>
                    <div className='col-md-7 col-10 d-flex justify-content-end mt-4' >
                        <div id="footer-grid">
                            <div id="left-footer-section" className="footer-section">
                                <div className="footer-information text-white text-start">
                                    <p className='footer-p'><MdLocationOn style={{ color: "white" }} size={30} />&nbsp;&nbsp;3rd Floor,Link Arcade, Model Town Link Rd, Lahore</p>
                                    <p className='footer-p'><MdCall style={{ color: "white" }} size={30} />&nbsp;&nbsp;+923036954689</p>
                                    <p className='footer-p'><MdEmail style={{ color: "white" }} size={30} />&nbsp;&nbsp;maryammahmood4488@gmail.com</p>
                                    <p className='footer-p'><MdOutlineAccessTimeFilled style={{ color: "white" }} size={30} />&nbsp;&nbsp;10:00 AM – 6:00 PM</p>
                                    {/* <p className='footer-p'><a href='' style={{ color: "white",textDecoration: "none" }}><RiExternalLinkLine style={{ color: "white" }} size={30}/>&nbsp;&nbsp;www.arbitechsolutions.org</a></p> */}

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 mt-4 pb-2'>
                        <p className='text-white footer-p1'>Copyright © 2022 All Rights Reserved by <span style={{ color: "rgb(0,177,255)" }}>arbitech Solutions</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer