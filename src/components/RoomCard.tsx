import React, { useState } from "react";
import axios from "axios";

export default function RoomCard({ name, id }:{name:string, id:number}) {
  return (
    <div className="transition ease-in-out   hover:bg-indigo-500 duration-150
    hover:cursor-pointer text-center text-base flex flex-row flex-wrap bg-indigo-400 p-2 items-center justify-center m-2 rounded-xl sm:text-lg xs:text-left"
    >
      <div className="flex-col">
        <div className="b border-b-2">{name}</div>
        <button type="button" className="bg-slate-200 text-zinc-800 font-semibold ">join</button>
      </div>
    </div>
  );
}
