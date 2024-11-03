import { StyleSheet, Text, View, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { FONTS, COLORS, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const data = [
    { name: 'Product 1', image: images.sliderOne },
    { name: 'Product 2', image: images.sliderOne },
    { name: 'Product 3', image: images.sliderOne },
    { name: 'Product 4', image: images.sliderOne },
];


const Class = () => {

    const navigation = useNavigation();
    const [productItem, setProductItem] = useState([]);


    const product = async () => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    console.log('Product description', json)
                    setProductItem(json)
                })
        } catch (error) {
            console.log("error", error)
        }

    }

    useEffect(() => {
        product();
    }, []);





    return (
        <View style={styles.page}>
            <StatusBar barStyle={'light-content'} backgroundColor={COLORS.purple} />
            <View style={styles.container}>
                <Text style={{ ...FONTS.h3, fontWeight: 'bold', marginBottom: 18 }}>Products</Text>
                <FlatList data={productItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity style={styles.box}>
                                    <Text style={styles.text}>{item.title}</Text>
                                    <Image source={item.image} style={{ width: SIZES.h2, height: SIZES.h2 }} />
                                </TouchableOpacity>
                            </View>
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

    text: {
        ...FONTS.h4,

    },
    box: {
        borderWidth: 3,
        marginTop: 19,
        width: 150,
        height: 100,
        borderRadius: 8,
        padding: 20
    },
});