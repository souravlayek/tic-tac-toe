export const CONNECT_SERVER = "CONNECT_SERVER";
export const JOIN_ROOM = "JOIN_ROOM";
export const CREATE_ROOM = "CREATE_ROOM";
export const UPDATE_PLAYER = "UPDATE_PLAYER";

export const connectServer = () => {
  return { type: CONNECT_SERVER };
};

export const joinRoom = (data) => {
  return { type: JOIN_ROOM, data: data };
};

export const createRoom = (data) => {
  return { type: CREATE_ROOM, data: data };
};
export const updatePlayer = (data, room) => {
  return { type: UPDATE_PLAYER, data: data, room: room };
};
