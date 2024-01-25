import Image from "next/image";
import React from "react";

type PropsButton = {
  children: React.ReactNode;
  type: "button" | "submit";
  icon?: string;
  variant: string;
};

const Button = ({ children, type, icon, variant }: PropsButton) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export default Button;
