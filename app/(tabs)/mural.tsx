import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MuralScreen() {
  const [images, setImages] = useState<string[]>([]);
  const [previewUri, setPreviewUri] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      }
    })();
  }, []);

  async function pickFromGallery() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setImages((p) => [uri, ...p]);
      }
    } catch (e) {
      console.warn("Image pick error", e);
    }
  }

  async function takePhoto() {
    try {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== "granted") {
        const { status: s2 } =
          await ImagePicker.requestCameraPermissionsAsync();
        if (s2 !== "granted") {
          Alert.alert(
            "Permiso requerido",
            "Necesitamos permiso para usar la cámara.",
          );
          return;
        }
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setImages((p) => [uri, ...p]);
      }
    } catch (e) {
      console.warn("Camera error", e);
    }
  }

  function openPickerOptions() {
    const buttons = [
      { text: "Cancelar", style: "cancel" as const },
      { text: "Abrir cámara", onPress: takePhoto },
      { text: "Elegir de la galería", onPress: pickFromGallery },
    ];

    Alert.alert("Añadir foto", "Selecciona la fuente", buttons as any);
  }

  const numColumns = 2;
  const { width } = Dimensions.get("window");
  const padding = 16;
  const gap = 12;
  const itemSize = (width - padding * 2 - gap * (numColumns - 1)) / numColumns;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Mural</ThemedText>
        <ThemedText type="subtitle">
          Comparte tus fotos (solo local por ahora)
        </ThemedText>

        <FlatList
          data={images}
          keyExtractor={(item) => item}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setPreviewUri(item)}
              style={{ marginBottom: gap }}
            >
              <View
                style={[styles.card, { width: itemSize, height: itemSize }]}
              >
                <Image
                  source={item}
                  style={styles.cardImage}
                  contentFit="cover"
                />
              </View>
            </TouchableOpacity>
          )}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginTop: 12,
          }}
          ListEmptyComponent={() => (
            <View style={{ marginTop: 24 }}>
              <ThemedText>No hay fotos aún. Pulsa + para añadir.</ThemedText>
            </View>
          )}
        />

        <TouchableOpacity style={styles.fab} onPress={openPickerOptions}>
          <ThemedText type="defaultSemiBold" style={styles.fabText}>
            +
          </ThemedText>
        </TouchableOpacity>

        <Modal
          visible={!!previewUri}
          transparent={true}
          onRequestClose={() => setPreviewUri(null)}
        >
          <View style={styles.previewContainer}>
            <TouchableOpacity
              style={styles.previewClose}
              onPress={() => setPreviewUri(null)}
            />
            {previewUri && (
              <Image
                source={previewUri}
                style={styles.previewImage}
                contentFit="contain"
              />
            )}
          </View>
        </Modal>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  safeArea: {
    flex: 1,
  },
  card: {
    borderRadius: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#d42cb0",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  fabText: {
    color: "white",
    fontSize: 28,
    lineHeight: 30,
  },
  previewContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  previewImage: {
    width: "100%",
    height: "80%",
    borderRadius: 12,
  },
  previewClose: {
    position: "absolute",
    top: 24,
    right: 24,
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});
