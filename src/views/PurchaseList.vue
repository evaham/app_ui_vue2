<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div>
      <v-card class="secondary" tile dark elevation="0">
        <v-card-title class="pt-2 pb-2 justify-end">
          <span class="mr-auto">총</span>
          <span class="text-h5 font-weight-bold primary--text">
            9,786
            <span class="font-weight-regular">.65</span>
          </span>
          <span class="ml-4">원</span>
        </v-card-title>
      </v-card>
    </div>
    <v-list>
      <v-subheader dark class="listsubheader secondary">
        <div class="v-list-item__action">No.</div>
        <div class="v-list-item__content">매입사</div>
        <div class="v-list-item__action">매입금액</div>
      </v-subheader>
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-action class="text-h6">
              <span>{{ index + 1 }}</span>
            </v-list-item-action>
            <v-list-item-content class="pt-2 pb-2">
              <v-list-item-title class="text-h6 mb-0">{{
                item.name
              }}</v-list-item-title>
              <v-list-item-subtitle
                class="mt-0 subtitle-1 mt-0"
                :class="item.timecolor"
              >
                {{ item.time }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-bold">
                {{ item.money }}
                <span class="font-weight-regular grey--text">
                  {{ item.ectmoney }}
                </span>
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-app-bar app bottom elevation="0" class="white" v-show="checkOpt">
      <v-btn
        rounded
        depressed
        large
        outlined
        color="accent"
        class="flex-grow-1 ml-2 mr-2"
        @click="dialog3 = true"
      >
        <v-icon class="mr-2">mdi-plus-circle-outline</v-icon>
        <span>추가</span>
      </v-btn>
      <v-btn
        rounded
        depressed
        large
        color="accent"
        class="flex-grow-1 ml-2 mr-2"
      >
        <v-icon class="mr-2">mdi-email-send-outline</v-icon>
        <span>전송</span>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog3" persistent max-width="500px">
      <v-card>
        <v-card-title class="pa-2">
          <v-spacer></v-spacer>
          <span>공급사</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog3 = false">
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            v-model="message"
            filled
            clear-icon="mdi-close-circle"
            clearable
            type="text"
            @click:clear="clearMessage"
            background-color="yellow lighten-5"
            class="mt-3"
          ></v-text-field>
          <div class="" style="min-height: 100px">상품리스트</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            rounded
            depressed
            large
            color="accent"
            class="flex-grow-1 ml-2 mr-2"
            @click="dialog3 = false"
          >
            <v-icon class="mr-2">mdi-barcode-scan</v-icon>
            <span>스캔</span>
          </v-btn>
          <v-btn
            rounded
            depressed
            disabled
            large
            color="accent"
            class="flex-grow-1 ml-2 mr-2"
            @click="dialog3 = false"
          >
            <v-icon class="mr-2">mdi-check</v-icon>
            <span>확인</span>
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
        timecolor: "purple--text",
        money: "5,715",
        ectmoney: ".00",
      },
      {
        name: "롯데칠성음료",
        time: "오늘 11 : 31",
        timecolor: "purple--text",
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
        timecolor: "purple--text",
        money: "5,715",
        ectmoney: ".00",
      },
      {
        name: "롯데칠성음료",
        time: "오늘 11 : 31",
        timecolor: "purple--text",
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
    upValueParent(e) {
      this.checkOpt = e;
    },
  },
};
</script>
