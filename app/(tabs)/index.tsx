import { Button } from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import { EmojiList } from "@/components/EmojiList";
import { EmojiPicker } from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import { ImageViewer } from "@/components/ImageViewer";
import { ImageSource } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceHolderImage = require("@/assets/images/background-image.png");

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource>();

  const pickImageAsync = async () => {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!canceled) {
      setSelectedImage(assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onSelectEmoji = (item: ImageSource) => {
    setPickedEmoji(item);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={PlaceHolderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={setShowAppOptions.bind(this, true)}
          />
        </View>
      )}

      <EmojiPicker isVisible={showModal} onClose={onModalClose}>
        <EmojiList onSelect={onSelectEmoji}></EmojiList>
      </EmojiPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default HomePage;
