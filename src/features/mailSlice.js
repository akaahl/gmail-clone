import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageisOpen: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageisOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageisOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageisOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
