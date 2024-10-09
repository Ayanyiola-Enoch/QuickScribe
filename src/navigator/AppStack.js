import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import AddScreen from '../screens/Auth/AddScreen';

const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>

    );
};

export default AppStack;

const styles = StyleSheet.create({});