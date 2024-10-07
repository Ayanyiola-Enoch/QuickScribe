import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ width: 10, height: 10, borderColor: '' }}>
                    <Image source={require('../../assets/icons/icons8-hamburger-menu-100.png')} style={{ width: 17, height: 16 }} />
                </View>
                <Text style={{ marginLeft: 10, color: 'black', fontSize: 12 }}>All Notes</Text>
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