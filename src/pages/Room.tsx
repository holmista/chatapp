import React, { useEffect, useState } from "react";
import axios from "axios";
import { io, Socket } from "socket.io-client";

export default function Room({ roomId }: {roomId: number}) {
  interface Message{
    body: string,
    sender: string,
    timeStamp: Date
  }
  let socket:Socket;
  const [messages, setMessages] = useState<Array<Message>|undefined>([]);
  const fetchRoom = async () => {
    const roomMessages = await axios.get(`http://localhost:5000/api/room/${roomId}`);
    setMessages(roomMessages.data.data);
  };
  useEffect(() => {
    socket = io("http://localhost:5000");
    fetchRoom();
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>room</div>
  );
}
