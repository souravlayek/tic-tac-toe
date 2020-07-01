import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import Input from "../components/Input";
import * as gameAction from "../store/gameAction";
import { useDispatch } from "react-redux";

// import io from "socket.io-client";

// const ENDPOINT = "http://192.168.31.12:8000";

const StartScreen = (props) => {
  const [gameMode, setGameMode] = useState("");
  const [localPlayers, setLocalPlayers] = useState({
    player1: "",
    player2: "",
  });
  const submitHandler = () => {
    props.navigation.navigate("game", {
      players: localPlayers,
    });
  };
  const valueStore = (text, player) => {
    if (player === "player1") {
      setLocalPlayers((prevdata) => ({ ...prevdata, player1: text }));
    } else {
      setLocalPlayers((prevdata) => ({ ...prevdata, player2: text }));
    }
  };

  const dispatch = useDispatch();
  const onlineHandler = (type) => {
    switch (type) {
      case "create":
        dispatch(gameAction.connectServer());
        props.navigation.navigate("createroom");
        return;
      case "join":
        dispatch(gameAction.connectServer());

        props.navigation.navigate("joinroom");
        return;
      default:
        break;
    }
  };

  return (
    <SafeAreaView>
      {/* view for heading */}
      <View style={styles.header}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.heading}>Lets Start</Text>
      </View>
      <View style={styles.options}>
        <Button title="Local" onPress={() => setGameMode("local")} />
        <Button title="Online" onPress={() => setGameMode("online")} />
      </View>
      <View>
        {gameMode === "local" ? (
          <>
            <View>
              <Input
                label="Player 1"
                placeholder="eg. Chris Evan"
                value={(text) => valueStore(text, "player1")}
              />
              <Input
                label="Player 2"
                placeholder="eg. Robert Jr."
                value={(text) => valueStore(text, "player2")}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Submit" onPress={submitHandler} />
            </View>
          </>
        ) : gameMode === "online" ? (
          <>
            <View style={styles.options}>
              <Button title="Create" onPress={() => onlineHandler("create")} />
              <Button title="Join" onPress={() => onlineHandler("join")} />
            </View>
          </>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30, margin: 30, color: "#888" }}>
              Select Game Mode
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
  },

  options: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    paddingHorizontal: 60,
    marginTop: 10,
  },
});

export default StartScreen;
