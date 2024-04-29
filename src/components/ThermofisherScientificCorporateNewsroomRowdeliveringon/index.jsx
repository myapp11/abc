import React from "react";
import { Text, Button, Img } from "./..";

export default function ThermofisherScientificCorporateNewsroomRowdeliveringon({
  deliveringontext = "Delivering on the promise of cell therapies: Programmed immune cells attack cancer and other...",
  watchsciencetext = "Watch Science with a Twist | Season 2 : Episode 10",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src="images/img_podcast_placeholder.png"
        alt="image"
        className="h-[140px] w-[140px] object-cover sm:w-full"
      />
      <div className="flex flex-1 flex-col items-start gap-3 sm:self-stretch">
        <Text size="s" as="p" className="leading-6">
          {deliveringontext}
        </Text>
        <div className="flex items-center gap-3.5">
          <Button size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
            <Img src="images/img_contrast.svg" />
          </Button>
          <Text size="xs" as="p" className="!text-red-A700">
            {watchsciencetext}
          </Text>
        </div>
      </div>
    </div>
  );
}
