<template>
  <v-main class="">
    <v-app-bar :color="basecolor" :dark="dark" dense app elevation="0">
      <v-btn
        icon
        @click="goBack"
        v-if="propsData.pageBack"
        class="appbar__left"
      >
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
      <div
        class="text-h6 flex-grow-1 text-center font-weight-bold custom__pagetit"
      >
        {{ propsData.pagetitle }}
      </div>
      <v-btn
        text
        v-if="propsData.pageBtn"
        class="appbar__right"
        :to="propsData.pageTo"
        >{{ propsData.pageBtnName }}</v-btn
      >
      <v-btn
        text
        v-if="propsData.pageMenu"
        class="appbar__right"
        @click.stop="$store.commit('ischangecolor')"
      >
        색전환
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      style="position: fixed; top: 0; bottom: 0; left: 0; z-index: 100"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>투게더POS </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="mt-2" v-if="show == true">
      <v-card tile elevation="0" class="custom__infobox">
        <v-card-title class="pa-1">
          <span class="text-body-2 ml-1">마스터 수신 시각 :</span>
          <span class="text-body-1" style="font-weight: 800"
            >&nbsp;2022-05-10 16:58</span
          >
          <v-btn icon small class="ml-auto" @click="show = false"
            ><v-icon>mdi-refresh</v-icon></v-btn
          >
        </v-card-title>
      </v-card>
    </div>
    <div class="mt-2" v-if="show == false">
      <v-card class="custom__infobox" tile elevation="0">
        <p class="pa-1 mb-1 text-center">
          수신된 마스터 정보가 없습니다.<br />
          하단 버튼을 눌러 마스터 수신후, 메뉴를 이용하시길 바랍니다.
        </p>
        <div class="d-flex justify-center">
          <v-btn
            elevation="0"
            large
            @click="show = true"
            color="custom__btncolor"
            class="ma-1 mb-2 justify-center"
            >마스터수신</v-btn
          >
        </div>
      </v-card>
    </div>

    <v-container fluid class="pa-2">
      <v-row dense>
        <v-col v-for="(item, index) in links" :key="index" :cols="linkflex">
          <v-card
            elevation="0"
            :to="item.link"
            class="pa-0 custom__menu"
            :class="item.bg"
            height="85"
          >
            <v-card-title class="pa-0 pt-1 pl-2 num">{{
              index + 1
            }}</v-card-title>
            <v-card-text
              class="text-h6 pa-1 pt-0 text-center tit"
              style="margin-top: -8px"
              ><span>{{ item.name }}</span></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-app-bar app bottom elevation="0" light class="white">
      <v-btn
        depressed
        large
        color="custom__btn"
        class="flex-grow-1 ml-8 mr-8"
        style="border-radius: 8px"
      >
        <span class="text-h6 font-weight-bold">전송대기 : 4</span>
      </v-btn>
    </v-app-bar>
  </v-main>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MainView",
  data: () => ({
    show: true,
    propsData: {
      pagetitle: "투게더스",
      pageBack: false,
      pageBtn: false,
      pageBtnName: null,
      pageMenu: true,
    },
    drawer: false,
    group: null,
    linkflex: 4,
    links: [
      {
        link: "/loading",
        name: "로딩화면",
        bg: "custom__menu--type1",
      },
      {
        link: "/purchaselist",
        name: "매입/반품",
        bg: "custom__menu--type2",
      },
      {
        link: "/purchaseView",
        name: "매입상세",
        bg: "custom__menu--type1",
        color: "white--text",
      },
      {
        link: "/salegrouplist",
        name: "특매그룹",
        bg: "custom__menu--type2",
      },
      {
        link: "/salegoodslist",
        name: "특매목록",
        bg: "custom__menu--type1",
      },
      {
        link: "/specialsale",
        name: "특매",
        bg: "custom__menu--type2",
      },
      {
        link: "/specialsalelist",
        name: "스캔정보",
        numcolor: "yellow--text text--darken-2",
        bg: "custom__menu--type1",
        color: "white--text",
      },
      {
        link: "/goodslist",
        name: "이력조회",
        numcolor: "orange--text text--darken-3",
        bg: "custom__menu--type2",
        color: "black--text",
      },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    ...mapState(["basecolor", "dark"]),
  },
};
</script>
<style scoped>
.appbar__right {
  position: absolute !important;
  right: 16px;
}
.appbar__left {
  position: absolute !important;
  left: 16px;
}
</style>
