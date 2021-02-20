import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
  selectMail: (state,action)=>{
  state.selectMail = action.payload;
  },
    openSendMessage: state => {
    state.sendMessageIsOpen = true;    
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    }
  },
});

export const { openSendMessage, closeSendMessage, selectMail} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
