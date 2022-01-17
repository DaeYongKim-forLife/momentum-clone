const img =document.createElement("img");
const num = Math.random() * 3;
const imgNum = Math.floor(num);

img.src = `img/${imgNum}.jpg`;
document.body.appendChild(img);