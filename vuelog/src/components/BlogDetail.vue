<template>
  
  <div>
    <h4>상세 페이지임</h4>
    <h5>{{블로그글[$route.params.Blogid].title}}</h5>
    <p>{{블로그글[$route.params.Blogid].content}}</p>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
    name: "BlogDetail",
    props:{
    블로그글 : Array,
  }
}
</script>

<style>

</style>