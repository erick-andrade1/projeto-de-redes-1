<template>
  <div class="home">
    <div>Opa iae</div>
    <div>
      {{ data }}
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
//Services:
import homeService from "../services/homeService";

export default {
  name: "HomeView",
  data() {
    return {
      data: undefined,
    };
  },
  methods: {
    getAll() {
      homeService.get().then((response) => {
        this.data = response;
        this.$toast.success(`Hey! I'm here`, { position: "bottom-right" });
      });
    },
  },
  created() {
    this.getAll();
  },
};
</script>
