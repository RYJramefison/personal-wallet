import { Text, View } from "react-native";
import Login from "./component/Login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Here is my personal wallet</Text>
      <Login/>
    </View>
  );
}
