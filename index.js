import { promises as fs } from 'node:fs'

import { encryptBitmap } from './encryptBitmap.js'

const outputDir = './output'
const files = await fs.readdir('./images')

await fs.mkdir(outputDir, { recursive: true });

for (const file of files) {
  console.log('Encrypting', file)
  await encryptBitmap(`./images/${file}`, `${outputDir}/${file}`)
}



