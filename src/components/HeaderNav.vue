<template>
  <v-app-bar color="purple" dense dark app elevation="0">
    <v-btn
      icon
      @click="goBack"
      v-show="propsData.pageBack"
      class="appbar__left"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="text-h6 flex-grow-1 text-center">
      {{ propsData.pagetitle }}
    </div>
    <v-btn text v-show="propsData.pageBtn" class="appbar__right">{{
      propsData.pageBtnName
    }}</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "HeaderNav",
  props: {
    propsData: {
      pagetitle: String,
      pageBack: Boolean,
      pageBtn: Boolean,
      pageBtnName: String,
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
