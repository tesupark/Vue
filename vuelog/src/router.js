import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue'
import BlogHome from './components/BlogHome.vue'
import BlogDetail from './components/BlogDetail.vue'
import BlogAuthor from './components/BlogAuthor.vue'
import BlogComment from './components/BlogComment.vue'

const routes = [
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/",
    component: BlogHome,
  },
  {
    path: "/detail/:Blogid(\\d+)",//url 파라메터 문법 숫자로 제한한다 (\\d+)
    component: BlogDetail,
    children: [
      {
        path: "author",
        component: BlogAuthor,
      },
      {
        path: "comment",
        component: BlogComment,
      }
    ],
  },
  {
    path: "/:anything(.*)",//모든 문서 관련해서 해볼거..
    component: BlogHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 

//페이지 나누고 싶으면 우선 컴포넌트로 만들고 
//