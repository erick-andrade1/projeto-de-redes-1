<template>
  <navbar></navbar>
  <div>
    <div class="planoDeFundo">
      <div class="px-3" style="position: relative; top: 86%">
        <img class="userPhoto" src="../../public/img/userImage.jpg" alt="" />
      </div>
    </div>
    <div class="row userInfo mb-5">
      <div class="row col-6">
        <div class="col-12 userName">Jorge Silva</div>
        <div class="col-12 userOffice">Programador</div>
      </div>
      <div class="col-6 text-center pt-3">
        <div class="userPosts">523 Post</div>
        <div class="userPosts">326 Following</div>
        <div class="userPosts">620 Followers</div>
      </div>
    </div>
    <div class="px-5">
      <div class="row">
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <div class="form-group pb-4">
                <textarea
                  class="form-control"
                  style="background: #f3f5f7"
                  cols="30"
                  rows="5"
                  placeholder="Digite algo para postar...."
                  v-model="myMessage"
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button
                  href="#"
                  class="btn buttonStyle"
                  @click="postMessage(myMessage)"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 py-4" v-if="messages && messages.length > 0">
      <div class="row">
        <div class="col-8">
          <div
            class="card mt-4"
            v-for="(message, index) in messages"
            :key="index"
          >
            <div class="card-body">
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Services:
import homeService from "../services/homeService";

//Components:
import navbar from "../layout/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
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
      });
    },
    postMessage(myMessage) {
      if (myMessage != undefined) {
        homeService.post(myMessage).then((response) => {
          this.myMessage = undefined;
          this.messages.push(response.message);
        });
      } else {
        this.$toast.error(`Digite algo!`, { position: "bottom-right" });
      }
    },
  },
  created() {
    this.getAll();
  },
};
</script>
<style scoped>
.planoDeFundo {
  background-image: url("../../public/img/planodefundo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
}
.userPhoto {
  background-size: cover;
  background-repeat: no-repeat;
  width: 88px;
  height: 88px;
  border-radius: 50%;
}
.userInfo {
  height: 60px;
  padding-left: 110px;

  border-bottom: 1px solid #dcdcdc;
  box-shadow: 0 4px 6px -2px #dcdcdc;
}
.userName {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #2c3e50;
}
.userOffice {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #6e6d6d;
}
.userPosts {
  display: inline-block;
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding: 4px;
  font-size: 14px;
  background: #f3f5f7;
}
.buttonStyle {
  width: 100px;
  font-size: 16px;
  padding: 8px;
  color: white;
  background: #527aba;
  border: none;
  line-height: 20px;
}
.buttonStyle:hover {
  transition: 0.4s;
  box-shadow: 0px 0px 6px 6px #dcdcdc;
  color: #527aba;
  background: white;
  border: 1px solid #527aba;
}
</style>
