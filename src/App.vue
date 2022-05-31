<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.custom {
  &__btn {
    background-color: #f7bc29 !important;
    border-radius: 8px !important;
    color: #000 !important;
    &--icon {
      border-radius: 50% !important;
    }
  }
  &__menu {
    border-radius: 14px !important;
    .num {
      font-size: 1.6em !important;
      font-weight: 800 !important;
    }
    .tit {
      font-size: 1.2em !important;
    }
    .txt {
      width: 250px;
      margin: 0 auto;
      font-size: 1em !important;
      line-height: 1.2 !important;
    }
    &--type1 {
      background: #868686 !important;
      color: #fff;
      .num {
        color: #fbc02d !important;
      }
      .tit,
      .txt {
        color: #fff !important;
      }
    }
    &--type2 {
      background: #d9d9d9 !important;
      color: #fff;
      .num {
        color: #ef6c00 !important;
      }
      .tit,
      .txt {
        color: #303030 !important;
      }
    }
  }
  &__infobox {
    background: #fae1b9 !important;
  }
  &__tf {
    font-size: 1.2em;
    .v-text-field__details {
      display: none;
    }
  }
  &__badge {
    &--red {
      background: #f8e5c8;
    }
    &--blue {
      background: #90caf9;
    }
    &--gray {
      background: #bdbdbd;
    }
  }
  &__tab {
    ul {
      display: flex;
      margin: 0;
      padding: 0 !important;
      background: #eeeeee;
      border-top: 2px solid #eeeeee;
      list-style: none;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        flex: 1;
        height: 50px;
        color: #808080;
        &.active {
          background: #fff;
          color: #ea9100;
        }
      }
    }
  }
}
</style>
