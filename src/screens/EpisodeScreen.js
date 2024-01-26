import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/colors'
import CustomHeader from '../components/CustomHeader'
import useEpisodeDetails from '../hooks/useEpisodeDetails'

const EpisodeScreen = ({ route, navigation }) => {

    let { episodes } = route.params

    return (
        <View>
            <CustomHeader title={"Episodes"} isBack={true} />

            {/* FlatList to display a list of episodes */}
            <FlatList
                data={episodes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => {
                        navigation.navigate("EpisodeDetails", { episodeId: item.id })
                    }}>
                        <Text style={styles.episodeName}>{item.name}</Text>
                        <Text style={styles.date}>{item.air_date}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default EpisodeScreen

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.secondaryBackground,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: Colors.separator,
        borderBottomWidth: 1,
    },
    episodeName: {
        color: Colors.label,
        fontSize: 20,
        marginLeft: 10,
        maxWidth: '50%',
    },
    date: {
        color: Colors.inActive,
        fontSize: 18,
        marginLeft: 'auto',
    },
})