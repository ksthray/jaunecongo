const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Banane douce",
    qteDispo: 10.0,
    prixKilo: 2.5,
    description:
      "Nos bananes sont cueillies quand elles sont vert « citron » afin qu'elles ne s'écrasent pas durant le transport. Les bananes continuent de mûrir après la cueillette. Si vous souhaitez accélérer le mûrissement, vous pouvez les placer dans un sachet en tissu ou papier, toujours à température ambiante.",
    image:
      "https://i0.wp.com/jaunecongo.com/wp-content/uploads/2019/06/Banane20douce.jpg",
  },
  {
    id: 2,
    name: "Banane plantain",
    qteDispo: 19.0,
    prixKilo: 2.0,
    description:
      "Nos makemba se mangent en frites, en chips, en purée ou bouillies et on peut même les consommer crues. Elles sont cueillis avant d'être jaunes pour mieux supporter le trajet. Elles mûrissent plus rapidement dans un sac en papier ou en tissu.",
    image:
      "https://i2.wp.com/jaunecongo.com/wp-content/uploads/2019/06/Banane20plantain1.jpg",
  },
  {
    id: 3,
    name: "Basilic",
    qteDispo: 3.0,
    prixBouqet: 1,
    description:
      "Notre basilic est succulent en sauce pour accompagner vos plats de viandes ou vos spaghettis. Petite astuce: le basilic perd de sa saveur sous la chaleur, il vaut mieux l'ajouter en fin de cuisson. Il est également délicieux pour épicer vos salades.",
    image:
      "https://i0.wp.com/jaunecongo.com/wp-content/uploads/2019/06/Basilic9.jpg",
  },
  {
    id: 4,
    name: "Bitekuteku",
    qteDispo: 5.0,
    prixBotte: 0.5,
    description:
      "Bitekuteku ou feuilles d'amarante en français se cuisinent généralement à l'huile avec de l'ail, de l'oignon et des solos, mais elles peuvent aussi être cuisinés dans l'eau bouillante.",
    image:
      "https://i0.wp.com/jaunecongo.com/wp-content/uploads/2019/06/Bitekuteku20Medium.jpg",
  },
];

router.get("/", (req, res) => {
  res.render("cards/index.html", { products });
});

module.exports = router;
