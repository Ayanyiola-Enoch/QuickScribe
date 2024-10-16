import { StyleSheet, Text, View, StatusBar, Image, Touchable, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';


const slides = [
    {
        key: 1,
        title: 'Capture Every Thought',
        text: 'Turn ideas into action with quick, beautiful notes that sync across all your devices',
        image: require('../assets/images/Slide2.png'),
    },
    {
        key: 2,
        title: 'Capture Every Thought',
        text: 'Turn ideas into action with quick, beautiful notes that sync across all your devices',
        image: require('../assets/images/Slide1.png'),
    },

];

const IntroSlider = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {

        return (
            <View style={styles.page}>
                <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
                <View style={{ marginBottom: 20, }}>
                    <ImageBackground source={item.image} style={{ width: 300, height: 200 }} />
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={[styles.text, { fontWeight: '400', marginTop: 17 }]}>{item.text}</Text>
                </View>
            </View>
        )
    };
    const renderNextButton = () => {
        return (
            <TouchableOpacity onPress={() => navigation.replace(renderNextButton)} style={styles.button}>
                <Text style={styles.butText}>Next</Text>
            </TouchableOpacity>
        )
    };

    const renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(renderDoneButton)} style={styles.button}>
                <Text style={styles.butText}>Done</Text>
            </TouchableOpacity>
        )
    };




    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
        />

    )
};

export default IntroSlider;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        // padding: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'purple',
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    butText: {
        fontSize: 12,
        color: 'white',
    },
    dot: {

        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'grey',
        marginHorizontal: 8,
        // marginTop: 10,
    },
    activeDot: {

        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8,
        // marginTop: 10,
        backgroundColor: 'purple',
    }
});