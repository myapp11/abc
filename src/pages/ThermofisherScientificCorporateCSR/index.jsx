import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img } from "../../components";
import Header from "../../components/Header";
import ThermofisherScientificCorporateCSRCsr from "../../components/ThermofisherScientificCorporateCSRCsr";
import ThermofisherScientificCorporateCSRT1 from "../../components/ThermofisherScientificCorporateCSRT1";

export default function ThermofisherScientificCorporateCSRPage() {
  return (
    <>
      <Helmet>
        <title>Kunal's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* navigation bar section */}
        <Header />
        <div className="flex flex-col items-center gap-[2052px] md:gap-[1539px] sm:gap-[1026px]">
          <div className="relative h-[1150px] self-stretch">
            {/* hero section */}
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center">
              <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[48%] flex-col items-start gap-[26px] md:w-full">
                  <Heading as="h1" className="uppercase tracking-[1.80px]">
                    CSR
                  </Heading>
                  <Text size="3xl" as="p" className="w-full">
                    <span className="font-light text-gray-900">Together we are&nbsp;</span>
                    <span className="font-bold text-gray-900">building a brighter future</span>
                  </Text>
                </div>
                <div className="mb-[7px] flex w-[44%] flex-col items-start gap-[37px] self-end pb-[11px] md:w-full">
                  <Text as="p" className="w-full leading-7">
                    <span className="font-light text-gray-900">
                      As the world leader in serving science, we understand that we have a unique opportunity and
                      responsibility to
                    </span>
                    <span className="text-gray-900">&nbsp;</span>
                    <span className="font-medium text-gray-900">
                      use our position to make a positive impact on society – not only by enabling our customers’
                      success, but also through our actions as a Company to make the world a better place.
                    </span>
                  </Text>
                  <a href="#">
                    <Text size="s" as="p" className="tracking-[0.64px] !text-red-A700">
                      READ MORE
                    </Text>
                  </a>
                </div>
              </div>
              <Img
                src="images/img_rectangle_19912_869x1438.png"
                alt="image"
                className="relative mt-[-21px] h-[869px] w-full object-cover md:h-auto"
              />
            </div>
            <div className="absolute left-0 right-0 top-[0.00px] m-auto w-full">
              {/* mission statement section */}
              <ThermofisherScientificCorporateCSRCsr className="relative z-[1] flex items-start justify-between gap-5 bg-white-A700 shadow-xs md:flex-col" />

              {/* operations highlights section */}
              <div className="relative mt-[-97px] flex md:flex-col">
                <ThermofisherScientificCorporateCSRT1 className="relative h-[500px] w-full md:h-auto md:p-5" />
                <div className="relative h-[500px] w-full md:h-auto md:p-5">
                  <Img
                    src="images/img_rectangle_19941_500x360.png"
                    alt="image"
                    className="h-[500px] w-full object-cover"
                  />
                  <Text className="absolute bottom-[0.00px] left-0 right-0 m-auto w-max" />
                </div>
                <div className="relative h-[500px] w-full md:h-auto md:p-5">
                  <Img src="images/img_rectangle_19941_1.png" alt="image" className="h-[500px] w-full object-cover" />
                  <Text className="absolute bottom-[0.00px] left-0 right-0 m-auto w-max" />
                </div>
                <div className="relative h-[500px] w-full md:h-auto md:p-5">
                  <Img src="images/img_rectangle_19941_2.png" alt="image" className="h-[500px] w-full object-cover" />
                  <Text className="absolute bottom-[0.00px] left-0 right-0 m-auto w-max" />
                </div>
              </div>
            </div>

            {/* csr commitment section */}
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full justify-center bg-black-900 py-[77px] md:py-5">
              <div className="container-xs flex flex-col items-start gap-[26px] md:p-5">
                <Heading as="h2" className="uppercase tracking-[1.80px] !text-lime-700">
                  OUR CSR COMMITMENT
                </Heading>
                <Text as="p" className="w-full leading-[30px] !text-white-A700">
                  <span className="text-white-A700">Our CSR approach is focused on four key pillars –&nbsp;</span>
                  <span className="font-bold text-white-A700">
                    <>
                      Operations, Colleagues, Communities and Environment. <br />
                      This strategic framework allows us to effectively manage ESG priorities that are fundamental to
                      our business, driving competitive differentiation, and creating sustainable value for all our
                      stakeholders.
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>

          {/* ethics section */}
          <div className="container-xs flex flex-col items-start gap-[225px] md:gap-[168px] md:p-5 sm:gap-28">
            <Heading as="h2" className="uppercase tracking-[1.80px]">
              ETHICS
            </Heading>
            <div className="ml-[7px] flex w-[16px] flex-col gap-[139px] md:ml-0 md:gap-[104px] sm:gap-[69px]">
              <div className="h-[5px] w-[16px] bg-red-A700" />
              <div className="h-[5px] w-[16px] bg-red-A700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
