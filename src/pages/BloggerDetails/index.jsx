import React from "react";

import Header from "components/Header";
import { Img, Button, Text } from "components";
import Footer from "components/Footer";

const BloggerDetailsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex flex-col md:px-[20px] relative w-[100%]">
            <div className="bg-gray_600 flex items-center justify-start mx-[auto] pb-[166px] pr-[166px] sm:pr-[20px] md:pr-[40px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mb-[10px] w-[100%]">
                <div className="md:h-[315px] h-[349px] relative md:w-[100%] w-[63%]">
                  <Img
                    src="images/img_group146.png"
                    className="absolute h-[315px] left-[0] object-cover top-[0] w-[51%]"
                    alt="Group146"
                  />
                  <div className="absolute bottom-[0] flex flex-col items-start justify-start right-[0] w-[80%]">
                    <Button
                      className="cursor-pointer font-light font-publicsans leading-[normal] min-w-[82px] text-[18px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="FillWhiteA7003f"
                    >
                      Writer
                    </Button>
                    <Text
                      className="font-bold font-merriweather italic mt-[30px] text-left text-white_A700 tracking-[0.12px] w-[100%]"
                      as="h3"
                      variant="h3"
                    >
                      Eps 3 : How to write a book properly and correctly by
                      paying attention to various parts to support the story
                    </Text>
                    <div className="flex flex-row font-publicsans gap-[14px] items-center justify-start mt-[20px] md:w-[100%] w-[37%]">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[60px] md:h-[auto] rounded-[50%] w-[60px]"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          By Jhone Leonardo
                        </Text>
                        <Text
                          className="font-light mt-[5px] text-left text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Podcaster & Blogger
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700_3f flex md:flex-1 items-center justify-start mb-[21px] md:mt-[0] mt-[81px] p-[32px] sm:px-[20px] rounded-[5px] md:w-[100%] w-[28%]">
                  <div className="flex flex-col gap-[25px] items-center justify-start my-[11px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.12px] w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Find and make it easy for yourself in listening to our
                      podcasts on
                    </Text>
                    <div className="flex flex-row gap-[28px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[50px] mb-[2px] w-[50px]"
                        alt="volume"
                      />
                      <Img
                        src="images/img_volume_50X50.svg"
                        className="h-[50px] mb-[2px] w-[50px]"
                        alt="volume One"
                      />
                      <Img
                        src="images/img_signal_50X50.svg"
                        className="h-[50px] mb-[2px] w-[50px]"
                        alt="signal"
                      />
                      <Img
                        src="images/img_camera_50X50.svg"
                        className="h-[50px] mt-[2px] w-[50px]"
                        alt="camera"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-center justify-end mt-[-106px] mx-[auto] p-[21px] sm:px-[20px] rounded-[5px] shadow-bs5 w-[64%] z-[1]">
              <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between mt-[8px] w-[100%]">
                <Img
                  src="images/img_rectangle39.png"
                  className="sm:flex-1 h-[215px] md:h-[auto] object-cover rounded-[5px] sm:w-[100%] w-[auto]"
                  alt="RectangleThirtyNine"
                />
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-light leading-[normal] min-w-[74px] text-[16px] text-bluegray_600 text-center w-[auto]"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="FillGray200"
                    >
                      Writer
                    </Button>
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      25 August, 2020{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[10px] items-center justify-start mt-[20px] w-[100%]">
                    <Text
                      className="font-bold font-merriweather italic text-gray_900 text-left tracking-[0.12px] w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Eps 3 : How to write a book properly and correctly by
                      paying attention to various parts to support the story
                    </Text>
                    <Text
                      className="font-light font-publicsans leading-[25.00px] text-bluegray_600 text-left w-[100%]"
                      variant="body1"
                    >
                      Did you come here for something in particular or just
                      general Riker-bashing? And blowing into maximum warp
                      speed, you appeared for an instant to be in two places at
                      once. We have a sabot...
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-start mt-[10px] md:w-[100%] w-[42%]">
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_play.svg"
                          className="mr-[10px] text-center"
                          alt="play"
                        />
                      }
                      shape="RoundedBorder5"
                      size="lg"
                      variant="FillIndigo900"
                    >
                      <div className="bg-transparent cursor-pointer font-light leading-[normal] text-[14px] text-left text-white_A700">
                        Play Now
                      </div>
                    </Button>
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Go to Spotify Now
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1106px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start md:w-[100%] w-[40%]">
              <Button
                className="flex h-[76px] items-center justify-center rounded-[50%] w-[76px]"
                size="mdIcn"
                variant="icbFillGray302"
              >
                <Img
                  src="images/img_microphone.svg"
                  className="h-[50px]"
                  alt="microphone"
                />
              </Button>
              <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-black font-merriweather md:ml-[0] ml-[2px] text-gray_600 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Latest Podcasts{" "}
                </Text>
                <Text
                  className="font-normal font-publicsans mt-[5px] not-italic text-bluegray_600 text-left tracking-[0.12px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Get started on latest episodes
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[20px] w-[100%]">
              <div className="md:gap-[20px] gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1216.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1215.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1218.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1217.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Three"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1220.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Four"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1219.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Five"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1222.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Six"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1221.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Seven"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1224.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Eight"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1223.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Nine"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1215.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Ten"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-[12px] mt-[2px] rounded-[5px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[207px] items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1225.png')",
                      }}
                    >
                      <Button className="flex h-[72px] items-center justify-center w-[72px]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[35px]"
                          alt="Group Eleven"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold font-merriweather text-gray_600 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-[50px] md:w-[100%] w-[20%]">
              <Text
                className="bg-indigo_901 flex font-normal h-[40px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[40px]"
                as="h5"
                variant="h5"
              >
                1
              </Text>
              <Text
                className="bg-white_A700 flex font-normal h-[40px] items-center justify-center ml-[20px] not-italic rounded-[50%] text-center text-indigo_901 w-[40px]"
                as="h5"
                variant="h5"
              >
                2
              </Text>
              <div className="flex flex-row gap-[15px] items-start justify-between ml-[40px] w-[34%]">
                <Text
                  className="font-light text-indigo_901 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Next
                </Text>
                <Img
                  src="images/img_arrowright_indigo_901.svg"
                  className="h-[16px] mt-[3px] w-[16px]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray_600 flex items-center justify-center mt-[97px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default BloggerDetailsPage;
