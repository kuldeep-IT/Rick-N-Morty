import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import useCharacterDetails from '../hooks/useCharacterDetails';
import CustomHeader from '../components/CustomHeader';

const HomeScreen = ({ navigation }) => {

    // Destructure data and functions from custom hook  
    const { isLoading, characterData, getCharacter } = useCharacterDetails();

    useEffect(() => {
        const fetchCharacterData = async () => {
            await getCharacter(true); // Fetch character data
        };
        fetchCharacterData();
    }, []);

    //  Log character data for debugging when it updates
    useEffect(() => {
        if (characterData) {
            console.log("Updated characterData:", characterData);
        }
    }, [characterData]);

    const renderCharacter = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('ProfileInfo', { character: item })
            }
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.root}>
            <CustomHeader title={"Characters"} />
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    {characterData && (
                        <FlatList
                            data={characterData}
                            renderItem={renderCharacter}
                            keyExtractor={item => item.id.toString()}
                            numColumns={2}
                            columnWrapperStyle={styles.row}
                            contentContainerStyle={styles.listContainer}
                        />
                    )}
                </>
            )}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 16
    },

    HeaderText: {
        fontSize: 22,
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold'
    },
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,

    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    image: {
        width: 165,
        height: 150,
        resizeMode: 'cover',
    },
    name: {
        marginTop: 5,
        paddingBottom: 6,
        fontSize: 16,
        fontWeight: 'bold',
    },
})