<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="pt-2 pb-2">
      <v-card class="custom__infobox" tile elevation="0">
        <v-card class="pa-1 custom__infobox" tile elevation="0">
          <v-list dense class="transparent pa-0">
            <v-list-item style="min-height: 24px">
              <div class="mr-9" style="min-width: 45px">전체 상품</div>
              <div class="">2 건</div>
            </v-list-item>
          </v-list>
        </v-card>
      </v-card>
    </div>
    <v-card tile elevation="0">
      <v-list class="pt-0">
        <v-subheader dark class="secondary darken-3" style="height: 34px">
          <div class="v-list-item__action mr-1">No.</div>
          <div class="v-list-item__content">상품명</div>
          <div class="v-list-item__action justify-end">정상가 / 특매가</div>
        </v-subheader>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item :key="index">
              <v-list-item-action class="text-h6 font-weight-bold mr-1">
                <span class="grey--text">{{ index + 1 }}</span>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-bold">
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-1 black--text">{{
                  item.barcode
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="ml-2">
                <v-list-item-subtitle class="text-subtitle-1 mb-0 text-right">
                  {{ item.money }}
                </v-list-item-subtitle>
                <v-list-item-title
                  class="text-h6 font-weight-bold mb-0 red--text align-self-end"
                >
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
        tile
        depressed
        large
        class="flex-grow-1 ml-2 mr-2 custom__btn"
        @click="dialog3 = true"
        ><span class="text-h6 font-weight-bold">추가</span>
      </v-btn>
      <v-btn tile depressed large class="flex-grow-1 ml-2 mr-2 custom__btn"
        ><span class="text-h6 font-weight-bold">전송</span>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog3" persistent>
      <v-card>
        <v-card-title class="pa-2" :class="basecolor">
          <span class="font-weight-bold flex-grow-1 text-center">특매정보</span>
          <v-btn
            icon
            @click="dialog3 = false"
            style="position: absolute; right: 6px"
          >
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="mt-1">
          <v-list dense class="transparent pt-1 pb-2">
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">바코드</div>
              <div class="">8801056018948</div>
            </v-list-item>
            <v-list-item
              class="pa-2 pt-0 pb-0"
              style="min-height: 24px; align-items: flex-start"
            >
              <div class="mr-3" style="min-width: 76px">상품명</div>
              <div style="line-height: 1.2">롯데칸타타프리미엄라떼입니다</div>
            </v-list-item>
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">규격</div>
              <div class="">275ml</div>
            </v-list-item>
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">매입가</div>
              <div class="">
                1,300<span class="grey--text text--darken-2">.00</span>
              </div>
            </v-list-item>
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">판매가</div>
              <div class="">1,000</div>
            </v-list-item>
          </v-list>
        </div>
        <div class="grey lighten-4">
          <v-list dense class="transparent pa-0 pt-2 pb-2">
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">특매매입가</div>
              <div
                class="red--text text--darken-1"
                style="font-weight: 800 !important"
              >
                1,000<span class="grey--text text--darken-1">.00</span>
              </div>
            </v-list-item>
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">특매판매가</div>
              <div
                class="red--text text--darken-1"
                style="font-weight: 800 !important"
              >
                1,300
              </div>
            </v-list-item>
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">할인</div>
              <div class="">1개당 -300원 할인</div>
            </v-list-item>
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">할인율</div>
              <div class="">-30.00%</div>
            </v-list-item>
            <v-list-item class="pa-2 pt-0 pb-0" style="min-height: 24px">
              <div class="mr-3" style="min-width: 76px">이익룰</div>
              <div class="">23.8%</div>
            </v-list-item>
          </v-list>
        </div>

        <v-card-actions>
          <v-btn
            tile
            large
            depressed
            class="flex-grow-1 ml-2 mr-1 custom__btn"
            @click="dialog3 = true"
          >
            <span class="text-h6 font-weight-bold">삭제</span>
          </v-btn>
          <v-btn
            tile
            large
            depressed
            class="flex-grow-1 ml-1 mr-2 custom__btn"
            @click="dialog3 = false"
          >
            <span class="text-h6 font-weight-bold">수정</span>
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
  name: "SpecialSaleList",
  data: () => ({
    checkOpt: true,
    dialog3: true,
    propsData: {
      pagetitle: "특매스캔목록",
      pageBack: true,
      pageBtn: false,
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
        money: "5,715",
        count: "20",
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
        money: "211,905",
        count: "11",
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
