import { Link } from "expo-router"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

const AboutPage = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>About screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    }
})

export default AboutPage;