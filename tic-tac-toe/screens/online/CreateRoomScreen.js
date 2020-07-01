import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Input from "../../components/Input";
import * as gameAction from "../../store/gameAction";
import { useDispatch } from "react-redux";

const CreateRoomScreen = (props) => {
  const RoomId = Math.floor(100000 + Math.random() * 900000);
  const [userData, setUserData] = useState({ name: "", room: RoomId });
  const valueStore = (text) => {
    setUserData({ ...userData, name: text });
  };

  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(gameAction.createRoom(userData));
    props.navigation.navigate("loby", { playerData: userData, id: "creat" });
  };

  return (
    <View>
      <View>
        <Input
          label="Your Name"
          placeholder="eg. Chris Evan"
          value={(text) => valueStore(text)}
        />
        <View style={styles.roomWraper}>
          <Text style={styles.roomId}>{userData.room}</Text>
        </View>
      </View>
      <View>
        <Button title="Submit" onPress={submitHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roomWraper: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  roomId: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default CreateRoomScreen;
