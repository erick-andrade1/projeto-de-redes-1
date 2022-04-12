const { json } = require("express");

module.exports = class HomeRepository {
  static async getAllSites(params) {
    const myPage = [
      {
        id: 1,
        name: "Photoshop",
        followers: 1314,
        info: "Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster (possuindo ainda algumas capacidades de edição típicas dos editores vectoriais) desenvolvido pela Adobe Systems. É considerado o líder no mercado dos editores de imagem profissionais, assim como o programa de facto para edição profissional de imagens digitais e trabalhos de pré-impressão. Sua mais recente versão é apelidada como Adobe Photoshop CC (sigla cujo significado é Creative Cloud, correspondente à sua décima quarta edição [14.0] desde seu lançamento), disponível para os sistemas operativos Microsoft Windows e Mac OS X. Pode ser rodado também no Linux, através da camada de compatibilidade Wine. Algumas versões anteriores foram lançadas também para IRIX, mas o suporte a esta versão foi descontinuado após a versão 3.0.",
      },
      {
        id: 2,
        name: "Riot Games",
        followers: 1314,
        info: "Riot Games é uma empresa americana fundada como um estúdio de jogos independente em 2006 por Brandon 'Ryze' Beck e Marc 'Tryndamere' Merril, em Los Angeles.[2] Em 2015 foi comprada pela empresa chinesa Tencent. A empresa anunciou o seu primeiro jogo, League of Legends: Clash of Fates, em outubro de 2008, e lançou o jogo em outubro de 2009 simplesmente como League of Legends. O jogo utiliza o modelo free-to-play apoiado por microtransações, no lugar de anúncios ou venda de cópias.",
      },
      {
        id: 3,
        name: "Lost Ark",
        followers: 1314,
        info: "Lost Ark é um jogo 2.5D action RPG multijogador massivo de fantasia (MMOARPG) com visão isométrica. É co-desenvolvido pela Tripod Studio e pela Smilegate RPG, subsidiária de desenvolvimento de jogos da Smilegate. Foi totalmente lançado na região sul-coreana em 4 de dezembro de 2019. O jogo também foi lançado na América do Norte, América do Sul e Europa em 11 de fevereiro de 2022, onde é publicado pela Amazon Games. Dentro de vinte e quatro horas após o lançamento, tornou-se o segundo jogo mais jogado da Steam. Lost Ark ganhou seis das várias categorias no Korea Game Awards 2019. O desenvolvimento do jogo custou cerca de US$ 85,4 milhões.",
      },
      {
        id: 4,
        name: "Elden Ring",
        followers: 1314,
        info: "Elden Ring (エルデンリング Eruden Ringu) é um jogo eletrônico de RPG de ação desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. O jogo é um projeto colaborativo entre o diretor Hidetaka Miyazaki e o romancista de fantasia George R. R. Martin. Foi lançado em 25 de fevereiro de 2022 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One e Xbox Series X/S. Elden Ring é apresentado através de uma perspectiva em terceira pessoa, com os jogadores percorrendo livremente pelo seu mundo aberto interativo. Os elementos de jogabilidade incluem combate, com vários tipos de armas e feitiços mágicos, passeios a cavalo e crafting. Elden Ring foi aclamado pela crítica, com elogios sendo direcionados à sua jogabilidade e projeto de mundo aberto. O jogo vendeu mais de 12 milhões de cópias dentro de três semanas de seu lançamento.",
      },
    ];
    let selectedSite = myPage.find((site) => site.id == params);

    return selectedSite;
  }
};
