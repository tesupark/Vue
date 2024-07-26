//관습적으로 store라고 작명함 밑에는 vuex 초기 세팅법임.
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      //state에 보관하고 싶으면 여기에 하셈
      name : "kim",
      age: 20,
      likes: 30,
      isPushed: true,
    }
  },
  //데이터 수정하는 방법 정의, 수정하고 싶으면 store.js에 부탁 : vuex에서 데이서 쓰는 법.
  mutations: {
    changeName(state){
        state.name = 'park';
    },
    addOneAge(state, payload){
        state.age += payload;
    },
    changeLike(state){
        if(state.isPushed){
            state.likes ++;
            state.isPushed = false;
        }else{
            state.likes --;
            state.isPushed = true;
        }
        
    }
  },
})

export default store;