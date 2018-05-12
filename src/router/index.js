import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Quit1 from '@/components/Quit1'
import Quit2 from '@/components/Quit2'
import Quit3 from '@/components/Quit3'
import Quit4 from '@/components/Quit4'
import Quit5 from '@/components/Quit5'
import Quit6 from '@/components/Quit6'
import Quit7 from '@/components/Quit7'
import Quit8 from '@/components/Quit8'
import Quit9 from '@/components/Quit9'
import Quit10 from '@/components/Quit10'
import Quit11 from '@/components/Quit11'
import Quit12 from '@/components/Quit12'
import Quit13 from '@/components/Quit13'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Quit1',
      name: Quit1,
      component: Quit1
    },
    {
      path: '/Quit2',
      name: Quit2,
      component: Quit2
    },
    {
      path: '/Quit3',
      name: Quit3,
      component: Quit3
    },
    {
      path: '/Quit4',
      name: Quit4,
      component: Quit4
    },
    {
      path: '/Quit5',
      name: Quit5,
      component: Quit5
    },
    {
      path: '/Quit6',
      name: Quit6,
      component: Quit6
    },
    {
      path: '/Quit7',
      name: Quit7,
      component: Quit7
    },
    {
      path: '/Quit8',
      name: Quit8,
      component: Quit8
    },
    {
      path: '/Quit9',
      name: Quit9,
      component: Quit9
    },
    {
      path: '/Quit10',
      name: Quit10,
      component: Quit10
    },
    {
      path: '/Quit11',
      name: Quit11,
      component: Quit11
    },
    {
      path: '/Quit12',
      name: Quit12,
      component: Quit12
    },
    {
      path: '/Quit13',
      name: Quit13,
      component: Quit13
    },
  ]
})
