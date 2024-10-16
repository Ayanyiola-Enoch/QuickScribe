import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 5000)
    }, [])

    return (
        <View style={styles.page}>
            <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
            <View style={styles.container}>
                <Image source={require('../assets/images/log2-removebg-preview.png')} style={{ width: 30, height: 30 }} />
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