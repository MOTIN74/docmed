import React from 'react'
import Brand from '../Form/Brand'

const MainFooter = () => {
    // footer links 
    const FooterLinks = [
        { id: 1, text: 'About Online Appoinment' },
        { id: 2, text: 'Read our blog' },
        { id: 3, text: 'Sign up to Service' },
        { id: 4, text: 'Add your Doctors' },
        { id: 5, text: 'Get Help' },
        { id: 6, text: 'Ask any question' },
        { id: 7, text: 'Appoinment Now' },
        { id: 8, text: 'Contact' },
        
    ]
    return (
        <div className="flex pb-8">
            {/* logo  */}
            <div className="flex flex-grow">
                <Brand />
            </div>
            {/* footer links  */}
            <div className="flex space-x-12">
                <div className="flex flex-col space-y-2">
                    {FooterLinks.slice(0,4).map(item => (
                        <span className="text-white poppins" key={item.id}>{item.text}</span>
                    ))}
                </div>
                <div className="flex flex-col space-y-2">
                    {FooterLinks.slice(4,8).map(item => (
                        <span className="text-white poppins" key={item.id}>{item.text}</span>
                    ))}
                </div>
                <div className="flex flex-col space-y-2">
                    {FooterLinks.slice(8,12).map(item => (
                        <span className="text-white poppins" key={item.id}>{item.text}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainFooter
