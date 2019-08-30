import * as React from 'react';
import {View} from 'react-native';
import {withStyles} from 'react-native-ui-kitten';

const AwesomeView = props => {
  const {themedStyle, style, ...restProps} = this.props;

  return <View {...restProps} style={[themedStyle, style]} />;
};

export const ThemedAwesomeView = withStyles(AwesomeView, theme => ({
  backgroundColor: theme['color-primary-500'],
}));
