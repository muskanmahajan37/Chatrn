/*
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ChatScreen extends React.Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";

import { TextInput } from "react-native-gesture-handler";

import { GiftedChat } from "react-native-gifted-chat";
import FireDbaaS from "../config/FireDbaaS";

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
  };

  get user() {
    return {
      _id: FireDbaaS.uid,
      //name: this.props.navigation.state.params.name,
      name: this.state.name,
    };
  }

  componentDidMount() {
    FireDbaaS.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    FireDbaaS.off();
  }
  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={FireDbaaS.send}
        user={this.user}
      />
    );
    if (Platform.OS === "android") {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={25}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>
      );
    }
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
