---
title: "tuxwire"
description: "terminal and Android RSS reader, synced through your own server"
weight: 1
---

A calm, terminal-style RSS reader that runs in your terminal and on your Android phone. Follow the sites you care about, save articles, add your own notes, and keep it all on your own server if you want it to follow you between devices.

No accounts, no ads, no tracking. Free software under the MIT licence.

[Install](#install) · [Google Play](https://play.google.com/store/apps/details?id=com.shanetalkstech.tuxwire) · F-Droid (coming soon) · [Source on GitHub](https://github.com/shanecuster/tuxwire)

{{< shot src="tuxwire-tui-main.png" alt="tuxwire in the terminal: topics on the left, articles on the right, a key legend below" caption="the terminal version, with topics on the left and articles on the right" >}}

## What it does

- **Feeds by topic.** Group RSS and Atom feeds into topics you choose, then browse topic, source, article.
- **Save and add notes.** Keep an article with your own note, and export everything to one Markdown file.
- **Read later.** Stash a link now, decide later.
- **Import and export.** Move your feed list in or out with OPML.
- **Themes.** Eight built in on the desktop, with live switching.
- **Optional sync.** Off by default, to a CouchDB server you run yourself.

## On the desktop

Keyboard driven. `Enter` reads an article, `s` saves it, `n` adds a note.

{{< shot src="tuxwire-tui-reading.png" alt="reading an article inside the terminal with w3m" caption="reading an article without leaving the terminal (needs w3m, otherwise it opens in your browser)" >}}

{{< shot src="tuxwire-tui-saved.png" alt="the saved view with a note preview under the article" caption="the saved view, with a note preview under the article" >}}

## On your phone

A native Android app with the same look. The bars are pinned top and bottom so everything sits under your thumb.

{{< phones >}}
{{< phone src="tuxwire-android-feeds.png" alt="the Android feed list grouped by topic" caption="feeds, by topic" >}}
{{< phone src="tuxwire-android-note.png" alt="a saved article with a note on Android" caption="saved, with notes" >}}
{{< phone src="tuxwire-android-stats.png" alt="the Stats tab on Android" caption="reading stats" >}}
{{< /phones >}}

## How they connect

Both apps are built on one shared Rust engine, so they behave the same. Turn on sync and they also share your saved articles and notes through a CouchDB database on your own server. Save something on your phone, find it in the terminal.

```text
  tuxwire (terminal) <─────>  your CouchDB  <─────> tuxwire (android)
                          (optional, your server)

  both built on tuxwire-core, one engine written in Rust
```

- **What travels:** saved articles, notes and read-later links.
- **When:** when you ask it to, never in the background.
- **Who sees it:** only you. Nothing is sent to me.

## Install

### Android

[Get it on Google Play](https://play.google.com/store/apps/details?id=com.shanetalkstech.tuxwire). F-Droid is coming.

### Terminal

Fedora COPR and Arch AUR packages are coming. Until then, build it from source.

1. Install Rust, then a C toolchain:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"

# C toolchain, pick your distro
sudo apt install build-essential pkg-config     # Debian, Ubuntu
sudo pacman -S base-devel pkg-config            # Arch, CachyOS
sudo dnf groupinstall "Development Tools"       # Fedora
```

2. Build it:

```bash
git clone https://github.com/shanecuster/tuxwire.git
cd tuxwire
cargo build --release
```

3. Put it on your path and run it:

```bash
mkdir -p ~/.local/bin
ln -s "$(pwd)/target/release/tuxwire" ~/.local/bin/tuxwire
tuxwire
```

The first build takes a few minutes. Optional: install `w3m` to read articles inside the terminal.

## Read more

- [tuxwire: An RSS Reader Built for Note-Taking]({{< relref "posts/tuxwire-my-rss-feed-reader.md" >}})
- [A Deeper Look Into Tuxwire]({{< relref "posts/a-deeper-look-into-tuxwire.md" >}})

## Links

[Privacy policy](https://github.com/shanecuster/tuxwire-android/blob/master/PRIVACY.md) · [Changelog](https://github.com/shanecuster/tuxwire-android/releases) · [Report an issue](https://github.com/shanecuster/tuxwire-android/issues) · [Terminal source](https://github.com/shanecuster/tuxwire) · [Android source](https://github.com/shanecuster/tuxwire-android)
