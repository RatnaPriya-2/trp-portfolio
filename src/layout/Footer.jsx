import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-6 px-8 text-center text-sm text-main bg-header backdrop-blur-sm shadow-md border-t border-white/10 flex items-center justify-center z-30">
      <p>&copy; {new Date().getFullYear()} TRP. All rights reserved.</p>
    </div>
  );
};

export default Footer;
