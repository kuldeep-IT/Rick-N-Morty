import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomHeader from '../components/CustomHeader'
import { Colors } from '../utils/colors'
import InfoItem from '../components/InfoItem'
import useFetchEpisode from '../hooks/useFetchEpisode'

const ProfileInfo = ({ navigation, route }) => {

    const { character } = route.params

    const { isLoading, error, fetchEpisodes, episodes } = useFetchEpisode();

    useEffect(() => {

        fetchEpisodes(character.episode);

    }, [fetchEpisodes]);

    console.log("EPPISODE RECEIVE outD:::", character.location.url)

    const infoToShow = [
        { label: 'Species', value: character?.species, icon: 'paw', id: '1' },
        { label: 'Gender', value: character?.gender, icon: 'user', id: '2' },
        { label: 'Status', value: character?.status, icon: 'heartbeat', id: '3' },
        { label: 'Location', value: character?.location.name, icon: 'map', id: '4' },
        {
            label: 'Origin',
            value: character?.origin.name,
            icon: 'location-arrow',
            id: '5',
        },
    ];

    return (
        <View style={styles.root}>
            <CustomHeader title={"Character Details"} isBack={true} />

            <ScrollView style={styles.container}>
                <Text style={styles.charName}>{character.name}</Text>
                <View style={styles.imgMain}>
                    <Image source={{ uri: character.image }} style={styles.image} />
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={styles.heading}>Info</Text>
                    {infoToShow.map(info => (
                        <InfoItem
                            key={info.label}
                            iconName={info.icon}
                            label={info.label}
                            value={info.value}
                        />
                    ))}
                </View>

                <TouchableOpacity activeOpacity={1} style={{ marginVertical: 16, flex: 1, width: '100%', flexDirection: 'row', backgroundColor: Colors.primaryBackground, justifyContent: 'space-between', alignItems: 'center' }} onPress={() => {
                    navigation.navigate("EpisodeScreen", { episodes: episodes })
                }}>
                    <Text style={styles.heading}>Episodes</Text>
                    <Image tintColor={Colors.inActive} source={require('../assets/ic_right.png')} style={styles.rightButtonImg} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={{ marginBottom: 16, flex: 1, width: '100%', flexDirection: 'row', backgroundColor: Colors.primaryBackground, justifyContent: 'space-between', alignItems: 'center' }} onPress={() => {
                    navigation.navigate("LocationScreen", { locationUrl: character?.location.url, screenName: 'Location Details' })
                }}>
                    <Text style={styles.heading}>Locations</Text>
                    <Image tintColor={Colors.inActive} source={require('../assets/ic_right.png')} style={styles.rightButtonImg} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={{ marginBottom: 20, flex: 1, width: '100%', flexDirection: 'row', backgroundColor: Colors.primaryBackground, justifyContent: 'space-between', alignItems: 'center' }} onPress={() => {
                    navigation.navigate("LocationScreen", { locationUrl: character?.origin.url, screenName: 'Origin Details' })
                }}>
                    <Text style={styles.heading}>Origin</Text>
                    <Image tintColor={Colors.inActive} source={require('../assets/ic_right.png')} style={styles.rightButtonImg} />
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

export default ProfileInfo

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },

    container: {
        padding: 14
    },

    charName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },

    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15
    },
    imgMain: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10

    },

    heading: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 10,
        color: Colors.inActive,
        backgroundColor: Colors.primaryBackground,
        textTransform: 'uppercase',
    },
    rightButtonImg: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        color: Colors.inActive,
        alignItems: 'center',
        marginRight: 12

    }


})