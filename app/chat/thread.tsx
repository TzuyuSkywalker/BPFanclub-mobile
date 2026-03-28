import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { StyleSheet } from "react-native";

export default function ThreadScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Hilo de ejemplo</ThemedText>
      <ThemedText>Este es un hilo de chat de ejemplo.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 8,
  },
});
