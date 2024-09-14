// import Image from "next/image";
// import RobotImage from "../../../public/assets/robot.png"; // Add your image path here

// const HeroSection = () => {
//   return (
//     <div className="bg-[#08071B] text-white min-h-screen flex justify-between items-center px-6 py-12">
//       {/* Left Side - Content */}
//       <div className="w-full md:w-1/2 space-y-6 ml-8">
//         <h1 className="text-3xl md:text-5xl ">
//           <span className="text-[#01EDFF]">Abri</span> is an innovative fusion of cutting-edge
//           <span className="text-[#01EDFF]"> AI technology</span> and the transformative power of blockchain.
//         </h1>

//         <p className="text-lg md:text-xl">
//           Presale is <span className="text-[#08071B] font-bold bg-[#01EDFF] px-2 rounded">Live</span>
//         </p>

//         <div className="flex space-x-4">
//           <button className="bg-gradient-to-r border-none from-blue-500 to-pink-500 px-6 py-3 rounded-full text-white font-bold">
//             WHITEPAPER
//           </button>
//           <button className="border-2 border-blue-400 px-6 py-3 rounded-full text-white font-semibold">
//             BUY TOKEN NOW!
//           </button>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="w-full md:w-1/2 flex justify-center items-center">
//         <Image src={RobotImage} alt="Robot" className="w-96 h-auto" />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

const HeroSection = () => {
  return (
    <div className="bg-[#08071B] text-white min-h-screen flex flex-col-reverse md:flex-row justify-between items-center px-6 py-12">

      <div className="w-full md:w-1/2 space-y-6 ml-0 md:ml-8 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl">
          <span className="text-[#01EDFF]">Abri</span> is an innovative fusion
          of cutting-edge
          <span className="text-[#01EDFF]"> AI technology</span> and the
          transformative power of blockchain.
        </h1>

        <p className="text-lg md:text-xl">
          Presale is{" "}
          <span className="text-[#08071B] font-bold bg-[#01EDFF] px-2 rounded">
            Live
          </span>
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
          <button className="bg-gradient-to-r border-none from-blue-500 to-pink-500 px-6 py-3 rounded-full text-white font-bold">
            WHITEPAPER
          </button>
          <button className="border-2 border-blue-400 px-6 py-3 rounded-full text-white hover:bg-[#01EDFF] hover:text-[#08071B] font-bold">
            BUY TOKEN NOW!
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img src="assets/robot2.png" alt="Robot" className="w-64 h-auto md:w-96" />
      </div>

      
    </div>
  );
};

export default HeroSection;
