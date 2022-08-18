import Svg, { Path } from 'react-native-svg';

export const Line = ({ width, strokeOpacity, stroke }) => {
  return (
    <Svg
      width={width}
      height="10"
      viewBox="0 0 448 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0.5 0.5H447.5" stroke={stroke} opacity={strokeOpacity} />
    </Svg>
  );
};
