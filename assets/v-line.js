import Svg, { Path } from 'react-native-svg';

export const VLine = ({ height, stroke }) => (
  <Svg width="1" height={height} viewBox="0 0 1 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M0.5 0.5V27.5" stroke={stroke} />
  </Svg>
);
