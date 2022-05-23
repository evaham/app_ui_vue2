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
      <div class="text-h6 flex-grow-1 text-center font-weight-bold">
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
    <div class="pa-1" v-if="show == true">
      <v-card class="tertiary lighten-4" elevation="0">
        <v-card-title class="pa-1">
          <span class="text-body-2">마스터 수신 시각 :</span>
          <span class="text-body-1" style="font-weight: 800"
            >&nbsp;2022-05-10 16:58</span
          >
          <v-btn icon small class="ml-auto" @click="show = false"
            ><v-icon>mdi-refresh</v-icon></v-btn
          >
        </v-card-title>
      </v-card>
    </div>
    <div class="pa-1" v-if="show == false">
      <v-card class="tertiary lighten-4" elevation="0">
        <p class="pa-1 mb-1 text-center">
          수신된 마스터 정보가 없습니다.<br />
          하단 버튼을 눌러 마스터 수신후, 메뉴를 이용하시길 바랍니다.
        </p>
        <div class="d-flex justify-center">
          <v-btn
            dark
            rounded
            @click="show = true"
            color="primary darken-1"
            class="ma-1 mb-2 black--text justify-center"
            >마스터수신</v-btn
          >
        </div>
      </v-card>
    </div>

    <v-container fluid class="pa-2">
      <v-row dense>
        <v-col v-for="(item, index) in links" :key="index" :cols="linkflex">
          <v-card
            :dark="item.color"
            elevation="2"
            :to="item.link"
            class="pa-0"
            :class="item.bg"
            style="border-radius: 14px"
            height="85"
          >
            <v-card-title
              class="pa-0 pt-2 pl-1 text-h5 font-weight-bold primary--text"
              >{{ index + 1 }}</v-card-title
            >
            <v-card-title
              class="text-h6 pa-0 pl-1"
              style="font-size: 1.2rem !important"
              >{{ item.name }}</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-app-bar app bottom elevation="0" light class="white">
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
        bg: "secondary darken-3",
        color: "dark",
      },
      {
        link: "/purchaselist",
        name: "매입/반품",
        bg: "secondary darken-2",
        color: "dark",
      },
      {
        link: "/purchaseView",
        name: "매입상세",
        bg: "secondary darken-3",
        color: "dark",
      },
      {
        link: "/salegrouplist",
        name: "특매그룹",
        bg: "secondary darken-2",
        color: "dark",
      },
      {
        link: "/salegoodslist",
        name: "특매",
        bg: "secondary darken-3",
        color: "dark",
      },
      {
        link: "/salegrouplist",
        name: "특매",
        bg: "secondary darken-2",
        color: "dark",
      },
      {
        link: "/salegoodslist",
        name: "주문서",
        bg: "secondary darken-3",
        color: "dark",
      },
      {
        link: "/salegrouplist",
        name: "매대그룹",
        bg: "secondary darken-2",
        color: "dark",
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
.gradient {
  background: linear-gradient(
    to bottom,
    #fdd835 15%,
    #ffffff 30%,
    #f4f4f4 31%,
    #f4f4f4 100%
  );
}
.appbar__right {
  position: absolute !important;
  right: 16px;
}
.appbar__left {
  position: absolute !important;
  left: 16px;
}
</style>
