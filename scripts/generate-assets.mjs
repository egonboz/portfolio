import sharp from 'sharp';
import { readFileSync } from 'fs';

const ogSvg = readFileSync('public/og-image.svg');
const favSvg = readFileSync('public/favicon.svg');

await sharp(ogSvg)
  .resize(1200, 630)
  .png()
  .toFile('public/og-image.png');

console.log('✅ og-image.png generated');

await sharp(favSvg, { density: 300 })
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32x32.png');

await sharp(favSvg, { density: 300 })
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('✅ favicon-32x32.png generated');
console.log('✅ apple-touch-icon.png generated');
