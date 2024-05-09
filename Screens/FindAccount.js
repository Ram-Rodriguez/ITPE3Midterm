import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FindAccount = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <View>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Find Your Account</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Please enter your email or mobile number to search for your
              account.
            </Text>
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
          />
          <View style={styles.buttonContainer}>
            <Button
              title="CANCEL"
              onPress={() => navigation.navigate("Login")}
              color="#dc3545"
              style={{borderRadius: 20}}
            />
            <Button
              title="Reset Password"
              onPress={() => console.log("Reset Password")}
              color="#007bff"
            />
          </View>
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
    backgroundColor: "#6096BA"
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#A3CEF1",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#333",
    marginBottom: 20,
    color: "#333",
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default FindAccount;
