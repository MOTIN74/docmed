import React from 'react';
import { Link } from 'react-router-dom';
import'./Certification.css'
import banner1 from '../../assets/banner-1-2.png'
import banner2 from '../../assets/banner-2.png'
import banner3 from '../../assets/banner-3.png'
import banner4 from '../../assets/banner-4.png'



const Certification = () => {
    return (
        <div>
            <h1 className="text-black text-5xl text-center p-5 "> <Link>Certificates & Standards</Link> </h1>
            <div id="awards">
                <Link to="https://www.camts.org/"><img className=" " src={banner1} alt='' /></Link>
                <Link><img className=" " src={banner2} alt='' /></Link>
                <Link><img className=" " src={banner3} alt='' /></Link>
                <Link><img className=" " src={banner4} alt='' /></Link>
               
               
            </div>
        </div>
    );
};

export default Certification;