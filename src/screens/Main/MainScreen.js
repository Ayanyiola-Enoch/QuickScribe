import { StyleSheet, Text, View, TextInput, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';


const header = [
    {
        id: 1,
        title: 'Personal',
        title2: 'Work',
        title3: 'Health',
        title4: 'Custom',
        icon: require('../../assets/icons/icons8-person-100.png'),
        workImage: require('../../assets/icons/icons8-briefcase-100.png'),
        healthImage: require('../../assets/icons/icons8-heart-100.png'),
        addImage: require('../../assets/icons/icons8-add-100.png')
    },
];

const addNote = [
    {
        id: 1,
        title: 'Meeting',
        date: 'Today',
        description: "Discuss the roadmap for building the Tech Starters learning platform assign roles and set milestones for the next two weeks of the next",

    },
    {
        id: 2,
        title: 'Birthay Plan',
        date: '21/05',
        description: "Review progress on the frontend design and backend integration for the website. Discuss user authentication, database setup, and refine the UI/UX layout for the homepage. Attendees Frontend and backend teams, UI/UX designers Objective Ensure both frontend and backend development are on track and identify any blockers for integration",
    },
    {
        id: 3,
        title: 'Recipe',
        date: '29/05',
        description: "Ree Drummond's 3-Ingredient Apple Tart is an ideal fall dessert that's both simple and delicious EatingWell It requires only apples, brown sugar, and puff pastry, and can be prepared in about 20 minutes. To make it, slice apples, mix them with brown sugar (and optionally cinnamon), layer them on puff pastry sheets, and bake at 400°F for approximately 18 minutes until the pastry is golden. The result is a shareable treat reminiscent of apple pie but much easier to prepare. Enjoy it plain or topped with vanilla ice cream, powdered sugar or whipped cream.",
    },
    {
        id: 4,
        title: 'Meeting',
        date: '30/07',
        description: "Review progress on the frontend design and backend integration for the website. Discuss user authentication, database setup, and refine the UI/UX layout for the homepage. Attendees Frontend and backend teams, UI/UX designers Objective Ensure both frontend and backend development are on track and identify any blockers for integration",
    },
    {
        id: 5,
        title: 'Meeting',
        date: 'Today',
        description: "Review progress on the frontend design and backend integration for the website. Discuss user authentication, database setup, and refine the UI/UX layout for the homepage. Attendees Frontend and backend teams, UI/UX designers Objective Ensure both frontend and backend development are on track and identify any blockers for integration",
    },
    {
        id: 6,
        title: 'Meeting',
        date: 'Today',
        description: "Review progress on the frontend design and backend integration for the website. Discuss user authentication, database setup, and refine the UI/UX layout for the homepage. Attendees Frontend and backend teams, UI/UX designers Objective Ensure both frontend and backend development are on track and identify any blockers for integration",
    },

]
const MainScreen = ({ navigation }) => {

    const Notes = () => {
        return (
            <View>

            </View>
        )
    }
    return (
        <View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

                {/* Search Space */}

                <View style={{ marginBottom: 22, marginTop: 20, flex: 1, backgroundColor: '#f1f1f1', padding: 20, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ borderWidth: 1, borderRadius: 19, width: 280, height: 38, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                            <Image source={require('../../assets/icons/icons8-search-100.png')} style={{ width: 19, height: 19, marginRight: 10 }} />
                            <TextInput placeholder="Search Notes" placeholderTextColor="#858585" style={{ fontSize: 13, color: 'black', paddingVertical: 0 }} />
                        </View>

                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Image source={require('../../assets/icons/icons8-settings-100.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                        <TouchableOpacity style={{ marginTop: 19, justifyContent: 'center', borderWidth: 1, alignItems: 'center', borderRadius: 19, width: 70, height: 34, backgroundColor: 'black' }}>
                            <Text style={{ fontSize: 13, fontWeight: '600', color: 'white', }}>Notes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: 19, justifyContent: 'center', borderWidth: 1, alignItems: 'center', borderRadius: 19, width: 70, height: 34, backgroundColor: 'black' }}>
                            <Text style={{ fontSize: 13, fontWeight: '600', color: 'white', }}>Notes</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.bottom}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ borderRadius: 19, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#9747ff', width: 93, height: 34 }}>
                            <Image source={require('../../assets/icons/icons8-add-100.png')} style={{ width: 12, height: 12, tintColor: 'white' }} />
                            <Text style={{ marginLeft: 3, fontSize: 13, color: 'white' }}>New note</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/icons/icons8-add-note-100.png')} style={{ width: 25, height: 25, }} />
                            <Image source={require('../../assets/icons/icons8-sort-amount-up-reversed-100.png')} style={{ width: 25, height: 25 }} />
                        </View>

                    </View>
                </View>
            </ScrollView >

        </View >
    );
};

export default MainScreen;
const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#D0D0DC',
        padding: 20,
        height: '100%',

    }

});