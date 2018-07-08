import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: require('@/components/HomePage/HomePage').default
    },
    {
      path: '/chuntian',
      component: require('@/components/ChunTian/ChunTian').default
    },
    {
      path: '/film',
      component: require('@/components/Film/Film').default
    },
    {
      path: '/baike',
      component: require('@/components/Baike/Baike').default
    },
    {
      path: '/tougao',
      component: require('@/components/Tougao/Tougao').default
    },
    {
      path: '/about',
      component: require('@/components/About/About').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
