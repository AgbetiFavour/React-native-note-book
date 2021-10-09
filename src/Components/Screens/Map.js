import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Map = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Map</Text>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10
    }
})
