<template>
  <div>
    <!-- route, router 헷갈리지 마라 route는 현재경로, router는 페이지 이동관련 기능 -->
    <h5 @click="$router.push('/detail/0')">{{블로그글[0].title}}</h5>
    <p>{{블로그글[0].date}}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/1')">{{블로그글[1].title}}</h5>
    <p>{{블로그글[1].date}}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/2')">{{블로그글[2].title}}</h5>
    <p>{{블로그글[2].date}}</p>
  </div>
</template>

<script>

export default {
  name : 'BlogList',
  props:{
    블로그글 : Array,
  }

}
</script>

<style>

</style>