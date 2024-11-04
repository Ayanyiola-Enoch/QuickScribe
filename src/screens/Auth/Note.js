import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Note = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={{}}>
                <Text style={{ ...FONTS.h4 }}>Note</Text>
                <Image source={images.delete} style={{ width: SIZES.h4, height: SIZES.h4 }} />
            </View>
        </View>
    )
};

export default Note;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.grey,
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: SIZES.h2,
    }
});