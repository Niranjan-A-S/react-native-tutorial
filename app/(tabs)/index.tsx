import { Link } from "expo-router"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

const HomePage = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Link style={styles.link} href='/about'>Go to about screen</Link>
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
    },
    link: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    }
})

export default HomePage;