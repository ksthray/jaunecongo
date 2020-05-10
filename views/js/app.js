console.log("hello app.js");

const ligneBar = document.createElement("template");
const cards = document.createElement("template");

ligneBar.innerHTML = `
    <style>
        .bar {
            width: 100%;
            height: 3px;
            position: relative;
            top: 40px;
            background: yellow;
        }
        .produits {
            columns: black;
            width: 380px;
            background-color: yellow;
            font-size: 1.4rem;
            text-align: center;
            position: relative;
            left: 370px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .produits p {
            font-weight: bold;
        }
        
    </style>
    <div class="bar"></div>
    <div class="produits">
        <p>Nos produits cette semaine</p>
    </div>
`;

cards.innerHTML = `
    <style>
        .card{
            width: 300px;
        }
        .card-img-top{
            width: 300px;
        }
        .card-title{
            color: white;
            font-weigth: bold;
        }
        .card-text{
            color: rgb(165, 163, 163);
            fontsize: 0.8rem;
        }
        .btn{
            background: yellow;
            padding: 20px;
            text-decoration: none;
        }
    </style>
    <div class="card text-center">
      <img class="card-img-top"/>
      <div class="card-body">
        <h4 class="card-title"></h3>
        <p class="card-text"></p>
        <small class="card-text"></small>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary btn-bloc"></a>
      </div>
    </div>
`;

class LigneBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(ligneBar.content.cloneNode(true));

    this.shadowRoot.querySelector("p").innerText = this.getAttribute("slug");
  }
}

class Cards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(cards.content.cloneNode(true));

    this.shadowRoot.querySelector(".card-img-top").src = this.getAttribute(
      "image"
    );
    this.shadowRoot.querySelector(
      ".card-title"
    ).textContent = this.getAttribute("title");
    this.shadowRoot.querySelector(".card-text").textContent = this.getAttribute(
      "description"
    );
    this.shadowRoot.querySelector(".btn").textContent = this.getAttribute(
      "links"
    );
  }
}

window.customElements.define("ligne-bar", LigneBar);
window.customElements.define("cards-element", Cards);

function countDown() {
  const today = new Date();
  const eventDate = new Date("May 15, 2020 00:00:00");

  const currentTime = today.getTime();
  const eventTime = eventDate.getTime();

  console.log(currentTime);
  console.log(eventTime);

  const remTime = eventTime - currentTime;
  let sec = Math.floor(remTime / 1000);
  let min = Math.floor(sec / 60);
  let hrs = Math.floor(min / 60);
  let days = Math.floor(hrs / 24);

  hrs = hrs % 24;
  min %= 60;
  sec %= 60;

  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;

  setTimeout(countDown, 1000);
}

countDown();
