import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <TouchableOpacity style={{ width: 33, height: 33, borderColor: '#2F344C', borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                <Image source={require('../../assets/icons/icons8-hamburger-menu-480.png')} style={{ width: 23, height: 23 }} />
            </TouchableOpacity>
            <View>
                <Text style={{ marginLeft: 10, color: 'black', fontSize: 13, fontWeight: 'bold' }}>All Notes</Text>
            </View>
        </View>

    );
};

export default Header;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: 20
    },
});