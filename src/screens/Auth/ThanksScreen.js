import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ThanksScreen = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thank You for using  </Text>
                <Text style={{ fontSize: 19, color: '#2C64D7', fontWeight: '600' }}>Quick<Text style={{ color: '#F24C26', fontWeight: '600', fontSize: 19 }}>Scribe</Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Image source={require('../../assets/icons/icons8-check-100.png')} style={{ width: 80, height: 80, marginTop: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ThanksScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})