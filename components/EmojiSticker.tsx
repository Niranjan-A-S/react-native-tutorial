import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Image, type ImageSource } from "expo-image";
import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface IEmojiStickerProps {
  imageSize: number;
  stickerSource: ImageSource;
}

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: IEmojiStickerProps) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  // const tripleTap = Gesture.Tap()
  //   .numberOfTaps(3)
  //   .onStart(() => {
  //     if (scaleImage.value !== imageSize * 3) {
  //       scaleImage.value *= 3;
  //     } else {
  //       scaleImage.value = Math.round(scaleImage.value / 3);
  //     }
  //   });

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  // const composed = Gesture.Simultaneous(doubleTap, tripleTap)

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            resizeMode="contain"
            source={stickerSource}
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
