import React from 'react';
import Hero from '../sections/Hero';
import AboutUs from '../sections/AboutUs';
import Partners from '../sections/Partners';
import Volunteers from '../sections/Volunteers';
import ContactForm from '../sections/ContactForm';
import OurWork from '../sections/OurWork';

const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <OurWork />
            <Partners />
            <ContactForm />
            <Volunteers />
        </>
    );
};

export default HomePage;