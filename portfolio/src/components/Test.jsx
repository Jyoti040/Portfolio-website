import React from "react";
import { motion } from "framer-motion";

const StylishBorderDiv = () => {
  return (
    <motion.div
      className="relative w-64 h-64 bg-white flex items-center justify-center text-lg font-bold text-gray-800"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Background gradient border */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, yoyo: Infinity } }}
      >
        {/* Border animation layer */}
        <div className="w-full h-full bg-white rounded-lg"></div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10">Stylish Border</div>
    </motion.div>
  );
};

export default StylishBorderDiv;
