import { promises as fs } from 'node:fs'

import { encryptBitmap, encryptText } from './encrypt.js'

const outputDir = './output'

await fs.mkdir(outputDir, { recursive: true });

await encryptFiles('.bmp', encryptBitmap)
await encryptFiles('.txt', encryptText)

async function encryptFiles(extension, encryptFunction) {
  const files = await fs.readdir('./input')
  const bitmapFiles = files.filter(name => name.endsWith(extension))

  console.log('Will encrypt', bitmapFiles.length, `${extension} files`)

  for (const file of bitmapFiles) {
    console.log('Encrypting', file)
    await encryptFunction(`./input/${file}`, `${outputDir}/${file}`)
  }

  console.log()
}
