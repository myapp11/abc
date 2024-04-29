import React from "react";
import { Text, Heading, Img } from "./..";

export default function ThermofisherScientificCorporateCSRT1({
  operations = "Operations",
  description = "Leveraging our capabilities to support our customers while conducting our business and relationships with integrity",
  ...props
}) {
  return (
    <div {...props}>
      <Img src="images/img_rectangle_19941.png" alt="image" className="h-[500px] w-full object-cover" />
      <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex flex-col items-start gap-[21px] bg-gradient px-10 pt-10 sm:px-5 sm:pt-5">
        <Heading size="md" as="h3" className="!text-white-A700_b2">
          {operations}
        </Heading>
        <Text size="s" as="p" className="!font-normal !text-white-A700_19">
          {description}
        </Text>
      </div>
    </div>
  );
}
