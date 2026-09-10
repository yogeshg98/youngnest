import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

await mkdir(new URL('../public/images/', import.meta.url), { recursive: true });
for (const name of ['house', 'bedroom', 'kitchen']) {
  for (const width of [640, 960, 1600]) {
    await sharp(fileURLToPath(new URL(`../assets/originals/${name}.png`, import.meta.url)))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(fileURLToPath(new URL(`../public/images/${name}-${width}.webp`, import.meta.url)));
  }
}
console.log('Created responsive WebP assets. Original images are preserved.');
