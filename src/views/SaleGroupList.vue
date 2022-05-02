<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <v-toolbar elevation="0">
      <div class="dateselecter">
        <v-btn class="dateselecter__rbtn" color="secondary" elevation="0">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <input type="text" value="2022년 04월" class="text-center" />
        <v-btn class="dateselecter__lbtn" color="secondary" elevation="0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-list class="pt-0">
      <v-subheader dark class="secondary" style="height: 34px">
        <div class="v-list-item__action mr-2"></div>
        <div class="v-list-item__content">그룹명</div>
        <div class="v-list-item__action justify-end">시작일 ~ 종료일</div>
      </v-subheader>
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-action class="mr-2">
              <span><v-icon>mdi-checkbox-blank-circle</v-icon></span>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="text-h6">{{
                item.name
              }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-title class="text-h6">
                {{ item.date }}
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-app-bar app bottom elevation="0" class="white">
      <v-btn depressed rounded color="accent" class="flex-grow-1 ml-2 mr-2">
        <span class="text-h6">새 특매그룹 등록</span>
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
        name: "적립 (6)",
        timecolor: "purple--text",
        date: "22.02.28 ~ 22.05.31",
      },
      {
        name: "적립 제외 (7)",
        timecolor: "purple--text",
        date: "22.02.28 ~ 22.05.31",
      },
      {
        name: "2월 롯데칠성 (0)",
        timecolor: "grey--text",
        date: "22.02.01 ~ 22.05.31",
      },
      {
        name: "2월 롯데칠성 (0)",
        timecolor: "grey--text",
        date: "22.02.01 ~ 22.05.31",
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
    width: 140px;
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
