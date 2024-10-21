import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { FONTS, images } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Class = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <Text style={styles.text}>Products</Text>
                    <View>
                        <Image source={{ uri: images.imageUrl }} style={{}} />
                    </View>
                </View>

            </View>

        );
    }

    return (
        <FlatList renderItem={renderItem}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: 'space-between' }} />
    );

};

export default Class;

const styles = StyleSheet.create({
    page: {
        padding: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f1f1f1',
        flex: 1,
    },
    container: {
        alignSelf: 'center',
    },
    text: {
        ...FONTS.body,
    }

});