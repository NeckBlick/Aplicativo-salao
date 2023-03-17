import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";

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
        {/* <Screen name="Cadastro" /> */}
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
