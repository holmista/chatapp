import React from "react";
import { Link } from "react-router-dom";

export default function RoomCard({ name, id }:{name:string, id:number}) {
  return (
    <Link to={`${id}`}>
      <button
        type="button"
        className="transition ease-in-out   hover:bg-indigo-500 duration-150
    hover:cursor-pointer text-center text-base flex flex-row flex-wrap bg-indigo-400 p-2 items-center justify-center m-2 rounded-xl sm:text-lg xs:text-left"
      >
        <p>{name}</p>
      </button>
    </Link>
  );
}
