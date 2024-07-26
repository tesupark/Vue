<template>
  <div>
    <Post :instaData="a" v-for="(a, i) in instaData" :key="i"/>
  </div>
</template>

<script>
import PostVue from './InstaPost.vue';

export default {
  props: {
    instaData: Array,
  },
  components: {
    Post: PostVue,
  }
}
</script>

<style>

</style>