# React Native JS

Tags: JS, React

## Nov 1

- I just got the course and I am going to start the course
- I am going to document how I installed everything and small notices

## Nov 2

- Yesterday I got android studio working
- And Now I am starting the main part which teaches React Native 🙂
- If any updated I will ad

```jsx
// The below will convert the number of lines to 1
<Text numberOfLines={1} onPress={handlePress}>
        Open up App.js to start working on your app! - A really really long text
        I want to make this really long
</Text> 
      
// Add Image Local
<Image source={require("./assets/icon.png")} width={300} height={300} />
      <TouchableHighlight onLongPress={handlePress}>
      <Image
          fadeDuration={1000}
          source={{
            uri: "https://i.picsum.photos/id/594/200/300.jpg?hmac=kcNk6N4hJqRhoKUJ8ZeFWLMVV-2_Z5hLfxCFEyrsAx4",
            width: 300,
            height: 300,
          }}
        />
      <View style={{width: 300, height: 300, backgroundColor:"gray"}}></View>
      </TouchableHighlight>

// Button
<Button
      style={{ color: "black", backgroundColor: "white" }}
        title="Click Me"
        onPress={() => console.log("hgt")}
        
      />
// Allert
onPress={() => Alert.alert("My title","Message",[
          {
            text:"Yes",
            style: { color: "black",backgroundColor: "white"},
            onPress : () => alert("YES")
          },
          {
            text:"No",
            style: { color: "black",backgroundColor: "white"},
            onPress : () => alert("NO")
          }
        ])}

// Specific

paddingTop : Platform.OS === "android" ? 10 : 0

// Demensions
console.log(Dimensions.get('screen'))

// Oreitation
const { landscape } = useDeviceOrientation();
console.log(useDimensions());
  console.log(useDeviceOrientation());

height: landscape ? "50%" : "30%",

// Flex

<View
      style={{
        backgroundColor: "#ff",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>

// Flex
flexDirection: "row", // hoezontal
        justifyContent:"center", // man
        alignItems: "center" // secondry

// Flex

alignContent: "center", // Center the items
        flexWrap: "wrap", // Go to new line+

// Shortcut
# rfs
# rnss

// Border

<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 10,
        }}
      ></View>
    </View>

// Shadows

<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { height: 10, width: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 50,
        }}
      ></View>
    </View>

// Difference betweening margin and padding
// padding = the space inside the div
// margin = the space around the div

<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <View styles={{ backgroundColor: "gold", width: 50, height: 50 }}>
          <Text></Text>
        </View>
      </View>
    </View>

// Text Custom
fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "uppercase",
          textAlign: "center",

// Create cust custom component

import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avernir",
  },
});
export default AppText;

// PlatForm
...Platform.select({
        ios: {
          fontSize: 20,
        },
        android: {
          fontSize: 50,
        },
      })

// Platform
App.ios.js
App.android.js

// Clean

// /app/componentns/AppText/AppText.js and styple.js

// Swithc

<Switch
        value={isNew}
        onValueChange={(newValue) => {
          setIsNew(newValue);
        }}
      />
```
