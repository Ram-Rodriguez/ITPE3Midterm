import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from "react-native";
import { useState } from "react";
import { DrawerNavigation } from "./NavigationComponent";
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate("Home");
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            marginBottom: 30,
          }}
          source={{
            uri: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/395082816_1108233383938780_7994386617184561812_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGy1ikOAKYpwsyqs3rIVkpdKnmDlXQFN7IqeYOVdAU3sgJswyByWQp0C8fcEjm_od-eT34PAk8CQxcZC2_QjVEE&_nc_ohc=_amKsNBtHeYAb7A2Zsd&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&oh=00_AfCAFibaajpP6anf6OCivcQ5HZyOBHti3_VsuYhJz_Hj7g&oe=662F6300",
          }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={text => setUsername(text)}
          value={username}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            onPress={handleLogin}
            color="#75f870"
            borderRadius="20"
          />
        </View>

        <View style={styles.signupContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("Signup")}
            color="#4985ff"
          />
        </View>

        <Text
          onPress={() => navigation.navigate("FindAccount")}
          style={styles.forgotPasswordText}
        >
          Forgot Password?
        </Text>
      </View>
      <View>
        <Text style={{color: "white", alignContent: "flex-end"}}> Rodriguez Jr. Ramil M. ITPE 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#6096ba",
  },
  formContainer: {
    width: "80%",
    backgroundColor: "#a3cef1",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  passwordInput: {
    marginBottom: 30,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  signupContainer: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    textAlign: "center",
    marginBottom: 15,
    color: "#000000",
  },
});

export default LoginScreen;
