import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import Header from "../../components/Header";
import ThermofisherScientificCorporateInvestorsInvestors from "../../components/ThermofisherScientificCorporateInvestorsInvestors";

const data = [
  { twentythree: "23%", overallreturns: "Overall returns" },
  { twentythree: "$1.3 billion", overallreturns: "In R&D Investment" },
  { twentythree: "$1.3 billion", overallreturns: "In R&D Investment" },
  { twentythree: "$1.3 billion", overallreturns: "In R&D Investment" },
];

export default function ThermofisherScientificCorporateInvestorsPage() {
  return (
    <>
      <Helmet>
        <title>Kunal's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <Header />
        <div className="relative h-[1089px]">
          {/* hero section */}
          <div className="absolute left-0 right-0 top-[7%] m-auto flex w-full flex-col items-center gap-[92px] md:gap-[69px] sm:gap-[46px]">
            <div className="container-xs md:p-5">
              <div className="flex flex-col items-start gap-[33px]">
                <Text size="2xl" as="p" className="w-full">
                  <span className="font-normal text-gray-900">
                    <>
                      Healthier, Cleaner and Safer.
                      <br />
                    </>
                  </span>
                  <span className="font-bold text-gray-900">The world leader in serving science</span>
                </Text>
                <a href="#">
                  <Text size="s" as="p" className="tracking-[0.64px] !text-red-A700">
                    READ MORE
                  </Text>
                </a>
              </div>
            </div>
            <div className="relative h-[384px] self-stretch md:h-auto">
              <a href="#" className="mb-3 ml-[100px] md:ml-0">
                <Text size="s" as="p" className="tracking-[0.64px] !text-red-A700">
                  READ MORE
                </Text>
              </a>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[384px] w-full items-center justify-between gap-5 bg-[url(/public/images/img_group_21.png)] bg-cover bg-no-repeat md:relative md:h-auto md:flex-col">
                <div className="flex h-[384px] w-[59%] items-center justify-center bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat px-14 py-[100px] md:h-auto md:w-full md:p-5">
                  <Text size="lg" as="p" className="w-[81%] !font-normal leading-9 !text-white-A700">
                    <span className="text-white-A700">
                      Thermo Fisher Scientific Inc. is the world leader in serving science, with annual revenue
                      over&nbsp;
                    </span>
                    <span className="font-medium text-white-A700">
                      <>
                        $40 billion. <br />
                      </>
                    </span>
                    <span className="text-white-A700">
                      <>
                        <br />
                        Our Mission is to enable our customers to make the world&nbsp;
                      </>
                    </span>
                    <span className="font-medium text-white-A700">healthier, cleaner and safer.</span>
                  </Text>
                </div>
                <Img
                  src="images/img_vector_red_a700.png"
                  alt="vector"
                  className="h-[384px] w-[7%] object-cover md:w-full"
                />
              </div>
            </div>
          </div>

          {/* stock info section */}
          <div className="absolute bottom-1/4 left-0 right-0 m-auto flex w-full justify-center bg-teal-100_4c py-[21px] sm:py-5">
            <div className="container-xs mb-[7px] flex items-start justify-between gap-5 md:flex-col md:p-5">
              <div className="flex items-center gap-[33px] md:flex-col">
                <Text as="p" className="self-end !font-medium !text-teal-700">
                  Stock Price
                </Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Text size="xl" as="p">
                    $ 588.84
                  </Text>
                  <Text size="s" as="p" className="self-end !font-normal !text-gray-900_cc">
                    04/14/2023 | 04:00 pm (Pricing delayed by 15 mins)
                  </Text>
                </div>
              </div>
              <Button color="teal_700" shape="round" className="min-w-[92px] !rounded-sm font-medium">
                NYSE : TMO
              </Button>
            </div>
          </div>

          {/* investor value section */}
          <div className="absolute bottom-[0.43px] left-0 right-0 m-auto flex w-full max-w-[1242px] md:p-5">
            <div className="flex w-full flex-col items-start gap-[43px]">
              <Heading as="h1" className="uppercase tracking-[1.80px]">
                Investor value proposition{" "}
              </Heading>
              <div className="flex gap-0.5 self-stretch md:flex-col">
                {data.map((d, index) => (
                  <div key={"listtwentythree" + index} className="flex w-full justify-center bg-gray-100 p-6 sm:p-5">
                    <div className="mb-2.5 mt-[5px] flex flex-col items-start gap-[5px]">
                      <Text size="xl" as="p">
                        {d.twentythree}
                      </Text>
                      <Text size="s" as="p" className="!font-normal">
                        {d.overallreturns}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* footer section */}
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
            <ThermofisherScientificCorporateInvestorsInvestors className="relative z-[1] flex items-start justify-between gap-5 bg-white-A700 shadow-xs md:flex-col" />
            <Img
              src="images/img_rectangle_19912_782x1438.png"
              alt="image"
              className="relative mt-[-169px] h-[782px] w-full object-cover md:h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
