import React from 'react';
import Homecomp from './1.Homepage/Homecomp';
import Services from "./2.Services/Services"
import Accordiancomp from "./3.Accordiancomp/Accordiancomp"
import Aboutcomp from './4.AboutUsComp/Aboutcomp';
import ContactUscomp from "./5.ContactUspage/ContactUscomp"
import Footercomp from "./7.Footerpage/Footercomp"

const Totalcompcall = () => {
    return (
        <div>
            <Homecomp/>
            <Services/>
            <Accordiancomp/>
            <Aboutcomp/>
            <ContactUscomp/>
            <Footercomp/>
        </div>
    );
}

export default Totalcompcall;
