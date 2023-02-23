import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-[5px]",
  RoundedBorder35: "rounded-[35.5px]",
  icbCircleBorder38: "rounded-[38px]",
  icbRoundedBorder27: "rounded-[27.5px]",
};
const variants = {
  FillGray200: "bg-gray_200 text-bluegray_600",
  OutlineIndigo90056: "bg-indigo_900 shadow-bs1 text-white_A700",
  OutlineIndigo201:
    "border-[2px] border-indigo_201 border-solid text-indigo_900",
  FillIndigo90067: "bg-indigo_900_67 text-indigo_900",
  FillIndigo900: "bg-indigo_900 text-white_A700",
  OutlinePink300:
    "bg-white_A700 border-[1px] border-pink_300 border-solid text-pink_300",
  FillWhiteA7003f: "bg-white_A700_3f text-white_A700",
  icbFillIndigo9004f: "bg-indigo_900_4f",
  icbFillGray300: "bg-gray_300",
  icbFillGray60076: "bg-gray_600_76",
  icbFillLightblue50: "bg-light_blue_50",
  icbFillLime50: "bg-lime_50",
  icbFillRed50: "bg-red_50",
  icbOutlinePink3007f: "bg-pink_300 shadow-bs",
  icbFillGray302: "bg-gray_302",
};
const sizes = {
  sm: "p-[5px]",
  md: "p-[9px]",
  lg: "pr-[14px] py-[14px]",
  xl: "p-[18px]",
  "2xl": "pr-[20px] py-[20px]",
  "3xl": "p-[21px] sm:px-[20px]",
  "4xl": "p-[24px] sm:px-[20px]",
  "5xl": "sm:pl-[20px] pl-[25px] py-[25px]",
  smIcn: "p-[10px]",
  mdIcn: "p-[13px]",
  lgIcn: "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder35",
    "icbCircleBorder38",
    "icbRoundedBorder27",
  ]),
  variant: PropTypes.oneOf([
    "FillGray200",
    "OutlineIndigo90056",
    "OutlineIndigo201",
    "FillIndigo90067",
    "FillIndigo900",
    "OutlinePink300",
    "FillWhiteA7003f",
    "icbFillIndigo9004f",
    "icbFillGray300",
    "icbFillGray60076",
    "icbFillLightblue50",
    "icbFillLime50",
    "icbFillRed50",
    "icbOutlinePink3007f",
    "icbFillGray302",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};

Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder38",
  variant: "icbFillIndigo9004f",
  size: "lgIcn",
};
export { Button };
