import io from "socket.io-client";
import {
  CONNECT_SERVER,
  JOIN_ROOM,
  CREATE_ROOM,
  UPDATE_PLAYER,
} from "./gameAction";

const ENDPOINT = "http://192.168.31.12:8001";

const initialState = {
  player1: "",
  player2: "",
  room: "",
  socket: undefined,
};

export const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_SERVER:
      const socket = io(ENDPOINT);
      return { ...state, socket: socket };
    case JOIN_ROOM:
      state.socket.emit("joinroom", { data: action.data, player: "join" });
      return state;
    case CREATE_ROOM:
      state.socket.emit("joinroom", { data: action.data, player: "create" });
      return state;
    case UPDATE_PLAYER:
      console.log(action.data);
      return {
        ...state,
        player1: action.data.player1,
        player2: action.data.player2,
        room: action.room,
      };
    default:
      return state;
  }
};
