#!/usr/bin/env node

import { execa } from 'execa'
import randomItem from 'random-item'

import emoji from './emoji.js'

export async function main() {
  const message = randomItem(emoji)
  const cmd = `git commit -am "${message}"`
  console.log(cmd)
  await execa('git', ['commit', '-am', message])
}

await main().catch((err) => {
  console.error(err)
  process.exit(1)
})
