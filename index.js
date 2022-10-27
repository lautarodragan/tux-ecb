import { promises as fs } from 'node:fs'

import { encryptBitmap } from './encryptBitmap.js'

const outputDir = './output'
const files = await fs.readdir('./images')
const bitmapFiles = files.filter(name => name.endsWith('.bmp'))

await fs.mkdir(outputDir, { recursive: true });

console.log('Will encrypt', bitmapFiles.length, 'files')

for (const file of bitmapFiles) {
  console.log('Encrypting', file)
  await encryptBitmap(`./images/${file}`, `${outputDir}/${file}`)
}



