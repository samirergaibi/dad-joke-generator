import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export const ArrowRightCircle = () => {
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
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 16L16 12 12 8" />
      <Path d="M8 12L16 12" />
    </Svg>
  );
};
