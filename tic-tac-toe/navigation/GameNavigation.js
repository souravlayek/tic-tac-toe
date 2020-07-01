import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import GameScreen from "../screens/GameScreen";
import CreateRoomScreen from "../screens/online/CreateRoomScreen";
import JoinRoom from "../screens/online/JoinRoom";
import LobyScreen from "../screens/online/LobyScreen";

const Stack = createStackNavigator();

const GameStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="start"
        component={StartScreen}
        options={{ title: "Tic Tac Toe" }}
      />
      <Stack.Screen
        name="game"
        component={GameScreen}
        options={{ title: "Tic Tac Toe" }}
      />
      <Stack.Screen
        name="createroom"
        component={CreateRoomScreen}
        options={{ title: "Tic Tac Toe" }}
      />
      <Stack.Screen
        name="joinroom"
        component={JoinRoom}
        options={{ title: "Tic Tac Toe" }}
      />
      <Stack.Screen
        name="loby"
        component={LobyScreen}
        options={{ title: "Tic Tac Toe" }}
      />
    </Stack.Navigator>
  );
};

const GameNavigation = () => {
  return (
    <NavigationContainer>
      <GameStackNavigation />
    </NavigationContainer>
  );
};

export default GameNavigation;
