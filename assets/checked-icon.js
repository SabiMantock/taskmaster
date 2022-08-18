import Svg, { Path } from 'react-native-svg';

export const CheckedIcon = ({ width, height, color, fill }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
        fill={fill}
      />
      <Path
        d="M19 36C28.3888 36 36 28.3888 36 19C36 9.61116 28.3888 2 19 2C9.61116 2 2 9.61116 2 19C2 28.3888 9.61116 36 19 36Z"
        stroke={color}
        strokeWidth="4"
      />
    </Svg>
  );
};
