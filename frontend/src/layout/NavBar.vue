<template>
  <div class="navBar d-flex justify-content-between">
    <div class="px-4 pt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="38px"
        height="38px"
      >
        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
        <path
          fill="#fff"
          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
        />
      </svg>
    </div>
    <div class="text-center navItems">
      <div class="input-icons">
        <input
          class="form-control navSearch-style"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style="width: 30rem"
        />
        <div style="position: relative">
          <i class="material-icons icon">search</i>
        </div>
      </div>
    </div>
    <div class="row py-3 navItems" style="width: 150px">
      <div class="col-4"> 
        <i class="bi bi-person"></i>
      </div>
      <div class="col-6">
        <i class="bi bi-gear"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style scoped>
.navItems {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.navBar {
  height: 6.835140771637122vh;
  border-bottom: 1px solid #dcdcdc;

}
.navSearch-style {
  border: none;
  background-color: #f2f5f7;
}
.input-icons i {
  position: absolute;
  right: 2%;
  bottom: 100%;
  padding-bottom: 4px;
}
i {
  font-size: 25px;
}
</style>
