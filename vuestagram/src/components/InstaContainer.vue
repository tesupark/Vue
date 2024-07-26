<template>
  <div>
    <div v-if="step == 0"><Post  :instaData="a" v-for="(a, i) in instaData" :key="i" /></div>
  </div>
  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div :class="filter" class="upload-image" :style="`background-image:url(${image})`"></div>
    <div class="filters">
      <FilterBox v-for="(item, index) in filters" :key="index" :image="image" :filters="item">
        <!-- {{item}} -->
        <!-- <template v-slot:a>
          <div>
            
          </div>
        </template>
        <template v-slot:b>
          <div>
            
          </div>
        </template> -->
      </FilterBox> 
      <!-- slot으로 하위컴포넌트에 데이터 전송하기 -->
    </div>
  </div>

<!-- 글작성페이지 -->
  <div  v-if="step == 2">
    <div :class="filter" class="upload-image" :style="`background-image:url(${image})`"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    </div>
  </div>
  <div  v-if="step == 3">
    <MyPage/>
  </div>
</template>

<script>
import PostVue from './InstaPost.vue';
import FilterBoxVue from './FilterBox.vue'
import MyPageVue from './MyPage.vue';

export default {
  data(){
    return{
      filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      filter: '',
    }
  },  
  props: {
    image: String,
    step: Number,
    instaData: Array,
  },
  mounted(){
    this.emitter.on('boxClicked', (a)=>{
      this.filter = a;
    });
  },
  components: {
    Post: PostVue,
    FilterBox: FilterBoxVue,
    MyPage: MyPageVue,
  }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>