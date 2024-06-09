import React from 'react';
import "./service.css";
import Cardcomp from './Cardcomp';
import custom from "../../assets/software.avif";
import Mobile from "../../assets/mobile.jpg";
import Blockchain from "../../assets/blockchain.jpg";
import IOT from "../../assets/IOT.png";
import mern from "../../assets/mern.webp";
import testing from "../../assets/QA.jpg";

const Services2 = () => {
    const Logds = [
        {
            title: "Custom Software Product Development",
            icon: custom,
            para: "We use advanced technologies to deliver top-notch and high-quality to customer's unique requirements. Build a world-class software product with our development team. Discover a smart approach to custom software development."
        },
        {
            title: "Mobile Application Development",
            icon: Mobile,
            para: "Ninjascribe offers a whole process of mobile app development for iOS and Android, from prototyping to testing and deployment. Utilize the expertise of our team to get a scalable and incredibly effective mobile application."
        },
        {
            title: "Blockchain Development",
            icon: Blockchain,
            para: "We offer comprehensive blockchain services, including smart contract development, decentralized application creation, and strategic consulting. Our approach is rooted in understanding your business objectives and designing tailored solutions."
        },
        {
            title: "Internet of Things IoT",
            icon: IOT,
            para: "Transform your IoT project ideas into reality with Ninjascribe. As experienced IoT developers, we specialize in turning client requirements into innovative and customized solutions that exceed expectations."
        },
        {
            title: "MERN-Stack Development",
            icon: mern,
            para: "Our approach is centered around collaboration and innovation. We work closely with our clients to understand their unique requirements and business goals. From building robust backend solutions to creating a scalable API, we have the expertise to deliver high-quality solutions on time."
        },
        {
            title: "Software Testing and Quality Assurance",
            icon: testing,
            para: "Ninjascribe ensures high reliability of your software product with our QA service. Our team of QA engineers closely monitors the production process to identify issues across all stages of a software lifecycle: design, implementation, and deployment."
        }
    ];

    return (
        <div className='New-About'>
            <h1 className='Offers-1'>WHAT WE OFFER</h1>
            <div className='mapped-card'>
                {Logds.map((service, index) => (
                    <Cardcomp
                        key={index}
                        title={service.title}
                        icon={service.icon}
                        para={service.para}
                    />
                ))}
            </div>
        </div>
    );
}

export default Services2;
