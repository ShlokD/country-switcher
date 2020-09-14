import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import Home from "./Home";
import Details from "./Details";
import makeStore from "./CountriesStore";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: "/", component: Home },
  { path: "/country/:countryid", component: Details },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
  store: makeStore(),
}).$mount("#app");
