//관습적으로 store라고 작명함 밑에는 vuex 초기 세팅법임.
import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      //state에 보관하고 싶으면 여기에 하셈
      name : "kim",
      age: 20,
      likes: 30,
      isPushed: true,
      more: {},
    }
  },
  //데이터 수정하는 방법 정의, 수정하고 싶으면 store.js에 부탁 : vuex에서 데이서 쓰는 법.
  mutations: {
    setMore(state, data){
        state.more = data;
    },
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
  //ajax 요청은 actions안에서 해라, 왜냐하면 오래걸리는 요청이기때문에 실행순서 보장이 안되는 mutations에서 실행시키면 잘 안될 수 있음.
  actions:{
    getData(context){
        axios.get("https://codingapple1.github.io/vue/more0.json").then((a)=>{
            console.log(a.data)  
            context.commit('setMore', a.data);    
        })
        // 더보기 누르면 1. dispatch('getData')2.ajax로 데이터 가져옴 3. mutations이용해서 state에 저장..
    },
  },
})

export default store;