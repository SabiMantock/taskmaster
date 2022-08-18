import Svg, { Path, G, Defs } from 'react-native-svg';

export const AddIcon = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_1_9)">
        <Path
          d="M75 116C99.3005 116 119 96.3005 119 72C119 47.6995 99.3005 28 75 28C50.6995 28 31 47.6995 31 72C31 96.3005 50.6995 116 75 116Z"
          fill="#01D9F7"
        />
      </G>
      <Path
        d="M86.7 73.5H77.7V82.5H74.7V73.5H65.7V70.5H74.7V61.5H77.7V70.5H86.7V73.5Z"
        fill="white"
      />
    </Svg>
  );
};
