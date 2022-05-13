<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="pa-1">
      <v-card class="tertiary lighten-4" elevation="0">
        <v-card-title class="pt-1 pb-1 justify-end">
          <span class="mr-auto text-body-1">총</span>
          <span class="text-h5 font-weight-bold"> 9,786 </span>
          <span class="ml-4 text-body-1">원</span>
        </v-card-title>
      </v-card>
    </div>
    <v-card style="overflow-x: scroll" tile elevation="0">
      <v-list class="pt-0">
        <v-subheader dark class="secondary darken-3" style="height: 34px">
          <div class="v-list-item__action mr-1">No.</div>
          <div class="v-list-item__content">매입사</div>
          <div class="v-list-item__action ml-2">매입금액</div>
        </v-subheader>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item :key="index">
              <v-list-item-action class="text-h6 mr-1">
                <span>{{ index + 1 }}</span>
              </v-list-item-action>
              <v-list-item-content class="pt-2 pb-2">
                <v-list-item-title class="text-h6 mb-0">{{
                  item.name
                }}</v-list-item-title>
                <v-list-item-subtitle
                  class="mt-0 text-subtitle-1 mt-0"
                  :class="item.timecolor"
                >
                  {{ item.time }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="ml-2">
                <v-list-item-title class="text-h6 font-weight-bold">
                  {{ item.money }}
                </v-list-item-title>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-app-bar app bottom elevation="0" class="white" v-show="checkOpt">
      <v-btn
        rounded
        depressed
        outlined
        large
        color="secondary darken-3"
        class="flex-grow-1 ml-2 mr-2"
        @click="dialog3 = true"
      >
        <span class="text-h6">추가</span>
      </v-btn>
      <v-btn
        rounded
        depressed
        large
        color="primary darken-1 black--text"
        class="flex-grow-1 ml-2 mr-2"
      >
        <span class="text-h6 text--grey">전송</span>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog3" persistent max-width="500px">
      <v-card>
        <v-card-title class="pa-2 primary darken-1">
          <span class="flex-grow-1 text-center">공급사</span>
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
          <v-text-field
            dense
            v-model="message"
            filled
            clear-icon="mdi-close-circle"
            clearable
            type="text"
            @click:clear="clearMessage"
            class="mt-3"
          ></v-text-field>
          <div class="text-subtitle-1" style="min-height: 100px">
            공급사명1 리스트<br />
            공급사명2 리스트
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            rounded
            large
            depressed
            color="primary darken-1 black--text"
            class="flex-grow-1 ml-2 mr-2"
            @click="dialog3 = false"
          >
            <span class="text-h6">스캔</span>
          </v-btn>
          <v-btn
            rounded
            large
            depressed
            disabled
            color="primary darken-1 black--text"
            class="flex-grow-1 ml-2 mr-2"
            @click="dialog3 = false"
          >
            <span class="text-h6">확인</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: { HeaderNav },
  name: "PurchaseList",
  data: () => ({
    checkOpt: true,
    dialog3: false,
    propsData: {
      pagetitle: "매입내역",
      pageBack: true,
      pageBtn: true,
      pageBtnName: "편집",
      pageTo: "/purchaselistopt",
    },
    items: [
      {
        name: "서울우유",
        time: "오늘 11 : 31",
        timecolor: "primary--text text--darken-4",
        money: "5,715",
        ectmoney: ".00",
      },
      {
        name: "롯데칠성음료",
        time: "오늘 11 : 31",
        timecolor: "primary--text text--darken-4",
        money: "2,166",
        ectmoney: ".65",
      },
      {
        name: "서울우유",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "1,905",
        ectmoney: ".00",
      },
      {
        name: "서울우유",
        time: "오늘 11 : 31",
        timecolor: "primary--text text--darken-4",
        money: "5,715",
        ectmoney: ".00",
      },
      {
        name: "롯데칠성음료",
        time: "오늘 11 : 31",
        timecolor: "primary--text text--darken-4",
        money: "2,166",
        ectmoney: ".65",
      },
      {
        name: "서울우유서울우유서울우유",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "211,905",
        ectmoney: ".00",
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
};
</script>
