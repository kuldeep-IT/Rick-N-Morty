import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomHeader from '../components/CustomHeader'
import useLocationDetails from '../hooks/useLocationDetails'
import CharacterItem from '../components/CharacterItem'
import { Colors } from '../utils/colors'
import InfoItem from '../components/InfoItem'

const LocationScreen = ({ route, navigation }) => {

    let { locationUrl, screenName } = route.params

    // Destructure data and functions from custom hook
    const { isLoading, locationDetail, getLocationDetail, fetchResidents, residentData } = useLocationDetails();

    // Information to display about the location
    const infoToShow = [
        { label: 'Name', value: locationDetail?.name, icon: 'info', id: '1' },
        {
            label: 'Type',
            value: locationDetail?.type,
            icon: 'calendar-alt',
            id: '2',
        },
        { label: 'Dimension', value: locationDetail?.dimension, icon: 'qrcode', id: '3' },
    ];

    // Fetch location details on component mount or when locationUrl changes
    useEffect(() => {
        if (locationUrl) {
            getLocationDetail(locationUrl, true); // Fetch episode details
        }
    }, [locationUrl])

    return (
        <View>
            <CustomHeader title={screenName} isBack={true} />

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

                    <Text style={[styles.heading, { marginTop: 16 }]}>Residents</Text>

                    <ScrollView style={{ marginBottom: 30 }}>
                        {residentData.map((character, index) => (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    null
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

export default LocationScreen

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