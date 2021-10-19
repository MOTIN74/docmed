import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom';
import faqImg from '../../assets/smile.jpg'

const FAQ = () => {
    return (

        
       <div>
           <h1 className="text-black text-5xl text-center p-5 "><Link to="/">FAQ</Link></h1>
            <div className="d-flex p-5">
            <div className="pic w-50 ">
                <img className="rounded-lg transform transition duration-700 hover:scale-90" src={faqImg} alt="" />
            </div>
            <div className="acordion w-50 ms-5">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How much will my hospital stay cost?</Accordion.Header>
                    <Accordion.Body>
                    The average hospital stay runs $11,700 with Medicare ($13,600) and “other” insurance ($12,600) paying top dollar and the uninsured ($9,300) and Medicaid ($9,800) paying the least. Those are alarming figures, especially for families with limited budgets or no insurance
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What if I have difficulty paying for my expenses?</Accordion.Header>
                    <Accordion.Body>
                    If you have trouble paying your bills, or loans, or paying on time, there are options for help, especially if you reach out early to your lenders or creditors.

                If you can still pay your bills, you will likely be better off staying on track. Keep in mind that if you decide to use a program that lets you pause or reduce payments, you will still owe the money you have not paid once the program ends.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What happens to my admission?</Accordion.Header>
                    <Accordion.Body>
                    Your provider will collect basic health information such as weight, height and vital signs, including blood pressure, heart rate and temperature. “This helps us watch for trends over time, and also investigate vitals that are outside of normal range,” Post said.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How do I use my Medisave to pay the hospital bill?</Accordion.Header>
                    <Accordion.Body>
                    You should also bring along your NRIC/Passport or your CPF membership card. You will also need to sign a Medisave Authorisation Form authorising the CPF Board to deduct from your Medisave Account to pay for the hospital bill.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                
            </div>
        </div>
       </div>
    );
};

export default FAQ;