import { promises as fs } from 'node:fs'

const file = await fs.readFile('./tux.jpg')

console.log(file)

const encrypted = Buffer.from(file)

await fs.writeFile('./tux-encrypted.jpg', encrypted)