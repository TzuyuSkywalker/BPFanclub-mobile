import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#d42cb0ff", dark: "#000000ff" }}
      headerImage={
        <Image
          source={require("@/assets/images/bplogo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Guia como stannear al BEST GG del mundo
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          1. Conocé a las integrantes y su rol
        </ThemedText>
        <ThemedText>
          {""}
          <ThemedText type="defaultSemiBold">
            Para ser un buen fan tenés que ubicar bien a cada miembro: {"\n"}
            Jennie – rapera principal y vocalista {"\n"}
            Lisa – bailarina principal y rapera{"\n"}
            Jisoo – vocalista principal y visual {"\n"}
            Rosé – vocalista principal
          </ThemedText>{" "}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">
              2. Apoyá siempre sus comebacks y contenido
            </ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Action"
              icon="cube"
              onPress={() => alert("Action pressed")}
            />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert("Share pressed")}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert("Delete pressed")}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`El fandom se llama BLINK 💕\nNo generar peleas innecesarias\nDefender con respeto\nApoyar a las chicas individualmente y como grupo\n👉 Regla: fan fiel pero sin toxicidad.`}{" "}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          3. Respetá al fandom y evitá hate
        </ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
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
    height: 120,
    width: 375,
    bottom: -35,
    position: "relative",
    alignSelf: "center",
    marginTop: 32,
  },
});
