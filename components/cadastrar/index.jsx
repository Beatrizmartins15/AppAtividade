import React, { FC, ReactElement, useState } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TextInput, 
  Pressable, 
  Alert 
} from 'react-native';
import Parse from "parse/react-native";
import 'react-native-get-random-values';


export const Cadastrar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doCadastrar = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    // Since the signUp method returns a Promise, we need to call it using await
    return await Parse.User.signUp(usernameValue, passwordValue)
      .then((createdUser) => {
        // Parse.User.signUp returns the already created ParseUser object if successful
        Alert.alert(
          "Success!",
          `User ${createdUser.get("username")} was successfully created!`
        );
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  };

  return (
    <SafeAreaView style={styles.container__safe}>
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Nome do Produto"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input2}    
        value={password}
        placeholder={"Valor R$0,00"}
        secureTextEntry
        keyboardType={"numeric"}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input3}    
        value={password}
        placeholder={'Quantidade'}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={styles.btnCadastrar} onPress={() => doCadastrar()}>
    <Text>
        Cadastrar Produto
    </Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "80%",
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input2: {
    height: 40,
    width: "80%",
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,

  },
  input3: {
    height: 40,
    width: "80%",
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,
  },
  btnCadastrar:{
    backgroundColor: "#8F00DB",
    height: 40,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },
    container__safe:{
        flex: 1
      },
      container: {
        flex: 1,
        backgroundColor: '#AD95D9',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
});