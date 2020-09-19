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
  { path: "/", component: Home, meta: { title: "Duniya Mein Kahan?" } },
  {
    path: "/country/:countrycode",
    component: Details,
    meta: { title: "Country Details" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const store = makeStore();

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
