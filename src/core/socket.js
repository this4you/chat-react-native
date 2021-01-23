import io from "socket.io-client";

const socket = io("http://192.168.0.105:3003");
export default socket;
