//관습적으로 store라고 작명함 밑에는 vuex 초기 세팅법임.
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      //state에 보관하고 싶으면 여기에 하셈
      name : "kim",
    }
  },
})

export default store;