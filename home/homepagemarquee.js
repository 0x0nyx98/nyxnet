const splashes =
[
  ":3",
  "obligatory marquee",
  "welcome.. to nyxnet..  you can do Anything.. at nyx net..",
  "i am hydrogen~",
  "divided sky, the wind blows high! >o<",
  "i have grown my wings, i am flying~ ^.^",
  "its always the 2000s here :3",
  "those alien bastards are gonna pay for capitalisming my internet..",
  "owo uwu owo uwu owo uwu owo uwu",
  "lgbtq+ rights ^w^",
  "i hate cops!! >o<",
  "capalism bad :3",
  "furries!",
  "therians ar so cool",
  "nya nya nya clap clap",
  "\"im squared >_<²\" - umeja♥",
  "♥ mu umeja li blub ♥",
  "♥ mu aniku li ãaaææa ♥",
  "autism my beloved <3",
  "pebbles and marbles, like things on my miind~!",
]

const marquee = document.getElementById("marquee");
const splashmsg = document.getElementById("marquee-msg");

function changeSplashMsg() {
  splashmsg.innerHTML = "░▒▓ " + splashes[Math.floor(Math.random() * splashes.length)] + " ▓▒░";
}

marquee.addEventListener('animationiteration', changeSplashMsg);

changeSplashMsg();

const foreignWelcomes =
[
  "kama pona",
  "bienvenido",
  "välkommen",
  "karibu",
  "bem-vindo",
  "benvenuto",
  "aloha",
  "καλώς ορίσατε",
  "bienvenue",
  "أهلا وسهلا",
  "בָּרוּךְ הַבָּא",
  "歡迎光臨",
  "ようこそ"
]

const welcomeMsg = document.getElementById("welcome");

function changeWelcomeMsg() {
  welcomeMsg.innerHTML = "≈♥ « " + foreignWelcomes[Math.floor(Math.random() * foreignWelcomes.length)] + " =^o^= » ♥≈";
}

function resetWelcomeMsg() {
  welcomeMsg.innerHTML = "≈♥ « welcome =^.^= » ♥≈";
}

welcomeMsg.addEventListener('mouseover', changeWelcomeMsg);
welcomeMsg.addEventListener('mouseout', resetWelcomeMsg);
