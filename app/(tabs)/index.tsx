import { Image, StyleSheet, View, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/volcano-man.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Text className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-red-900 hover:bg-gray-50">
          You came to the dark side! Tag someone in the Platform Team to level
          up!
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    top: 60,
    height: "100%",
    width: "100%",
    left: 0,
    position: "absolute",
  },
});
