import StackRoutes from "./src/routes/stack.routes";
import { NativeBaseProvider, StatusBar } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <StackRoutes />
      <StatusBar />
    </NativeBaseProvider>
  );
}
