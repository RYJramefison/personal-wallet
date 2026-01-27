import { Text, TextInput, View } from "react-native";

export default function Login(){
    return (<View>
        <Text className="title">Login</Text>
        <Text>user name</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
        <Text>password</Text>
        <TextInput secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
    </View>)
}