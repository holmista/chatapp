import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import SendMessage from "./components/SendMessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <SendMessage /> */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
