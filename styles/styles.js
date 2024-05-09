import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      backgroundColor: "#f0f0f0",
    },
    formContainer: {
      width: "80%",
      backgroundColor: "#fff",
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
      color: "#888",
    },
    home: {
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#black"
    },
  });

  export default styles;