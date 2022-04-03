<template>
  <div class="card">
    <div class="fontStyle baseBottomBorder">ÁLBUNS DE FOTO</div>
    <div class="album">
      <img class="albumPhoto" src="../../public/img/abstract1.jpg" />
    </div>
    <div class="album">
      <img class="albumPhoto" src="../../public/img/asbtract2.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "photo-albums",
};
</script>

<style scoped>
.baseBottomBorder {
  border-bottom: 1px solid #dddddd;
}
.album {
  padding: 8px;
}
@media (max-width: 1920px) {
  .albumPhoto {
    background-size: cover;
    background-repeat: no-repeat;
    width: 58.5vh;
    height: 25.826446280991735vh;
  }
}

@media (max-width: 1360px) {
  .albumPhoto {
    background-size: cover;
    background-repeat: no-repeat;
    width: 25.6vh;
    height: 15.826446280991735vh;
  }
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
