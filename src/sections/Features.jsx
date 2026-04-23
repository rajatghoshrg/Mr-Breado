// import {
//   FaTruckFast,
//   FaLeaf,
//   FaClock,
//   FaShieldHeart,
// } from "react-icons/fa6";

// const features = [
//   {
//     id: "01",
//     title: "Ultra Fast Delivery",
//     desc: "Fresh meals delivered hot and quickly right to your doorstep.",
//     icon: <FaTruckFast />,
//   },

//   {
//     id: "02",
//     title: "Fresh Ingredients",
//     desc: "Every order is prepared using carefully selected ingredients.",
//     icon: <FaLeaf />,
//   },

//   {
//     id: "03",
//     title: "24/7 Ordering",
//     desc: "Order food anytime for your cravings day or night.",
//     icon: <FaClock />,
//   },

//   {
//     id: "04",
//     title: "Trusted Quality",
//     desc: "Hygienic preparation and premium food quality guaranteed.",
//     icon: <FaShieldHeart />,
//   },
// ];

// const Features = () => {
//   return (
//     <section className="py-24 px-6 bg-[#FFF7ED] overflow-hidden">

//       {/* Top Heading */}
//       <div className="max-w-7xl mx-auto">

//         <div className="max-w-3xl mb-20">

//           <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-[#EF4444] text-sm font-semibold mb-6">
//             Why Customers Choose Us
//           </span>

//           <h2 className="text-5xl font-bold text-gray-900 leading-tight">
//             Crafted For Better
//             <span className="text-[#F97316]"> Food Experiences</span>
//           </h2>

//           <p className="text-gray-600 text-lg mt-6 leading-relaxed">
//             We combine speed, freshness and premium service
//             to deliver an unforgettable food experience.
//           </p>

//         </div>

//         {/* Feature Layout */}
//         <div className="grid lg:grid-cols-2 gap-8">

//           {features.map((feature, index) => (
//             <div
//               key={feature.id}
//               className="group relative bg-white rounded-[32px] p-8 border border-orange-100 hover:border-[#F97316] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >

//               {/* Background Glow */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

//               {/* Top Row */}
//               <div className="flex items-start justify-between relative z-10">

//                 {/* Icon */}
//                 <div className="w-20 h-20 rounded-3xl bg-[#F97316] text-white flex items-center justify-center text-4xl shadow-lg">
//                   {feature.icon}
//                 </div>

//                 {/* Number */}
//                 <span className="text-6xl font-black text-orange-50 group-hover:text-orange-100 transition">
//                   {feature.id}
//                 </span>

//               </div>

//               {/* Content */}
//               <div className="mt-10 relative z-10">

//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   {feature.desc}
//                 </p>

//               </div>

//               {/* Bottom Accent Line */}
//               <div className="mt-8 w-0 group-hover:w-full h-1 bg-[#EF4444] rounded-full transition-all duration-500"></div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Features;