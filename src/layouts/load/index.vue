<template>
  <div class="d-flex flex-grow-1 flex-column primary">
    <div class="d-flex flex-grow-1 align-center justify-center">
      <div class="imgbox"></div>
    </div>
    <div class="d-flex flex-grow-1 align-center justify-center">
      <div class="logo">투게더스</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingLayout",
};
</script>
<style lang="scss" scoped>
.imgbox {
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #fff;
}
.logo {
  display: flex;
  flex: 1;
  margin: 0 50px;
  height: 40px;
  background: #fff;
}
</style>
