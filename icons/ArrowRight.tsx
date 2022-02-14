import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowRight = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M5 12L19 12" />
      <Path d="M12 5L19 12 12 19" />
    </Svg>
  );
};
