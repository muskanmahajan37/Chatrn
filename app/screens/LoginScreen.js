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
import { Button, View, StyleSheet, Image, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

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
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="your username"
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          ></TextInput>
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={this.continue}>
            <Ionicons
              name="md-arrow-round-forward"
              size={30}
              color="#000"
            ></Ionicons>
          </TouchableOpacity>
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
    borderRadius: 250,
    backgroundColor: "#FF4800",
    position: "absolute",
    left: -120,
    right: -20,
  },
  input: {
    borderStyle: "solid",
    marginTop: 30,
    borderRadius: 30,
    paddingHorizontal: 30,
    borderColor: "black",
  },
});
