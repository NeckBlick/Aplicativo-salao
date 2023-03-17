import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro"
const { Navigator, Screen } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Cadastro" component={Cadastro}/>
        {/* <Screen name="Home" /> */}
      </Navigator>
    </NavigationContainer>
  );
}
