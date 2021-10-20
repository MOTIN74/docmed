import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import OrderSuccessfulScreen from './screens/OrderSuccessfulScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import Footer from './components/Footer/Footer';
import Testmonials from './components/Testmonials/Testmonials';
import AboutUs from './components/About/AboutUs';
import Services from './components/Services Showcase/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Certification from './components/Certification/Certification';
import FAQ from './components/FAQ/FAQ';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
          <Navbar />
          <Switch>
            <Route exact path="/"><HomeScreen /></Route>
            <Route exact path="/about"><AboutUs /></Route>
            <Route exact path="/services"><Services /></Route>
            <Route exact path="/testmonials"><Testmonials /></Route>
            <PrivateRoute exact path="/portfolio"><Portfolio /></PrivateRoute>
            <PrivateRoute exact path="/certification"><Certification /></PrivateRoute>
            <Route exact path="/faq"><FAQ /></Route>
            
            <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
            <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
            <PrivateRoute exact path="/services/:name"><ServiceDetailScreen /></PrivateRoute>
            <PrivateRoute exact path="/orders"><PlaceOrderScreen /></PrivateRoute>
            <PrivateRoute exact path="/order-successful"><OrderSuccessfulScreen /></PrivateRoute>
            <Route  path="*"><ErrorScreen /></Route>
          </Switch>
          </DeliveryProvider>
          <Footer />
        </OrderProvider>
        
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
