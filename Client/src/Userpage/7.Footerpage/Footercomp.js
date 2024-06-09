import React from 'react';
import "./footercomp.css"
import Whatsapp from "../../assets/whatsapp.png"
import Insta from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Email from "../../assets/Email.png"

const Footercomp = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left">
                    <p className='Compy-name'>NinjaScribe</p>
                </div>
                <div className="footer-center">
                    <a href="mailto:m.suresh4405@gmail.com"><img src={Email} className='Social-media1' alt="Email"/></a>
                    <a href="https://www.instagram.com/mr._s.u.r.e.s.h/"><img src={Insta} className='Social-media2' alt="Instagram"/></a>
                    <a href="https://www.linkedin.com/in/suresh-m9ab727233/"><img src={Linkedin} className='Social-media3' alt="Linkedin"/></a>
                    <a href="https://wa.me/qr/S5BFMSB4CXI5M1"><img src={Whatsapp} className='Social-media4' alt="WhatsApp"/></a>
                </div>
                <div className="footer-right">
                    <a href="/user">Privacy & Policy</a>
                </div>
            </footer>
        </div>
    );
}

export default Footercomp;
