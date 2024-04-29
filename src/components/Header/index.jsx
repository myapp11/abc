import React from "react";
import { Button, Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex w-full items-center justify-between gap-5 bg-white-A700 px-4 md:flex-col">
        <Img src="images/img_header_logo.svg" alt="headerlogo" className="h-[28px] w-[128px]" />
        <div className="flex items-center md:flex-col">
          <ul className="flex flex-wrap gap-[31px]">
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
            <Img src="images/img_search.svg" alt="search" className="ml-[50px] h-[16px] w-[16px] md:ml-0 md:w-full" />
          </a>
          <Button shape="round" className="ml-[35px] min-w-[157px] text-white-A700 md:ml-0 sm:pr-5">
            Thermofisher.com
          </Button>
        </div>
      </div>
    </header>
  );
}
