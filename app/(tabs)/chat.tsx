import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  const [messages, setMessages] = useState<
    { id: string; text: string; timestamp: number }[]
  >([]);
  const [input, setInput] = useState("");
  const listRef = useRef<FlatList<any> | null>(null);

  function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const msg = {
      id: String(Date.now()),
      text: trimmed,
      timestamp: Date.now(),
    };
    setMessages((p) => [msg, ...p]);
    setInput("");
    setTimeout(
      () => listRef.current?.scrollToOffset({ offset: 0, animated: true }),
      50,
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Chat
          </ThemedText>

          <ThemedText style={styles.text}>
            Reglas: 1.Trata a los demás con respeto y cortesía. Evita el
            lenguaje ofensivo o discriminatorio. {"\n"}
            2.No acosar a otros usuarios.{"\n"}
            3.No nudes/gore.
          </ThemedText>

          <View style={styles.chatContainer}>
            <FlatList
              ref={listRef}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.messageBubble}>
                  <ThemedText>{item.text}</ThemedText>
                </View>
              )}
              ListEmptyComponent={() => (
                <ThemedText style={styles.emptyText}>
                  Todavía no hay mensajes. Sé el primero en saludar.
                </ThemedText>
              )}
              contentContainerStyle={{ paddingVertical: 8 }}
            />

            <View style={styles.inputRow}>
              <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Escribe algo... (anónimo)"
                placeholderTextColor="#999"
                style={styles.input}
                multiline={false}
                onSubmitEditing={sendMessage}
                returnKeyType="send"
              />
              <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                <ThemedText type="defaultSemiBold" style={styles.sendText}>
                  Enviar
                </ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "pink",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "pink",
    marginBottom: 8,
  },
  chatContainer: {
    flex: 1,
    marginTop: 12,
  },
  messageBubble: {
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  emptyText: {
    color: "#999",
    paddingVertical: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.06)",
    paddingTop: 8,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  sendText: {
    color: "pink",
  },
});
