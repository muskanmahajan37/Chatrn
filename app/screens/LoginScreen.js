/*
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default class LoginScreen extends React.Component {
  state = {
    name: "",
  };
  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />

        <View style={styles.margins}>
          <Image source={require("../assets/chat_stonks.png")} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    left: -120,
    right: -20,
  },
  margins: {
    marginTop: 69,
  },
});

*/

import * as React from "react";
import { Button, View } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
}
