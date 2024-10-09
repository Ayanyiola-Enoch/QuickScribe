import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';


const ShowScreen = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ width: 39, height: 39, borderWidth: 1, borderColor: '#B3B7C2', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }}>
                    <Image source={require('../../assets/icons/icons8-back-24.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Notes</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Thanks')}>
                    <Image source={require('../../assets/icons/icons8-done-100.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 48 }}>
                <Text style={{ fontSize: 12, color: 'grey' }}>Created 14 Sept. 8:20 am</Text>
            </View>

            <View>

                <View style={{ marginTop: 30, marginBottom: 9 }}>
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Task for today</Text>
                </View>
                <View style={{ height: 370 }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Go on a nature walk or hike and take time to observe the plants, animals, and the environment around you. Begin by choosing a location, such as a nearby park, nature reserve, or hiking trail. Prepare for the walk by wearing comfortable clothes and sturdy shoes. Don’t forget to bring essentials like water, snacks, and something to document your experience, like a notebook or your phone.
                        As I walk, I will pause occasionally to listen to the sounds of nature, focusing on the different noises—whether it’s birds singing, leaves rustling, or water flowing. I’ll look closely at the plant life and try to identify at least three different species of trees, flowers, or shrubs. I'll also observe the animals I encounter, watching their behavior and how they interact with their surroundings, taking notes on any interesting details.</Text>
                </View>

            </View>
        </View>
    );
};

export default ShowScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: 20,
    },
});