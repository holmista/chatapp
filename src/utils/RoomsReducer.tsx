import { Reducer, useReducer } from "react";

interface Room{
  roomId: number,
  name: string
}

interface InitialState{
  rooms: Array<Room>
}

interface Action{
  type:string,
  payload : Room
}

const initialState: InitialState = { rooms: [] };
// eslint-disable-next-line consistent-return, max-len
function reducer(state: InitialState, action: Action):InitialState {
  switch (action.type) {
    case "addRoom": return { ...state, rooms: [...state.rooms, action.payload] };
    case "removeRoom": return { rooms: state.rooms.filter((el) => el.roomId !== action.payload?.roomId) };
    default: return state;
  }
}
const RoomsReducer = () => useReducer<Reducer<InitialState, Action>>(reducer, initialState);
export default RoomsReducer;
