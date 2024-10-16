import { StyleSheet, Text, View, Image } from 'react-native';
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
            <View style={styles.container}>
                <Image source={require('../assets/images/log2-removebg-preview.png')} style={{ width: 20, height: 20 }} />
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
});