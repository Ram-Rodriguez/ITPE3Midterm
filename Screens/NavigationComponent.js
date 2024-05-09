import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Login";
import SignupScreen from "./Signup";
import FindAccount from "./FindAccount";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";
import styles from "../styles/styles";
import { SlideInLeft } from "react-native-reanimated";
import AccountPrivacy from "./AccountPrivacy";
import Display from "./Display";
import AccountSettings from "./AccountSettings";
import Calls from "./Calls";
import Messages from "./Messages";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();


const handleLogout = () => {
  const navigation = useNavigation();
    navigation.navigate("Login");
};

const AuthStack = () => {
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
        style={styles.container}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
        style={styles.container}
      />
      <Stack.Screen
        name="FindAccount"
        component={FindAccount}
        options={{ headerShown: false }}
        style={styles.container}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={DrawerNavigation} 
        style={styles.container}
      />
    </Stack.Navigator>
  );
};

const BottomHome = () => {
  return (
  <Bottom.Navigator screenOptions={headerShown=false}>
    <Bottom.Screen name = "Home" component={Home}/>
    <Bottom.Screen name = "Messages" component={Messages}/>
    <Bottom.Screen name = "Calls" component={Calls}/>
    <Bottom.Screen name = "Profile" component={Profile}/>
  </Bottom.Navigator>
)};

const BottomAccount = () => {
  return (
  <Bottom.Navigator screenOptions={headerShown=false}>
    <Bottom.Screen name = "Account Settings" component={AccountSettings}/>
    <Bottom.Screen name = "Account Privacy" component={AccountPrivacy}/>
  </Bottom.Navigator>
)};

const BottomSettings = () => {
  return (
  <Bottom.Navigator screenOptions={{tabBarActiveTintColor: "#0008ff", headerShown: false}}>
    <Bottom.Screen name = "Settings" component={Settings}/>
    <Bottom.Screen name = "Display" component={Display}/>
  </Bottom.Navigator>
)};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#A3CEF1',
        width: 240,
      },
      drawerInactiveTintColor: {
        backgroundColor: "black",
      },
      drawerType: SlideInLeft,
    }}>
      <Drawer.Screen name="DrawerHome" component={BottomHome} style={styles.container}/>
      <Drawer.Screen name="Account" component={BottomAccount} style={styles.container}/>
      <Drawer.Screen name="Settings" component={BottomSettings} style={styles.container}/>
      <Drawer.Screen name="Logout" component={handleLogout} style={styles.container}/>
    </Drawer.Navigator>
  );
};

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
