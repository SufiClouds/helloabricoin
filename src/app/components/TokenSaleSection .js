const TokenSaleSection = () => {
  return (
    <div className="bg-[#08071B] text-white py-16 px-6">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#01EDFF] mb-4">
          Token Sale
        </h2>
        <p className="text-lg md:text-xl">
          We are thrilled to announce the commencement of Abri’s Phase 1 ICO,
          marking a significant milestone in our mission to redefine the
          intersection of artificial intelligence and blockchain technology. As
          of [01-02-2024], early contributors can seize the opportunity to be
          part of a groundbreaking project set to reshape the future of
          cryptocurrency.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-center">
            <strong className="text-[#01EDFF]">
              Starting time:
              <br />
            </strong>{" "}
            JANUARY 1, 2024 (12:00 AM)
          </p>
          <p className="text-center">
            <strong className="text-[#01EDFF]">
              Ending time:
              <br />
            </strong>{" "}
            DECEMBER 31, 2024 (12:00 AM)
          </p>
          <p className="text-center">
            <strong className="text-[#01EDFF]">
              Token Exchange Rate:
              <br />
            </strong>{" "}
            1 BNB = 300000 ABRI
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <div className="relative">
          <div className="flex justify-between text-sm mt-2">
              <span>Sale Raised</span>
              <span>Soft Caps</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#01EDFF] to-purple-500 h-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="flex justify-around text-sm mt-2">
              <span>ABRI</span>
              <span>ABRI</span>
            </div>
            <div className="text-center mt-4 font-bold">
              <button className="bg-gradient-to-r from-[#01EDFF] to-purple-500 text-[#08071B] px-8 py-3 rounded-full font-bold shadow-lg">
                BUY TOKENS
              </button>
            </div>
          </div>
        </div>

        {/* Purchase Button */}
        {/* <div className="text-center">
            <button className="bg-gradient-to-r from-[#01EDFF] to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
              BUY TOKENS →
            </button>
          </div> */}
        <div className="mt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4">
            <p className="text-center">
              <strong className="text-[#01EDFF]">
                Price / Abri:
                <br />
              </strong>{" "}
              1 BNB = 300000 ABRI
            </p>
            <p className="text-center">
              <strong className="text-[#01EDFF]">
                Tokens Allocated:
                <br />
              </strong>{" "}
              ABRI 30%
            </p>
            <p className="text-center">
              <strong className="text-[#01EDFF]">
                Acceptable Currency:
                <br />
              </strong>{" "}
              BNB
            </p>
          </div>
          <div className="space-y-4"></div>
        </div>
      </div>
    </div>
  );
};

export default TokenSaleSection;
