// import React from 'react';

// const TeamSection = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mx-auto mb-12 max-w-2xl">
//           <h1 className="text-4xl font-semibold mt-4">Our Experienced Team</h1>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="relative rounded overflow-hidden bg-white shadow-lg">
//             <div className="overflow-hidden">
//               <img className="w-full h-60 object-cover" src="assets/team-1.jpg" alt="Doctor 1" />
//             </div>
//             <div className="p-4 text-center">
//               <h5 className="text-xl font-semibold">CEO & CO</h5>
//               <p className="text-blue-500">Hello World!</p>
//               <div className="flex justify-center mt-4 space-x-3">
//                 <a className="text-blue-600 hover:text-blue-800" href="#"><i className="fab fa-facebook-f"></i></a>
//                 <a className="text-blue-400 hover:text-blue-600" href="#"><i className="fab fa-twitter"></i></a>
//                 <a className="text-pink-500 hover:text-pink-700" href="#"><i className="fab fa-instagram"></i></a>
//               </div>
//             </div>
//           </div>
//           <div className="relative rounded overflow-hidden bg-white shadow-lg">
//             <div className="overflow-hidden">
//               <img className="w-full h-60 object-cover" src="assets/team-2.jpg" alt="Doctor 2" />
//             </div>
//             <div className="p-4 text-center">
//               <h5 className="text-xl font-semibold">CEO & CO</h5>
//               <p className="text-blue-500">Hello World!</p>
//               <div className="flex justify-center mt-4 space-x-3">
//                 <a className="text-blue-600 hover:text-blue-800" href="#"><i className="fab fa-facebook-f"></i></a>
//                 <a className="text-blue-400 hover:text-blue-600" href="#"><i className="fab fa-twitter"></i></a>
//                 <a className="text-pink-500 hover:text-pink-700" href="#"><i className="fab fa-instagram"></i></a>
//               </div>
//             </div>
//           </div>
//           <div className="relative rounded overflow-hidden bg-white shadow-lg">
//             <div className="overflow-hidden">
//               <img className="w-full h-60 object-cover" src="assets/team-3.jpg" alt="Doctor 3" />
//             </div>
//             <div className="p-4 text-center">
//               <h5 className="text-xl font-semibold">CEO & CO</h5>
//               <p className="text-blue-500">Hello World!</p>
//               <div className="flex justify-center mt-4 space-x-3">
//                 <a className="text-blue-600 hover:text-blue-800" href="#"><i className="fab fa-facebook-f"></i></a>
//                 <a className="text-blue-400 hover:text-blue-600" href="#"><i className="fab fa-twitter"></i></a>
//                 <a className="text-pink-500 hover:text-pink-700" href="#"><i className="fab fa-instagram"></i></a>
//               </div>
//             </div>
//           </div>
//           <div className="relative rounded overflow-hidden bg-white shadow-lg">
//             <div className="overflow-hidden">
//               <img className="w-full h-60 object-cover" src="assets/team-4.jpg" alt="Doctor 4" />
//             </div>
//             <div className="p-4 text-center">
//               <h5 className="text-xl font-semibold">CEO & CO</h5>
//               <p className="text-blue-500">Hello World!</p>
//               <div className="flex justify-center mt-4 space-x-3">
//                 <a className="text-blue-600 hover:text-blue-800" href="#"><i className="fab fa-facebook-f"></i></a>
//                 <a className="text-blue-400 hover:text-blue-600" href="#"><i className="fab fa-twitter"></i></a>
//                 <a className="text-pink-500 hover:text-pink-700" href="#"><i className="fab fa-instagram"></i></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;






import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-12 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-4">Our Experienced Team</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-xl">
            <div className="overflow-hidden">
              <img className="w-full h-65 object-cover" src="assets/team-1.jpg" alt="Doctor 1" />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-2xl font-semibold mb-2">CEO & CO</h5>
              <p className="text-blue-600 text-lg mb-4">Hello World!</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a className="text-blue-600 hover:text-blue-800 text-2xl" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400 hover:text-blue-600 text-2xl" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500 hover:text-pink-700 text-2xl" href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-xl">
            <div className="overflow-hidden">
              <img className="w-full h-65 object-cover" src="assets/team-2.jpg" alt="Doctor 2" />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-2xl font-semibold mb-2">CEO & CO</h5>
              <p className="text-blue-600 text-lg mb-4">Hello World!</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a className="text-blue-600 hover:text-blue-800 text-2xl" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400 hover:text-blue-600 text-2xl" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500 hover:text-pink-700 text-2xl" href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-xl">
            <div className="overflow-hidden">
              <img className="w-full h-65 object-cover" src="assets/team-3.jpg" alt="Doctor 3" />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-2xl font-semibold mb-2">CEO & CO</h5>
              <p className="text-blue-600 text-lg mb-4">Hello World!</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a className="text-blue-600 hover:text-blue-800 text-2xl" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400 hover:text-blue-600 text-2xl" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500 hover:text-pink-700 text-2xl" href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-xl">
            <div className="overflow-hidden">
              <img className="w-full h-65 object-cover" src="assets/team-4.jpg" alt="Doctor 4" />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-2xl font-semibold mb-2">CEO & CO</h5>
              <p className="text-blue-600 text-lg mb-4">Hello World!</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a className="text-blue-600 hover:text-blue-800 text-2xl" href="#"><i className="fab fa-facebook-f"></i>soc</a>
                <a className="text-blue-400 hover:text-blue-600 text-2xl" href="#"><i className="fab fa-twitter"></i>ial</a>
                <a className="text-pink-500 hover:text-pink-700 text-2xl" href="#"><i className="fab fa-instagram"></i>icon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
