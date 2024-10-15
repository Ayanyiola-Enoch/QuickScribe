import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();

    const timer = useEffect(() => {
        navigation.replace('Welcome')
        setTimeout(() => {
            3000
        })
    }, [])
    return (
        <View style={styles.page} >
            <View style={styles.container}>
                <Image source={require('../assets/images/log2-removebg-preview.png')} style={{ width: 20, height: 20 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#9747FF' }}>SplashScreen</Text>
            </View>
        </View >
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: "center"
    },
    container: {
        justifyContent: 'center',
        alignItems: "center"
    },

});