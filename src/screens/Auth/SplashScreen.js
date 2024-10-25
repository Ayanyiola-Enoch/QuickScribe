import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SIZES, images, COLORS, FONTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const navigation = useNavigation();
    const [newInput, setNewInput] = useState('');
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)

    const check = async () => {
        try {
            const saving = await AsyncStorage.getItem('first')

            if (saving !== null) {
                navigation.replace('Main', { newInput })
                console.log('Logged-in before')
            } else {
                await AsyncStorage.setItem('first', 'saving')
                console.log('This is the first time Logging in')
                navigation.replace('Intro')
            }
        }

        catch (error) {
            console.log('Error checking first launch', error);
            navigation.replace('Main', newInput);
        }
    };


    useEffect(() => {
        check();
    }), [];

    return (
        <View style={styles.page}>
            <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
            <View style={styles.container}>
                <Image source={images.logo} style={{ width: SIZES.h1 * 1.9, height: SIZES.h1 * 1.35, marginTop: 6 }} />
                <Text style={styles.text}>QuickScribe</Text>
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        ...FONTS.h1,
        fontWeight: 'bold',
        color: COLORS.purple,


    }
});