import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
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
        <View style={styles.page}>

            <Header title={'All Notes'} />

            {/* Flatlist of icons */}

            <View style={{ marginBottom: 15 }}>
                <View style={{ marginTop: 20, borderWidth: 1, borderRadius: 9, height: 44, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image source={require('../../assets/icons/icons8-search-100.png')} style={{ width: 19, height: 19 }} />
                    <TextInput placeholder='Search Notes' placeholderTextColor={'#858585'} />
                </View>
                <View>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'black', marginTop: 20 }}>Categories</Text>
                </View>
                <FlatList data={header}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginTop: 27, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <View style={{ borderWidth: 2, borderRadius: 7, width: 40, alignItems: 'center', justifyContent: 'center', height: 40 }}>
                                        <Image source={item.icon} style={{ width: 24, height: 24 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontWeight: '700', color: 'black', }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <View style={{ borderWidth: 2, borderRadius: 7, width: 40, alignItems: 'center', justifyContent: 'center', height: 40 }}>
                                        <Image source={item.workImage} style={{ width: 24, height: 24 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontWeight: '700', color: 'black', }}>{item.title2}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <View style={{ borderWidth: 2, borderRadius: 7, width: 40, alignItems: 'center', justifyContent: 'center', height: 40 }}>
                                        <Image source={item.healthImage} style={{ width: 24, height: 24 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontWeight: '700', color: 'black', }}>{item.title3}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <View style={{ borderWidth: 2, borderRadius: 7, width: 40, alignItems: 'center', justifyContent: 'center', height: 40 }}>
                                        <Image source={item.addImage} style={{ width: 24, height: 24 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, fontWeight: '700', color: 'black', }}>{item.title4}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }} />

                {/* flatlist for the notes added */}


                <FlatList data={addNote}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginBottom: 13 }}>
                                <TouchableOpacity style={{ borderWidth: 2, marginTop: 29, padding: 8, borderRadius: 9 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>{item.date}</Text>
                                    </View>
                                    <Text style={{ fontSize: 12, color: 'black' }}>{item.description}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    ListHeaderComponent={Notes}
                />

            </View>
            <View>

            </View>
        </View>
    );
};

export default MainScreen;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: 20,
    },
});