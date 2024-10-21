import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SIZES, images, COLORS, FONTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const navigation = useNavigation();
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigation.replace('Intro');
    //     }, 3000)
    // }, [])

    const handleGetInput = async () => {
        try {
            const input = await AsyncStorage.getItem('input'); //retrieved the data inputted
            console.log('the input name is', input);
            navigation.replace('Welcome')
            // if (input !== null) {
            //     setGetInput(value)
            // }
        } catch (error) {
            console.log('this is an error', error);
        }
    }



    useEffect(() => {
        handleGetInput()
        setTimeout(() => {
            3000;
        })
    }), []
    return (
        <View style={styles.page}>
            <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
            <View style={styles.container}>
                <Image source={images.logo} style={{ width: SIZES.h1 * 1.35, height: SIZES.h1 * 1.35 }} />
                <Text style={styles.text}>QuickScribe</Text>
            </View>
            <View style={{ marginTop: 2, }}></View>
            <Text style={{ backgroundColor: "red", }}> </Text>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        ...FONTS.h2,
        fontWeight: 'bold',
        color: COLORS.purple,


    }
});