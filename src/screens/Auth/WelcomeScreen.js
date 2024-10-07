import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import Header from '../../components/Header/Header';

const WelcomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 17, color: '#2C64D7', fontWeight: '600' }}>Quick<Text style={{ color: '#F24C26', fontWeight: '600', fontSize: 17 }}>Scribe</Text></Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: '#2F344C', fontSize: 13, fontWeight: '400' }}>"Welcome to QuickScribe: Where Your Thoughts Find a Home!"</Text>
      </View>
      <View style={{ marginTop: 13, alignItems: 'center' }}>
        <Image source={require('../../assets/images/iamge-removebg-preview-removebg-preview.png')} style={{ width: '65%', height: 300 }} />
      </View>
      <View style={{ borderWidth: 1, borderRadius: 10, marginTop: 40, paddingHorizontal: 30 }}>
        <TextInput placeholder='Enter your name' placeholderTextColor={'#2f344c'} />
      </View>
      <TouchableOpacity style={{ borderWidth: 2, width: 100, height: 50 }}>
        <Text style={{ color: '#2C64D7', fontWeight: '600', fontSize: 16, textAlign: 'center' }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 20,
    padding: 20,
    paddingHorizontal: 20
  },
});