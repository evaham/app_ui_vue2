import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.yellow,
        primary2: colors.yellow.darken2,
        secondary: colors.grey,
        tertiary: colors.brown,
        accent: colors.amber,
      },
    },
  },
});
