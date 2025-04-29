import {
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
    Text,
    View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Note = () => {
    const [input, setInput] = useState('');
    const [store, setStore] = useState('');
    const [todos, setTodos] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        loadTodos();
    }, []);


    const submit = async () => {
        try {
            await AsyncStorage.setItem('input', input);
            console.log('The inputted value is ', input);
            if (input === '') {
                console.warn('empty todo');
                Toast.show({
                    type: 'warning',
                    text1: 'Warning',
                    text2: 'Input is empty',
                    visibilityTime: 1000,
                });
            } else {
                const newTodo = {
                    id: Math.random(),
                    title: input,
                    isChecked: false,
                };
                const updatedTodos = [...todos, newTodo];
                setTodos(updatedTodos);
                saveTodos(updatedTodos);
                setInput(''),
                    Toast.show({
                        type: 'success',
                        text1: 'Successful',
                        text2: 'Note Successfully added',
                        visibilityTime: 1000,
                    });
            }
        } catch (error) {
            console.log('This is an error', error);
        }
    };

    {
        /*Function to delete a specific todo*/
    }

    const completeTodo = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };

    {
        /*function to save todos*/
    }
    const saveTodos = async todos => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.log('Saving todos error: ', error);
        }
    };

    {
        /*function to load todos*/
    }
    const loadTodos = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos)); // convert string back to array
            }
        } catch (error) {
            console.log('Loading todos error: ', error);
        }
    };

    {
        /*function to delete all*/
    }

    const clearTodo = async () => {
        setTodos([]);
        Toast.show({
            type: 'success',
            text1: 'Note Deleted',
            text2: 'Note Successfully deleted',
            visibilityTime: 1000,
        });
    };

    {
        /*Function to check the todo*/
    }

    const markTodo = async mapp => {
        console.log(mapp);

        const helloTodo = todos.map((data, index) => {
            if (data.id === mapp) {
                // data.isChecked = true
                data.isChecked = !data.isChecked; //This is an inverse statement, which means set to be true if false and vice-vera
            }
            return data;
        });

        setTodos(helloTodo);
        console.log(helloTodo);
    };

    return (
        <View style={styles.page}>
            {/* title */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={{ ...FONTS.h3 }}>Hi, Enoch</Text>
                <TouchableOpacity onPress={() => clearTodo()}>
                    <Image
                        source={icons.deleteImg}
                        style={{ width: SIZES.h2, height: SIZES.h2 }}
                    />
                </TouchableOpacity>
            </View>

            {/* flatlist for added notes */}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    width: '100%',
                                    height: SIZES.h1 * 1.8,
                                    marginTop: SIZES.h2,
                                    justifyContent: 'center',
                                    paddingHorizontal: SIZES.h4,
                                }}>
                                <View
                                    style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                textDecorationLine: item.isChecked
                                                    ? 'line-through'
                                                    : 'none',
                                            }}>
                                            {item.title}
                                        </Text>
                                    </View>

                                    <TouchableOpacity
                                        activeOpacity={5}
                                        onPress={() => markTodo(item.id)}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            gap: 5,
                                        }}>
                                        {/* Select function */}
                                        <View>
                                            <Image
                                                source={item.isChecked ? icons.select : icons.emptyBox}
                                                style={{ width: SIZES.h2, height: SIZES.h2 }}
                                            />
                                        </View>

                                        {/*Delete specific function*/}
                                        <TouchableOpacity onPress={() => completeTodo(item.id)}>
                                            <Image
                                                source={icons.deleteImg}
                                                style={{ width: SIZES.h2, height: SIZES.h2 }}
                                            />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>

            <Toast />

            {/* bottom adding input */}

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <TextInput
                    placeholder="Enter a new To-do"
                    style={styles.text}
                    onChangeText={kk => setInput(kk)}
                    value={input}
                />
                <TouchableOpacity
                    onPress={() => submit()}
                    style={{
                        borderWidth: 1,
                        borderRadius: SIZES.h1 * 5,
                        padding: SIZES.h5,
                    }}>
                    <Image
                        source={icons.add}
                        style={{
                            width: SIZES.h1 * 0.6,
                            height: SIZES.h1 * 0.6,
                            tintColor: COLORS.primary,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default Note;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.grey,
        paddingTop: SIZES.h1 * 1.2,
        padding: 20,
        paddingHorizontal: SIZES.h1,
    },
    text: {
        borderWidth: 1,
        borderRadius: 5,
        width: SIZES.h1 * 8.7,
        height: SIZES.h1 * 1.5,
        paddingHorizontal: SIZES.h4,
    },
});
