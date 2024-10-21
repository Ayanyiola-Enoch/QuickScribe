import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Class = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.text}>Products</Text>
            </View>

        </View>
    );
};

export default Class;

const styles = StyleSheet.create({
    page: {
        padding: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f1f1f1',
        flex: 1,
    },
    container: {

    }
});