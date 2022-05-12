<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="pa-1">
      <v-card class="secondary darken-3" elevation="0">
        <v-card-title class="pt-1 pb-1 justify-end primary--text">
          <span class="mr-auto text-body-1">총</span>
          <span class="text-h5 font-weight-bold">
            9,786
            <span class="font-weight-regular">.65</span>
          </span>
          <span class="ml-4 text-body-1">원</span>
        </v-card-title>
      </v-card>
    </div>
    <v-card style="overflow-x: scroll" class="ma-1 mt-0" outlined elevation="0">
      <v-list class="pt-0">
        <v-subheader dark class="secondary darken-3" style="height: 34px">
          <div class="v-list-item__action mr-1">
            <v-checkbox color="primary darken-1"></v-checkbox>
          </div>
          <div class="v-list-item__action mr-1">No.</div>
          <div class="v-list-item__content">매입사</div>
          <div class="v-list-item__action ml-2">매입금액</div>
        </v-subheader>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item :key="index">
              <v-list-item-action class="text-h6 mr-1">
                <span><v-checkbox color="primary darken-1"></v-checkbox></span>
              </v-list-item-action>
              <v-list-item-action class="text-h6 mr-1">
                <span>{{ index + 1 }}</span>
              </v-list-item-action>
              <v-list-item-content class="pt-2 pb-2">
                <v-list-item-title class="text-h6">{{
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
    <v-app-bar app bottom elevation="0" class="white">
      <v-btn
        rounded
        disabled
        depressed
        color="primary darken-1"
        class="flex-grow-1 ml-2 mr-2"
      >
        <span class="text-h6">삭제</span>
      </v-btn>
    </v-app-bar>
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
      pageBtnName: "취소",
      pageTo: "/purchaselist",
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
        name: "서울우유서울우유서울우유",
        time: "2022-04-20 11 : 31",
        timecolor: "grey--text",
        money: "1,905",
        ectmoney: ".00",
      },
    ],
    password: "Password",
    show: false,
    message: "서울우유",
    marker: true,
  }),
  methods: {
    clearMessage() {
      this.message = "";
    },
  },
};
</script>
<style lang="scss">
.listsubheader {
  background: #424242;
}
</style>
