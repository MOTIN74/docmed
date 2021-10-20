import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AboutItem from './AboutItem'

const AboutUs = () => {
    const [aboutData, setAboutData] = useState([])

    //fetching about us data
    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
            .then(data => setAboutData(data))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto my-12 px-6">
            <h1 className="text-4xl poppins pb-4 mt-5"><Link to="/about">Specialist Doctors</Link></h1>
            <p className="text-gray-500 text-sm poppins w-2/4">Medical specialists are experts in certain fields of medicine. They either treat specific parts of the body, such as the back or the brain, or they specialize in certain diseases, such as cancer. Family doctors keep a list of local specialists and can help patients choose the right specialist for each medical issue. In many cases specialists require a referral from a family doctor before they will see a patient. Here is a list of the most common types of specialists.</p>

            {/* about us cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {aboutData.map(item => (
                    <AboutItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default AboutUs
