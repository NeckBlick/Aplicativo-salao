import { Box, Text, Input, Icon, Button, Link } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export default function Cadastro({ navigation }) {

    function goBack() {
        navigation.navigate("Login")
    }
    return (
        <Box alignItems="center" flex={1}>
            <Box mt={{base: "30%"}}>
                <Text bold fontSize={48} color="black">Cadastro</Text>

            </Box>
            <Box mt={{base: "10%"}}>
                <Input
                
                    w={{
                        base: "90%",
                        md: "25%",
                    }}
                    bgColor="#FFF"
                    borderColor="black"
                    placeholder="Nome"
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
                    borderColor="black"
                    placeholder="Email"
                    fontSize={16}
                    focusOutlineColor="black"
                    my={5}
                    InputLeftElement={
                        <Icon
                            as={<MaterialIcons name="email" />}
                            size={6}
                            ml={2}
                            color="black"
                        />
                    }
                />
                <Input
                secureTextEntry={true}
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
                <Button bgColor="#1A0C9A" mt={10} marginBottom={3}>
                    <Text color="white" fontSize={16} bold>
                        Entrar
                    </Text>
                </Button>
                <Box justifyContent="center" flexDirection="row" >
                    <Text color="#4D4C4C" fontSize={14} fontWeight="semibold" marginRight={2}>
                        Não possui cadastro ?
                    </Text>
                    <Link isUnderlined={false} onPress={goBack} _text={{
                        fontWeight: "semibold",
                        color: "#1A0C9A",
                        fontSize: 14
                    }}>
                        Cadastrar
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}