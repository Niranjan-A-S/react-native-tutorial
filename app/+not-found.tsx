import { Stack, Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import React from 'react';

const NotFoundScreen = () => (
    <>
        <Stack.Screen options={{ title: 'Oops! Not Found' }} />
        <View
            style={styles.container}
        >
            <Link style={styles.link} href="/">Go back to Home screen</Link>
        </View>
    </>

);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});

export default NotFoundScreen;