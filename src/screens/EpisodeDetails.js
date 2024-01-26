import { ActivityIndicator, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import useEpisodeDetails from '../hooks/useEpisodeDetails';
import CustomHeader from '../components/CustomHeader';
import InfoItem from '../components/InfoItem';
import { Colors } from '../utils/colors';
import CharacterItem from '../components/CharacterItem';

const EpisodeDetails = ({ route, navigation }) => {

    let { episodeId } = route.params

    // Destructure properties from the custom hook
    const { isLoading, episodeDetail, getEpisodeDetail, characterData, fetchCharacters } = useEpisodeDetails();

    // Information to show in the details section
    const infoToShow = [
        { label: 'Name', value: episodeDetail?.name, icon: 'info', id: '1' },
        {
            label: 'Air Date',
            value: episodeDetail?.air_date,
            icon: 'calendar-alt',
            id: '2',
        },
        { label: 'Code', value: episodeDetail?.episode, icon: 'qrcode', id: '3' },
    ];

    // Fetch episode details on component mount or when episodeId changes
    useEffect(() => {
        if (episodeId) {
            getEpisodeDetail(episodeId, true); // Fetch episode details
        }
    }, [episodeId]);

    return (
        <View style={styles.root}>
            <CustomHeader title={"Episode Details"} isBack={true} />
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={styles.heading}>Info</Text>

                    {infoToShow.map(info => (
                        <InfoItem
                            key={info.label}
                            label={info.label}
                            value={info.value}
                        />
                    ))}

                    <Text style={[styles.heading, { marginTop: 16 }]}>Characters</Text>

                    <ScrollView >
                        {characterData.map((character, index) => (
                            <Pressable
                                key={index}
                                onPress={() => {

                                    // navigation.navigate("ProfileInfo", {
                                    //     characterId: character.id,
                                    // });
                                }}>
                                <CharacterItem character={character} simplified />
                            </Pressable>
                        ))}
                    </ScrollView>
                </>
            )}
        </View>
    )
}

export default EpisodeDetails

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 16
    },
    heading: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 10,
        color: Colors.inActive,
        backgroundColor: Colors.primaryBackground,
        textTransform: 'uppercase',
    },
})