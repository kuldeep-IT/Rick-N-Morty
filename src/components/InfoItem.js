import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

const InfoItem = ({ label, value }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

export default InfoItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.secondaryBackground,
        padding: 12,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: Colors.separator,
        borderBottomWidth: 1,
    },
    label: {
        color: Colors.label,
        fontSize: 20,
        // marginLeft: 10,
    },
    value: {
        marginLeft: 'auto',
        color: Colors.focused,
        fontSize: 20,
        maxWidth: '60%',
    },
})
