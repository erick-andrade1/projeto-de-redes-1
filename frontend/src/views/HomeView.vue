<template>
  <div>
    <div>Opa iae</div>
    <div>
      {{ data }}
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            v-model="myMessage"
          ></textarea>
        </div>
        <a href="#" class="btn btn-primary" @click="postMessage(myMessage)"
          >Go somewhere</a
        >
      </div>
    </div>
    <div v-if="messages && messages.length > 0">
      <div v-for="(message, index) in messages" :key="index">
        {{ message }}
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
      myMessage: undefined,
      messages: [],
    };
  },
  methods: {
    getAll() {
      homeService.get().then((response) => {
        this.data = response;
        this.$toast.success(`Hey! I'm here`, { position: "bottom-right" });
      });
    },
    postMessage(myMessage) {
      homeService.post(myMessage).then((response) => {
        this.myMessage = undefined;
        this.messages.push(response.message);
      });
    },
  },
  created() {
    this.getAll();
  },
};
</script>
