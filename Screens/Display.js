import { Text, View } from "react-native";
import styles from "../styles/styles";

const Display = ({ navigation }) => {
  return (
    <View>
      <View style={styles.home}>
        <Text>This is the Display Page</Text>
      </View>
    </View>
  );
};

export default Display;
