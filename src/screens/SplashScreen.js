import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

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
            navigation.replace('Main')
            // if (input !== null) {
            //     setGetInput(value)
            // }
        } catch (error) {
            console.log('this is an error', error);
        }
    }



    useEffect(() => {
        handleGetInput()
    }, [])
    return (
        <View style={styles.page}>
            <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
            <View style={styles.container}>
                <Image source={require('../assets/images/log2-removebg-preview.png')} style={{ width: 36, height: 36 }} />
                <Text style={styles.text}>QuickScribe</Text>
            </View>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});