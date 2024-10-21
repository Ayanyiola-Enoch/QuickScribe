import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Class = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.text}>Class</Text>
            </View>
        </View>
    );
};

export default Class;

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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});