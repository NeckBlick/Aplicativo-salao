import { Box, Button, Icon, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ButtonFinalizar({ direction, toggleModal, style }) {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["#00004C", "#1A0C9A"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      display="flex"
      flexDirection="row"
      {...style}
    >
      <Button
        w="100%"
        variant="ghost"
        onPress={toggleModal}
        py={2}
        m={0}
        justifyContent="flex-start"
        leftIcon={
          <Icon
            as={<MaterialCommunityIcons name={`chevron-${direction}`} />}
            size={8}
            color="#FFF"
            mr={5}
          />
        }
      >
        <Box>
          <Text color="#FFF" fontFamily="Poppins_600SemiBold" fontSize={16}>
            Finalizar agendamento
          </Text>
          <Text color="#FFF" fontFamily="Poppins_400Regular" fontSize={8}>
            Escolha um horário e método de pagamento
          </Text>
        </Box>
      </Button>
    </Box>
  );
}
