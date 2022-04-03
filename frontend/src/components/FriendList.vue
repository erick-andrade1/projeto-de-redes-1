<template>
  <div class="card">
    <div class="fontStyle">LISTA DE AMIGOS</div>
    <div class="text-center">
      <div class="col-sm-4 borderSolid">
        <div>
          <img
            class="userPhotoPost"
            src="../../public/img/avatar2.png"
            alt=""
          />
        </div>
        <div class="nameStyle">Charles Davis</div>
      </div>
      <div class="col-sm-4 borderSolid">
        <div>
          <img
            class="userPhotoPost"
            src="../../public/img/avatar6.png"
            alt=""
          />
        </div>
        <div class="nameStyle">Gardênia Maria</div>
      </div>
      <div class="col-sm-4 borderSolid">
        <div>
          <img class="userPhotoPost" src="../../public/img/images.jpg" alt="" />
        </div>
        <div class="nameStyle">Sara Barros</div>
      </div>
      <div class="col-sm-4 borderSolid">
        <div>
          <img
            class="userPhotoPost"
            src="../../public/img/images1.jpg"
            alt=""
          />
        </div>
        <div class="nameStyle">Marcos Franco</div>
      </div>
      <div class="col-sm-4 borderSolid">
        <div>
          <img
            class="userPhotoPost"
            src="../../public/img/baixados.png"
            alt=""
          />
        </div>
        <div class="nameStyle">Melissa Novais</div>
      </div>
      <div class="col-sm-4 borderSolid">
        <div>
          <img
            class="userPhotoPost"
            src="../../public/img/userImage.jpg"
            alt=""
          />
        </div>
        <div class="nameStyle">Carlos Eduardo</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "friend-list",
};
</script>
<style scoped>
.baseBottomBorder {
  border-bottom: 1px solid #dddddd;
}
.borderSolid {
  border: 1px solid #dddddd;
  padding: 8px;
  display: inline-block;
}
.userPhotoPost {
  background-size: cover;
  background-repeat: no-repeat;
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.fontStyle {
  font-size: 16px;
  font-family: sans-serif;
  font-weight: bold;
  padding: 16px;
}
.nameStyle {
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #363636;
}
</style>
