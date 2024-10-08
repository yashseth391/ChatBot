import {StyleSheet, View} from 'react-native';
import React from 'react';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}></View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(20,25,46,1)',
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)',
  },
  subcontainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
