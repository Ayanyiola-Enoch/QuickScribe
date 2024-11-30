import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import AddScreen from '../screens/Auth/AddScreen';
import MainScreen from '../screens/Auth/MainScreen';
import ShowScreen from '../screens/Auth/ShowScreen';
import ThanksScreen from '../screens/Auth/ThanksScreen';
import SplashScreen from '../screens/Auth/SplashScreen';
import IntroSlider from '../screens/Auth/IntroSlider';
import Class from '../screens/Auth/Class';
import Note from '../screens/Auth/Note';
import testing from '../../Testing';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Intro" component={IntroSlider} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Class" component={Class} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="Add" component={AddScreen} />
            <Stack.Screen name="Show" component={ShowScreen} />
            <Stack.Screen name="Thanks" component={ThanksScreen} />
            <Stack.Screen name="Test" component={testing} />
        </Stack.Navigator>
    );
}
    ;
export default AuthStack;

const styles = StyleSheet.create({})