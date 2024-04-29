import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-2xl font-medium md:text-[22px]",
  s: "text-base font-medium",
  "2xl": "text-[50px] font-medium md:text-[46px] sm:text-[40px]",
  "3xl": "text-6xl font-medium md:text-[52px] sm:text-[46px]",
  xl: "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-helveticaneueltwg ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
