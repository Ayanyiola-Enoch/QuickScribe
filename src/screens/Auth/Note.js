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
            <View>
                <FlatList data={['', '', '']}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, width: '100%', height: SIZES.h1 * 1.8, marginTop: SIZES.h2, justifyContent: 'center', paddingHorizontal: SIZES.h4 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
                                <Text style={{ ...FONTS.body3 }}>First todo</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>

            {/* bottom adding input */}

            <View style={{ flex: 1 }}>


                <TextInput style={{ borderWidth: 2, borderRadius: 5, width: SIZES.h1 * 8, height: SIZES.h1 * 1.8, marginTop: SIZES.h2, justifyContent: 'center', paddingHorizontal: SIZES.h4 }}>

                </TextInput>
            </View>
        </View>
    )
};

export default Note;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.grey,
        paddingTop: SIZES.h1 * 1.2,
        padding: 20,
        paddingHorizontal: SIZES.h1,
    }
});