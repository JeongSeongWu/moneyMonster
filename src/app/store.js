import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';



export let openSignIn = createSlice({
  name: 'openSignIn',
  initialState: {
    open: false
  },

  // state 수정해주는 함수만들고
  // 원할 떄 그 함수 실행해달라고 store.js에 요청
  reducers: {
    // 파라미터는 기존 상태
    openSignInModal(state) {
      state.open = true
    },
    closeSignInModal(state){
      state.open = false
    }
  }
});

export let { openSignInModal, closeSignInModal } = openSignIn.actions



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    openSignIn: openSignIn.reducer,
  },
});
