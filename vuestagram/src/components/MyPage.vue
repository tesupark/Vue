<template>
  <div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" @input="search($event.target.value)"/>
  <div class="post-header" v-for="(a, i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref} from 'vue';
import axios from 'axios';
//import {useStore} from 'vuex'

export default {
  //composition api 사용하는 법.
  setup(){//props){
    let follower = ref([]);//ref로 선언하는 이유는 데이터 변하면 실시간으로 렌더링하기 위함.
    //라이프 사이클도 여기서 수정할 수 있음.
    //let test = reactive({ name: 'kim' })//ref와 같이 선언해서 데이터 맹그는 놈인데, array, object 집어넣어서 사용하는 넘임.
    //composition 에서 props 쓰는 법.
    let followerOriginal = ref([])
    function search(searcher){
      let assey = followerOriginal.value.filter((a)=>{
        return a.name.indexOf(searcher) != -1
      });
      follower.value = [...assey]
    }
    // let {one} = toRefs(props);
    // console.log(one.value)

    // let re = computed(()=>{
    //   return follower.value.length
    // })
    // console.log(re.value)
    // let store = useStore();
    // // composition에서는 mapStore이런거 없다...
    // console.log(store.state.name)
    // console.log(store.commit())


    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
      follower.value = a.data;//문법임 외우셈.
      followerOriginal.value = [...a.data];
    })
    })
    
    return {follower, search}
  },
}
</script>

<style>

</style>