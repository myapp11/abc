import React from "react";
import { Img, Input, Text } from "./..";

export default function ThermofisherScientificCorporateCSRCsr({
  missiontext = "Our Mission",
  descriptiontext,
  readmoretext = "Read More",
  sustainabilitytextone = "Corporate Governance",
  sustainabilitytextthree = "Ethics & Compliance",
  sustainabilitytextfive = "Reporting",
  sustainabilitytextseven = "Operations",
  sustainabilitytextnine = "Colleagues",
  ...props
}) {
  return (
    <div {...props}>
      <div className="mb-[104px] flex w-[83%] items-center justify-center gap-6 md:w-full md:flex-col">
        <div className="flex h-[346px] w-[37%] items-start bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat py-[45px] md:h-auto md:w-full md:py-5">
          <div className="mb-2.5 flex w-[76%] flex-col items-start md:w-full md:p-5">
            <div className="flex h-[57px] w-[59%] items-start justify-center bg-[url(/public/images/img_group_13.svg)] bg-cover bg-no-repeat p-3 md:h-auto md:w-full">
              <Text as="p" className="mb-[7px] !font-medium !text-white-A700">
                {missiontext}
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
                  {readmoretext}
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 md:self-stretch">
          <div className="flex flex-col items-start gap-12">
            <div className="flex gap-5 md:flex-col">
              <div className="flex gap-2.5 sm:flex-col">
                <div className="flex items-start gap-2.5 bg-white-A700 p-2">
                  <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                  <Text as="p" className="text-center">
                    {sustainabilitytextone}
                  </Text>
                </div>
                <div className="flex items-start gap-2.5 bg-white-A700 p-2">
                  <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                  <Text as="p" className="text-center">
                    {sustainabilitytextthree}
                  </Text>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white-A700 p-2">
                <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                <Text as="p" className="text-center">
                  {sustainabilitytextfive}
                </Text>
              </div>
            </div>
            <div className="flex justify-between gap-5 self-stretch sm:flex-col">
              <div className="flex items-start gap-2.5 bg-white-A700 p-2">
                <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                <Text as="p" className="text-center">
                  {sustainabilitytextseven}
                </Text>
              </div>
              <div className="flex items-start gap-2.5 bg-white-A700 p-2">
                <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                <Text as="p" className="text-center">
                  {sustainabilitytextnine}
                </Text>
              </div>
              <Input
                shape="square"
                name="submenu_one"
                placeholder={`Communities`}
                prefix={
                  <div className="flex h-[32px] w-[32px] items-center justify-center">
                    <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                  </div>
                }
                className="w-[25%] sm:w-full"
              />
            </div>
            <Input
              shape="square"
              name="submenu_three"
              placeholder={`Environment`}
              prefix={
                <div className="flex h-[32px] w-[32px] items-center justify-center">
                  <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                </div>
              }
              className="w-[24%]"
            />
          </div>
        </div>
      </div>
      <Img src="images/img_vector.png" alt="vector" className="h-[216px] w-[8%] object-cover md:w-full" />
    </div>
  );
}
