import fs from 'fs'
import path from 'path'

export async function getIntroContent(): Promise<string> {
  const filePath = path.join(process.cwd(), 'content', 'intro.mdx')
  return fs.readFileSync(filePath, { encoding: 'utf8' })
}
