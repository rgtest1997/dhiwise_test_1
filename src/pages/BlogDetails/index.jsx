import React from "react";

import Header from "components/Header";
import { Img, Text, Button, List } from "components";
import Footer from "components/Footer";

const BlogDetailsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-col relative w-[100%]">
              <Img
                src="images/img_rectangle20.png"
                className="h-[500px] mx-[auto] object-cover rounded-[25px] w-[100%]"
                alt="RectangleTwenty"
              />
              <div className="bg-white_A700 flex items-center justify-end mt-[-132px] mx-[auto] p-[48px] sm:px-[20px] md:px-[40px] rounded-[25px] shadow-bs3 w-[84%] z-[1]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[97%]">
                  <Text
                    className="font-light font-publicsans text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    <span className="md:text-[22px] sm:text-[20px] text-bluegray_600 text-[24px]">
                      Category
                    </span>
                    <span className="md:text-[22px] sm:text-[20px] text-black_900 text-[24px]">
                      {" "}
                    </span>
                    <span className="md:text-[22px] sm:text-[20px] text-pink_300 text-[24px] tracking-[0.12px] font-merriweather font-bold">
                      Writing
                    </span>
                  </Text>
                  <Text
                    className="font-merriweather italic mt-[27px] text-gray_600 text-left tracking-[0.12px] w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    How to write a book properly and correctly by paying
                    attention to various parts to support the story
                  </Text>
                  <div className="flex sm:flex-col flex-row font-publicsans sm:gap-[40px] items-center justify-between mt-[50px] w-[100%]">
                    <div className="flex sm:flex-1 flex-row gap-[14px] items-center justify-between sm:w-[100%] w-[31%]">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[70px] md:h-[auto] rounded-[50%] w-[70px]"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_600 text-left w-[auto]"
                          as="h4"
                          variant="h4"
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
                    <Button
                      className="flex items-center justify-center my-[4px] sm:mt-[0] text-center"
                      leftIcon={
                        <Img
                          src="images/img_signal.svg"
                          className="mr-[10px] text-center"
                          alt="signal"
                        />
                      }
                      shape="RoundedBorder5"
                      size="2xl"
                      variant="OutlinePink300"
                    >
                      <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[18px] text-left text-pink_300">
                        Share Now
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[74%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-light font-publicsans leading-[35.00px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know you’re dealing in stolen ore. But I
                  wanna talk about the assassination attempt on Lieutenant Worf.
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between mt-[50px] md:w-[100%] w-[97%]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[40px] w-[40px]"
                    alt="trash"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-bold font-merriweather italic text-bluegray_600 text-left w-[100%]"
                      as="h3"
                      variant="h3"
                    >
                      There is a way out of every box, a solution to every
                      puzzle; it’s just a matter of finding it.
                    </Text>
                    <Text
                      className="font-light font-publicsans text-bluegray_600 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      JEAN-LUC PICARD
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[50px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-bluegray_600 text-[18px]">
                    The game’s not big enough unless it scares you a little.
                    Wait a minute – you’ve been declared dead. You can’t give{" "}
                  </span>
                  <span className="text-bluegray_600 text-[18px] font-bold">
                    orders around
                  </span>
                  <span className="text-bluegray_600 text-[18px]">
                    {" "}
                    here. I’ll alert the crew. What? We’re not at all alike!
                    Flair is what marks the difference between artistry and mere
                    competence.
                  </span>
                </Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[10px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard.
                </Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[10px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <Text
                  className="font-bold font-merriweather mt-[42px] text-bluegray_600 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Lorem Ipsum Dolor Sit Amet
                </Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[20px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know you’re dealing in stolen ore. But I
                  wanna talk about the assassination attempt on Lieutenant Worf.
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] rounded-[15px] w-[100%]">
                  <Img
                    src="images/img_rectangle23.png"
                    className="md:flex-1 h-[334px] sm:h-[auto] object-cover rounded-[15px] md:w-[100%] w-[auto]"
                    alt="RectangleTwentyThree"
                  />
                  <Img
                    src="images/img_rectangle24.png"
                    className="md:flex-1 h-[334px] sm:h-[auto] object-cover rounded-[15px] md:w-[100%] w-[auto]"
                    alt="RectangleTwentyFour"
                  />
                </div>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[50px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  What’s a knock-out like you doing in a computer-generated gin
                  joint like this? But the probability of making a six is no
                  greater than that of rolling a seven. I guess it’s better to
                  be lucky than good.
                </Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[10px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Damage report! I’ve had twelve years to think about it. And if
                  I had it to do over again, I would have grabbed the phaser and
                  pointed it at you instead of them. Some days you get the bear,
                  and some days the bear gets you. Ensign Babyface! I’m afraid I
                  still don’t understand, sir. Mr. Crusher, ready a collision
                  course with the Borg ship. Yesterday I did not know how to eat
                  gagh. You’re going to be an interesting companion.
                </Text>
                <div className="flex flex-col font-publicsans items-start justify-end md:ml-[0] ml-[30px] mt-[20px] pr-[8px] py-[8px] md:w-[100%] w-[50%]">
                  <div className="flex flex-row gap-[15px] items-start justify-start mr-[auto] md:w-[100%] w-[54%]">
                    <div className="bg-bluegray_600 h-[10px] my-[3px] rounded-[50%] w-[10px]"></div>
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mr-[auto] mt-[16px] md:w-[100%] w-[72%]">
                    <div className="bg-bluegray_600 h-[10px] my-[3px] rounded-[50%] w-[10px]"></div>
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      At vero eos et accusamus et iusto odio.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mr-[auto] mt-[19px] md:w-[100%] w-[88%]">
                    <div className="bg-bluegray_600 h-[10px] sm:mt-[0] my-[3px] rounded-[50%] w-[10px]"></div>
                    <Text
                      className="font-light text-bluegray_600 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Excepteur sint occaecat cupidatat non proident.
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[20px] text-bluegray_600 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[50px] rounded-[5px] md:w-[100%] w-[52%]">
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Tags
                </Text>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between rounded-[5px] w-[100%]">
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[96px] text-[18px] text-bluegray_600 text-center w-[auto]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    Writing
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[97px] text-[18px] text-bluegray_600 text-center w-[auto]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    Tutorial
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[93px] text-[18px] text-bluegray_600 text-center w-[auto]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    How to
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-[18px] text-bluegray_600 text-center w-[auto]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    Book
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-[18px] text-bluegray_600 text-center w-[auto]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    2020
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] justify-start md:ml-[0] ml-[153px] mt-[66px] md:w-[100%] w-[64%]">
                <div className="md:h-[120px] h-[153px] relative w-[100%]">
                  <Img
                    src="images/img_group_blue_51.svg"
                    className="absolute h-[83px] left-[0] top-[0] w-[17%]"
                    alt="Group"
                  />
                  <Text
                    className="absolute bottom-[0] font-light leading-[40.00px] right-[0] text-bluegray_600 text-center sm:w-[100%] w-[92%]"
                    as="h4"
                    variant="h4"
                  >
                    Increase your knowledge by reading new things and I will
                    share whatever I know for you, as long as I enjoy it
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-end ml-[auto] md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="h-[60px] md:h-[auto] rounded-[50%] w-[60px]"
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
                      Podcaster & Blogger
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[27.39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1356px] mt-[150px] mx-[auto] md:px-[20px] rounded-[5px] w-[100%]"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat flex flex-1 h-[273px] items-start justify-end p-[28px] sm:px-[20px] rounded-[5px] w-[100%]"
              style={{ backgroundImage: "url('images/img_list.png')" }}
            >
              <div className="flex flex-col gap-[23px] items-start justify-start mb-[3px] mt-[126px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold font-merriweather italic text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Consistent way of working to train yourself
                </Text>
                <Text
                  className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  5 minutes ago
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 h-[273px] items-start justify-end p-[25px] sm:px-[20px] rounded-[5px] w-[100%]"
              style={{ backgroundImage: "url('images/img_list_273X433.png')" }}
            >
              <div className="flex flex-col gap-[23px] items-start justify-start mb-[6px] mt-[128px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold font-merriweather italic text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Consistent way of working to train yourself
                </Text>
                <Text
                  className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  5 minutes ago
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 h-[273px] items-start justify-end p-[25px] sm:px-[20px] rounded-[5px] w-[100%]"
              style={{ backgroundImage: "url('images/img_list_1.png')" }}
            >
              <div className="flex flex-col gap-[23px] items-start justify-start mb-[6px] mt-[128px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold font-merriweather italic text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Consistent way of working to train yourself
                </Text>
                <Text
                  className="font-light font-publicsans text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  5 minutes ago
                </Text>
              </div>
            </div>
          </List>
          <Footer className="bg-gray_600 flex items-center justify-center mt-[100px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
