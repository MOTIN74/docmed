import React from 'react';
import Certification from '../components/Certification/Certification';
import AboutUs from '../components/About/AboutUs';

import Banner from '../components/Banner/Banner';
import Services from '../components/Services Showcase/Services';
import FAQ from '../components/FAQ/FAQ';
import Portfolio from '../components/Portfolio/Portfolio';
import Testmonials from '../components/Testmonials/Testmonials';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <>
        {/* <Header/> */}
            <Banner />
            <Services />
            <AboutUs />
             <Testmonials > </Testmonials>
            {/* <Portfolio/> */}
            {/* <Certification/> */}
            <FAQ/>
           
        </>
    )
}

export default HomeScreen
