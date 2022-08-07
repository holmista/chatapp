import React, { useState } from "react";

export default function SendMessage() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex content-between w-3/4">
      <input
        type="text"
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="outline-none w-3/4 h-12 focus: border-b-2 focus:border-gray-500 p-2"
      />
      <button type="button" disabled={!message} className="bg-gray-400 text-neutral-300 hover:bg-gray-500 hover: cursor-pointer w-20 h-12 rounded">
        Send
      </button>
    </div>
  );
}
