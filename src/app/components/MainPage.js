// "use client";
// import React from "react";

// const MainPage = () => {
//   return (
//     <section className="bg-blue-50 h-screen flex items-center justify-between p-10">
//       {/* Left Text Section */}
//       <div className="w-1/2 space-y-4">
//         <h1 className="text-5xl font-bold text-gray-800">
//           The <span className="text-blue-500">World</span> is Yours to Explore
//         </h1>
//         <p className="text-lg text-gray-600">
//           Your guide to help you explore
//         </p>
//         <button className="bg-blue-500 text-white px-6 py-3 ml-7 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
//           Explore Packages
//         </button><br/>
//         <button className="bg-blue-500 text-white px-6 py-3 ml-7 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
//           Explore Packages
//         </button>
//       </div>

//       {/* Right Image Section */}
//       <div className="w-1/2 relative">
//         <div className="absolute top-0 right-0">
//           {/* Circle Background */}
//           <div className="w-80 h-80 bg-blue-200 rounded-full flex items-center justify-center">
//             <img
//               src="https://example.com/suitcase-image.png"
//               alt="Travel Icon"
//               className="w-64"
//             />
//           </div>
//           {/* Additional Small Graphics */}
//           <div className="absolute top-10 right-20">
//             <img
//               src="https://example.com/airplane-icon.png"
//               alt="Airplane Icon"
//               className="w-20"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainPage;


import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-50 h-screen flex items-center justify-between p-10 relative">
      <div className="absolute top-5 left-5 flex items-center">
        <img src="/assets/cats.jpg" alt="Safar Logo" className="w-40 h-12" />
      </div>
      <div className="w-1/2 space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">
          The <span className="text-blue-500">World</span> is Yours to Explore
        </h1>
        <p className="text-lg text-gray-600">Your guide to help you explore</p>
        <button className="bg-blue-500 text-white px-6 py-3 ml-11 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Explore Packages
        </button>
        <br />
        <button className="bg-blue-500 text-white px-6 py-3 ml-10 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Explore Packages
        </button>
      </div>
      <div className="w-auto">
        <div className=" top-0 right-28">
          <div className="min-w-56 min-h-52 bg-blue-300 rounded-3xl flex items-center justify-center">
            <img
              src="assets/left.png"
              alt="Travel Icon"
              className="w-64"
              style={{ width: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
