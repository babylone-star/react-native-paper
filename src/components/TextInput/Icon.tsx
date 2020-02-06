import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import IconButton from '../IconButton';

type Props = {
  name: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const ICON_SIZE = 24;

class TextInputIcon extends React.Component<Props> {
  static displayName = 'TextInput.Icon';

  render() {
    const { name, onPress, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <IconButton
          icon={name}
          style={styles.iconButton}
          size={ICON_SIZE}
          onPress={onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    margin: 0,
  },
});

export default TextInputIcon;