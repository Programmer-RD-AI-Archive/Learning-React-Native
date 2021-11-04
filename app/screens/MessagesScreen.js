import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSperator from "../components/ListItemSperator";
import Screen from "../components/Screen";

const initMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/background.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/chair.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessage] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            ...messages,
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../assets/logo-red.png"),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
