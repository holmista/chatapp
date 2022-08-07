import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";

export default function Rooms() {
  interface Room{
    roomId: number,
    name: string
  }
  const [rooms, setRooms] = useState<Array<Room>>([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const fetchRooms = async () => {
    const res = await axios.get("http://localhost:5000/api/room");
    setRooms(res.data.data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleCreate = async () => {
    try {
      setName("");
      const resp = await axios.post("http://localhost:5000/api/room", { name });
      if (resp.data.status === "success") {
        console.log("here");
        setRooms([...rooms, resp.data.data]);
      }
    } catch (err) {
      setError("unexpected error");
    }
  };

  return (
    <div>
      <div className="flex justify-around items-center max-w-xl">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none w-1/4 h-12 focus: border-b-2 focus:border-gray-500 p-2"
        />
        <button type="button" className="bg-gray-400 text-neutral-300 hover:bg-gray-500 hover: cursor-pointer w-20 h-12 rounded ">
          search
        </button>
      </div>
      <div className="flex justify-around items-center max-w-xl mt-8">
        <input
          type="text"
          placeholder="room name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none w-1/4 h-12 focus: border-b-2 focus:border-gray-500 p-2"
        />
        <button type="button" onClick={handleCreate} disabled={!name} className="bg-gray-400 text-neutral-300 hover:bg-gray-500 hover: cursor-pointer w-20 h-12 rounded ">
          create
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 ">
        {rooms?.map((room) => <RoomCard name={room.name} id={room.roomId} key={room.roomId} />)}
      </div>
    </div>
  );
}
