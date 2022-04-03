<template>
  <div class="card">
    <div class="baseBottomBorder fontStyle">CURTIDAS RECENTES</div>
    <div class="row baseBottomBorder">
      <div class="col-2">
        <img class="iconStyle" src="../../public/img/icon1.png" alt="" />
      </div>
      <div class="col-10">
        <div class="nameFont">Photoshop</div>
        <div class="descFont">
          Adobe Photoshop é um software caracterizado como editor de imagens.
        </div>
      </div>
    </div>
    <div class="row baseBottomBorder">
      <div class="col-2">
        <img class="iconStyle" src="../../public/img/icon2.jpg" alt="" />
      </div>
      <div class="col-10">
        <div class="nameFont">Riot Games</div>
        <div class="descFont">
          Riot Games é uma empresa americana fundada como um estúdio de jogos
          independente em 2006
        </div>
      </div>
    </div>
    <div class="row baseBottomBorder">
      <div class="col-2">
        <img class="iconStyle" src="../../public/img/icon3.jpg" alt="" />
      </div>
      <div class="col-10">
        <div class="nameFont">Lost Ark</div>
        <div class="descFont">
          Lost Ark é um jogo 2.5D action RPG multijogador massivo de fantasia
          com visão isométrica.
        </div>
      </div>
    </div>
    <div class="row baseBottomBorder">
      <div class="col-2">
        <img class="iconStyle" src="../../public/img/icon4.jpg" alt="" />
      </div>
      <div class="col-10">
        <div class="nameFont">Elden Ring</div>
        <div class="descFont">
          Elden Ring é um jogo eletrônico de RPG de ação desenvolvido pela
          FromSoftware
        </div>
      </div>
    </div>
    <div class="morePages text-center">MAIS PÁGINAS</div>
  </div>
</template>
<script>
export default {
  name: "recently-liked",
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

.iconStyle {
  width: 50px;
  height: 50px;
  padding: 7px;
}

.fontStyle {
  font-size: 16px;
  font-family: sans-serif;
  font-weight: bold;
  padding: 16px;
}
.morePages {
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  color: #527aba;
  padding: 12px;
}
.nameFont {
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  color: rgb(34, 33, 33);
}
.descFont {
  font-size: 12px;
  font-family: sans-serif;
  color: #868585;
}
</style>
