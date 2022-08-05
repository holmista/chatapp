import React, { useEffect, useState } from "react";
import axios from "axios";
import { io, Socket } from "socket.io-client";

function App() {
  let socket:Socket;
  const [data, setData] = useState<string|undefined>("");

  const get = async ():Promise<void> => {
    const res = await axios.get("http://localhost:5000/");
    setData(res.data.data);
  };
  useEffect(() => {
    socket = io("http://localhost:5000");
    get();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
