import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Image,
  Button,
  Icon,
  Input,
  ScrollView,
  composeEventHandlers,
} from "native-base";
import CardCorte from "../../components/CardCorte";
import ButtonFinalizar from "../../components/ButtonFinalizar";
import FinalizarAgendamento from "../../components/FinalizarAgendamento";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";

export default function Home() {
  const modalRef = useRef(null);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Box flex="1" bg="#FFF">
      <Box bgColor="#000" position="relative">
        <Image
          source={require("../../../assets/background-home.png")}
          alt="Imagem de barbearia"
        />
        <Button
          backgroundColor="#00CC2D"
          py={1}
          px={4}
          position="absolute"
          top="45%"
          left={5}
          _text={{
            fontFamily: "Poppins_400Regular",
          }}
        >
          Aberto
        </Button>
        <Box position="absolute" left={5} top="66%">
          <Text color="#FFF" fontSize={22} fontFamily="Poppins_600SemiBold">
            Aplicativo de barbearia
          </Text>
          <Text color="#FFF" fontSize={12} fontFamily="Poppins_400Regular">
            São Paulo
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        py={3}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="row"
          w={{ base: "42%" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="ghost"
            onPress={() => console.log("teste2")}
            p={1}
            _pressed={{ backgroundColor: "gray.100" }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Icon
                as={<MaterialCommunityIcons name="phone" />}
                size={5}
                color="black"
                mb={1}
              />

              <Text fontSize={10} fontFamily="Poppins_400Regular">
                Ligar
              </Text>
            </Box>
          </Button>
          <Button
            variant="ghost"
            onPress={() => console.log("teste2")}
            p={1}
            _pressed={{ backgroundColor: "gray.100" }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Icon
                as={<Ionicons name="location-sharp" />}
                size={5}
                color="black"
                mb={1}
              />
              <Text fontSize={10} fontFamily="Poppins_400Regular">
                Visitar
              </Text>
            </Box>
          </Button>
          <Button
            variant="ghost"
            onPress={() => console.log("teste2")}
            p={1}
            _pressed={{ backgroundColor: "gray.100" }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Icon
                as={<MaterialCommunityIcons name="share-all" />}
                size={5}
                color="black"
                mb={1}
              />

              <Text fontSize={10} fontFamily="Poppins_400Regular">
                Compartilhar
              </Text>
            </Box>
          </Button>
        </Box>

        <Box display="flex" alignItems="center">
          <Button
            leftIcon={
              <Icon
                as={<MaterialCommunityIcons name="clock-check-outline" />}
                size={14}
                color="#FFF"
              />
            }
            backgroundColor="#1A0C9A"
            _text={{ fontSize: 12, fontFamily: "Poppins_400Regular" }}
            py={1.5}
            px={3}
            onPress={() => modalRef.current?.open()}
          >
            Agendar agora
          </Button>
          <Text fontSize={10} color="#4D4C4C" fontFamily="Poppins_400Regular">
            Horarios disponíveis
          </Text>
        </Box>
      </Box>

      <Box px={5} mt={5}>
        <Box>
          <Text fontSize={22} fontFamily="Poppins_600SemiBold">
            Serviços (5)
          </Text>
          <Input
            mt={1}
            placeholder="Pesquise um serviço..."
            fontFamily="Poppins_400Regular"
            h={{ base: 10 }}
            backgroundColor="#FFF"
            InputRightElement={
              <Icon
                as={<Ionicons name="search-sharp" />}
                size={6}
                color="black"
                mr={2}
              />
            }
            inputMode="search"
            returnKeyType="search"
          />
        </Box>
      </Box>

      <Box mt={5} h="37%">
        <ScrollView px={5}>
          <CardCorte />
          <CardCorte />
          <CardCorte />
        </ScrollView>
      </Box>

      <ButtonFinalizar
        direction="up"
        toggleModal={() => modalRef.current?.open()}
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
      />

      <Modalize adjustToContentHeight={true} ref={modalRef}>
        <ScrollView>
          <Box>
            <ButtonFinalizar
              direction="left"
              toggleModal={() => modalRef.current?.close()}
            />
          </Box>
          <FinalizarAgendamento />
        </ScrollView>
      </Modalize>
    </Box>
  );
}
