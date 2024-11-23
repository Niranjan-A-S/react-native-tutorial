import { Image, ImageSource } from "expo-image"
import React from "react"
import { StyleSheet } from "react-native"

interface IImageViewerProps {
    source: ImageSource
}

export const ImageViewer = ({ source }: IImageViewerProps) => {
   return <Image style={styles.image} source={source} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});