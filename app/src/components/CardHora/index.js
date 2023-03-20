import { Box, Button, Text } from "native-base";

export default function CardHora({ selected, hora }) {
  return (
    <Box w={{ base: "33%" }} px={1}>
      <Button
        py={0}
        variant="ghost"
        borderColor={selected ? "#1A0C9A" : "#4D4C4C"}
        bgColor={selected ? "#1A0C9A" : "#FFF"}
        borderWidth={1}
        mb={2}
      >
        <Box>
          <Text
            fontFamily="Poppins_400Regular"
            color={selected ? "#F1F1F1" : "#000"}
          >
            10:00
          </Text>
        </Box>
      </Button>
    </Box>
  );
}
