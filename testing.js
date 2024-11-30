import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { store } from './Redux'
import { Provider, useSelector } from 'react-redux';
import { FONTS, } from './src/constants';

const AppContent = () => {
  const enoch = useSelector((kk) => kk.firstName);

  console.log('.....////', enoch);

  return (
    <View style={{ flex: 1 }}>
      <Text>Hello, {enoch}!</Text>
    </View>
  );

};





const testing = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default testing;

const styles = StyleSheet.create({})