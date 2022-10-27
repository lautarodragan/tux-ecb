// taken from https://github.com/shaozilee/bmp-js/blob/db2c466ca1869ddc09e4b2143404eb03ecd490db/lib/decoder.js#L19
export const parseHeader = (buffer) => ({
  flag: buffer.readUInt16LE(),
  flagString: buffer.toString('utf-8', 0, 2),
  fileSize: buffer.readUInt32LE(2),
  reserved: buffer.readUInt32LE(6),
  offset: buffer.readUInt32LE(10),
  headerSize: buffer.readUInt32LE(14),
  width: buffer.readUInt32LE(18),
  height: buffer.readInt32LE(22),
  planes: buffer.readUInt16LE(26),
  bitPP: buffer.readUInt16LE(28),
  compress: buffer.readUInt32LE(30),
  rawSize: buffer.readUInt32LE(34),
  hr: buffer.readUInt32LE(38),
  vr: buffer.readUInt32LE(42),
  colors: buffer.readUInt32LE(46),
  importantColors: buffer.readUInt32LE(50),
})
