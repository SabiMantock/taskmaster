import { Pressable, View } from 'react-native';
import { CheckedIcon } from '../../assets/checked-icon';
import { UnCheckedIcon } from '../../assets/unchecked-icon';

const RadioIcon = ({ selected, checkedColor, unCheckedColor, fill }) => {
  return (
    <View>
      {selected ? (
        <CheckedIcon height={'20'} width={'20'} color={checkedColor} fill={fill} />
      ) : (
        <UnCheckedIcon height={'20'} width={'20'} color={unCheckedColor} />
      )}
    </View>
  );
};

export const RadioItem = ({ selected, unCheckedColor, checkedColor, fill }) => {
  return (
    <RadioIcon
      selected={selected}
      checkedColor={checkedColor}
      unCheckedColor={unCheckedColor}
      fill={fill}
    />
  );
};
