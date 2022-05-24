import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basecolor: "primary darken-1",
    dark: false,
  },
  getters: {},
  mutations: {
    ischangecolor(state) {
      if (state.basecolor == "primary darken-2") {
        state.basecolor = "primary darken-3";
      } else {
        state.basecolor = "primary darken-2";
      }
    },
  },
  actions: {},
  modules: {},
});
