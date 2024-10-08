import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import CustomText from './CustomText';
const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.flexRow}>
          <Image
            source={require('../assets/logo_s.jpeg')}
            style={styles.image}
          />
          <View style={styles.info}>
            <CustomText fontWeight="bold">JIIT AI</CustomText>
            <Icon2
              name="checkcircle"
              style={styles.tick}
              color="green"
              size={18}
            />
          </View>
        </View>
        <TouchableOpacity>
          <CustomText>Clear</CustomText>
        </TouchableOpacity>
      </View>
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
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 40,
  },
  info: {
    flexDirection: 'row',
  },
  subcontainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  tick: {
    margin: 5,
  },
});
