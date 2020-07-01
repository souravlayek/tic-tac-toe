import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Avtar = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.avtarIcon}>
                <Ionicons name={props.selection} size={40} color="black" />
            </View>
            <Text style={styles.label}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    avtarIcon: {
        backgroundColor: "#ccc",
        width: 60,
        height: 60,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 4
    },
    label: {
        fontSize: 18,

    },
    container: {
        margin: 10,
        alignItems:"center",
        justifyContent: "center"
    }
})

export default Avtar;