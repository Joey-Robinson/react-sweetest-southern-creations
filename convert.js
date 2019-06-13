const imagemin = require("imagemin")
const imageminWebp = require("imagemin-webp")

imagemin(["./src/images/*.{jpg,png}"], "build/images", {
  use: [imageminWebp({ quality: 75 })],
}).then(() => {
  console.log("Images optimized")
})
