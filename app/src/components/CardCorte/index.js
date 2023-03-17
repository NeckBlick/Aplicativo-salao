import { Box, Image, Text, Button, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function CardCorte({ corte }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      h="95"
      my={2}
    >
      <Box h="95" w="95" bgColor="#D9D9D9">
        <Image alt="teste" />
      </Box>
      <Box w="40%" pl={2}>
        <Text fontFamily="Poppins_600SemiBold" fontSize={14}>
          Corte de cabelo masculino
        </Text>
        <Text fontSize={10} fontFamily="Poppins_400Regular">
          R$ 10,00 - 60 min
        </Text>
      </Box>
      <Box w="35%" px={1}>
        <Button
          variant="ghost"
          leftIcon={
            <Icon
              as={<MaterialCommunityIcons name="clock-check-outline" />}
              size={14}
              color="#FFF"
              mr={2}
            />
          }
          backgroundColor="#1A0C9A"
          _text={{ fontSize: 12, fontFamily: "Poppins_400Regular", color: "#FFF" }}
          py={1.5}
          px={3}
          w="100%"
        >
          Agendar
        </Button>
      </Box>
    </Box>
  );
}
