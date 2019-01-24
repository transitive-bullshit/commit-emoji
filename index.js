#!/usr/bin/env node
'use strict'

const execa = require('execa')
const randomItem = require('random-item')
const emoji = require('./emoji')

module.exports = async (argv) => {
  const message = randomItem(emoji)
  const cmd = `git commit -am "${message}"`
  console.log(cmd)
  execa.shellSync(cmd, { stdio: 'inherit' })
}

module.exports(process.argv)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
