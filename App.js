import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/Auth/WelcomeScreen';
import AddScreen from './src/screens/Auth/AddScreen';
import MainScreen from './src/screens/Auth/MainScreen';
import ShowScreen from './src/screens/Auth/ShowScreen';
import ThanksScreen from './src/screens/Auth/ThanksScreen';
import SplashScreen from './src/screens/Auth/SplashScreen';
import IntroSlider from './src/screens/Auth/IntroSlider';
import Class from './src/screens/Auth/Class';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (


    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro" component={IntroSlider} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Thanks" component={ThanksScreen} />
        <Stack.Screen name="Class" component={Class} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});