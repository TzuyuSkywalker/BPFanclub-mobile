import { ExternalLink } from "@/components/external-link";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { Fonts } from "@/constants/theme";
import { Image, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#000000ff" }}
      headerImage={
        <Image
          source={require("../../assets/images/deadline.png")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          ¿Quieres ser BLINK? Te presento a BLACKPINK
        </ThemedText>
      </ThemedView>
      <Collapsible title="Conocé a Rosé">
        <ThemedText>
          Rosé es una cantante y compositora reconocida mundialmente por ser la
          voz principal de BLACKPINK.
        </ThemedText>
        <ThemedText>
          Nació el 11 de febrero de 1997 en Auckland, Nueva Zelanda, y creció en
          Australia antes de mudarse a Corea del Sur para perseguir su sueño en
          la música.
        </ThemedText>
        <ThemedText>
          Debutó en 2016 con BLACKPINK y se destacó por su voz única y
          emocional, convirtiéndose en una de las artistas más influyentes del
          K-pop.
        </ThemedText>
        <ThemedText>
          En 2021 lanzó su carrera solista con el álbum “R”, mostrando un estilo
          más personal y consolidando su éxito a nivel global.
        </ThemedText>
        <ExternalLink href="https://www.instagram.com/roses_are_rosie/">
          <ThemedText type="link">Instagram de Rosé</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Conocé a Jennie">
        <ThemedText>
          Jennie es rapera, cantante y una de las integrantes más versátiles de
          BLACKPINK.
        </ThemedText>
        <ThemedText>
          Nació el 16 de enero de 1996 en Corea del Sur y vivió varios años en
          Nueva Zelanda, lo que le permitió dominar el inglés.
        </ThemedText>
        <ThemedText>
          Debutó en 2016 con BLACKPINK y rápidamente se destacó por su presencia
          escénica y estilo único.
        </ThemedText>
        <ThemedText>
          En 2018 lanzó su canción solista “SOLO”, convirtiéndose en un gran
          éxito internacional.
        </ThemedText>
        <ExternalLink href="https://www.instagram.com/jennierubyjane/">
          <ThemedText type="link">Instagram de Jennie</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Conocé a Lisa">
        <ThemedText>
          Lisa es rapera, bailarina principal y una de las idols más populares
          del K-pop a nivel mundial.
        </ThemedText>
        <ThemedText>
          Nació el 27 de marzo de 1997 en Tailandia y es la única integrante
          extranjera de BLACKPINK.
        </ThemedText>
        <ThemedText>
          Es reconocida por su increíble habilidad para el baile y su carisma en
          el escenario.
        </ThemedText>
        <ThemedText>
          En 2021 debutó como solista con “LALISA”, rompiendo récords en YouTube
          y consolidando su éxito global.
        </ThemedText>
        <ExternalLink href="https://www.instagram.com/lalalalisa_m/">
          <ThemedText type="link">Instagram de Lisa</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Conocé a Jisoo">
        <ThemedText>
          Jisoo es cantante y visual de BLACKPINK, conocida por su elegancia y
          carisma.
        </ThemedText>
        <ThemedText>
          Nació el 3 de enero de 1995 en Corea del Sur y es la integrante mayor
          del grupo.
        </ThemedText>
        <ThemedText>
          Además de la música, ha participado como actriz en dramas,
          destacándose en “Snowdrop”.
        </ThemedText>
        <ThemedText>
          En 2023 debutó como solista con “FLOWER”, logrando gran éxito en todo
          el mundo.
        </ThemedText>
        <ExternalLink href="https://www.instagram.com/sooyaaa__/">
          <ThemedText type="link">Instagram de Jisoo</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Membresía BLINK">
        <ThemedText>
          La BLINK MEMBERSHIP es la membresía oficial de BLACKPINK en Weverse,
          que permite a los fans acceder a beneficios exclusivos dentro de la
          comunidad.
        </ThemedText>
        <ThemedText>
          Tiene una duración de 365 días desde la compra y está disponible
          durante todo el año para cualquier usuario con cuenta en Weverse.
        </ThemedText>
        <ThemedText>
          Entre sus beneficios se incluyen acceso a contenido exclusivo,
          oportunidades especiales para eventos como conciertos y preventas, y
          una tarjeta digital de membresía.
        </ThemedText>
        <ThemedText>
          También existe la opción de comprar un “Membership Kit” por separado,
          que incluye productos físicos oficiales (hasta agotar stock).
        </ThemedText>
        <ThemedText>
          Es importante usar la misma cuenta en Weverse y Weverse Shop para
          poder acceder correctamente a todos los beneficios.
        </ThemedText>
        <ExternalLink href="https://shop.weverse.io/es/shop/USD/artists/32/sales/51519">
          <ThemedText type="link">Adquiérela aquí</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 120,
    width: 375,
    bottom: -35,
    position: "relative",
    alignSelf: "center",
    marginTop: 32,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
