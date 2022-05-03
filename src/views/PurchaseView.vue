<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="pa-1">
      <v-card class="secondary" dark elevation="0">
        <v-list dense class="transparent">
          <v-list-item style="min-height: 24px">
            <div class="mr-10" style="min-width: 50px">공급사</div>
            <div>롯데칠성음료</div>
          </v-list-item>
          <v-list-item style="min-height: 24px">
            <div class="mr-10" style="min-width: 50px">금액</div>
            <div class=""><span class="primary--text">12433.35</span> 원</div>
          </v-list-item>
          <v-list-item style="min-height: 24px">
            <div class="mr-10" style="min-width: 50px">날짜</div>
            <div class="">2022-04-21 11:31</div>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <v-list class="pt-0">
      <v-subheader dark class="secondary" style="height: 34px">
        <div class="v-list-item__action mr-1">No.</div>
        <div class="v-list-item__content">
          <span
            ><span>상품명/</span><span class="accent--text">바코드</span></span
          >
        </div>
        <div class="v-list-item__action ml-2 justify-end" style="width: 100px">
          <span class="accent--text">수량</span>/매입금액
        </div>
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
            <v-list-item-action class="ml-2" style="width: 100px">
              <v-list-item-title
                class="text-h6 mb-0 align-self-end accent--text"
              >
                {{ item.quantity }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-subtitle-1">
                {{ item.money }}
              </v-list-item-subtitle>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-app-bar app bottom elevation="0" class="white">
      <v-btn
        rounded
        depressed
        color="accent"
        class="flex-grow-1 ml-2 mr-2"
        @click="dialog3 = true"
      >
        <span class="text-h6">상품 추가</span>
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
        name: "롯데이프로복숭아(2000ml)",
        time: "8801056002701",
        timecolor: "accent--text",
        money: "1,115,715.00",
        quantity: "999",
      },
      {
        name: "롯데칸타타아메리카",
        time: "8801056018900",
        timecolor: "accent--text",
        money: "2,166.00",
        quantity: "3",
      },
      {
        name: "롯데핫식스캔(240ml)",
        time: "8801056038861",
        timecolor: "accent--text",
        money: "1,905.00",
        quantity: "10",
      },
      {
        name: "롯데핫식스캔데핫식스캔데핫식스캔(240ml)",
        time: "8801056038861",
        timecolor: "accent--text",
        money: "190.00",
        quantity: "10",
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
