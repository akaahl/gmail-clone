import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageisOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageisOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    close: (state) => {
      state.sendMessageisOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, close } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageisOpen;
console.log(selectSendMessageIsOpen);

export default mailSlice.reducer;
