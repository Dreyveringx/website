import React from "react";

const ServiceCard = ({ icon, text }) => {
  return (
    <div 
      className="w-full lg:w-40 h-32 rounded-md border border-[rgba(255,255,255,0.3)] flex items-center justify-center flex-col gap-2 group hover:border-primary cursor-pointer relative bg-bgPrimary"
      style={{ boxShadow: "0 0 10px rgba(255,255,255,0.3)" }}
    >
      <div className="hidden group-hover:block absolute -inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10"></div>

        <span className="text-3xl text-texlight group-hover:bg-transparent group-hover:text-gradient-to-br group-hover:from-primary group-hover:to-secondary">
          {icon}
        </span>
        <p className="text-base text-texlight group-hover:text-white">{text}</p>
    </div>
  );
};

export default ServiceCard;
