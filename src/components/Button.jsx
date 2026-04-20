import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  size = "default",
  variant = "primary",
  className = "",
  ...props
}) => {
  /* 🔹 Base styles */
  const baseClass =
    "items-center justify-center gap-2 rounded-full font-medium  hover:bg-header/95 shadow-lg shadow-header/25  focus-visible:ring-2 focus-visible:ring-header/50 ";

  /* 🔹 Sizes */
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  /* 🔹 Variants */
  const variantClasses = {
    primary:
      "text-white bg-header/90 hover:bg-header/95 focus-visible:ring-header",
  };

  return (
    <motion.button
      className={`${baseClass} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
