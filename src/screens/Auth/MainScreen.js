import { StyleSheet, Text, View, TextInput, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { COLORS, FONTS, SIZES } from '../../constants';

const addNote = [
    {
        id: 1,
        title: 'Tasks for today',
        day: 'Today',
        currentDate: '14 Sept. 8:20am',
        description: "Go on a nature walk or hikeand observe the plants, animals....",
        clock: require('../../assets/icons/icons8-clock-100.png'),
    },
    {
        id: 2,
        title: 'Frontend Plan',
        day: '4 notes',
        description: "Review progress on the frontend and backend integration for the website. Discuss .....",
    },
    {
        id: 3,
        title: 'Recipe List',
        day: '29 Aug.',
        description: "Ree Drummond's 3-Ingredient Apple Tart is an ideal fall dessert that's both simpl....",
    },
    {
        id: 4,
        title: 'MUM',
        day: '29 July',
        date: '12 Aug.',
        description: "Call mum about birthday and also try to be very happy, make sure that the kitchen,...",
    },
    {
        id: 5,
        title: 'Recipe',
        day: '29 Sept.',
        other: '4 notes',
        description: "Ree Drummond's 3-Ingredient Apple Tart is an ideal fall dessert that's both simpl....",
    },
    {
        id: 6,
        title: 'Daily Note',
        day: '12 Aug.',
        description: "Call mum about birthday and also try to be very happy, make sure that the kitchen,...",
    },
    {
        id: 7,
        title: 'Daily Note',
        day: '12 Aug.',
        description: "Call mum about birthday",
    },

];

const MainScreen = ({ route }) => {
    const navigation = useNavigation();

    const [notes, setNotes] = useState([]);


    console.log('this is route:', route);

    return (
        <>
            {/* Search Space */}


            <View style={{ marginBottom: 22, backgroundColor: '#f1f1f1', padding: 20, height: 100 }}>

                <View style={{ marginBottom: 10, paddingHorizontal: 10 }}>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 14 }}>Hello, { }</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ borderWidth: 1, borderRadius: 19, width: 280, height: 38, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/icons/icons8-search-100.png')} style={{ width: 19, height: 19, marginRight: 10 }} />
                        <TextInput placeholder="Search Notes" placeholderTextColor="#858585" style={{ fontSize: 12, color: COLORS.black, paddingVertical: 0 }} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Note')} style={{ marginLeft: 10 }}>
                        <Image source={require('../../assets/icons/icons8-settings-100.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                </View>

            </View>

            {/* bottom view with background */}

            <View style={styles.bottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Add')} style={{ borderRadius: 19, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#9747ff', width: 90, height: 32 }}>
                        <Image source={require('../../assets/icons/icons8-add-100.png')} style={{ width: 12, height: 12, tintColor: 'white' }} />
                        <Text style={{ marginLeft: 3, fontSize: 12, color: 'white' }}>New note</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Cl    ass')}>
                            <Image source={require('../../assets/icons/icons8-add-note-100.png')} style={{ width: 21, height: 21, }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/icons/icons8-sort-amount-up-reversed-100.png')} style={{ width: 21, height: 21 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                            <Image source={require('../../assets/icons/icons8-list-100.png')} style={{ width: 21, height: 21 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Flatlist of tasks */}

                <FlatList data={notes}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', gap: 0 }}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('Show')} style={{ backgroundColor: 'white', padding: 9, width: '93%', height: 178, borderRadius: 10, marginTop: 10 }}>
                                    <View>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
                                        <Text style={{ marginTop: 8, width: 150, fontSize: 12, color: 'grey' }}>{item.description}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 9 }}>
                                        <View>
                                            <Image source={require('../../assets/icons/icons8-clock-100.png')} style={{ width: 23, height: 23 }} />
                                        </View>
                                        <TouchableOpacity style={{ backgroundColor: '#D0D0DC', width: 115, borderRadius: 40, height: 23, alignItems: 'center' }}>
                                            <Text style={{ fontSize: 12, color: 'grey' }}>14 Sept. 8:20 am</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Image source={require('../../assets/icons/icons8-pin-100.png')} style={{ width: 16, height: 16 }} />
                                        <Text style={{ fontSize: 12, color: 'grey' }}>{item.day}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )
                    }} />
            </View>


        </ >
    );
};

export default MainScreen;
const styles = StyleSheet.create({
    bottom: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#D0D0DC',
        padding: 20,
        height: 635,

    },

});