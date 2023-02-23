import React from "react";

const variantClasses = {
  h1: "font-black sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "text-[18px]",
  h6: "text-[16px]",
  body1: "text-[14px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
