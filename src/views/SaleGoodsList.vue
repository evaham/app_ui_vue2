<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="pa-1">
      <v-card class="secondary darken-3" dark elevation="0">
        <v-list dense class="transparent">
          <v-list-item style="min-height: 24px">
            <div class="mr-10" style="min-width: 50px">그룹명</div>
            <div>감사세일</div>
            <div
              style="
                display: flex;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                color: #fff;
                justify-content: center;
                align-items: center;
                font-weight: 600;
              "
              class="red ml-2"
            >
              최
            </div>
          </v-list-item>
          <v-list-item style="min-height: 24px">
            <div class="mr-10" style="min-width: 50px">기간</div>
            <div class="">2022.04.21 ~ 2022.06.24</div>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <v-list class="pt-0">
      <v-subheader dark class="secondary darken-3" style="height: 34px">
        <div class="v-list-item__action mr-1">No.</div>
        <div class="v-list-item__content">상품명 / 바코드</div>
        <div class="v-list-item__action justify-end">정상가 / 특매가</div>
      </v-subheader>
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-action class="text-h6 mr-1">
              <span>{{ index + 1 }}</span>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-subtitle class="text-subtitle-1">{{
                item.name
              }}</v-list-item-subtitle>
              <v-list-item-title class="text-h6">
                {{ item.barcode }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action class="ml-2">
              <v-list-item-subtitle class="text-subtitle-1">
                {{ item.money }}
              </v-list-item-subtitle>
              <v-list-item-title class="text-h6 mb-0 align-self-end red--text">
                {{ item.quantity }}
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-app-bar app bottom elevation="0" class="white">
      <v-btn
        depressed
        rounded
        color="primary darken-1 black--text"
        class="flex-grow-1 ml-2 mr-2"
      >
        <span class="text-h6">상품 추가</span>
      </v-btn>
    </v-app-bar>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "SaleGoodsList",
  data: () => ({
    propsData: {
      pagetitle: "특매 리스트",
      pageBack: true,
      pageBtn: false,
      pageBtnName: null,
    },
    items: [
      {
        name: "롯데이프로복숭아(2000ml)",
        barcode: "8801056002701",
        timecolor: "",
        money: "1,115,715.00",
        quantity: "1,440",
      },
      {
        name: "롯데칸타타아메리카",
        barcode: "8801056018900",
        timecolor: "",
        money: "1,000,000",
        quantity: "9,000,000",
      },
      {
        name: "롯데핫식스캔(240ml)",
        barcode: "8801056038861",
        timecolor: "",
        money: "1,905.00",
        quantity: "90,000",
      },
      {
        name: "롯데핫식스캔데핫식스캔데핫식스캔(240ml)",
        barcode: "8801056038861",
        timecolor: "",
        money: "190.00",
        quantity: "9,000",
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
