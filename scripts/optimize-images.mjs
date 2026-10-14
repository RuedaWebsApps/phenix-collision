// Optimiza las imágenes de public/assets/phenix a WebP (máx. 2200px) sin alterar proporciones.
// Uso: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const dir = path.resolve('public/assets/phenix');
const files = (await readdir(dir)).filter(f => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(/\.(jpe?g|png)$/i, '.webp'));
  await sharp(input)
    .resize({ width: 2200, height: 2200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);
  const [a, b] = [await stat(input), await stat(output)];
  console.log(`${file}: ${(a.size / 1024).toFixed(0)}KB -> ${(b.size / 1024).toFixed(0)}KB`);
}
