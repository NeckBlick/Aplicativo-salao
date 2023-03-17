import { Box, Text, Input, Icon, Button, Image, Link } from "native-base";
import { Formik } from "formik";
import * as yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  return (
    <Box alignItems="center" flex={1} bgColor="#F1F1F1">
      <Image
        source={require("../../../assets/logo.png")}
        alt="Imagem Logo"
        mt={{ base: "20%" }}
      />
      <Box>
        <Input
          w={{
            base: "90%",
          }}
          bgColor="#FFF"
          borderColor="black"
          placeholder="Usuário"
          placeholderTextColor="#4D4C4C"
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
          }}
          bgColor="#FFF"
          borderColor={"black"}
          placeholder="Senha"
          placeholderTextColor="#4D4C4C"
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
        <Button
          bgColor="#1A0C9A"
          mt={10}
          onPress={() => navigation.navigate("Home")}
        >
          <Text color="white" fontSize={16} bold>
            Entrar
          </Text>
        </Button>
      </Box>
      <Box display="flex" flexDirection="row" mt={5}>
        <Text fontSize={18} fontWeight="semibold" color="#4D4C4C" mr={2}>
          Não possui cadastro?
        </Text>
        <Link
          onPress={() => navigation.navigate("Cadastro")}
          _text={{
            fontSize: 18,
            color: "#1A0C9A",
            fontWeight: "semibold",
          }}
        >
          Cadastrar
        </Link>
      </Box>
    </Box>
  );
}
