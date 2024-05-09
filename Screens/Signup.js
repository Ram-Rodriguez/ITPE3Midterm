import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("male");

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
        <View style={styles.nameContainer}>
          <View style={styles.nameInput}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              placeholder=""
              style={[styles.input, styles.smallFont]}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.nameInput}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              placeholder=""
              style={[styles.input, styles.smallFont]}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={[styles.input, styles.smallFont]}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>New Password:</Text>
        <TextInput
          style={[styles.input, styles.smallFont]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>Birthday:</Text>
        <TextInput
          style={[styles.input, styles.smallFont]}
          value={birthday}
          onChangeText={setBirthday}
        />

        <Text style={styles.label}>Gender:</Text>
        <RNPickerSelect
          placeholder={{
            label: "Select your gender",
            value: null,
          }}
          onValueChange={(value) => setGender(value)}
          items={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          style={pickerSelectStyles}
        />

        <Button title="REGISTER" onPress={() => navigation.navigate("Login")} />
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
    width: "95%",
    backgroundColor: "#a3cef1",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameInput: {
    width: "48%",
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#black",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  smallFont: {
    fontSize: 14, 
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
});

export default RegisterScreen;
