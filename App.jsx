import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Cadastrar } from './components/cadastrar';
import Listar from './components/listar';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('5LY9Kh6n6IYw61L2R6dcMu5trC60nRr0L79xNy3H','TwFbOzOPFyyyhduZ2SVOqolB6vArRW2MjLGaqz0q');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Tabs = createBottomTabNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Tabs.Navigator screenOptions={{ headerStyle:{ backgroundColor: "#8F00DB" }, headerTitleStyle:{ color: "#FFF", fontWeight:"100"}, headerTitleAlign: "center"}}>
      <Tabs.Screen name='Cadastro' component={Cadastrar} options={{tabBarIcon:({color, size})=>(<FontAwesome name="sign-in" size={size} color={color}/>)}}/>
      <Tabs.Screen name='Listar' component={Listar} options={{tabBarIcon:({color, size})=>(<Entypo name="list" size={size} color={color}/>)}}/>
    </Tabs.Navigator>
  </NavigationContainer>
   
  );
};