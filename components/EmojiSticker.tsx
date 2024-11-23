import { View } from "react-native";
import { Image, type ImageSource } from "expo-image";
import React from "react";

interface IEmojiStickerProps {
  imageSize: number;
  stickerSource: ImageSource;
}

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: IEmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
