<h1 align="center">
🎲 
<br/>
rand-stand
</h1>

<h4 align="center">
  <a href="https://www.youtube.com/watch?v=pjvQFtlNQ-M" target="_blank">
    Randomize the order of your team members for your stand ups
  </a>
</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#installation">Installation</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#dependencies">Dependencies</a>
</p>

<p align="center">
    <a href="https://github.com/ricardofabila/rand-stand/releases" target="_blank">
      <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version 1.0.0">
    </a>
    <a href="https://www.youtube.com/watch?v=z8RkR4rd7dM" target="_blank">
      <img src="https://img.shields.io/badge/Fucks%20given-0-967259" alt="Version 1.0.0">
    </a>
</p>

---

# About

### Are your stand ups run 5 minutes longer than they should?

The following is a silly script I wrote in less than 5 minutes to use as an example of how to add a script package to [`🦊 fox`](https://github.com/ricardofabila/fox). But it can actually be useful, as I have been using it for about a year when running stand-ups.

## Installation

Get this script with [`🦊 fox`](https://github.com/ricardofabila/fox)

```shell
fox install rand-stand
```

## Does any of the following applies to you:

- Is there a long akward silence betweeen each member of your team because no one has the currage to go next?
- Are you playing the "the person in turn decides who to go next" game? (Why do people do this? It's beyond stupid 🤦)
- Are you reading this with a commercial voice?

There is a better way! Just install `rand-stand` and get a random list based on your team members. Post it on slack (or whatever you use) before every stand-up. And voila! No more awkward silences. No more unnecessary friction.

## Configuration

Just add your team members to the list in `~/.config/rand-stand/items.json` like so:

```json
{
  "first": ["⚡ Zeus"],
  "random": [
    "🎸 Jimi Hendrix",
    "👾 Ricardo",
    "🧼 Tyler Durden",
    "🦇 Ozzy Osbourne",
    "🐢 Mitch McConnell",
    "👨‍🍳 Gordon Ramsay"
  ],
  "last": ["🛹 Tony Hawk"]
}
```

This is quite self explanatory, but if you must... 

The items in the `first` section are hardcoded to go first (duh!), `random` go at random, and `last` go (you guessed it) at last.

And just run `rand-stand` to get the randomized list output to you terminal.

## Dependencies

This script is written with in JavaScript but uses the `bun` runtime. You can get it at: https://bun.sh
