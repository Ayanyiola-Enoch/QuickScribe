import { StyleSheet, Text, View, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react';
import { FONTS, COLORS, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native'

const data = [
    { name: 'Product 1', image: images.sliderOne },
    { name: 'Product 2', image: images.sliderOne },
    { name: 'Product 3', image: images.sliderOne },
    { name: 'Product 4', image: images.sliderOne },
]

const Class = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <StatusBar barStyle={'light-content'} backgroundColor={COLORS.purple} />
            <View style={styles.container}>
                <Text style={{ ...FONTS.h3, fontWeight: 'bold', marginBottom: 18 }}>Products</Text>
                <FlatList data={data}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.text}>{item.name}</Text>
                                <Image source={item.image} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                        );
                    }} />
            </View>
        </View>
    );
};

export default Class;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 40,
        padding: 20,
        paddingHorizontal: 20,
    },
    // container: {
    //     marginTop: 9,
    //     borderWidth: 1,
    // },
    text: {
        ...FONTS.h4,
        // textAlign: 'center',

    },
    box: {
        borderWidth: 1,
        marginTop: 19,
        width: 150,
        height: 100,
        borderRadius: 8,
        padding: 20
    },
});