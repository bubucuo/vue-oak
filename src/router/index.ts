import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "主页",
    meta: {
      title: "主页",
    },
    component: () => import("../views/Home.vue"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        meta: {
          title: "首页",
        },
        component: () => import("../views/Welcome.vue"),
      },
      {
        path: "/user/list",
        meta: {
          title: "用户管理",
        },
        component: () => import("../views/User/index.vue"),
      },
      {
        path: "/user/add",
        meta: {
          title: "添加用户",
        },
        component: () => import("../views/User/AddUser.vue"),
      },
      {
        path: "/user/detail",
        meta: {
          title: "用户详情",
        },
        component: () => import("../views/User/UserDetail.vue"),
      },
    ],
  },

  // {
  //   path: "/user",
  //   // redirect: "/login",
  //   component: () => import("../views/User/index.vue"),
  // },
];
const router = createRouter({ history: createWebHashHistory(), routes });

// // 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to: 要访问的路径
//   // from: 从哪个路径跳转而来
//   // next: 放行函数
//   // next() 放行 next('/login') 强制跳转

//   if (to.meta.title) {
//     document.title = "后台管理系统" + to.meta.title;
//   }

//   //   登录
//   if (to.path === "/login") {
//     return next();
//   }
//   //   获取token
//   //   if (!token) {
//   //     // return next("/login");
//   //   } else {
//   //   next();
//   //   }

//   return next();
// });

export default router;
