import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-80 md:w-96">
        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-4 text-center text-slate-900">Buy Abricoin</h2>

        {/* Select Option for Coin Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-slate-900">Select Coin</label>
          <select className="w-full p-2 border border-gray-300 rounded text-slate-900">
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="litecoin">Litecoin</option>
            <option value="ripple">Ripple</option>
            <option value="dogecoin">Dogecoin</option>
          </select>
        </div>

        {/* Input Field for "You Pay" */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-slate-900">You Pay</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded text-slate-900"
            placeholder="Amount to Pay"
          />
        </div>

        {/* Input Field for "You Receive" */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-slate-900">You Receive</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded text-slate-900"
            placeholder="Amount to Receive"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white p-2 rounded w-1/2 mr-2"
            onClick={() => alert('Connect Wallet')}>
            Connect Wallet
          </button>
          <button
            className="bg-green-500 text-white p-2 rounded w-1/2 ml-2"
            onClick={() => alert('Payment Successful')}>
            Pay
          </button>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500"
          onClick={onClose}>
          &#10005; {/* Close (X) Icon */}
        </button>
      </div>
    </div>
  );
};

export default Modal;
