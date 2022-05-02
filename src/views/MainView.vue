<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <v-list dark>
      <v-list-item>
        <router-link to="/loading">로딩화면</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/purchaselist">매입내역</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/purchaseView">매입내역상세</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/salegrouplist">특매그룹</router-link>
      </v-list-item>
    </v-list>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: { HeaderNav },
  name: "MainView",
  data: () => ({
    propsData: {
      pagetitle: "메인화면",
      pageBack: false,
      pageBtn: false,
      pageBtnName: null,
    },
  }),
};
</script>
