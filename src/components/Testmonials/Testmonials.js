import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/2.jpg'
import img2 from '../../assets/3.jpg'
import img3 from '../../assets/secretary-holding-pen.jpg'
import './Testmonials.css'

 const Testmonials = () => {
     return (

        <div >
            <h1 className="text-black text-5xl text-center p-1 mt-5 "><Link to="/testmonials">Testmonials</Link></h1>
            
            <section className="main1">
                <div id="about-us" className="flex-container">
                    
                    <div className="flex-right">
                    <h3>
                            <span className="change-color">Docmed</span> The Best? <br />
                            Now Try The <span className="change-color">Service</span>
                        </h3>
                        
                        <p>
                       " I sincerely thank Jaslok Hospital for their excellent medical service and care. Especially Dr. G. Mansukhani who handled my case so well. She is a great doctor, a very kind person and unforgettable personality. I wish good health and very very long life so my doctor, Dr. G. Mansukhani. I thank all the Doctors, Nurses, Mausi and the entire support staff."

                                                                                                                   "                                                                                Shraddha               Verma"
                        </p>
                    </div>
                    <div className="flex-left img-container">
                        <img className="transform transition duration-700 hover:scale-90" src={img1} alt='' />
                    </div>
                </div>
            </section>
            <section className="main2">
                <div id="about-us" className="flex-container">
                    <div className="flex-left img-container">
                        <img className="transform transition duration-700 hover:scale-90" src={img2} alt='' />
                    </div>
                    <div className="flex-right">
                        <h3>My satisfication</h3>
                        <h2>
                            Welcome To <br />
                            <span className="change-color">Docmed</span>
                        </h2>
                        <p>
                       " I sincerely thank Jaslok Hospital for their excellent medical service and care. Especially Dr. G. Mansukhani who handled my case so well. She is a great doctor, a very kind person and unforgettable personality. I wish good health and very very long life so my doctor, Dr. G. Mansukhani. I thank all the Doctors, Nurses, Mausi and the entire support staff."

                                                                                                                   "                                                                                Shraddha               Verma"
                        </p>
                    </div>
                </div>
            </section>


            <section className="main3">
                <div id="about-us" className="flex-container">
                    
                    <div className="flex-right">
                    <h1>
                            <span className="change-color text-3xl">Very good treatment and care</span> 
                            <span className=" text-4xl">Docmed</span> <span className="change-color text-4xl">Service</span>
                        </h1>
                        <h3>
                        "Good services from 8th floor staff. Special thanks to sister Sissa, Sister Vanita and sister Priyanka. Great doctors and Mansubhani mam and Fazal sir."

                        "Samaira Panjwani"
                        </h3>
                        
                    </div>
                    <div className="flex-left img-container">
                        <img className="transform transition duration-700 hover:scale-90" src={img3} alt='' />
                    </div>
                </div>
            </section>
           
        </div>
        
    );
};

 export default Testmonials;