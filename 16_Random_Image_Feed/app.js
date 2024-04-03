const container = document.querySelector('.container')
const unsplashURL = '16_Random_Image_Feed/resim/'
const rows = 9

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300
}

// console.log(getRandomNumber())

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`
}

// console.log(getRandomSize())
