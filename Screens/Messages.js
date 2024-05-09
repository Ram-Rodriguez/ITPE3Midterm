import { Text, View } from "react-native";
import styles from "../styles/styles";

const Messages = ({ navigation }) => {
  return (
    <View>
      <View style={styles.home}>
        <Text>This is the Messages Page</Text>
      </View>
    </View>
  );
};

export default Messages;
