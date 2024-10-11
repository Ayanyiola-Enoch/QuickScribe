import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { useNavigation } from '@react-navigation/native';

const AddScreen = ({ route }) => {

    const navigation = useNavigation();
    console.log('route', route);
    const [newTitle, setNewTitle] = useState('');
    console.log('title', newTitle);
    console.log('description', newDescribe);

    const [newDescribe, setNewDescribe] = useState('');

    const done = () => {
        navigation.navigate('Main', { newTitle, newDescribe });
    };

    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ width: 39, height: 39, borderWidth: 1, borderColor: '#B3B7C2', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }}>
                        <Image source={require('../../assets/icons/icons8-back-24.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => done()}>
                    <Image source={require('../../assets/icons/icons8-done-100.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>

            <View>

                <View style={{ marginTop: 20, }} >
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Title</Text>
                </View>
                <View style={[styles.container, { marginTop: 19, marginBottom: 9, height: 50 }]}>
                    <TextInput placeholder='Enter Title' style={{ marginLeft: 10 }} multiline={true} placeholderTextColor={'grey'} onChangeText={(kk) => setNewTitle(kk)} />
                </View>
                <View style={{ marginTop: 20, marginBottom: 9 }}>
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Description</Text>
                </View>
                <View style={styles.container}>
                    <TextInput placeholder='Enter Description' style={{ marginLeft: 10 }} multiline={true} placeholderTextColor={'grey'} onChangeText={(kk) => setNewDescribe(kk)} />
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
    container: {
        borderRadius: 10,
        marginTop: 9,
        height: 400,
        borderWidth: 1,
    },
})