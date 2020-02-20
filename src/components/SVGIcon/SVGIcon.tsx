import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
// @ts-ignore
import iconRegistry from './iconRegistry';

type Props = {
  icon: string;
  size: number;
  onPress: () => void;
};

const SVGIcon: React.FC<Props> = ({ icon, size, onPress }) => {
  const Icon = iconRegistry[icon];
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ width: size, height: size }}>
        <Icon width={size} height={size} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SVGIcon;
