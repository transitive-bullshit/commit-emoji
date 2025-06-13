# commit-emoji

> Performs a git commit with a random emoji message. 😂😂😂

<p>
  <a href="https://github.com/transitive-bullshit/commit-emoji/actions/workflows/main.yml"><img alt="Build Status" src="https://github.com/transitive-bullshit/commit-emoji/actions/workflows/main.yml/badge.svg" /></a>
  <a href="https://prettier.io"><img alt="Prettier Code Formatting" src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg" /></a>
</p>

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

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
