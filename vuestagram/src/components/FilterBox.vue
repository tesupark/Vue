<template>
  <div :class="filters + ' filter-item'" :style="`background-image:url(${image})`">
    {{filters}}
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div> 
</template>

<script>
export default {
  name: 'FilterBox',
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