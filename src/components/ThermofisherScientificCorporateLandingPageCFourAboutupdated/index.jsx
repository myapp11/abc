import React from "react";
import { Img, Input, Text } from "./..";

export default function ThermofisherScientificCorporateLandingPageCFourAboutupdated({
  missiontext = "Our Mission",
  descriptiontext,
  readmore = "Read More",
  sustainability = "Our Stories",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex h-[346px] w-[31%] items-start bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat py-[45px] md:h-auto md:w-full md:py-5">
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
                {readmore}
              </Text>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-1 flex-col items-start gap-[41px] md:self-stretch">
        <div className="flex w-[82%] flex-col items-start gap-12 md:w-full">
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[54%] justify-between gap-5 md:w-full">
              <Input
                shape="square"
                name="submenu_one"
                placeholder={`Our Company`}
                prefix={
                  <div className="flex h-[32px] w-[32px] items-center justify-center">
                    <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                  </div>
                }
                className="w-[44%]"
              />
              <div className="flex items-start gap-2.5 bg-white-A700 p-2">
                <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                <Text as="p" className="text-center">
                  {sustainability}
                </Text>
              </div>
            </div>
            <Input
              shape="square"
              name="submenu_three"
              placeholder={`Information Security`}
              prefix={
                <div className="flex h-[32px] w-[32px] items-center justify-center">
                  <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
                </div>
              }
              className="w-[30%] md:w-full"
            />
          </div>
          <Input
            shape="square"
            name="submenu_five"
            placeholder={`Supplier Resources`}
            prefix={
              <div className="flex h-[32px] w-[32px] items-center justify-center">
                <Img src="images/img_icon.svg" alt="icon" className="h-[32px] w-[32px]" />
              </div>
            }
            className="w-[30%]"
          />
        </div>
        <Img src="images/img_vector.png" alt="vector" className="h-[216px] w-[12%] self-end object-cover" />
      </div>
    </div>
  );
}
