<template>
  <div
    class="d-flex justify-content-center backgroundImage"
    style="height: 100%"
  >
    <div class="card p-5 input-group cardStyle row">
      <div class="loginLabel">LOGIN</div>
      <div class="col-12 mb-4 mt-3">
        <div class="labelStyle">Email:</div>
        <input
          type="text"
          class="form-control"
          placeholder="Digite seu email..."
          style="border: none; border-bottom: 1px solid #dcdcdc"
          v-model="data.email"
        />
      </div>
      <div class="col-12 mb-3 mt-3">
        <div class="labelStyle">Senha:</div>
        <input
          class="form-control"
          type="password"
          placeholder="Digite sua senha..."
          style="border: none; border-bottom: 1px solid #dcdcdc"
          v-model="data.password"
        />
      </div>
      <div class="d-flex justify-content-center col-12 pt-5 mt-4">
        <button class="btn btn-grad" @click="validator(data)">Entrar</button>
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

@media (max-width: 1920px) {
  .cardStyle {
    width: 400px;
    height: 480px;
    position: absolute;
    top: 25%;
  }
}

@media (max-width: 1360px) {
  .cardStyle {
    width: 450px;
    height: 480px;
    position: absolute;
    top: 15%;
  }
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #fc00ff 0%,
    #00dbde 51%,
    #fc00ff 100%
  );
}
.btn-grad {
  width: 200px;
  padding: 8px;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
