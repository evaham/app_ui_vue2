<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="pa-1">
      <v-card class="tertiary lighten-4 pa-1" elevation="0">
        <v-list dense class="transparent pa-0">
          <v-list-item style="min-height: 24px">
            <div class="mr-9" style="min-width: 45px">공급사</div>
            <div>롯데칠성음료</div>
          </v-list-item>
          <v-list-item style="min-height: 24px">
            <div class="mr-9" style="min-width: 45px">금액</div>
            <div class="">
              <span class="font-weight-bold">12433.35</span> 원
            </div>
          </v-list-item>
          <v-list-item style="min-height: 24px">
            <div class="mr-9" style="min-width: 45px">날짜</div>
            <div class="">2022-04-21 11:31</div>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <v-card tile elevation="0">
      <v-btn
        fab
        elevation="3"
        small
        color="primary darken-1 mr-2 black--text"
        style="position: absolute; top: -36px; right: 0"
        @click="showchange()"
        ><v-icon>mdi-swap-horizontal</v-icon></v-btn
      >
      <v-list class="pt-0" v-if="show">
        <v-subheader dark class="secondary darken-3" style="height: 34px">
          <div class="v-list-item__action mr-1"></div>
          <div class="v-list-item__content">상품명</div>
          <div class="v-list-item__action ml-2 justify-end">수량 / 매입액</div>
        </v-subheader>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item :key="index" style="height: 67px">
              <v-list-item-action class="text-h6 font-weight-bold mr-1">
                <span class="grey--text">{{ index + 1 }}</span>
              </v-list-item-action>
              <v-list-item-content class="pt-2 pb-2">
                <v-list-item-title
                  class="mt-0 text-h6 font-weight-bold mt-0"
                  :class="item.timecolor"
                >
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  class="text-subtitle-1 mb-0 black--text"
                  >{{ item.barcode }}</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action class="ml-2">
                <v-list-item-title
                  class="text-h6 font-weight-bold mb-0 align-self-end"
                >
                  {{ item.quantity }}
                </v-list-item-title>
                <v-list-item-subtitle
                  class="text-subtitle-1 font-weight-bold mb-0 black--text"
                >
                  {{ item.money }}<span class="grey--text">.00</span>
                </v-list-item-subtitle>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
      <v-list class="pt-0" v-if="!show">
        <v-subheader dark class="secondary darken-3" style="height: 34px">
          <div class="v-list-item__action mr-1"></div>
          <div class="v-list-item__content">상품명</div>
          <div class="v-list-item__action ml-2 justify-end">
            매입단가 / 판매단가
          </div>
        </v-subheader>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item :key="index" style="height: 67px">
              <v-list-item-action class="text-h6 font-weight-bold mr-1">
                <span class="grey--text">{{ index + 1 }}</span>
              </v-list-item-action>
              <v-list-item-content class="pt-2 pb-2">
                <v-list-item-title
                  class="mt-0 text-h6 font-weight-bold mt-0"
                  :class="item.timecolor"
                >
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  class="text-subtitle-1 mb-0 black--text"
                  >{{ item.barcode }}</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action class="ml-2">
                <v-list-item-subtitle
                  class="text-subtitle-1 font-weight-bold mb-0 black--text"
                >
                  {{ item.money2 }}<span class="grey--text">.00</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  class="text-subtitle-1 font-weight-bold mb-0 black--text"
                >
                  {{ item.money3 }}
                </v-list-item-subtitle>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-app-bar app bottom elevation="0" class="white">
      <v-btn
        large
        rounded
        depressed
        color="primary darken-1 black--text"
        class="flex-grow-1 ml-2 mr-2"
        @click="dialog3 = true"
      >
        <span class="text-h6 font-weight-bold">상품 추가</span>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog3" max-width="500px">
      <v-card>샘플</v-card>
    </v-dialog>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: { HeaderNav },
  name: "PurchaseList",
  data: () => ({
    dialog3: false,
    propsData: {
      pagetitle: "매입상세",
      pageBack: true,
      pageBtn: true,
      pageBtnName: "편집",
    },
    items: [
      {
        name: "일이삼사오육칠팔구십일이삼사오육칠팔구십",
        barcode: "8801056002701",
        timecolor: "",
        money: "9,999,999",
        quantity: "999",
        money2: "999,999",
        money3: "999,999",
      },
      {
        name: "롯데칸타타아메리카",
        barcode: "8801056018900",
        timecolor: "",
        money: "2,166",
        quantity: "3",
        money2: "999,999",
        money3: "999,999",
      },
      {
        name: "롯데핫식스캔(240ml)",
        barcode: "8801056038861",
        timecolor: "",
        money: "1,905",
        quantity: "10",
        money2: "999,999",
        money3: "999,999",
      },
      {
        name: "롯데칸타타아메리카",
        barcode: "8801056018900",
        timecolor: "",
        money: "2,166",
        quantity: "3",
        money2: "999,999",
        money3: "999,999",
      },
      {
        name: "롯데핫식스캔(240ml)",
        barcode: "8801056038861",
        timecolor: "",
        money: "1,905",
        quantity: "10",
        money2: "999,999",
        money3: "999,999",
      },
      {
        name: "롯데칸타타아메리카",
        barcode: "8801056018900",
        timecolor: "",
        money: "2,166",
        quantity: "3",
        money2: "999,999",
        money3: "999,999",
      },
      {
        name: "롯데핫식스캔(240ml)",
        barcode: "8801056038861",
        timecolor: "",
        money: "1,905",
        quantity: "10",
        money2: "999,999",
        money3: "999,999",
      },

      {
        name: "롯데핫식스캔데핫식스캔데핫식스캔(240ml)",
        barcode: "8801056038861",
        timecolor: "",
        money: "190",
        quantity: "10",
        money2: "999,999",
        money3: "999,999",
      },
    ],
    password: "Password",
    show: true,
    message: "서울우유",
    marker: true,
  }),
  methods: {
    clearMessage() {
      this.message = "";
    },
    showchange() {
      if (this.show === true) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
};
</script>
