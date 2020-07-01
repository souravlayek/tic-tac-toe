import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import Avtar from "../../components/Avtar";
import * as gameAction from "../../store/gameAction";

const LobyScreen = (props) => {
  const { playerData, id } = props.route.params;
  const socket = useSelector((state) => state.socket);
  const me = playerData.name;
  socket.on("updateplayer", (data) => updatePlayer(data));
  const dispatch = useDispatch();
  let Goponent;
  const updatePlayer = (data) => {
    if (data.name != me) {
      const oponent = data.name;
      Goponent = oponent;
      const players = { player1: me, player2: Goponent };
      dispatch(gameAction.updatePlayer(players, playerData.room));
    }
  };
  const state = useSelector((state) => state);
  return (
    <View>
      <Text>{state.player1}</Text>
      <Text>{state.player2}</Text>
      <Avtar />
    </View>
  );
};

export default LobyScreen;
