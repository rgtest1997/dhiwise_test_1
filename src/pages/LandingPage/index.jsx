import React from "react";

import Header from "components/Header";
import { Img, Text, Button, List, Line, Input } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans sm:gap-[40px] md:gap-[40px] gap-[90px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex items-center justify-start max-w-[1030px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[32px] justify-start md:w-[100%] w-[auto]">
                <div className="flex md:flex-col flex-row md:gap-[44px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_cart.svg"
                    className="h-[61px] md:mt-[0] mt-[66px] w-[61px]"
                    alt="cart"
                  />
                  <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-merriweather text-center text-gray_600 w-[100%]"
                      as="h1"
                      variant="h1"
                    >
                      Share via writing and podcasts, hope you enjoy
                    </Text>
                    <Text
                      className="font-normal font-publicsans leading-[35.00px] not-italic text-center text-gray_601 sm:w-[100%] w-[78%]"
                      as="h4"
                      variant="h4"
                    >
                      Increase your knowledge by reading new things and I will
                      share whatever I know for you, as long as I enjoy it
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-end ml-[auto] rounded-[35.5px] md:w-[100%] w-[56%]">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[221px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                    shape="RoundedBorder35"
                    size="3xl"
                    variant="OutlineIndigo90056"
                  >
                    Read More
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[271px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-indigo_900 tracking-[0.12px] w-[auto]"
                    shape="RoundedBorder35"
                    size="3xl"
                    variant="OutlineIndigo201"
                  >
                    Listen to Podcasts
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_ticket.svg"
                className="h-[61px] md:mt-[0] mt-[205px] w-[61px]"
                alt="ticket"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-center justify-start max-w-[1111px] mt-[162px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between sm:w-[100%] w-[39%]">
                <Button
                  className="flex h-[76px] items-center justify-center rounded-[50%] w-[76px]"
                  size="mdIcn"
                  variant="icbFillGray300"
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
                    className="font-normal font-publicsans mt-[5px] not-italic text-gray_601 text-left tracking-[0.12px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Get started on latest episodes
                  </Text>
                </div>
              </div>
              <Text
                className="font-bold text-indigo_901 text-left tracking-[0.12px] w-[auto]"
                variant="body1"
              >
                See all podcasts
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-[100%]">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group1209.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      variant="icbFillGray60076"
                    >
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
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group1210.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      variant="icbFillGray60076"
                    >
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
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group1211.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      variant="icbFillGray60076"
                    >
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
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group1212.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      variant="icbFillGray60076"
                    >
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
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start max-w-[1110px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[50px] justify-start md:w-[100%] w-[66%]">
              <List
                className="flex-col gap-[50px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-[40px] items-center justify-between md:ml-[0] ml-[2px] w-[100%]">
                      <div className="flex sm:flex-1 flex-row gap-[14px] items-center justify-between sm:w-[100%] w-[34%]">
                        <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-[auto] rounded-[50%] w-[70px]"
                          alt="EllipseFive"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600 text-left w-[auto]"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-light text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        <span className="text-bluegray_600 text-[14px] font-publicsans">
                          Category{" "}
                        </span>
                        <span className="text-pink_300 text-[18px] font-merriweather font-black">
                          Writing
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="font-merriweather italic md:ml-[0] ml-[2px] mt-[30px] text-gray_600 text-left tracking-[0.12px] w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      src="images/img_rectangle11.png"
                      className="h-[390px] sm:h-[auto] md:ml-[0] ml-[2px] mt-[30px] object-cover rounded-[5px] w-[100%]"
                      alt="RectangleEleven"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] md:ml-[0] ml-[2px] mt-[30px] text-bluegray_900 text-left w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-[20px] md:w-[100%] w-[65%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:w-[100%] w-[34%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[24%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between sm:w-[100%] w-[23%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center mt-[20px] text-center"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[19px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="5xl"
                      variant="FillIndigo90067"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-bold font-publicsans leading-[normal] text-[18px] text-indigo_900 text-left tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-[40px] items-center justify-between md:ml-[0] ml-[2px] w-[100%]">
                      <div className="flex sm:flex-1 flex-row gap-[14px] items-center justify-between sm:w-[100%] w-[34%]">
                        <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-[auto] rounded-[50%] w-[70px]"
                          alt="EllipseFive One"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600 text-left w-[auto]"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-light text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        <span className="text-bluegray_600 text-[14px] font-publicsans">
                          Category{" "}
                        </span>
                        <span className="text-pink_300 text-[18px] font-merriweather font-black">
                          Writing
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="font-merriweather italic md:ml-[0] ml-[2px] mt-[30px] text-gray_600 text-left tracking-[0.12px] w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      src="images/img_rectangle11_390X728.png"
                      className="h-[390px] sm:h-[auto] md:ml-[0] ml-[2px] mt-[30px] object-cover rounded-[5px] w-[100%]"
                      alt="RectangleEleven One"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] md:ml-[0] ml-[2px] mt-[30px] text-bluegray_900 text-left w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-[20px] md:w-[100%] w-[65%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:w-[100%] w-[34%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[24%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between sm:w-[100%] w-[23%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center mt-[20px] text-center"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[19px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="5xl"
                      variant="FillIndigo90067"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-bold font-publicsans leading-[normal] text-[18px] text-indigo_900 text-left tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-[40px] items-center justify-between md:ml-[0] ml-[2px] w-[100%]">
                      <div className="flex sm:flex-1 flex-row gap-[14px] items-center justify-between sm:w-[100%] w-[34%]">
                        <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-[auto] rounded-[50%] w-[70px]"
                          alt="EllipseFive Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600 text-left w-[auto]"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-light text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        <span className="text-bluegray_600 text-[14px] font-publicsans">
                          Category{" "}
                        </span>
                        <span className="text-pink_300 text-[18px] font-merriweather font-black">
                          Writing
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="font-merriweather italic md:ml-[0] ml-[2px] mt-[30px] text-gray_600 text-left tracking-[0.12px] w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      src="images/img_rectangle11_1.png"
                      className="h-[390px] sm:h-[auto] md:ml-[0] ml-[2px] mt-[30px] object-cover rounded-[5px] w-[100%]"
                      alt="RectangleEleven Two"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] md:ml-[0] ml-[2px] mt-[30px] text-bluegray_900 text-left w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-[20px] md:w-[100%] w-[65%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:w-[100%] w-[34%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[24%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between sm:w-[100%] w-[23%]">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center mt-[20px] text-center"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[19px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="5xl"
                      variant="FillIndigo90067"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-bold font-publicsans leading-[normal] text-[18px] text-indigo_900 text-left tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
              <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] w-[29%]">
                <Text
                  className="bg-indigo_900 flex font-normal h-[40px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[40px]"
                  as="h5"
                  variant="h5"
                >
                  1
                </Text>
                <Text
                  className="bg-white_A700 flex font-normal h-[40px] items-center justify-center ml-[20px] not-italic rounded-[50%] text-center text-indigo_900 w-[40px]"
                  as="h5"
                  variant="h5"
                >
                  2
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-between ml-[40px] w-[34%]">
                  <Text
                    className="font-light text-indigo_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Next
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[16px] mt-[3px] w-[16px]"
                    alt="arrowright Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start md:w-[100%] w-[32%]">
              <div
                className="common-pointer flex flex-col items-start justify-start rounded-[5px] w-[100%]"
                onClick={() => navigate("/bloggerdetails")}
              >
                <Img
                  src="images/img_rectangle10.png"
                  className="h-[400px] sm:h-[auto] object-cover rounded-[5px] w-[100%]"
                  alt="RectangleTen"
                />
                <div className="flex flex-col items-start justify-start mt-[20px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold font-merriweather text-gray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Jhone Leonardo
                  </Text>
                  <Text
                    className="font-medium font-publicsans mt-[5px] text-bluegray_600 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Podcaster & Blogger
                  </Text>
                </div>
                <Text
                  className="font-light leading-[30.00px] mt-[26px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  I want to share knowledge in my own style. I have been working
                  on various things that I think I really need to share with you
                  all. I am a jhone podcaster and blogger
                </Text>
              </div>
              <div className="flex flex-col font-merriweather gap-[20px] items-start justify-start md:w-[100%] w-[56%]">
                <Text
                  className="font-bold text-gray_600 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Follow Me On
                </Text>
                <div className="flex flex-col font-publicsans gap-[15px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                    <Img
                      src="images/img_email1.svg"
                      className="h-[20px] w-[20px]"
                      alt="emailOne"
                    />
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Hellojhone@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:w-[100%] w-[77%]">
                    <Img
                      src="images/img_camera.svg"
                      className="h-[20px] w-[20px]"
                      alt="camera"
                    />
                    <Text
                      className="font-light ml-[5px] text-bluegray_600 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @Johoe_Podcast
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:w-[100%] w-[78%]">
                    <Img
                      src="images/img_twitter.svg"
                      className="common-pointer h-[20px] w-[20px]"
                      onClick={() => navigate("")}
                      alt="twitter"
                    />
                    <Text
                      className="font-light ml-[5px] text-bluegray_600 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @JohoeLeonardo
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-merriweather items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_600 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Tranding Blog
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex h-[200px] items-center justify-start mt-[20px] rounded-[5px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_bloghead.png')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-[10px] h-[200px] items-start justify-end p-[26px] sm:px-[20px] rounded-[5px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_title.png')" }}
                  >
                    <Text
                      className="font-bold font-merriweather italic md:ml-[0] ml-[14px] mt-[71px] text-left text-white_A700 sm:w-[100%] w-[91%]"
                      as="h5"
                      variant="h5"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Text
                      className="font-light font-publicsans md:ml-[0] ml-[14px] text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      5 minutes ago
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-[20px] grid items-center mt-[25px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle14.png"
                      className="h-[96px] md:h-[auto] object-cover rounded-[5px] w-[96px]"
                      alt="RectangleFourteen"
                    />
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle14_96X96.png"
                      className="h-[96px] md:h-[auto] object-cover rounded-[5px] w-[96px]"
                      alt="RectangleFourteen One"
                    />
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle14_1.png"
                      className="h-[96px] md:h-[auto] object-cover rounded-[5px] w-[96px]"
                      alt="RectangleFourteen Two"
                    />
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle14_2.png"
                      className="h-[96px] md:h-[auto] object-cover rounded-[5px] w-[96px]"
                      alt="RectangleFourteen Three"
                    />
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-merriweather gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_600 text-left tracking-[0.12px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Categories
                </Text>
                <div className="flex flex-col font-publicsans items-center justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Writing
                    </Text>
                    <Text
                      className="bg-blue_50 flex font-normal h-[40px] items-center justify-center not-italic rounded-[50%] text-center text-gray_600 w-[40px]"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text>
                  </div>
                  <Line className="bg-bluegray_100 h-[0.5px] mt-[10px] w-[100%]" />
                  <div className="flex flex-row items-center justify-between mt-[9px] w-[100%]">
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Working
                    </Text>
                    <Text
                      className="bg-blue_50 flex font-normal h-[40px] items-center justify-center not-italic rounded-[50%] text-center text-gray_600 w-[40px]"
                      as="h5"
                      variant="h5"
                    >
                      5
                    </Text>
                  </div>
                  <Line className="bg-bluegray_100 h-[0.5px] mt-[10px] w-[100%]" />
                  <div className="flex flex-row items-center justify-between mt-[9px] w-[100%]">
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Podcaster
                    </Text>
                    <Text
                      className="bg-blue_50 flex font-normal h-[40px] items-center justify-center not-italic rounded-[50%] text-center text-gray_600 w-[40px]"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green_50 flex items-center justify-end max-w-[1110px] mt-[100px] mx-[auto] p-[50px] md:px-[20px] rounded-[5px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between mt-[32px] md:w-[100%] w-[99%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-light font-publicsans text-indigo_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  NEWSLETTER
                </Text>
                <Text
                  className="font-black font-merriweather mt-[5px] text-gray_600 text-left w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Subscribe to our website newsletter to receive news and
                  updates.
                </Text>
                <Text
                  className="font-light font-publicsans mt-[20px] text-bluegray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Get special offers directly to your email every week!
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] justify-start md:w-[100%] w-[44%]">
                <div className="flex flex-col gap-[20px] items-start justify-start rounded-[5px] w-[100%]">
                  <Input
                    className="font-bold leading-[normal] p-[0] text-[18px] placeholder:text-indigo_900_79 text-indigo_900_79 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    type="email"
                    name="field"
                    placeholder="Your Email"
                    size="md"
                    variant="OutlineIndigo900"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[137px] text-[18px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillIndigo900"
                  >
                    Subscribe
                  </Button>
                </div>
                <Button
                  className="flex h-[77px] items-center justify-center md:ml-[0] ml-[283px] mr-[77px] w-[77px]"
                  size="smIcn"
                  variant="icbOutlinePink3007f"
                >
                  <Img
                    src="images/img_ticket_77X77.svg"
                    className="h-[55px]"
                    alt="ticket One"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_600 flex items-center justify-center mt-[129px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
