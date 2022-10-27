import { promises as fs } from 'node:fs'
import { createCipheriv, randomBytes } from 'node:crypto'


const file = await fs.readFile('./tux.bmp')

const key = Buffer.from('password'.repeat(2))
const cipher = createCipheriv('AES-128-ECB', Buffer.from(key, 'hex'), null)
const ciphertext = Buffer.concat([cipher.update(file), cipher.final()])

const bitmapHeaderLength = 54

const unencryptedHeader = file.subarray(0, bitmapHeaderLength)
const encryptedBody = ciphertext.subarray(bitmapHeaderLength)
const mixed = Buffer.concat([unencryptedHeader, encryptedBody])

await fs.writeFile('./tux-encrypted-2.bmp', mixed)