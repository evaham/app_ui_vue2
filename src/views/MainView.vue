<template>
  <v-main class="gradient">
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="pa-1 pl-2 pr-2">
      <v-card class="white lighten-3" elevation="0">
        <v-card-title class="pt-1 pb-1">
          <span class="text-body-2">마스터 수신 시각 : 2022-05-10 16:58</span>
          <v-btn icon small class="ml-auto"><v-icon>mdi-refresh</v-icon></v-btn>
        </v-card-title>
      </v-card>
    </div>
    <v-container fluid class="pa-2">
      <v-row dense>
        <v-col v-for="(item, index) in links" :key="index" :cols="linkflex">
          <v-card
            dark
            elevation="2"
            :to="item.link"
            class="pa-0 secondary darken-4"
            style="border-radius: 24px"
            height="80"
          >
            <v-card-title class="pa-0 pt-2 pl-2 text-h5 font-weight-bold">{{
              index + 1
            }}</v-card-title>
            <v-card-title class="text-body-1 pa-0 pl-2 primary--text">{{
              item.name
            }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-app-bar app bottom elevation="0" class="transparent">
      <v-btn
        depressed
        rounded
        large
        color="primary darken-1 black--text"
        class="flex-grow-1 ml-2 mr-2"
      >
        <span class="text-h6">전송대기 : 4</span>
      </v-btn>
    </v-app-bar>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: { HeaderNav },
  name: "MainView",
  data: () => ({
    propsData: {
      pagetitle: "투게더스",
      pageBack: true,
      pageBtn: false,
      pageBtnName: null,
    },
    linkflex: 4,
    links: [
      {
        link: "/loading",
        name: "로딩화면",
        bg: "background:rgba(0,0,0,.7)",
      },
      {
        link: "/purchaselist",
        name: "매입/반품",
        bg: "background:rgba(0,0,0,.9)",
      },
      {
        link: "/purchaseView",
        name: "매입상세",
        bg: "background:rgba(0,0,0,.7)",
      },
      {
        link: "/salegrouplist",
        name: "특매그룹",
        bg: "background:rgba(0,0,0,.9)",
      },
      {
        link: "/salegoodslist",
        name: "특매리스트",
        bg: "background:rgba(0,0,0,.7)",
      },
      { link: "/salegrouplist", name: "특매", bg: "background:rgba(0,0,0,.9)" },
      {
        link: "/salegoodslist",
        name: "주문서",
        bg: "background:rgba(0,0,0,.7)",
      },
      {
        link: "/salegrouplist",
        name: "매대그룹",
        bg: "background:rgba(0,0,0,.9)",
      },
    ],
  }),
};
</script>
<style scoped>
.gradient {
  background: linear-gradient(
    to bottom,
    #fdd835 15%,
    #ffffff 30%,
    #f4f4f4 31%,
    #f4f4f4 100%
  );
}
</style>
