import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './AppButtonStyles';

// Define the props for the component
const AppButton = ({
  onPress,
  backgroundColor,
  width,
  height,
  marginTop,
  marginBottom,
  color,
  fontFamily,
  fontSize,
  disabled,
  borderRadius,
  borderWidth,
  borderColor,
  left,
  right,
  bottom,
  alignSelf,
  top,
  position,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          width,
          height,
          marginTop,
          marginBottom,
          borderColor,
          borderWidth,
          alignSelf,
          borderRadius, // Added borderRadius here
          right,
          left,
          position,
          bottom,
          top,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { color, fontSize, fontFamily }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;