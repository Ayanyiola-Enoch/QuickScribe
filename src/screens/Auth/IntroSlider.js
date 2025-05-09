import { StyleSheet, Text, View, StatusBar, Touchable, TouchableOpacity, ImageBackground } from 'react-native';
import React, {useRef, useState } from 'react';
import { FONTS, COLORS, icons, images, SIZES } from '../../constants';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const slides = [
    {
        key: 1,
        title: 'Capture Every Thought',
        text: 'Turn ideas into action with quick, beautiful notes that sync across all your devices',
        image: images.sliderOne,
    },
    {
        key: 2,
        title: 'Organize Your Way"',
        text: 'Create folders, add tags, or use search to find exactly what you need, when you need it',
        image: images.sliderTwo,
    },
];

const IntroSlider = () => {
    const navigation = useNavigation();
    const sliderRef = useRef(null);

    const renderItem = ({ item }) => (
        <View style={styles.page}>
            <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
            <View style={{ marginBottom: 20 }}>
                <ImageBackground source={item.image} style={{ width: 300, height: 200 }} />
                <Text style={styles.text}>{item.title}</Text>
                <Text style={[styles.text, { fontWeight: '400', marginTop: 17 }]}>{item.text}</Text>
            </View>
        </View>
    );

    const renderNextButton = () => (
        <TouchableOpacity 
            style={styles.button}
            onPress={() => sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex + 1)}
        >
            <Text style={styles.butText}>Next</Text>
        </TouchableOpacity>
    );

    const renderDoneButton = () => (
        <TouchableOpacity 
            onPress={() => navigation.replace('Welcome')} 
            style={styles.button}
        >
            <Text style={styles.butText}>Done</Text>
        </TouchableOpacity>
    );

    const renderSkipButton = () => (
        <TouchableOpacity 
            onPress={() => navigation.replace('Welcome')} 
            style={styles.button}
        >
            <Text style={styles.butText}>Skip</Text>
        </TouchableOpacity>
    );

    return (
        <AppIntroSlider
            ref={sliderRef}
            data={slides}
            renderItem={renderItem}
            renderNextButton={renderNextButton}
            renderSkipButton={renderSkipButton}
            renderDoneButton={renderDoneButton}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            showSkipButton={true}
        />
    );
};

export default IntroSlider;


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: 'grey',
        marginHorizontal: 8,
    },
    activeDot: {
        width: 8,
        height: 8,
        marginHorizontal: 8,
        backgroundColor: 'purple',
    }
});


















// const slides = [
//     {
//         key: 1,
//         title: 'Capture Every Thought',
//         text: 'Turn ideas into action with quick, beautiful notes that sync across all your devices',
//         image: images.sliderOne,
//     },
//     {
//         key: 2,
//         title: 'Organize Your Way"',
//         text: 'Create folders, add tags, or use search to find exactly what you need, when you need it',
//         image: images.sliderTwo,
//     },

// ];

// const IntroSlider = () => {
//     const navigation = useNavigation();

//     const [open, setOpen] = useState('');

    // const handleNext = async () => {
    //     try {
    //         await AsyncStorage.setItem('input', 'setOpen');
    //         navigation.replace('Welcome');

    //     } catch (error) {
    //         console.log('this is an error', error)
    //     }

    // };


//     const renderItem = ({ item }) => {

//         return (
//             <View style={styles.page}>
//                 <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
//                 <View style={{ marginBottom: 20, }}>
//                     <ImageBackground source={item.image} style={{ width: 300, height: 200 }} />
//                     <Text style={styles.text}>{item.title}</Text>
//                     <Text style={[styles.text, { fontWeight: '400', marginTop: 17 }]}>{item.text}</Text>
//                 </View>
//             </View>
//         )
//     };
//     const renderNextButton = () => {
//         return (
//             <TouchableOpacity style={styles.button}>
//                 <Text style={styles.butText}>Next</Text>
//             </TouchableOpacity>
//         )
//     };

//     const renderDoneButton = () => {
//         return (
//             <TouchableOpacity onPress={() => navigation.replace('Welcome')} style={styles.button}>
//                 <Text style={styles.butText}>Done</Text>
//             </TouchableOpacity>
//         )
//     };

//     const renderSkipButton = () => {
//         return (
//             <TouchableOpacity onPress={() => navigation.replace('Welcome')} style={styles.button}>
//                 <Text style={styles.butText}>Skip</Text>
//             </TouchableOpacity>
//         )
//     };




//     return (
//         <AppIntroSlider
//             data={slides}
//             renderItem={renderItem}
//             renderNextButton={renderNextButton}
//             renderSkipButton={renderSkipButton}
//             renderDoneButton={renderDoneButton}
//             dotStyle={styles.dot}
//             activeDotStyle={styles.activeDot}
//             showSkipButton={true}
//         />
 
//     );
// };

// export default IntroSlider;

// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//         backgroundColor: '#f1f1f1',
//         paddingTop: 20,
//         paddingHorizontal: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 13,
//         fontWeight: 'bold',
//         color: 'black',
//         textAlign: 'center'
//     },
//     button: {
//         backgroundColor: 'purple',
//         width: 60,
//         height: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         marginTop: 20,
//         marginBottom: 20,
//     },
//     butText: {
//         fontSize: 12,
//         color: 'white',
//     },
//     dot: {
//         width: 8,
//         height: 8,
//         backgroundColor: 'grey',
//         marginHorizontal: 8,
//     },
//     activeDot: {
//         width: 8,
//         height: 8,
//         marginHorizontal: 8,
//         backgroundColor: 'purple',
//     }
// });