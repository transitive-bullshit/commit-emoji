# commit-emoji

> Performs a git commit with a random emoji message. 😂😂😂

[![NPM](https://img.shields.io/npm/v/commit-emoji.svg)](https://www.npmjs.com/package/commit-emoji) [![Build Status](https://travis-ci.com/transitive-bullshit/commit-emoji.svg?branch=master)](https://travis-ci.com/transitive-bullshit/commit-emoji) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install -g commit-emoji
```

## Usage

Just run `commit-emoji` from the command-line.

This will run `git commit -am "X"` in a sub-shell, where X is a random [emoji](./emoji.js).

## Example Output

```bash
git log --oneline
```

```
8aef17e (HEAD -> master, origin/master) 🤙
0659d3c 💙
dfcfa23 🚀
```

## License

MIT © [Travis Fischer](https://transitivebullsh.it)
