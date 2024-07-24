<template>
<Transition name="fade">
  <ModalVue @closeModal="모달창열렸니 = false;" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
</Transition>
<!-- <div class="start" :class="{end : 모달창열렸니}">
  <ModalVue @closeModal="모달창열렸니 = false;" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
</div> -->

  <div class="menu">
    <a v-for="a in menus" :key="a">{{a}}</a>
  </div>
<!-- 2초뒤에 사라지게 만듦. -->
  <DiscountVue v-if="showDiscount == true" />

  <button @click="priceSort">가격순 정렬</button>
  <button @click="sortBack">되돌리기</button>
  <button @click="abcSort">가나다순 정렬</button>
  <button @click="yPriceSort">가격 역순 정렬</button>

  <!-- 숙제 2 -->
  <CardVue @openModal="모달창열렸니 = true; 누른거 = $event;" :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="a" />

  
  
</template>

<script> 
//import apple from './assets/sibal.js'
// import {apple, apple2} from './assets/sibal.js'
import data from './assets/oneroom'
import CardVue from './Card.vue'
import DiscountVue from './Discount.vue'
import ModalVue from './Modal.vue'


export default {
  name: 'App',
  //데이터 보관함
  data(){
    return{
      showDiscount: true,
      원룸들오리지널 : [...data],
      누른거 : 0,
      원룸들 : data,
      // 데이터 저장공간도 맞는데 여기는 state라고 부르기도함
      모달창열렸니 : false,
      //object 자료형으로 저장해준다.'
      신고수 : [0,0,0],
      prices : [80, 70,60],
      스타일 : 'color : blue',
      menus : ['Home','Shop','About'],
      //숙제 1
      products : ['역삼동 원룸','천호동 원룸','마포구 원룸'],
    }
  },
  methods : {
    increase(i){
      this.신고수[i] += 1;
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    },
    //가격순 정렬
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price-b.price;
      });
    },
    //가나다순 정렬
    abcSort(){
      this.원룸들.sort(function(a,b){
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if(x<y){
          return -1;
        }
        if(x>y){
          return 1;
        }
        return 0;
      });
    },
    //가격 역순 정렬
    yPriceSort(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price;
      });
    }
  },
  mounted() {
    setTimeout(() => {
      //저거 배너 닫아주셈
      this.showDiscount = false;
    }, 20000);//ms 단위
  },
  components: {
    DiscountVue: DiscountVue, //변수(작명): 임폴트한 넘.
    ModalVue: ModalVue,
    CardVue: CardVue,
  }
}
</script>

<style>
/* 시작시 스타일 */
.fade-enter-from{
  transform: translateY(-1000px);
}

.fade-enter-active{
  transition: all 1s;
  
}.fade-enter-to{
  transform: translateY(0px);
}
/* 끝날 때 스타일 */
.fade-leave-from{
  opacity: 1;
}

.fade-leave-active{
  transition: all 1s;
  
}.fade-leave-to{
  opacity: 0;
}
.start{
  opacity: 0;
  Transition: all 1s
}
.end{
  opacity: 1;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px
}

</style>
