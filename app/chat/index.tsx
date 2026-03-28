import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function ChatScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Chat</ThemedText>
      <ThemedText>
        Esta es la pantalla principal del chat. Probá abrir un hilo de ejemplo.
      </ThemedText>

      <Link href="thread">
        <ThemedText type="link">Abrir hilo de ejemplo</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 16,
  },
});
