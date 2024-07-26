<template>
  <div @click="fire" :class="filters + ' filter-item'" :style="`background-image:url(${image})`">

    <!-- {{filters}}
    <slot name="a"></slot>
    <slot name="b"></slot> -->
    <!-- <button @click="fire">버튼</button> -->
  </div> 
</template>

<script>
export default {
  name: 'FilterBox',
  methods: {
    fire(){
      this.emitter.emit('boxClicked', this.filters);//이벤트명 작명 이벤트 발사하는 넘임. 
    },
    mounted(){
      this.emitter.on('작명', (a)=>{
        console.log(a)
      });
    }
  },


  props: {
    image: String,
    filters: String,
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>