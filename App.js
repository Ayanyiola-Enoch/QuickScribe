import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/Auth/WelcomeScreen';
import AddScreen from './src/screens/Auth/AddScreen';
import MainScreen from './src/screens/Auth/MainScreen';
import ShowScreen from './src/screens/Auth/ShowScreen';
import ThanksScreen from './src/screens/Auth/ThanksScreen';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Thanks" component={ThanksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});