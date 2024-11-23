import { Image, ImageSource } from "expo-image";
import React, { FC, useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native";

interface IEmojiList {
  onSelect: (image: ImageSource) => void;
}

export const EmojiList: FC<IEmojiList> = ({ onSelect }) => {
  const [emojis] = useState<ImageSource[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  const onRenderItem = ({ item, index }: any) => {
    return (
      <Pressable onPress={() => onSelect(item)}>
        <Image source={item} key={index} style={styles.image} />
      </Pressable>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={styles.listContainer}
      data={emojis}
      renderItem={onRenderItem}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
