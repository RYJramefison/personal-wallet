import { loginAndRegisterStyle } from "@/style/login-register-style";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function Register(){
    const [userName, setUserName] =  useState("");
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");  
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
            if (!userName || !email || !password) {
              Alert.alert("Error", "Please enter username, email and password");
              return;
            }
        
            setLoading(true);
        
            try {
              const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userName,
                  email,
                  password,
                }),
              });
        
              if (!response.ok) {
                throw new Error("Registration failed. Please try again.");
              }
        
              const data = await response.json();
              console.log("Register success", data);
        
             
              Alert.alert("success", `Welcome ${data.username}`);
  
            } catch (error: any) {
              Alert.alert("Error", error.message);
            } finally {
              setLoading(false);
            }
          };
    return <View style={loginAndRegisterStyle.container}>
        <Text style={loginAndRegisterStyle.title}>Register</Text>
        <Text>user name</Text>
        <TextInput style={loginAndRegisterStyle.input} value={userName} onChangeText={setUserName}/>
        <Text>email</Text>
        <TextInput style={loginAndRegisterStyle.input} textContentType="emailAddress" value={email} onChangeText={setEmail}/>
        <Text>password</Text>
        <TextInput style={loginAndRegisterStyle.input} textContentType="password" value={password} onChangeText={setPassword}/>
        <Button title={loading ? "loading ..." : "register"} onPress={handleRegister}/>
        <Link href="/component/Login" style={loginAndRegisterStyle.link}>Go to Register</Link>
        
    </View>
}