import { Image, StyleSheet, FlatList, TouchableOpacity, TextInput, Text, View } from 'react-native'
import React from 'react';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Note = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>

            {/* title */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ ...FONTS.h3 }}>Hi, Enoch</Text>
                <TouchableOpacity>
                    <Image source={icons.deleteImg} style={{ width: SIZES.h2, height: SIZES.h2 }} />
                </TouchableOpacity>
            </View>

            {/* flatlist for added notes */}
            <View style={{ flex: 1 }}>
                <FlatList data={['', '', '']}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, width: '100%', height: SIZES.h1 * 1.8, marginTop: SIZES.h2, justifyContent: 'center', paddingHorizontal: SIZES.h4 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Text style={{ ...FONTS.body3 }}>First todo</Text>
                                    <View style={{ borderRadius: 5, borderWidth: 1, width: SIZES.h4, height: SIZES.h4, alignItems: 'center' }}>
                                    </View>

                                    <Image source={images.deleteImg} style={{ width: SIZES.h2 }} />
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>

            {/* bottom adding input */}

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-betweens' }}>
                <TextInput placeholder='Enter a new To-do' style={styles.text} />
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: SIZES.h1 * 5, padding: SIZES.h5 }}>
                    <Image source={icons.add} style={{ width: SIZES.h1 * 0.8, height: SIZES.h1 * 0.8, tintColor: COLORS.primary, }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Note;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.grey,
        paddingTop: SIZES.h1 * 1.2,
        padding: 20,
        paddingHorizontal: SIZES.h1,
    },
    text: {
        borderWidth: 1,
        borderRadius: 5,
        width: SIZES.h1 * 8.5,
        height: SIZES.h1 * 1.6,
        paddingHorizontal: SIZES.h4,
    }
});