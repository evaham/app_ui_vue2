import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basecolor: "primary lighten-1",
    dark: false,
  },
  getters: {},
  mutations: {
    ischangecolor(state) {
      if (state.basecolor == "primary lighten-2") {
        state.basecolor = "primary2 darken-4";
        state.dark = true;
      } else {
        state.basecolor = "primary lighten-2";
        state.dark = false;
      }
    },
  },
  actions: {},
  modules: {},
});
