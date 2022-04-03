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
                  v-model="myMessage.message"
                ></textarea>
              </div>
              <div class="row">
                <div class="col-6">
                  <div
                    class="d-flex justify-content-between pt-2"
                    style="width: 120px"
                  >
                    <div>
                      <i class="bi bi-camera iconBorder"></i>
                    </div>
                    <div>
                      <i class="bi bi-share iconBorder"></i>
                    </div>
                    <div>
                      <i class="bi bi-geo-alt iconBorder"></i>
                    </div>
                  </div>
                </div>

                <div class="col-6 d-flex justify-content-end">
                  <button
                    href="#"
                    class="btn buttonStyle"
                    @click="postMessage(myMessage)"
                  >
                    Postar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="row px-2" v-if="messages && messages.length > 0">
            <div
              class="card mt-4"
              v-for="(message, index) in messages"
              :key="index"
            >
              <div class="card-body">
                <div class="row baseBottomBorder">
                  <div class="col-1">
                    <img
                      class="userPhotoPost"
                      src="../../public/img/userImage.jpg"
                    />
                  </div>
                  <div class="col-10 mb-2">
                    <div class="userNamePost">Jorge Silva</div>
                    <div class="userDataPost">
                      {{ message.messageDate }}
                    </div>
                  </div>
                </div>
                <div class="row pt-2 pb-2 baseBottomBorder">
                  <div class="col-12 text-justify">
                    {{ message.message }}
                  </div>
                </div>
                <div class="row pt-2 baseBottomBorder">
                  <div class="col-3" style="width: 100px">
                    <div style="display: inline-block">
                      <i class="bi bi-heart"></i>
                    </div>
                    <div
                      style="
                        display: inline-block;
                        padding-left: 5px;
                        padding-bottom: 4px;
                      "
                    >
                      Gostei
                    </div>
                  </div>
                  <div class="col-3" style="width: 120px">
                    <div style="display: inline-block">
                      <i class="bi bi-chat"></i>
                    </div>
                    <div
                      style="
                        display: inline-block;
                        padding-left: 5px;
                        padding-bottom: 4px;
                      "
                    >
                      Comentar
                    </div>
                  </div>
                  <div class="col-3" style="width: 140px">
                    <div style="display: inline-block">
                      <i class="bi bi-send"></i>
                    </div>
                    <div
                      style="
                        display: inline-block;
                        padding-left: 5px;
                        padding-bottom: 4px;
                      "
                    >
                      Compartilhar
                    </div>
                  </div>
                </div>
              </div>
              <div class="input-group p-1 pb-2">
                <textarea
                  class="form-control"
                  style="background: #f3f5f7"
                  placeholder="Adicione seu comentário...."
                  cols="30"
                  rows="1"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <friend-list class="mb-4" />
          <photo-albums class="mb-4" />
          <recently-liked class="mb-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Services:
import homeService from "../services/homeService";

//Components:
import Navbar from "../layout/NavBar.vue";
import FriendList from "../components/FriendList.vue";
import PhotoAlbums from "../components/PhotoAlbums.vue";
import RecentlyLiked from "../components/RecentlyLiked.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    FriendList,
    PhotoAlbums,
    RecentlyLiked,
  },
  data() {
    return {
      data: undefined,
      myMessage: {
        message: undefined,
        messageDate: new Date().toLocaleString("pt-BR"),
      },
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
      if (myMessage.message != undefined) {
        homeService.post(myMessage).then((response) => {
          this.myMessage.message = undefined;
          this.messages.push(response);
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
.baseBottomBorder {
  border-bottom: 1px solid #dddddd;
}
.planoDeFundo {
  background-image: url("../../public/img/planodefundo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
}
.userPhotoPost {
  background-size: cover;
  background-repeat: no-repeat;
  width: 38px;
  height: 38px;
  border-radius: 50%;
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
.userNamePost {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #2c3e50;
}
.userDataPost {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #6e6d6d;
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
.iconBorder {
  border: 1px solid #3b3b3b;
  border-radius: 50%;
  padding: 8px;
}
</style>
