import { Image, ImageSource } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

interface IImageViewerProps {
  source: ImageSource;
  selectedImage?: string;
}

export const ImageViewer = ({ source, selectedImage }: IImageViewerProps) => {
  const imageSource = selectedImage ? { uri: selectedImage } : source;
  return <Image style={styles.image} source={imageSource} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
