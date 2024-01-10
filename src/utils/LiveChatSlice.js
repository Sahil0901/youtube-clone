import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const LiveChatSlice = createSlice({
    name: "chat",
    initialState:{
         messages: []
    },
    reducers:{
        addMessage: (state,action)=>{
            if(state.messages.length===LIVE_CHAT_COUNT){
            state.messages.splice(0,1)
        }
            state.messages.push(action.payload);
        },
    }
})


export const {addMessage} = LiveChatSlice.actions;
export default LiveChatSlice.reducer;