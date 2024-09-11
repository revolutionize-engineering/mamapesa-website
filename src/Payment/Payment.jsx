import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BGImage from '../assets/womanmoney.jpg'

const Payment = () => {
  const navigate = useNavigate();

  // State to track payment status and loading
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null); // For error handling

  // Function to handle payment logic
  const handlePayment = async () => {
    // Simulate the payment process
    setIsProcessing(true); 
    setPaymentError(null); 

    try {
      // API Call for payment simulation
      const paymentSuccessful = await simulatePaymentProcessing();

      if (paymentSuccessful) {
        
        navigate('/mamapesa-ai');
      } else {
        throw new Error("Payment failed"); // Handle payment failure
      }
    } catch (error) {
      setPaymentError(error.message); // Handle the payment failure
    } finally {
      setIsProcessing(false); // Stop the loading state
    }
  };

  // Payment simulation 
  const simulatePaymentProcessing = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); 
      }, 2000); 
    });
  };

  // Function to navigate back to the homepage
  const handleGoBack = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: `url(${BGImage})` }} 
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Payment card */}
      <div className="relative bg-white bg-opacity-60 p-8 rounded-xl shadow-lg max-w-lg w-full mx-4 justify-center align-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Access to MamaPesa AI</h2>
        <p className="text-lg text-[#321c12] mb-8">
          To access our chatbot, please pay a one time payment of <span className="font-bold">Ksh 300 only</span>!
        </p>

        {/* Display any payment error */}
        {paymentError && <p className="text-red-600 mb-4">{paymentError}</p>}

        {/* Action buttons */}
        <div className="flex justify-around">
          <button
            onClick={handleGoBack}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Cancel
          </button>

          <button
            onClick={handlePayment}
            className={`bg-[#571C0E] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#3e150a] transition duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

