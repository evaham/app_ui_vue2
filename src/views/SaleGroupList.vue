<template>
  <v-main>
    <header-nav :propsData="this.propsData"></header-nav>
    <v-toolbar elevation="0">
      <div class="dateselecter">
        <v-btn class="dateselecter__rbtn" dark elevation="0">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <input type="text" value="2022년 04월" class="text-center" />
        <v-btn class="dateselecter__lbtn" dark elevation="0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-list>
      <v-list-item-group class="grey darken-4" dark>
        <v-list-item>
          <v-list-item-action></v-list-item-action>
          <v-list-item-content>그룹명</v-list-item-content>
          <v-list-item-action>시작일 ~ 종료일</v-list-item-action>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-action>
              <span>{{ index + 1 }}</span>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle class="mt-1" :class="item.timecolor">
                {{ item.time }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-title class="font-weight-bold">
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

    <v-app-bar app bottom elevation="0" class="white">
      <v-btn
        depressed
        rounded
        large
        color="primary"
        class="flex-grow-1 ml-2 mr-2"
      >
        <v-icon class="mr-2">mdi-plus-circle-outline</v-icon>
        <span>새 특매그룹 등록</span>
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
        money: "22.02.28 ~ 22.05.31",
      },
      {
        name: "적립 제외 (7)",
        timecolor: "purple--text",
        money: "22.02.28 ~ 22.05.31",
      },
      {
        name: "2월 롯데칠성 (0)",
        timecolor: "grey--text",
        money: "22.02.01 ~ 22.05.31",
      },
      {
        name: "2월 롯데칠성 (0)",
        timecolor: "grey--text",
        money: "22.02.01 ~ 22.05.31",
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
  flex: 1;
  input[type="text"] {
    display: flex;
    flex: 1;
    border: 1px solid #333a;
  }
  &__rbtn {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &__lbtn {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
