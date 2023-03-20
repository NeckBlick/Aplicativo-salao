import { Button, Box, Text } from "native-base";

export default function CardDia({ selected, dia }) {
  return (
    <Button
      p={0}
      variant="ghost"
      bgColor={selected ? "#1A0C9A" : "#D9D9D9"}
      mr={2}
    >
      <Box px={4} py={2} borderRadius={5} display="flex" alignItems="center">
        <Text
          fontSize={10}
          fontFamily="Poppins_400Regular"
          color={selected ? "#F1F1F1" : "#4D4C4C"}
        >
          Dom
        </Text>
        <Text
          fontSize={20}
          fontFamily="Poppins_600SemiBold"
          color={selected ? "#F1F1F1" : "#000"}
        >
          16
        </Text>
        <Text
          fontSize={10}
          fontFamily="Poppins_400Regular"
          color={selected ? "#F1F1F1" : "#4D4C4C"}
        >
          Mar
        </Text>
      </Box>
    </Button>
  );
}
