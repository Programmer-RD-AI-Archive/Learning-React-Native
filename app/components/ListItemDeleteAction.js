import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        styles={{
          backgroundColor: "red",
          width: 70,
        }}
      >
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.black}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({});
export default ListItemDeleteAction;
