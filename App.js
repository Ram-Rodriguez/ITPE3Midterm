import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NavigationComponent from "./Screens/NavigationComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
