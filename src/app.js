const { createCanvas, loadImage } = require('canvas');

async function createSquareImage(imagePaths) {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');

  const images = [
    await loadImage(imagePaths[0]),
    await loadImage(imagePaths[1]),
    await loadImage(imagePaths[2]),
    await loadImage(imagePaths[3]),
  ];

  ctx.drawImage(images[0], 0, 0, 200, 200);
  ctx.drawImage(images[1], 200, 0, 200, 200);
  ctx.drawImage(images[2], 0, 200, 200, 200);
  ctx.drawImage(images[3], 200, 200, 200, 200);

  return canvas.toDataURL();
}

createSquareImage([
  'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
  'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
  'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
  'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
]).then((outputUrl) => {
  console.log(`<img src="${outputUrl}" />`);
});
