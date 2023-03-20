import {
  Box,
  Image,
  Text,
  Button,
  Icon,
  ScrollView,
  HStack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardDia from "../CardDia";
import CardHora from "../CardHora";

export default function FinalizarAgendamento() {
  return (
    <Box flex={1} p="5">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        h="110"
      >
        <Box h="110" w="110" bgColor="#D9D9D9">
          <Image alt="teste" />
        </Box>
        <Box w="60%" pl={2}>
          <Text fontFamily="Poppins_600SemiBold" fontSize={20}>
            Corte de cabelo masculino
          </Text>
          <Box display="flex" flexDirection="row">
            <Text fontSize={10} fontFamily="Poppins_600SemiBold" mr={1}>
              Total:
            </Text>
            <Text fontSize={10} fontFamily="Poppins_400Regular" color="#00CC2D">
              R$10,00
            </Text>
          </Box>
        </Box>
      </Box>

      <Box>
        <Text fontSize={14} fontFamily="Poppins_600SemiBold" my={5}>
          Para quando você gostaria de agendar?
        </Text>

        <Box>
          <ScrollView horizontal={true} pb={2}>
            <CardDia />
            <CardDia selected={true} />
            <CardDia />
            <CardDia />
            <CardDia />
            <CardDia />
            <CardDia />
            <CardDia />
            <CardDia />
          </ScrollView>
        </Box>
      </Box>

      <Box>
        <Text fontSize={14} fontFamily="Poppins_600SemiBold" my={5}>
          Qual horário gostaria de agendar?
        </Text>

        <Box display="flex" flexWrap="wrap" flexDirection="row">
          <CardHora />
          <CardHora selected={true} />
          <CardHora />
          <CardHora />
          <CardHora />
          <CardHora />
          <CardHora />
          <CardHora />
          <CardHora />
          <CardHora />
        </Box>
      </Box>
    </Box>
  );
}
