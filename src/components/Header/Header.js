import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <View style={{ width: 19, height: 19, borderColor: '#2F344C', }}>
                <Image source={require('../../assets/icons/icons8-hamburger-menu-480.png')} style={{ width: 17, height: 16 }} />
            </View>
            <Text style={{ marginLeft: 10, color: 'black', fontSize: 12 }}>All Notes</Text>
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