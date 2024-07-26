<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <button @click="step = 0">포스트 보여주기</button>
  <button @click="step = 1">필터선택페이지</button>
  <button @click="step = 2">게시물 생성</button>

  <Container @write="write = $event" :instaData="instaData" :step="step" :image="image" />
  <!-- <div v-if="step ==0">내용0</div>
  <div v-if="step ==1">내용1</div>
  <div v-if="step ==2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->

  <button @click="more">더보기</button>

  <div v-if="step == 0" class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import ContainerVue from './components/InstaContainer.vue'
import InstaData from './assets/instadata.js'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      step: 0,
      instaData: InstaData,
      reqestCounter: 0,
      write: '',
      image : '',
      filter: '',
    }
  },
  components: {
    Container: ContainerVue,
  },
  mounted(){
    this.emitter.on('boxClicked', (a)=>{
      this.filter = a;
    });
  },
  
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.reqestCounter}.json`).then((result)=>{
        console.log(result.data);
        this.instaData.push(result.data);
        this.reqestCounter++;
      }).catch((rejected)=>{console.log(rejected);
      this.requestCounter--;})
    },
    upload(e){
      let a = e.target.files;
      console.log(a[0].type);
      let url = URL.createObjectURL(a[0]);// 변수를 URL로 만들 수 있음.
      this.image = url;
      console.log(url);
      this.step = 1;
    },
    
    publish(){
      var poster = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.write,
        filter: this.filter,
      };
      this.instaData.unshift(poster);
      this.step = 0;
    }
  },
}
</script>

<style>
/* @import 'style.css'; */
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
