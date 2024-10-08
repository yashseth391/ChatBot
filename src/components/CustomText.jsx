import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomText = ({
  children,
  size = 12,
  color = 'white',
  opacity = 1,
  fontWeight = 'normal',
  style,
  ...props
}) => {
  return (
    <Text
      style={{
        fontSize: size,
        color: color,
        opacity: opacity,
        fontWeight: fontWeight,
      }}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
