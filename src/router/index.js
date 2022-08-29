// router/index.js文件

import { createRouter, createWebHashHistory } from 'vue-router'

// !!!注意：.vue不能省略，否则会报错，项目不能运行，如下错误
 
/* 
index.js:3 GET http://localhost:3000/src/components/Home net::ERR_ABORTED 404 (Not Found)vue-router.js:3293 TypeError: Failed to fetch dynamically imported module: http://localhost:3000/src/components/Home
*/

const Home = () => import('../components/Home.vue') //再次提醒：此处.vue不能省略

const routes = [
{
    path: '/',
},
{
    path: '/home',
    component: Home
}
]

const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router
