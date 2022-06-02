<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <v-list class="pt-2">
      <v-list-item-group>
        <v-card
          elevation="0"
          height="100"
          class="ml-2 mr-2 mb-2 custom__menu custom__menu--type1"
        >
          <v-card-title class="pa-0 pt-1 pl-2 text-h5 num">1</v-card-title>
          <v-card-text
            class="text-h6 pa-1 pt-0 text-center tit"
            style="margin-top: -30px"
            ><span>특매 스캔</span></v-card-text
          >
          <v-card-text class="pt-0 text-center text-subtitle-1 txt">
            스캔된 상품을 PC로 전송 후 MGR에서 특매 등록.
          </v-card-text>
        </v-card>
        <v-card
          elevation="0"
          height="100"
          class="ml-2 mr-2 mb-2 custom__menu custom__menu--type2"
        >
          <v-card-title class="pa-0 pt-1 pl-2 text-h5 num">2</v-card-title>
          <v-card-text
            class="text-h6 pa-1 pt-0 text-center tit"
            style="margin-top: -25px"
            ><span>특매 관리</span></v-card-text
          >
          <v-card-text class="pt-0 text-center text-subtitle-1 txt">
            앱에서 즉시 특매 상품을 추가.수정 등록
          </v-card-text>
        </v-card>
        <v-card
          elevation="0"
          height="100"
          class="ml-2 mr-2 mb-2 custom__menu custom__menu--type1"
        >
          <v-card-title class="pa-0 pt-1 pl-2 text-h5 num">3</v-card-title>
          <v-card-text
            class="text-h6 pa-1 pt-0 font-weight-bold text-center tit"
            style="margin-top: -18px"
            ><span>특매 상품 검색</span></v-card-text
          >
          <v-card-text class="pt-0 text-center text-subtitle-1 txt">
            특매 진행중인 상품 검색
          </v-card-text>
        </v-card>
      </v-list-item-group>
    </v-list>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "SaleGroupList",
  data: () => ({
    propsData: {
      pagetitle: "특매",
      pageBack: true,
      pageBtn: false,
      pageBtnName: null,
    },
    items: [
      {
        name: "적립",
        count: "(6)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "최",
        textcolor: "red--text text--darken-1",
        iconcolor: "red lighten-4",
      },
      {
        name: "적립 제외",
        count: "(28)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "우",
        textcolor: "blue--text text--darken-1",
        iconcolor: "blue lighten-4",
      },
      {
        name: "2월 롯데칠성",
        count: "(6)",
        timecolor: "grey--text",
        sdate: "22.02.01",
        edate: "22.05.31",
        icontext: "일",
        textcolor: "grey--text text--darken-1",
        iconcolor: "grey lighten-4",
      },
      {
        name: "적립",
        count: "(6)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "최",
        iconcolor: "red lighten-1",
      },
      {
        name: "적립 제외",
        count: "(28)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "우",
        iconcolor: "blue lighten-1",
      },
      {
        name: "2월 롯데칠성",
        count: "(6)",
        timecolor: "grey--text",
        sdate: "22.02.01",
        edate: "22.05.31",
        icontext: "일",
        iconcolor: "grey lighten-1",
      },
      {
        name: "적립",
        count: "(120)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "최",
        iconcolor: "red lighten-2",
      },
      {
        name: "적립 제외",
        count: "(7)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "우",
        iconcolor: "blue lighten-2",
      },
      {
        name: "2월 롯데칠성",
        count: "(6)",
        timecolor: "grey--text",
        sdate: "22.02.01",
        edate: "22.05.31",
        icontext: "일",
        iconcolor: "grey lighten-2",
      },
      {
        name: "적립",
        count: "(6)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "최",
        iconcolor: "red lighten-3",
      },
      {
        name: "적립 제외",
        count: "(6)",
        timecolor: "purple--text",
        sdate: "22.02.28",
        edate: "22.05.31",
        icontext: "우",
        iconcolor: "blue lighten-3",
      },
      {
        name: "2월 롯데칠성",
        count: "(6)",
        timecolor: "grey--text",
        sdate: "22.02.01",
        edate: "22.05.31",
        icontext: "일",
        iconcolor: "grey lighten-3",
      },
    ],
  }),
  components: {
    HeaderNav,
  },
};
</script>
<style lang="scss">
.dateselecter {
  display: flex;
  input[type="text"] {
    display: flex;
    flex: 1;
    width: 120px;
    border: 1px solid #333a;
  }
  &__rbtn {
    min-width: 34px !important;
    padding: 0 5px !important;
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &__lbtn {
    min-width: 34px !important;
    padding: 0 5px !important;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
