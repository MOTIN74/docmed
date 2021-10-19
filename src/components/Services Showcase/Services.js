import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import ServiceItem from './ServiceItem';
import Skeleton from './Skeleton';

const Services = () => {
   
    const [menuTab, setMenuTab] = useState('medicine')
    const [loading, setLoading] = useState(false)
    const [services] = useFetch();


   
    

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    },[])

    //service menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
        
        
    }

    return (
        <div className="my-12 max-w-screen-xl mx-auto px-6">
            {/* service Menu tab  */}
            <h1 className="md:hover:underline text-6xl text-center p-5 divide-gray-400">Services</h1>
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'medicine'? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('medicine')}>Medicine</p>
                <p className={menuTab === 'neuro'? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('neuro')}>Neuro</p>
                <p className={menuTab === 'surgery'? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('surgery')}>Surgery</p>
                <p className={menuTab === 'others'? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('others')}>Others</p>
            </div>

            {/* all services  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {services.filter((item) => menuTab === item.type).map(item => (
                    loading ? <Skeleton key={item.id} />
                     : 
                     <ServiceItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Services
