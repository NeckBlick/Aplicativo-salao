import { Box, Text, Input, Icon, Button, Image, Flex, Link } from "native-base";
import { Formik } from "formik";
import * as yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {

  function goToCadastro(){
    navigation.navigate("Cadastro")
  }
  return (
    <Box alignItems="center" flex={1}>
      <Image source={require("../../../assets/logo.png")} alt="Imagem Logo" mt={{ base: "20%" }} />
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
          secureTextEntry={true}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="lock" />}
              size={6}
              ml={2}
              color="black"
            />
          }
        />
        <Button bgColor="#1A0C9A" mt={10} marginBottom={3}>
          <Text color="white" fontSize={16} bold>
            Entrar
          </Text>
        </Button>
        <Box justifyContent="center" flexDirection="row" >
        <Text color="#4D4C4C" fontSize={14} fontWeight="semibold" marginRight={2}>
           Não possui cadastro ?
          </Text>
          <Link isUnderlined={false} onPress={goToCadastro} _text={{
            fontWeight: "semibold",
            color: "#1A0C9A",
            fontSize: 14
          }}>
           Cadastrar
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
