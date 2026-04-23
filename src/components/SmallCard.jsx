import React from "react";

const SmallCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-cyan-800/35 backdrop-blur-sm  border border-cyan-700/30 flex flex-col items-start gap-3 ">
      <span className="text-cyan-300 p-3 bg-cyan-700/20 rounded-xl inline-block">
        {icon}
      </span>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-white/70 text-[13px]">{description}</p>
    </div>
  );
};

export default SmallCard;
