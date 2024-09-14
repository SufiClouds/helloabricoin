"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const CalculateCoinPage = () => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [userCoins, setUserCoins] = useState("");
  const [abricoinValue, setAbricoinValue] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);

  const coins = [
    { name: "Bitcoin", id: "bitcoin" },
    { name: "Ethereum", id: "ethereum" },
    { name: "Litecoin", id: "litecoin" },
    { name: "Ripple", id: "ripple" },
    { name: "Dogecoin", id: "dogecoin" },
  ];

  const abricoinRate = 10;

  useEffect(() => {
    if (selectedCoin) {
      fetchCoinPrice(selectedCoin);
    }
  }, [selectedCoin]);

  const fetchCoinPrice = async (coinId) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
      );
      const price = response.data[coinId].usd;
      setCoinPrice(price);
    } catch (error) {
      console.error("Error fetching coin price:", error);
    }
  };

  const handleCalculate = () => {
    const coinsToAbricoin = (parseFloat(userCoins) * coinPrice) / abricoinRate;
    setAbricoinValue(coinsToAbricoin.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-[#031B2D] justify-center gap-20 flex flex-col md:flex-row items-center p-8">
      <div className="w-full max-w-7xl bg-[#055184] shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Side - Heading and Paragraph */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Calculate Value of Abri Coin
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Right Side - Coin Inputs and Calculation */}
        <div className="w-full md:w-1/2 bg-[#00B7D0] p-4 sm:p-6 rounded-lg">
          {/* Circle Image */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full flex justify-center items-center">
              <span className="text-lg sm:text-xl font-bold">Abri</span>
            </div>
          </div>

          {/* Select Coin */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Select Coin
            </label>
            <select
              className="w-full p-2 border rounded bg-green-200"
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
            >
              <option value="" disabled>
                Select a coin
              </option>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name}
                </option>
              ))}
            </select>
          </div>

          {/* Coin Price Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Coin Price (USD)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded bg-green-200"
              placeholder="Enter your coins"
              value={userCoins}
              onChange={(e) => setUserCoins(e.target.value)}
            />
          </div>

          {/* Display Abricoin Value */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Check Abri Price
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-green-200"
              readOnly
              value={
                abricoinValue > 0
                  ? `${abricoinValue} Abricoin`
                  : "Abricoin value will appear here"
              }
            />
          </div>

          {/* Calculate Button */}
          <button
            className="w-full bg-pink-300 p-2 sm:p-3 rounded text-white font-bold"
            onClick={handleCalculate}
          >
            Calculate
          </button>

          {/* Real-time Coin Price */}
          {selectedCoin && (
            <p className="text-center text-gray-700 mt-4">
              Current Price of {selectedCoin}: ${coinPrice.toFixed(2)} USD
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculateCoinPage;
