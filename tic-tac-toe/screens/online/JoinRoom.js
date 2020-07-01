import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Input from "../../components/Input";

import * as gameAction from "../../store/gameAction";
import { useDispatch } from "react-redux";

const JoinRoom = (props) => {
  const [value, setValue] = useState({ name: "", room: "" });
  const valueStore = (text, type) => {
    if (type === "name") {
      setValue({ ...value, name: text });
    } else {
      setValue({ ...value, room: +text });
    }
  };
  const dispatch = useDispatch();

  const submitHandler = () => {
    // socket.emit("message", userData);
    dispatch(gameAction.joinRoom(value));
    props.navigation.navigate("loby", { playerData: value, id: "join" });
  };
  return (
    <View>
      <View>
        <Input
          label="Your Name"
          placeholder="eg. Chris Evan"
          value={(text) => valueStore(text, "name")}
        />
        <Input
          label="Room No"
          placeholder="eg. 123456"
          value={(text) => valueStore(text, "room")}
        />
      </View>
      <View>
        <Button title="Submit" onPress={submitHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default JoinRoom;
