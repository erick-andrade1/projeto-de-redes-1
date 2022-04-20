<template>
  <div>
    <div class="card">
      <div class="row p-4 baseBottomBorder cardHeader">
        <div class="col-1 mr-4" style="display: inline-block">
          <img
            v-if="data.id === 1"
            class="iconStyle"
            src="../../public/img/icon1.png"
            alt=""
          />
          <img
            v-if="data.id === 2"
            class="iconStyle"
            src="../../public/img/icon2.jpg"
            alt=""
          />
          <img
            v-if="data.id === 3"
            class="iconStyle"
            src="../../public/img/icon3.jpg"
            alt=""
          />
          <img
            v-if="data.id === 4"
            class="iconStyle"
            src="../../public/img/icon4.jpg"
            alt=""
          />
        </div>
        <div class="col-8 pt-2" style="display: inline-block">
          {{ data.name }}
        </div>
        <div class="col-2">
          <div class="userPosts">{{ data.followers }} Followers</div>
        </div>
      </div>
      <div class="p-4 text-justify">
        {{ data.info }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "show-info",
  props: ["data"],
};
</script>
<style scoped>
.baseBottomBorder {
  border-bottom: 1px solid #dddddd;
}
.cardHeader {
  font-size: 24px;
  color: #6e6d6d;
  font-weight: bold;
}
.iconStyle {
  width: 50px;
  height: 50px;
  padding: 7px;
}
.userPosts {
  display: inline-block;
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding: 4px;
  font-size: 14px;
  background: #f3f5f7;
}
</style>
