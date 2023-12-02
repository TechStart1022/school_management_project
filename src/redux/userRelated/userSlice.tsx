import { createSlice } from "@reduxjs/toolkit"
interface User{
    role:string;
}
interface State{
    status: string;
    currentUser?: User | null;
}
const initailState:State = {
    status: "idle",
    currentUser: JSON.parse(localStorage.getItem('user') || ''),
  };

// const userSlice = createSlice({


// })