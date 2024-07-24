
<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width:100%">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <input v-model="month">
      <p> {{month}}개월 선택함 : {{원룸들[누른거].price * month}}원</p>
      <button @click="$emit('closeModal')">닫기 버튼임</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalOneroom',
    data(){
      return{
        month :1,
      }
    },
    watch:{
      month(a){
        //if(typeof a !== typeof 1){
        if(isNaN(a) == true){
          this.month = 1;
          alert('문자열 입력하지 마셈');
        }
        
        if(a>=13){
          alert('13이상 입력하지 마셈');
          this.month = 1;
        }
        //사용자가 month에 입력한 데이터가 13보다 크면 경고문 띄우기
        //사용자가 month를 글자로 입력하면 경고문 띄워주셈.
      }
    },
    props: {
        원룸들: Array,
        누른거: String,
        모달창열렸니 : Boolean,
    },
    updated(){
      if(this.month == 2){
        this.month = 3;
          alert('2 이상 입력하셈')
      }
    }

}
</script>

<style>

</style>