import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cadastrar from './components/cadastrar';
import Listar from './components/listar';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Tabs = createBottomTabNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Tabs.Navigator screenOptions={{ headerStyle:{ backgroundColor: "#00f" }, headerTitleStyle:{ color: "#FFF", fontWeight:"100"}, headerTitleAlign: "center", tabBarStyle:{ height: "60", backgroundColor:"#000" }}}>
      <Tabs.Screen name='Cadastro' component={Cadastrar} options={{tabBarIcon:({color, size})=>(<FontAwesome name="sign-in" size={size} color={color}/>)}}/>
      <Tabs.Screen name='Listar' component={Listar} options={{tabBarIcon:({color, size})=>(<Entypo name="list" size={size} color={color}/>)}}/>
    </Tabs.Navigator>
  </NavigationContainer>
   
  );
};