import {configureStore} from "@reduxjs/toolkit"
import NavSlice from "./NavSlice"
import searchSlice from "./searchSlice";
import LiveChatSlice from "./LiveChatSlice";

const appStore = configureStore({
    reducer:{
        app: NavSlice,
        cache: searchSlice,
        chat: LiveChatSlice,
    }
})

export default appStore;
