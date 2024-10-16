import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const IntroSlider = () => {

    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: '',
            image: require('./assets/images/Slide1.png'),
        },

    ];
    return (
        <View style={styles.page}>
            <View>
                <Text>IntroSlider</Text>
            </View>
        </View>
    )
}

export default IntroSlider;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: 20,
    },
});