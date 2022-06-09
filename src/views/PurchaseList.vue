<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="d-flex pa-4 pt-4 pb-4">
      <v-card
        @click="dialog3 = true"
        elevation="0"
        large
        class="mr-1 flex-grow-1 flex-column custom__menu custom__menu--type1"
        height="70"
      >
        <v-card-title class="pa-0 pt-1 pl-2 text-h5 num">1</v-card-title>
        <v-card-text
          class="text-h6 pa-1 pt-0 text-center tit"
          style="margin-top: -18px"
          ><span>발주</span></v-card-text
        >
      </v-card>
      <v-card
        @click="dialog3 = true"
        elevation="0"
        large
        class="ml-1 flex-grow-1 flex-column custom__menu custom__menu--type2"
        style="border-radius: 8px"
        height="70"
      >
        <v-card-title
          class="pa-0 pt-1 pl-2 text-h5 num"
          style="font-weight: 800 !important"
          >2</v-card-title
        >
        <v-card-text
          class="text-h6 pa-1 pt-0 text-center tit"
          style="margin-top: -18px"
          ><span>반품</span></v-card-text
        >
      </v-card>
    </div>
    <v-card tile elevation="0">
      <v-list class="pt-0">
        <v-subheader dark class="secondary darken-3" style="height: 34px">
          <div class="v-list-item__action mr-1">No.</div>
          <div class="v-list-item__content">공급사</div>
          <div class="v-list-item__action ml-2">품목수 / 매입액</div>
        </v-subheader>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item :key="index" :class="item.bgcolor">
              <v-list-item-action class="text-h6 font-weight-bold mr-1">
                <span class="grey--text">{{ index + 1 }}</span>
              </v-list-item-action>
              <v-list-item-content class="pt-2 pb-2">
                <v-list-item-title
                  class="text-h6 font-weight-bold mb-0"
                  :class="item.fontcolor"
                  >{{ item.name }}</v-list-item-title
                >
                <v-list-item-subtitle
                  class="mt-0 text-subtitle-1 mt-0 grey--text"
                >
                  {{ item.time }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="ml-2">
                <v-list-item-title
                  class="text-h6 font-weight-bold align-self-end"
                  :class="item.fontcolor"
                >
                  {{ item.count }}
                </v-list-item-title>
                <v-list-item-subtitle
                  class="mt-0 text-subtitle-1 font-weight-bold mt-0"
                  :class="item.fontcolor"
                >
                  {{ item.money }}
                </v-list-item-subtitle>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-app-bar app bottom elevation="0" class="white" v-show="checkOpt">
      <v-btn tile depressed large class="flex-grow-1 ml-8 mr-8 custom__btn"
        ><span class="text-h6 font-weight-bold">전송</span>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog3" persistent max-width="500px">
      <v-card>
        <v-card-title class="pa-2 custom__headcolor" :class="basecolor">
          <span class="font-weight-bold flex-grow-1 text-center">공급사</span>
          <v-btn
            icon
            @click="dialog3 = false"
            style="position: absolute; right: 6px"
          >
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p
            class="text-center text-h6 font-weight-bold mt-2 mb-2 primary--text text--darken-4"
          >
            선택 공급사명
          </p>
          <v-text-field
            label="공급사코드/공급사명/상품바코드"
            dense
            v-model="message"
            filled
            single-line
            clear-icon="mdi-close-circle"
            clearable
            type="text"
            @click:clear="clearMessage"
            class="primary--text text--darken-4 mt-3"
            background-color="primary lighten-5"
            style="font-size: 1.25em"
            color="primary darken-4"
          ></v-text-field>
          <div
            class="pl-3 pr-3"
            style="
              overflow: hidden;
              overflow-y: auto;
              height: 120px;
              font-size: 1.25em;
              font-weight: 700;
              color: #333;
            "
          >
            <p>공급사명1 리스트</p>
            <p>공급사명1 리스트</p>
            <p>공급사명1 리스트</p>
            <p>공급사명1 리스트</p>
            <p>공급사명1 리스트</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            tile
            large
            depressed
            class="flex-grow-1 ml-2 mr-2 custom__btn"
            @click="dialog3 = false"
          >
            <span class="text-h6 font-weight-bold">스캔</span>
          </v-btn>
          <v-btn
            tile
            large
            depressed
            disabled
            class="flex-grow-1 ml-2 mr-2 custom__btn"
            @click="dialog3 = false"
          >
            <span class="text-h6 font-weight-bold">확인</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
import { mapState } from "vuex";

export default {
  components: { HeaderNav },
  name: "PurchaseList",
  data: () => ({
    checkOpt: true,
    dialog3: false,
    propsData: {
      pagetitle: "매입/반품",
      pageBack: true,
      pageBtn: true,
      pageBtnName: "편집",
      pageTo: "/purchaselistopt",
    },
    items: [
      {
        type: 1,
        name: "일이삼사오육칠팔구십일이삼사오육칠팔구십",
        time: "2022-04-20 12:12",
        timecolor: "grey--text",
        money: "99,999,999",
        count: "999",
      },
      {
        type: 1,
        name: "롯데칠성음료",
        time: "오늘 11 : 31",
        timecolor: "primary--text text--darken-4",
        money: "2,166",
        count: "54",
        ectmoney: ".65",
      },
      {
        type: 1,
        name: "서울우유",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "1,905",
        count: "22",
        ectmoney: ".00",
      },
      {
        type: 1,
        name: "서울우유",
        time: "오늘 11 : 31",
        timecolor: "primary--text text--darken-4",
        money: "-5,715",
        count: "-20",
        fontcolor: "red--text text--darken-1",
      },
      {
        type: 1,
        name: "롯데칠성음료",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "2,166",
        count: "15",
        ectmoney: ".65",
      },
      {
        type: 1,
        name: "롯데칠성음료",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "2,166",
        count: "15",
        ectmoney: ".65",
      },
      {
        type: 1,
        name: "롯데칠성음료",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "2,166",
        count: "15",
        ectmoney: ".65",
      },
      {
        type: 1,
        name: "서울우유서울우유서울우유",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "-211,905",
        count: "-11",
        fontcolor: "red--text text--darken-1",
        ectmoney: ".00",
      },
      {
        type: 1,
        name: "롯데칠성음료",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "2,166",
        count: "7",
        ectmoney: ".65",
      },
      {
        type: 1,
        name: "롯데칠성음료",
        time: "오늘 11 : 31",
        timecolor: "primary--text text--darken-4",
        money: "2,166",
        count: "3",
        ectmoney: ".65",
      },
    ],
    password: "Password",
    show: false,
    message: "공급사명",
    marker: true,
  }),
  methods: {
    clearMessage() {
      this.message = "";
    },
    upValueParent(e) {
      this.checkOpt = e;
    },
  },
  computed: {
    ...mapState(["basecolor", "dark"]),
  },
};
</script>
