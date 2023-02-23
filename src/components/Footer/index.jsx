import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-[40px] gap-[66px] items-center justify-center mb-[35px] mt-[65px] mx-[auto] w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[14px] items-start justify-end md:w-[100%] w-[31%]">
              <div className="flex flex-row gap-[14px] items-center justify-start mr-[auto] mt-[2px] md:w-[100%] w-[43%]">
                <Img
                  src="defaultNoData.png"
                  className="h-[24px] w-[24px]"
                  alt="edit One"
                />
                <Text
                  className="font-extrabold font-nunitosans text-left text-white_A700 uppercase w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Blogsly
                </Text>
              </div>
              <div className="flex flex-row gap-[10px] items-start justify-start mr-[auto] md:w-[100%] w-[48%]">
                <Img
                  src="images/img_favorite.svg"
                  className="h-[20px] w-[20px]"
                  alt="favorite"
                />
                <Text
                  className="font-medium font-publicsans text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Build with heart
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[50px] items-start justify-center md:mt-[0] mt-[23px] md:w-[100%] w-[43%]">
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Home
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Podcast
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Blog
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                About
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Contact
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[178px] md:w-[100%] w-[11%]">
              <Text
                className="font-bold font-publicsans text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Follow Me on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="h-[25px] w-[100%]"
                alt="GroupNinetyFour"
              />
            </div>
          </div>
          <Text
            className="font-light font-publicsans text-left text-white_A700 w-[auto]"
            variant="body1"
          >
            Powered by Blogsly
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
