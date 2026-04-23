// import { Link } from "react-router-dom";
// import { FaGift, FaArrowRight } from "react-icons/fa6";

// const OfferBanner = () => {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-[#FFF1F2] to-[#FFE7D6] py-12 sm:py-16 px-4 sm:px-6">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-52 h-52 bg-[#F97316]/10 blur-3xl rounded-full"></div>

//       <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#EF4444]/10 blur-3xl rounded-full"></div>

//       <div className="max-w-5xl mx-auto relative z-10">

//         {/* Main Card */}
//         <div
//           className="
//             group relative overflow-hidden
//             bg-white/90 backdrop-blur-xl
//             border border-orange-100
//             rounded-3xl
//             p-6 sm:p-8
//             shadow-xl
//             hover:shadow-2xl
//             transition-all duration-500
//           "
//         >

//           {/* Glow */}
//           <div className="absolute top-0 right-0 w-40 h-40 bg-[#F97316]/10 blur-3xl rounded-full"></div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

//             {/* Left Side */}
//             <div className="relative z-10">

//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7ED] text-[#EF4444] text-xs sm:text-sm font-semibold mb-4">

//                 <FaGift />

//                 Limited Offer

//               </div>

//               {/* Heading */}
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">

//                 Get <span className="text-[#F97316]">30% OFF</span>

//                 <br />

//                 Your First Order

//               </h2>

//               {/* Text */}
//               <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-md">

//                 Fresh meals delivered fast with exclusive first-order discounts.

//               </p>

//               {/* Buttons */}
//               <div className="flex flex-col sm:flex-row gap-3 mt-6">

//                 <Link
//                   to="/register"
//                   className="
//                     flex items-center justify-center gap-2
//                     bg-[#F97316]
//                     hover:bg-[#EA580C]
//                     text-white
//                     px-5 py-3
//                     rounded-2xl
//                     font-semibold
//                     transition
//                   "
//                 >

//                   Claim Offer

//                   <FaArrowRight className="text-sm" />

//                 </Link>

//                 <Link
//                   to="/login"
//                   className="
//                     flex items-center justify-center
//                     border border-orange-200
//                     hover:bg-[#FFF7ED]
//                     px-5 py-3
//                     rounded-2xl
//                     font-semibold
//                     text-gray-700
//                     transition
//                   "
//                 >
//                   Login
//                 </Link>

//               </div>

//             </div>

//             {/* Right Side Discount Box */}
//             <div className="relative z-10">

//               <div
//                 className="
//                   bg-gradient-to-br from-[#F97316] to-[#EA580C]
//                   rounded-3xl
//                   p-6
//                   text-white
//                   shadow-xl
//                   text-center
//                 "
//               >

//                 <p className="uppercase tracking-[0.2em] text-xs text-white/80 mb-3">
//                   SPECIAL DEAL
//                 </p>

//                 <h3 className="text-5xl sm:text-6xl font-black">
//                   30%
//                 </h3>

//                 <p className="text-lg font-semibold mt-1">
//                   OFF
//                 </p>

//                 <div className="w-full h-[1px] bg-white/20 my-4"></div>

//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Unlock exclusive discounts on your first delicious order.
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Bottom Line */}
//           <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F97316] to-[#EF4444] rounded-full transition-all duration-700"></div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default OfferBanner;