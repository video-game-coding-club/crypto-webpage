# crypto-webpage

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/video-game-coding-club/crypto-webpage)
[![CI](https://github.com/video-game-coding-club/crypto-webpage/workflows/CI/badge.svg)](https://github.com/video-game-coding-club/crypto-webpage/actions?query=workflow%3ACI)
[![GitHub issues](https://img.shields.io/github/issues-raw/video-game-coding-club/crypto-webpage)](https://github.com/video-game-coding-club/crypto-webpage/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/video-game-coding-club/crypto-webpage)](https://github.com/video-game-coding-club/crypto-webpage/pulls)

Check your [Hacktoberfest progress](https://hacktoberfest.digitalocean.com/profile)!

## Introduction

We are building a website to learn about building websites and encryption:

<https://video-game-coding-club.github.io/crypto-webpage/>

Once the website is complete, it will encrypt messages that you give it
using the secret key that you provide. It will also decrypt messages if
you know the secret key for decryption.

Steps:

1. When you first arrive at the website's homepage, choose the
   language for the homepage prompts.

2. Next enter the message that you would like to encrypt or decrypt,
   in the first box provided.

3. Enter the secret key to encode or decode the message.

4. Finally, click on the "Encrypt" button and the decoded (or encoded)
   message will appear in the last box!

   **10/23/20**: Note that this step doesn't work yet.

### Development Status

- [x] Field to enter cleartext
- [x] Field to enter ciphertext
- [x] Field to enter secret (the shift)
- [x] Function to shift a letter
- [ ] Function to check that the secret is a number
- [ ] Function to shift a text

### GitPod Chrome Extension

You might find the GitPod Chrome extension useful

<https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki>

## Encryption Methods

### Caesar Cipher

In cryptography, a [Caesar
cipher](https://en.wikipedia.org/wiki/Caesar_cipher), also known as
Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is
one of the simplest and most widely known encryption techniques. It is
a type of substitution cipher in which each letter in the plaintext is
replaced by a letter some fixed number of positions down the alphabet.
For example, with a left shift of 3, D would be replaced by A, E would
become B, and so on. The method is named after Julius Caesar, who used
it in his private correspondence.

![Caesar Cipher](assets/Caesar_cipher_left_shift_of_3.svg)

### ROT13

A special case of the Caesar cipher is known as
[ROT13](https://en.wikipedia.org/wiki/ROT13) ("rotate by 13 places",
sometimes hyphenated ROT-13). ROT13 is a simple letter substitution
cipher that replaces a letter with the 13th letter after it.

Because there are 26 letters (2×13) in the basic Latin alphabet, ROT13
is its own inverse; that is, to undo ROT13, the same algorithm is
applied, so the same action can be used for encoding and decoding

![Example for ROT13](assets/ROT13_table_with_example.svg)
