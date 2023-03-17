import StackRoutes from "./src/routes/stack.routes";
import { NativeBaseProvider, StatusBar } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackRoutes />
      <StatusBar />
    </NativeBaseProvider>
  );
}
