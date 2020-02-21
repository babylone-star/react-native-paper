import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
// @ts-ignore
import iconRegistry from './iconRegistry';

type Props = {
  icon: string;
  size: number;
  color: string;
  onPress: () => void;
};

const SVGIcon: React.FC<Props> = ({ icon, size, onPress, color = '#440099' }) => {
  const Icon = iconRegistry[icon];
  const iconContent = (
    <View style={{ width: size, height: size }}>
      <Icon width={size} height={size} color={color} />
    </View>
  );

  if(onPress) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        {iconContent}
      </TouchableWithoutFeedback>
    );
  }
  return <>{iconContent}</>;
};

export default SVGIcon;
