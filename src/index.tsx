import React, { useEffect } from "react";

interface ClickOutProps {
  children: any;
  onClickOut: () => void;
}

const ClickOut = ({ children, onClickOut }: ClickOutProps) => {
  
  useEffect(() => {
    const handleClickOut = () => onClickOut();
    document.addEventListener("click", handleClickOut, { once: true });
    return () => document.removeEventListener("click", handleClickOut);
  });
  

  return <div onClick={(e) => e.stopPropagation()}>{children}</div>;
};

export default ClickOut;
