import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basecolor: "rgb(240,176,74)",
    dark: false,
  },
  getters: {},
  mutations: {
    ischangecolor(state) {
      if (state.basecolor == "primary darken-3") {
        state.basecolor = "primary darken-2";
      } else {
        state.basecolor = "primary darken-3";
      }
    },
  },
  actions: {},
  modules: {},
});
