import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/icons8-facebook-48.png'
import logo2 from '../../assets/icons8-github-50.png'
import logo3 from '../../assets/icons8-google-49.png'
import logo4 from '../../assets/icons8-twitter-48.png'

const BottomFooter = () => {
    return (
        <div className="flex items-center pt-8">
            <div className="flex flex-grow">
                <span className="poppins text-white-500"> <h2>CopyRight &copy; DOCMED, 2021-2050. Developed by <Link to="/signup"className="text-red-600 fs-4">KHAN</Link>	</h2></span>
            </div>
           <div className="d-flex mx-3">
           <Link
             to="https://www.facebook.com"><img className="mx-2" src={logo1} alt=""/> </Link>
            <Link
             to="facebook.com"><img className="mx-2" src={logo2} alt=""/> </Link>
            <Link
             to="facebook.com"><img className="mx-2" src={logo3} alt=""/> </Link>
            <Link
             to="facebook.com"><img className="mx-2" src={logo4} alt=""/> </Link>
           </div>
         
            <div className="flex justify-center items-center space-x-6">
                <span className="poppins text-white cursor-pointer">Privacy Policy</span>
                <span className="poppins text-white cursor-pointer">Terms of Use</span>
                <span className="poppins text-white cursor-pointer">Pricing</span>
            </div>
        </div>
    )
}

export default BottomFooter
