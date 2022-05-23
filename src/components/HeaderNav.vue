<template>
  <v-app-bar :color="basecolor" :dark="dark" dense app elevation="0">
    <v-btn icon @click="goBack" v-if="propsData.pageBack" class="appbar__left">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn
      icon
      v-if="propsData.pageMenu"
      class="appbar__left"
      @click.stop="drawer = !drawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <div class="text-h6 flex-grow-1 text-center">
      {{ propsData.pagetitle }}
    </div>
    <v-btn
      text
      v-if="propsData.pageBtn"
      class="appbar__right"
      :to="propsData.pageTo"
      >{{ propsData.pageBtnName }}</v-btn
    >
  </v-app-bar>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "HeaderNav",
  props: {
    propsData: {
      pagetitle: String,
      pageBack: Boolean,
      pageBtn: Boolean,
      pageBtnName: String,
      pageTo: String,
      pageMenu: Boolean,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    },
  },
  computed: {
    ...mapState(["basecolor", "dark"]),
  },
};
</script>
<style lang="scss">
.appbar__right {
  position: absolute !important;
  right: 16px;
}
.appbar__left {
  position: absolute !important;
  left: 16px;
}
</style>
