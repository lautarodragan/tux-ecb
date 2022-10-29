import { promises as fs } from 'node:fs'
import { createCipheriv, randomBytes } from 'node:crypto'

import { parseHeader } from './parseHeader.js'

export async function encryptBitmap(sourcePath, targetPath) {
  const file = await fs.readFile(sourcePath)

  const parsedHeader = parseHeader(file)
  const header = file.subarray(0, parsedHeader.offset)
  const body = file.subarray(parsedHeader.offset)

  // console.log('header', parsedHeader)

  const key = randomBytes(16)
  const cipher = createCipheriv('AES-128-ECB', Buffer.from(key, 'hex'), null)

  const encryptedBody = Buffer.concat([cipher.update(body), cipher.final()])

  const mixed = Buffer.concat([header, encryptedBody])

  await fs.writeFile(targetPath, mixed)
}

export async function encryptText(sourcePath, targetPath) {
  const file = await fs.readFile(sourcePath)

  const key = randomBytes(16)
  const cipher = createCipheriv('AES-128-ECB', Buffer.from(key, 'hex'), null)

  const encryptedBody = Buffer.concat([cipher.update(file), cipher.final()])

  await fs.writeFile(targetPath, encryptedBody)
}
