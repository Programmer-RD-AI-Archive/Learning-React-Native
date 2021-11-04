import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
export default function App() {
  const [firstName, setFirstName] = useState("");
  console.log(firstName)
  return (
    
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
      clearButtonMode="always"
      secureTextEntry
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        maxLength={100}
        keyboardType="number-pad"
        numberOfLines={2}
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      ></TextInput>
    </Screen>
  );
}
