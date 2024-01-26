import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ic_back } from '../assets/ic_back.png';

const CustomHeader = ({ title, isBack = false }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            {isBack && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Image source={require('../assets/ic_back.png')} style={styles.backButtonImg}></Image>
            </TouchableOpacity>}
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', // Customize the background color
        paddingHorizontal: 15,
    },

    backButton: {
        marginRight: 20,
        position: 'absolute',
        left: 15,
    },
    backButtonImg: {
        height: 16,
        width: 16,
        justifyContent: 'flex-start'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        // backgroundColor: 'red'
    },
});

export default CustomHeader;
