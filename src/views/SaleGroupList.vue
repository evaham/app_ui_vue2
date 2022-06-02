<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <div class="d-flex pa-1">
      <div class="dateselecter">
        <v-btn
          class="dateselecter__rbtn"
          color="secondary darken-3"
          elevation="0"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <input type="text" value="2022년 04월" class="text-center" />
        <v-btn
          class="dateselecter__lbtn"
          color="secondary darken-3"
          elevation="0"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <v-list class="pt-0">
      <v-subheader dark class="secondary darken-3" style="height: 34px">
        <div class="v-list-item__action mr-1"></div>
        <div class="v-list-item__content">그룹명 (상품수)</div>
        <div class="v-list-item__action justify-end"></div>
      </v-subheader>
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-action class="mr-2">
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
                :st="[item.iconcolor, item.textcolor]"
                :class="[item.iconcolor, item.textcolor]"
              >
                {{ item.icontext }}
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="text-h6 font-weight-bold">
                {{ item.name }}
                <span class="grey--text">{{ item.count }}</span>
              </v-list-item-title>
              <v-list-item-subtitle class="text-subtitle-1">
                {{ item.sdate }} ~ {{ item.edate }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-app-bar app bottom elevation="0" class="white">
      <v-btn depressed large class="flex-grow-1 ml-8 mr-8 custom__btn">
        <span class="text-h6 font-weight-bold">새 특매그룹 등록</span>
      </v-btn>
    </v-app-bar>
  </v-main>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "SaleGroupList",
  data: () => ({
    propsData: {
      pagetitle: "특매그룹",
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
        iconcolor: "grey lighten-1",
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
