import React from 'react';
import { Text } from 'react-native';
import commons from '../../commons';

function nText({ type='regular', style, children, ...rest }) {
  const { defaultTextColor } = commons;

  var fontFamily = '';
  switch (type) {
    case 'bold':
      fontFamily = 'Roboto-Bold';
      break;
    case 'medium':
      fontFamily = 'Roboto-Medium';
      break;
    default:
      fontFamily = 'Roboto-Regular';
      break;
  }

  const textStyle = { fontFamily, color: defaultTextColor, fontSize: 16 };

  return (
    <Text
      style={[textStyle, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default nText;