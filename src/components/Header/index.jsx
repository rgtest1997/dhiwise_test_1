import React from "react";

import { Img, Text, Line } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
          <div className="header-row mt-[2px] mb-[5px]">
            <div className="flex flex-row gap-[14px] items-center justify-center">
              <Img
                src="images/img_edit.svg"
                className="h-[24px] w-[24px]"
                alt="edit"
              />
              <Text
                className="font-extrabold font-nunitosans text-gray_600 text-left uppercase w-[auto]"
                as="h4"
                variant="h4"
              >
                Blogsly
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-start md:ml-[0] ml-[211px] md:w-[100%] w-[29%]">
            <div className="flex flex-col items-start justify-start sm:w-[100%] w-[20%]">
              <Text
                className="font-bold font-publicsans text-indigo_900 text-left tracking-[0.12px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Home
              </Text>
              <Line className="bg-indigo_900 h-[1px] mt-[4px] w-[64%]" />
            </div>
            <Text
              className="font-bold font-publicsans text-indigo_200 text-left tracking-[0.12px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Podcast
            </Text>
            <Text
              className="font-bold font-publicsans ml-[29px] text-indigo_200 text-left tracking-[0.12px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Blog
            </Text>
            <Text
              className="font-bold font-publicsans ml-[30px] text-indigo_200 text-left tracking-[0.12px] w-[auto]"
              as="h5"
              variant="h5"
            >
              About
            </Text>
            <Text
              className="font-bold font-publicsans ml-[29px] text-indigo_200 text-left tracking-[0.12px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Contact
            </Text>
          </div>
          <Img
            src="images/img_search.svg"
            className="h-[30px] sm:hidden mb-[2px] md:ml-[0] ml-[324px] w-[30px]"
            alt="search"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
