import { View } from 'react-native';

export const SessionContainer = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: '#647afe',
        padding: 25,
        marginHorizontal: 5,
        borderRadius: 25,
        height: 450,
        marginTop: 20,
        width: 350,
      }}
    >
      {children}
    </View>
  );
};
