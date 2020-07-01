import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Alert,
} from "react-native";
const initialValue = {
  aa: "",
  ab: "",
  ac: "",
  ba: "",
  bb: "",
  bc: "",
  ca: "",
  cb: "",
  cc: "",
};
const GameBoard = (props) => {
  const [value, setValue] = useState(initialValue);
  const [count, setCount] = useState(0);

  const pressHandler = (id, turn) => {
    props.onDone();
    setCount((prev) => (prev += 1));
    switch (id) {
      case "aa":
        if (value.aa.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, aa: turn });
      case "ab":
        if (value.ab.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, ab: turn });
      case "ac":
        if (value.ac.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, ac: turn });
      case "ba":
        if (value.ba.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, ba: turn });
      case "bb":
        if (value.bb.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, bb: turn });
      case "bc":
        if (value.bc.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, bc: turn });
      case "ca":
        if (value.ca.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, ca: turn });
      case "cb":
        if (value.cb.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, cb: turn });
      case "cc":
        if (value.cc.length !== 0) {
          props.onDone();
          return;
        }
        return setValue({ ...value, cc: turn });
    }
  };
  const rematchHandler = (winner) => {
    setCount(0);
    setValue(initialValue);
    props.onWin("rematch", winner);
  };

  const winHandler = (value) => {
    let winner;
    if (value === props.selectionMode.player1) {
      winner = props.player.player1;
    } else {
      winner = props.player.player2;
    }
    Alert.alert(`${winner} wins`, "What you want", [
      { text: "Rematch", onPress: () => rematchHandler(winner) },
      {
        text: "Quit",
        onPress: () => {
          props.nav.navigate("start");
        },
      },
    ]);
  };

  useEffect(() => {
    if (value) {
      if (
        value.aa === value.ab &&
        value.ab === value.ac &&
        value.aa.length !== 0
      ) {
        winHandler(value.aa);
      } else if (
        value.ba === value.bb &&
        value.bc === value.bb &&
        value.ba.length !== 0
      ) {
        winHandler(value.ba);
      } else if (
        value.ca === value.cb &&
        value.cc === value.cb &&
        value.ca.length !== 0
      ) {
        winHandler(value.ca);
      } else if (
        value.aa === value.ba &&
        value.ba === value.ca &&
        value.aa.length !== 0
      ) {
        winHandler(value.aa);
      } else if (
        value.ab === value.bb &&
        value.bb === value.cb &&
        value.ab.length !== 0
      ) {
        winHandler(value.ab);
      } else if (
        value.ac === value.bc &&
        value.cc === value.ac &&
        value.ac.length !== 0
      ) {
        winHandler(value.ac);
      } else if (
        value.aa === value.bb &&
        value.aa === value.cc &&
        value.aa.length !== 0
      ) {
        winHandler(value.aa);
      } else if (
        value.ac === value.bb &&
        value.ac === value.ca &&
        value.ac.length !== 0
      ) {
        winHandler(value.ac);
      } else if (count === 9) {
        setCount(0);
        Alert.alert(`Match draw`, "What you want", [
          { text: "Rematch", onPress: () => rematchHandler("draw") },
          {
            text: "Quit",
            onPress: () => {
              props.nav.navigate("start");
            },
          },
        ]);
      }
    }
  }, [value]);
  return (
    <View>
      <View style={styles.itemWraper}>
        <TouchableNativeFeedback onPress={() => pressHandler("aa", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.aa}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => pressHandler("ab", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.ab}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => pressHandler("ac", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.ac}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.itemWraper}>
        <TouchableNativeFeedback onPress={() => pressHandler("ba", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.ba}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => pressHandler("bb", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.bb}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => pressHandler("bc", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.bc}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.itemWraper}>
        <TouchableNativeFeedback onPress={() => pressHandler("ca", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.ca}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => pressHandler("cb", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.cb}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => pressHandler("cc", props.turn)}>
          <View style={styles.item}>
            <Text style={styles.data}>{value.cc}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWraper: {
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#888",
    height: 80,
    width: 80,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  data: {
    fontSize: 50,
  },
});

export default GameBoard;
