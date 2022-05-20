const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

const todaysImage = images[Math.floor(Math.random() * images.length)];

// html 만들기
const createImage = document.createElement("img");
createImage.src = `img/${todaysImage}`;

document.body.appendChild(createImage); // body에 추가하기