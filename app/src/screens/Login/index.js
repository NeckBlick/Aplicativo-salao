import { Box, Text, Input, Icon, Button, Image } from "native-base";
import { Formik } from "formik";
import * as yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  return (
    <Box alignItems="center" flex={1}>
      <Image source={require("../../../assets/logo.png")} alt="Imagem Logo" mt={{base: "20%"}}/>
      <Box>
        <Input
          w={{
            base: "90%",
            md: "25%",
          }}
          bgColor="#FFF"
          borderColor="black"
          placeholder="Usuário"
          fontSize={16}
          focusOutlineColor="black"
          my={5}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={6}
              ml={2}
              color="black"
            />
          }
        />
        <Input
          w={{
            base: "90%",
            md: "25%",
          }}
          bgColor="#FFF"
          borderColor={"black"}
          placeholder="Senha"
          fontSize={16}
          focusOutlineColor="black"
          my={5}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="lock" />}
              size={6}
              ml={2}
              color="black"
            />
          }
        />
        <Button bgColor="#1A0C9A" mt={10}>
          <Text color="white" fontSize={16} bold>
            Entrar
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
