<template>
  <div
    class="d-flex justify-content-center backgroundImage"
    style="height: 100%"
  >
    <div class="card p-5 input-group cardStyle row">
      <div class="loginLabel">LOGIN</div>
      <div class="col-12 mb-4">
        <div class="labelStyle">Email:</div>
        <input
          type="text"
          class="form-control"
          placeholder="Digite seu email..."
          style="border: none; border-bottom: 1px solid #dcdcdc"
          v-model="data.email"
        />
      </div>
      <div class="col-12 mb-3">
        <div class="labelStyle">Senha:</div>
        <input
          class="form-control"
          type="password"
          placeholder="Digite sua senha..."
          style="border: none; border-bottom: 1px solid #dcdcdc"
          v-model="data.password"
        />
      </div>
      <div class="text-center col-12 pt-5">
        <button class="btn buttonStyle" @click="validator(data)">Entrar</button>
      </div>
    </div>
  </div>
</template>
<script>
import { loginValidator } from "../utils/validators/loginValidator";

export default {
  name: "login",
  data() {
    return {
      data: {},
    };
  },
  methods: {
    validator(data) {
      let errorMessage = loginValidator(data);
      console.log(errorMessage);
      if (errorMessage) {
        this.$toast.error(errorMessage);
      } else {
        this.onSelectedLink("home");
      }
    },
    onSelectedLink(link) {
      this.$router.push({ name: link });
    },
  },
};
</script>
<style scoped>
.loginLabel {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
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

.cardStyle {
  width: 450px;
  height: 400px;
  position: absolute;
  top: 30%;
}

.buttonStyle {
  font-family: sans-serif;
  font-size: 16px;
  padding: 8px;
  color: white;
  background: rgba(47, 32, 179, 0.849);
  border: none;
  width: 100px;
  transition: 0.4s;
}

.buttonStyle:hover {
  transition: 0.4s;
  color: rgba(47, 32, 179, 0.849);
  background: white;
  border: 1px solid rgba(47, 32, 179, 0.849);
}
</style>
