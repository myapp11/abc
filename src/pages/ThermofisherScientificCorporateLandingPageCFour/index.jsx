import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import ThermofisherScientificCorporateLandingPageCFourAboutupdated from "../../components/ThermofisherScientificCorporateLandingPageCFourAboutupdated";

export default function ThermofisherScientificCorporateLandingPageCFourPage() {
  return (
    <>
      <Helmet>
        <title>Kunal's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* about section */}
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center self-end">
          {/* navigation header section */}
          <header className="relative z-[5] self-stretch">
            <div className="flex items-center justify-between gap-5 bg-white-A700 px-4 md:flex-col">
              <Img src="images/img_header_logo.svg" alt="headerlogo" className="h-[28px] w-[128px]" />
              <div className="flex w-[70%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="flex items-center gap-[50px] md:flex-col">
                  <ul className="flex flex-wrap gap-10">
                    <li>
                      <a href="#" className="flex items-center justify-center bg-white-A700">
                        <Text />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center bg-white-A700">
                        <Text />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center bg-white-A700">
                        <Text />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center bg-white-A700">
                        <Text />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center bg-white-A700">
                        <Text />
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <Img src="images/img_search.svg" alt="search" className="h-[16px] w-[16px] md:w-full" />
                  </a>
                </div>
                <div className="relative h-[32px] w-[17%] pr-5 md:h-auto md:w-full">
                  <div className="h-[32px] w-full rounded bg-gray-500" />
                  <Text
                    size="xs"
                    as="p"
                    className="absolute left-0 right-0 top-[5.53px] m-auto w-max text-center !font-normal !text-white-A700"
                  >
                    Thermofisher.com
                  </Text>
                </div>
              </div>
            </div>
          </header>

          {/* mission statement section */}
          <div className="relative mt-[-2px] h-[1065px] self-stretch md:h-auto">
            <Heading as="h1" className="ml-[99px] mt-7 uppercase tracking-[1.80px] md:ml-0">
              ABOUT
            </Heading>

            {/* company information section */}
            <div className="absolute left-0 right-0 top-[2.00px] m-auto w-full">
              <ThermofisherScientificCorporateLandingPageCFourAboutupdated className="relative z-[2] flex items-start gap-6 bg-white-A700 shadow-xs md:flex-col" />

              {/* video presentation section */}
              <div className="relative mt-[-32px] flex h-[396px] items-center bg-[url(/public/images/img_group_62.png)] bg-cover bg-no-repeat md:h-auto md:flex-col">
                <div className="relative z-[1] flex h-[396px] w-[44%] items-start bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat p-10 md:h-auto md:w-full md:p-5">
                  <div className="mb-2.5 ml-[60px] flex flex-col items-start gap-[236px] md:ml-0 md:gap-[177px] sm:gap-[118px]">
                    <div className="flex items-start gap-2.5">
                      <Button color="gray_900_7f" size="md" shape="circle" className="w-[40px] !rounded-[20px]">
                        <Img src="images/img_contrast.svg" />
                      </Button>
                      <Text size="xs" as="p" className="mt-[9px] !text-white-A700">
                        Watch this video
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="!text-white-A700">
                      Going a step beyond means...
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle_19900.png"
                  alt="image"
                  className="relative ml-[-129px] h-[396px] w-[56%] object-cover md:ml-0 md:w-full"
                />
              </div>
            </div>

            {/* customer impact section */}
            <div className="absolute bottom-[0.00px] left-0 right-0 z-[3] m-auto flex w-full flex-col items-center">
              <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
                <Text size="3xl" as="p" className="w-[48%] md:w-full">
                  <span className="font-normal text-gray-900">To enable our customers to make&nbsp;</span>
                  <span className="font-bold text-gray-900">the world healthier, cleaner and safer</span>
                </Text>
                <div className="flex w-[44%] flex-col gap-8 md:w-full">
                  <Text as="p" className="!font-medium leading-7">
                    Whether they are improving life for patients, protecting our global climate or keeping people safe,
                    our customers look to Thermo Fisher Scientific for innovative solutions. Products and services sold
                    under the following Thermo Fisher brands enable customers to push science and technology a step
                    beyond.
                  </Text>
                  <div className="flex p-[7px]">
                    <Text size="s" as="p" className="self-start tracking-[0.64px] !text-red-A700">
                      GET TO KNOW US
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_19912.png"
                alt="image"
                className="relative mt-[-83px] h-[782px] w-full object-cover md:h-auto"
              />
            </div>
            <Img
              src="images/img_group_196.png"
              alt="image"
              className="absolute left-0 right-0 top-[0.00px] z-[4] m-auto h-[844px] w-full object-cover"
            />
          </div>

          {/* call to action section */}
          <div className="container-xs mt-[65px] flex flex-col items-end pl-14 pr-[353px] md:p-5 md:px-5">
            <div className="flex p-2">
              <Text size="s" as="p" className="tracking-[0.64px] !text-red-A700">
                READ COMPLETE LETTER
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
