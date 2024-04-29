import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Input } from "../../components";
import Header from "../../components/Header";
import ThermofisherScientificCorporateNewsroomRowdeliveringon from "../../components/ThermofisherScientificCorporateNewsroomRowdeliveringon";

export default function ThermofisherScientificCorporateNewsroomPage() {
  return (
    <>
      <Helmet>
        <title>Kunal's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header navigation section */}
        <Header />

        {/* newsroom highlights section */}
        <div className="relative h-[1325px] md:h-auto">
          {/* podcasts section */}
          <div className="container-xs absolute bottom-[8%] left-0 right-0 my-auto flex md:p-5">
            <div className="flex w-full flex-col items-start gap-[45px]">
              <Heading as="h1" className="uppercase tracking-[1.80px]">
                Latest Podcasts
              </Heading>
              <div className="flex gap-10 self-stretch md:flex-col">
                {[...Array(2)].map((d, index) => (
                  <ThermofisherScientificCorporateNewsroomRowdeliveringon
                    deliveringontext="Delivering on the promise of cell therapies: Programmed immune cells attack cancer and other..."
                    watchsciencetext="Watch Science with a Twist | Season 2 : Episode 10"
                    key={"listdeliveringo" + index}
                    className="flex w-full items-center gap-6 bg-gray-100 pr-6 sm:flex-col sm:pr-5"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start justify-center py-[7px]">
                <Text size="s" as="p" className="tracking-[0.64px] !text-gray-800">
                  VIEW ALL PODCASTS
                </Text>
                <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
              </div>
            </div>
          </div>

          {/* mission statement section */}
          <div className="w-full">
            <div className="relative z-[1] flex items-start justify-between gap-5 bg-white-A700 shadow-xs md:flex-col">
              <div className="flex w-[46%] items-start justify-center gap-6 md:w-full md:p-5 sm:flex-col">
                <div className="flex h-[346px] flex-1 items-start bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat py-[45px] md:h-auto md:py-5 sm:self-stretch">
                  <div className="mb-2.5 flex w-[76%] flex-col items-start md:w-full md:p-5">
                    <div className="flex h-[57px] w-[59%] items-start justify-center bg-[url(/public/images/img_group_13.svg)] bg-cover bg-no-repeat p-3 md:h-auto md:w-full">
                      <Text as="p" className="mb-[7px] !font-medium !text-white-A700">
                        Our Mission
                      </Text>
                    </div>
                    <Text
                      size="xs"
                      as="p"
                      className="mt-6 w-[88%] self-end !font-normal leading-[22px] !text-white-A700 md:w-full"
                    >
                      <span className="text-white-A700">
                        Everything we do starts with our Mission: to enable our customers to make the world&nbsp;
                      </span>
                      <span className="text-xl font-medium text-white-A700">
                        <>
                          healthier, cleaner, <br />
                          and safer.
                        </>
                      </span>
                    </Text>
                    <div className="ml-10 mt-[13px] flex items-start gap-4 rounded bg-red-A700 pr-4 md:ml-0">
                      <div className="h-full w-[2px] bg-white-A700" />
                      <a href="#" className="mt-2.5">
                        <Text size="xs" as="p" className="!text-gray-100">
                          Read More
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <Input
                  shape="square"
                  name="submenu_one"
                  placeholder={`Press Releases`}
                  prefix={
                    <div className="flex h-[32px] w-[32px] items-center justify-center">
                      <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                    </div>
                  }
                  className="mt-[49px] w-[32%] sm:w-full"
                />
              </div>
              <div className="mt-[49px] flex w-[49%] flex-col items-start gap-[137px] md:w-full md:gap-[102px] md:p-5 sm:gap-[68px]">
                <div className="flex w-[88%] justify-between gap-5 md:w-full sm:flex-col">
                  <Input
                    shape="square"
                    name="submenu_three"
                    placeholder={`In the News`}
                    prefix={
                      <div className="flex h-[32px] w-[32px] items-center justify-center">
                        <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                      </div>
                    }
                    className="w-[27%] sm:w-full"
                  />
                  <Input
                    shape="square"
                    name="submenu_five"
                    placeholder={`Podcast : Science with a twist`}
                    prefix={
                      <div className="flex h-[32px] w-[32px] items-center justify-center">
                        <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                      </div>
                    }
                    className="w-[53%] sm:w-full"
                  />
                </div>
                <Img src="images/img_vector.png" alt="vector" className="h-[216px] w-[17%] self-end object-cover" />
              </div>
            </div>
            <div className="relative mt-[-370px] flex flex-col items-center gap-[61px] sm:gap-[30px]">
              <div className="container-xs flex pb-[11px] md:p-5">
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                    <Text size="2xl" as="p" className="w-[48%] md:w-full">
                      <span className="font-bold text-gray-900">
                        <>
                          Advance health equity <br />
                        </>
                      </span>
                      <span className="font-normal text-gray-900">
                        <>
                          among HIV positive youth <br />
                          in Sub-Saharan Africa
                        </>
                      </span>
                    </Text>
                    <Heading size="s" as="h2" className="w-[44%] leading-7 !text-gray-900 md:w-full">
                      <>
                        Thermo Fisher Scientific and Project HOPE Partner to Advance Health Equity Among HIV Positive
                        Youth in Sub-Saharan Africa.
                        <br />
                        <br />
                        Collaboration designed to improve health outcomes by enabling expanded access to HIV testing and
                        support services in Nigeria
                      </>
                    </Heading>
                  </div>
                  <a href="#">
                    <Text size="s" as="p" className="tracking-[0.64px] !text-red-A700">
                      READ MORE
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex h-[461px] items-center justify-between gap-5 self-stretch bg-[url(/public/images/img_group_24.png)] bg-cover bg-no-repeat md:h-auto md:flex-col">
                <div className="flex h-[461px] w-[35%] items-start bg-[url(/public/images/img_group_9.svg)] bg-cover bg-no-repeat py-20 pl-20 pr-14 md:h-auto md:w-full md:p-5">
                  <div className="mb-[295px] ml-5 flex h-[6px] w-[66px] md:ml-0" />
                </div>
                <Img
                  src="images/img_vector_red_a700.png"
                  alt="vector"
                  className="h-[461px] w-[20%] object-cover md:w-full"
                />
              </div>
            </div>
          </div>
          <Heading as="h2" className="absolute left-[7%] top-[26.57px] z-[2] m-auto uppercase tracking-[1.80px]">
            NEWSROOM
          </Heading>
          <Img
            src="images/img_rectangle_19912_1044x1438.png"
            alt="image"
            className="absolute bottom-[0.00px] left-0 right-0 z-[3] m-auto h-[1044px] w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
