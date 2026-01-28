import { loginAndRegisterStyle } from "@/style/login-register-style";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function Login(){
    const [userName, setUserName] =  useState("");
    const [password, setPassword] =  useState("");
    const [loading, setLoading] = useState(false);

    
    const handleLogin = async () => {
        if (!userName || !password) {
          Alert.alert("Error", "Please enter both username and password");
          return;
        }
    
        setLoading(true);
    
        try {
          const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName,
              password,
            }),
          });
    
          if (!response.ok) {
            throw new Error("Login failed. Please check your credentials.");
          }
    
          const data = await response.json();
          console.log("Login success", data);
    
          // data contient UserWithApiKey
          Alert.alert("success", `Welcome ${data.username}`);
          // Ici tu peux sauvegarder data.apiKey dans AsyncStorage pour les futures requêtes
        } catch (error: any) {
          Alert.alert("Error", error.message);
        } finally {
          setLoading(false);
        }
      };
    return (<View style={loginAndRegisterStyle.container}>
        <Text style={loginAndRegisterStyle.title}>Login</Text>
        <Text>user name</Text>
        <TextInput style={loginAndRegisterStyle.input} value={userName} onChangeText={setUserName}/>
        <Text>password</Text>
        <TextInput secureTextEntry={true} style={loginAndRegisterStyle.input} value={password} onChangeText={setPassword}/>
        <Button title={loading ? "loading ..." : "Login"} onPress={handleLogin}/>
        <Link href="/component/Register" style={loginAndRegisterStyle.link}>Go to Register</Link>
    </View>)
}