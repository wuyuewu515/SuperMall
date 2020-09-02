import VueRouter from "vue-router";
import Vue from 'vue'

const Home = () =>  import('@/views/home/Home')
const Profile = () => import("@/views/profile/Profile")
const Category = () => import("@/views/category/Category")
const shopCart = () => import("@/views/shopcart/shopCart")
const detail = () => import("@/views/detail/Detail")


//安装插件
Vue.use(VueRouter);


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopCart',
    component: shopCart
  },
  {
    path: '/detail/:id',
    component: detail
  }

]
const router = new VueRouter({

  mode: 'history',
  routes,

})

export default router;
