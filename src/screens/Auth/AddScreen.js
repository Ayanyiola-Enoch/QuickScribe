import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';


const AddScreen = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ width: 39, height: 39, borderWidth: 1, borderColor: '#B3B7C2', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }}>
                    <Image source={require('../../assets/icons/icons8-back-24.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <TextInput placeholder='Title' style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Image source={require('../../assets/icons/icons8-done-100.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>

            <View>

                <View style={{ marginTop: 20, marginBottom: 9 }}>
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Description</Text>
                </View>
                <View style={{ borderRadius: 9, height: 370 }}>
                    <TextInput placeholder='Enter Description' multiline={true} placeholderTextColor={'grey'} />
                </View>

            </View>
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: 20,
    },
});