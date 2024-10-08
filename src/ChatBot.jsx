import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from './components/CustomHeader';

const ChatBot = () => {
  return (
    <ImageBackground
      source={require('./assets/w_bg.png')}
      style={styles.backgroundImage}>
      <CustomHeader />
    </ImageBackground>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
