import Svg, { G, Path } from 'react-native-svg';

export const PlayIcon = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_1_340)">
        <Path
          d="M75 116C99.3005 116 119 96.3005 119 72C119 47.6995 99.3005 28 75 28C50.6995 28 31 47.6995 31 72C31 96.3005 50.6995 116 75 116Z"
          fill="#01D9F7"
        />
      </G>
      <Path d="M67.75 57.656V86.344L90.25 72L67.75 57.656Z" fill="white" />
    </Svg>
  );
};
