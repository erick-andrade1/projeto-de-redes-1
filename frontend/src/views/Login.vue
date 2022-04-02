<template>
  <div
    class="d-flex justify-content-center backgroundImage"
    style="height: 100%"
  >
    <div class="card p-4 input-group cardStyle row">
      <div class="loginLabel">Login</div>
      <div class="col-12 mb-3">
        <div class="labelStyle">Email:</div>
        <input
          type="text"
          class="form-control"
          style="border: none; border-bottom: 1px solid #dcdcdc"
        />
      </div>
      <div class="col-12 mb-3">
        <div class="labelStyle">Senha:</div>
        <input
          class="form-control"
          type="password"
          name=""
          id=""
          style="border: none; border-bottom: 1px solid #dcdcdc"
        />
      </div>
      <div class="text-center col-12 mt-3">
        <button class="btn buttonStyle" @click="onSelectedLink('home')">
          Entrar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    onSelectedLink(link) {
      this.$router.push({ name: link });
    },
  },
};
</script>
<style scoped>
.loginLabel {
  font-family: sans-serif;
  font-size: 34px;
  color: #2c3e50;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;
}
.labelStyle {
  font-weight: 500;
  font-family: sans-serif;
  font-size: 16px;
  color: #2c3e50;
}
.backgroundImage {
  background-image: url("../../public/img/loginImg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 1920px) {
  .cardStyle {
    width: 400px;
    height: 320px;
    position: absolute;
    top: 30%;
  }
}

.buttonStyle {
  font-family: sans-serif;
  font-size: 16px;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: rgba(167, 38, 184, 0.849);
  border: none;
  width: 100px;
  transition: 0.4s;
}

.buttonStyle:hover {
  transition: 0.4s;
  color: rgba(167, 38, 184, 0.849);
  background: white;
  border: 1px solid rgba(167, 38, 184, 0.849);
}
</style>
