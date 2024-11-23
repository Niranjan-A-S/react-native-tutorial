import { ImageViewer } from '@/components/ImageViewer';
import React from "react";
import { StyleSheet, View } from "react-native";

const PlaceHolderImage = require('@/assets/images/background-image.png');

const HomePage = () => {
    return <View style={styles.container}>
        <View style={styles.imageContainer}>
            <ImageViewer source={PlaceHolderImage} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
    }
});

export default HomePage;