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
    color: rgba(0, 0, 0, 0.75) !important;
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
      background: rgba(0, 0, 0, 0.55) !important;
      color: #fff;
      .num {
        color: rgba(248, 183, 22, 0.9) !important;
      }
      .tit {
        color: rgba(255, 255, 255, 0.9) !important;
      }
      .txt {
        color: rgba(255, 255, 255, 0.6) !important;
      }
    }
    &--type2 {
      background: rgba(0, 0, 0, 0.43) !important;
      color: #fff;
      .num {
        color: rgba(248, 183, 22, 1) !important;
      }
      .tit {
        color: rgba(255, 255, 255, 1) !important;
      }
      .txt {
        color: rgba(255, 255, 255, 0.7) !important;
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
  &__pagetit {
    color: rgba(80, 37, 5, 0.8);
  }
}
.v-list-item__title {
  color: rgba(0, 0, 0, 0.75) !important;
}
.v-list-item__subtitle {
  color: rgba(0, 0, 0, 0.75) !important;
}
</style>
