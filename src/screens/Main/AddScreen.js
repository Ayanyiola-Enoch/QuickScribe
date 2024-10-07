import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';

const AddScreen = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header />
            <Text>AddScreen</Text>
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