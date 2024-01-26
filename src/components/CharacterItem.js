import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

const CharacterItem = ({ character, simplified = false }) => {
    return (
        <View style={styles.itemContainer}>
            <Image
                source={{ uri: character.image }}
                style={simplified ? styles.smallImage : styles.image}
            />
            <View style={styles.nameAndCount}>
                <Text style={styles.name}>{character.name}</Text>
                {!simplified && (
                    <Text style={styles.episodeCount}>
                        {character.episode.length} Episodes
                    </Text>
                )}
            </View>
        </View>
    );
};

export default CharacterItem;

const styles = StyleSheet.create({
    container: { backgroundColor: Colors.primaryBackground },
    smallImage: { width: 50, height: 50, borderRadius: 50 },
    image: { width: 80, height: 80, borderRadius: 50 },
    nameAndCount: { padding: 10 },
    name: { fontSize: 22, color: Colors.primary },
    episodeCount: { fontSize: 18, color: Colors.inActive },
    loading: {
        textAlign: 'center',
        backgroundColor: Colors.primaryBackground,
        color: Colors.label,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: Colors.separator,
    },

})