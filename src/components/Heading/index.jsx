import React from "react";

const sizes = {
  s: "text-xl font-bold",
  md: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  xs: "text-lg font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-teal-700 font-helveticaneueltwg ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
