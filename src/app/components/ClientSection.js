// import React from 'react';

// const ClientSection = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-semibold text-gray-800">What Our Clients Say</h2>
//         </div>
//         <div className="relative">
//           <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory">
//             {/* First card */}
//             <div className="flex-none w-full sm:w-80 bg-white shadow-lg rounded-lg p-6 snap-center">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4">
//                   <img src="images/client-1.jpg" alt="Client 1" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h6 className="text-lg font-semibold text-gray-800">Jorch Morik</h6>
//                   <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </div>
//               </div>
//               <div className="relative">
//                 <svg className="absolute top-0 left-0 w-8 h-8 text-gray-300 transform -translate-y-1/2 -translate-x-1/2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 17.27L18.18 21 16.54 14.69 22 10.27H15.82L12 4 8.18 10.27H2L7.46 14.69 5.82 21 12 17.27z"/>
//                 </svg>
//                 <p className="mt-6 text-gray-600">
//                   Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum.
//                 </p>
//                 <div className="mt-4 flex space-x-4">
//                   <a href="#" className="text-blue-600 hover:text-blue-800">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#" className="text-blue-400 hover:text-blue-600">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#" className="text-pink-500 hover:text-pink-700">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="#" className="text-gray-800 hover:text-gray-600">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* Second card */}
//             <div className="flex-none w-full sm:w-80 bg-white shadow-lg rounded-lg p-6 snap-center">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4">
//                   <img src="images/client-2.jpg" alt="Client 2" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h6 className="text-lg font-semibold text-gray-800">Jane Doe</h6>
//                   <p className="text-gray-600 mt-1">Tailwind CSS makes it easy to build responsive, flexible layouts.</p>
//                 </div>
//               </div>
//               <div className="relative">
//                 <svg className="absolute top-0 left-0 w-8 h-8 text-gray-300 transform -translate-y-1/2 -translate-x-1/2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 17.27L18.18 21 16.54 14.69 22 10.27H15.82L12 4 8.18 10.27H2L7.46 14.69 5.82 21 12 17.27z"/>
//                 </svg>
//                 <p className="mt-6 text-gray-600">
//                   Tailwind CSS makes it easy to build responsive, flexible layouts with its utility-first approach.
//                 </p>
//                 <div className="mt-4 flex space-x-4">
//                   <a href="#" className="text-blue-600 hover:text-blue-800">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#" className="text-blue-400 hover:text-blue-600">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#" className="text-pink-500 hover:text-pink-700">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="#" className="text-gray-800 hover:text-gray-600">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* Third card */}
//             <div className="flex-none w-full sm:w-80 bg-white shadow-lg rounded-lg p-6 snap-center">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4">
//                   <img src="images/client-3.jpg" alt="Client 3" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h6 className="text-lg font-semibold text-gray-800">Alex Smith</h6>
//                   <p className="text-gray-600 mt-1">Our approach integrates modern design principles with a focus on user experience.</p>
//                 </div>
//               </div>
//               <div className="relative">
//                 <svg className="absolute top-0 left-0 w-8 h-8 text-gray-300 transform -translate-y-1/2 -translate-x-1/2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 17.27L18.18 21 16.54 14.69 22 10.27H15.82L12 4 8.18 10.27H2L7.46 14.69 5.82 21 12 17.27z"/>
//                 </svg>
//                 <p className="mt-6 text-gray-600">
//                   Our approach integrates modern design principles with a focus on user experience.
//                 </p>
//                 <div className="mt-4 flex space-x-4">
//                   <a href="#" className="text-blue-600 hover:text-blue-800">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#" className="text-blue-400 hover:text-blue-600">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#" className="text-pink-500 hover:text-pink-700">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="#" className="text-gray-800 hover:text-gray-600">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* Fourth card */}
//             <div className="flex-none w-full sm:w-80 bg-white shadow-lg rounded-lg p-6 snap-center">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4">
//                   <img src="images/client-4.jpg" alt="Client 4" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h6 className="text-lg font-semibold text-gray-800">Emily Johnson</h6>
//                   <p className="text-gray-600 mt-1">With our tailored solutions, clients achieve their goals efficiently.</p>
//                 </div>
//               </div>
//               <div className="relative">
//                 <svg className="absolute top-0 left-0 w-8 h-8 text-gray-300 transform -translate-y-1/2 -translate-x-1/2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 17.27L18.18 21 16.54 14.69 22 10.27H15.82L12 4 8.18 10.27H2L7.46 14.69 5.82 21 12 17.27z"/>
//                 </svg>
//                 <p className="mt-6 text-gray-600">
//                   With our tailored solutions, clients achieve their goals efficiently and effectively.
//                 </p>
//                 <div className="mt-4 flex space-x-4">
//                   <a href="#" className="text-blue-600 hover:text-blue-800">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#" className="text-blue-400 hover:text-blue-600">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#" className="text-pink-500 hover:text-pink-700">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="#" className="text-gray-800 hover:text-gray-600">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientSection;
