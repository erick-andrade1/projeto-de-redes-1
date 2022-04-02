<template>
  <div class="home">
    <div>Opa iae</div>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script>
//Services:
import homeService from "../services/homeService";

export default {
  name: 'HomeView',
  data(){
    return {
      data: undefined,
    }
  },
  methods: {
    getAll(){
      homeService.get().then((response) => {
        this.data = response;
      })
    }
  },
  created(){
    this.getAll();
  }
}
</script>
