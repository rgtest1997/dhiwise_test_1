import React from "react";

import { Img, Text, Line, Input, TextArea, Button } from "components";
import Footer from "components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans gap-[111px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mb-[2px] w-[81%]">
              <Img
                src="images/img_group150.svg"
                className="h-[24px] w-[14%]"
                alt="Group151"
              />
              <div className="flex items-center justify-start md:ml-[0] ml-[211px] md:w-[100%] w-[37%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <ul className="flex flex-row sm:hidden items-center justify-between w-[100%] common-row-list">
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-bold text-[18px] text-indigo_200 hover:text-indigo_900 text-left tracking-[0.12px]"
                        href="javascript:"
                      >
                        Home
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-bold text-[18px] text-indigo_200 hover:text-indigo_900 text-left tracking-[0.12px]"
                        href="javascript:"
                      >
                        Podcast
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-bold text-[18px] text-indigo_200 hover:text-indigo_900 text-left tracking-[0.12px]"
                        href="javascript:"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-bold text-[18px] text-indigo_900 text-left tracking-[0.12px]"
                        href="javascript:"
                      >
                        About
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-bold text-[18px] text-indigo_200 hover:text-indigo_900 text-left tracking-[0.12px]"
                        href="javascript:"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <Line className="bg-indigo_900 h-[1px] md:ml-[0] ml-[251px] mr-[100px] mt-[3px] w-[13%]" />
                </div>
              </div>
              <Img
                src="images/img_search.svg"
                className="h-[30px] md:ml-[0] ml-[324px] w-[30px]"
                alt="search"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start w-[100%]">
          <div className="flex items-center justify-start max-w-[1103px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[45px] items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-bluegray_600 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Contact us
                </Text>
                <Text
                  className="font-light mt-[5px] text-bluegray_600 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Complete the form to contact us
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start md:w-[100%] w-[29%]">
                  <Text
                    className="font-bold text-bluegray_600 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Info
                  </Text>
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] w-[44%]">
                      <Img
                        src="images/img_call.svg"
                        className="h-[20px] w-[20px]"
                        alt="call"
                      />
                      <Text
                        className="font-light text-bluegray_600 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        0331223282
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-start justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[67%]">
                      <Img
                        src="images/img_mail.svg"
                        className="h-[20px] w-[20px]"
                        alt="mail"
                      />
                      <Text
                        className="font-light text-bluegray_600 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Hellolaos@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-start justify-start md:ml-[0] ml-[3px] w-[100%]">
                      <Img
                        src="images/img_location_20X17.svg"
                        className="h-[20px] mt-[5px] w-[6%]"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 font-light leading-[30.00px] text-bluegray_600 text-left sm:w-[100%] w-[92%]"
                        as="h5"
                        variant="h5"
                      >
                        Massachusetts Ave NW, Washington, DC 20036
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:mt-[0] mt-[4px] p-[26px] sm:px-[20px] rounded-[10px] shadow-bs4 md:w-[100%] w-[69%]">
                  <div className="flex flex-col gap-[30px] items-start justify-start my-[17px] rounded-[5px] w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                      <Input
                        className="flex-1 font-light leading-[normal] p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[auto]"
                        type="text"
                        name="field"
                        placeholder="Your Name"
                      ></Input>
                      <Input
                        className="flex-1 font-light leading-[normal] p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[auto]"
                        type="email"
                        name="field One"
                        placeholder="Your Email"
                      ></Input>
                    </div>
                    <Input
                      className="font-light leading-[normal] p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      name="field Two"
                      placeholder="Your Subject"
                    ></Input>
                    <TextArea
                      className="font-light leading-[normal] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                      name="field Three"
                      placeholder="Description"
                    ></TextArea>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[190px] not-italic text-[18px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder5"
                      size="4xl"
                      variant="FillIndigo900"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_600 flex items-center justify-center md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
