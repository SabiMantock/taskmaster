import { useRef } from 'react';
import LottieView from 'lottie-react-native';

export const CountDownAnimation = () => {
  const animation = useRef(null);

  return (
    <LottieView
      ref={animation}
      source={require('../../assets/lottie/countdown-animation.json')}
      autoPlay
      style={{
        width: '100%',
        height: 300,
        // backgroundColor: '#eee',
      }}
    />
  );
};
