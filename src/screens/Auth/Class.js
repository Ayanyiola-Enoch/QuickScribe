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

const styles = StyleSheet.create({});


















// const FashionPage = () => {
const [data, setData] = useState([]);

console.log('sssssssss', data)

// Fetch data from API (replace with your fashion API)
const fetchData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setData(json.items); // Assuming API returns an array of fashion items
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    fetchData();
}, []);

// Render each item
const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={{ color: 'black', fontSize: 11 }}>{item.title}</Text>
    </View>
);

return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
        <FlatList
            data={data}
            renderItem={renderItem}
            numColumns={3} // Display items in 3 columns
        />
    </View>
);
// };

// const styles = StyleSheet.create({
//     itemContainer: {
//         borderWidth: 1,
//         width: SIZES.h1 * 4,
//         height: SIZES.h1 * 4,
//         borderColor: COLORS.black,
//         alignItems: 'center',
//     },
//     image: {
//         // width: 100,
//         height: 150,
//         resizeMode: 'cover',
//     },
//     title: {
//         marginTop: 5,
//         fontSize: 16,
//     },
// });

// export default FashionPage;