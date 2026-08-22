---
title: "tuxwire: An RSS Reader Built for Note-Taking"
date: "2026-08-21T00:00:00.000Z"
categories:
  - "linux"
  - "technology"
tags:
  - "linux"
  - "rust"
  - "rss"
slug: "tuxwire-my-rss-feed-reader"
draft: false
---

I'm a big fan of RSS readers. I like picking and choosing exactly where my news comes from, and RSS is still the best way I know to do that.

Every day I read Linux, FOSS, and kernel news from about 15 different sources. I wanted a way to bring all of them together in one place — so I built **tuxwire**, a terminal-based RSS reader written in Rust.

## The Problem

You're probably asking, "Why not just use an existing RSS reader?" And I do — I love RSS readers. But even the good ones are missing one feature I rely on constantly: **note-taking**.

I read a lot of articles with walkthroughs I want to try or apps I want to install. Most of that reading happens on my phone, but most of the content applies to my desktop. Minimizing an article to jump to a separate notes app wastes time and breaks my flow. I'd been doing that for years, and ended up with a sprawling Obsidian vault of scattered notes and around 500 saved article links.

So I decided to build the tool I actually wanted.

{{< figure src="/images/tuxwire.png" link="/images/tuxwire.png" target="_blank" rel="noopener" alt="tuxwire terminal interface" caption="Click to view" >}}

## What It Does

I originally set out to build something just for Linux news. Partway through, I thought: *why stop at Linux?* So tuxwire grew into a full RSS reader for any feed — Linux news is just my primary use case.

Articles are stored in a local SQLite database, and notes are built directly into the reading flow:

```
s      save / unsave the current article
n      add or view a note on a saved article
Enter  confirm and save the note
Esc    discard the note
```

Saved articles are marked with a distinct color so they stand out in the list. Pressing `s` while browsing shows all your saved articles, with a preview of any note attached. Hit `n` again to open the full note.

Articles are also color-coded by status — read, saved, or not interested — which makes scanning the list much faster once you've got a backlog going.

I originally planned to add a machine learning layer that would learn which articles I tend to skip and start filtering them out automatically. The more I thought about it, though, the more it felt like overkill. Since I'm already curating my sources, there just aren't that many articles I skip. I scrapped that idea and kept the tool simple.

## Built in Rust

tuxwire is written in Rust using [ratatui](https://ratatui.rs/) for the TUI, with a Catppuccin Macchiato theme throughout. Because it's a Rust binary, it also runs on my phone via Termux — same tool, same workflow, whether I'm on my desktop or on the go.

## What's Next

The project is up on my GitHub at [shanecuster/tuxwire](https://github.com/shanecuster/tuxwire). It's currently at a functional v1, and I'm doing some more personal testing before opening it up more broadly for others to use.

I read a ton of FOSS projects built by other people — it feels good to finally have built one of my own.

If you try it, let me know via one of my socials.

Thanks for reading!

Until next time,
—Shane
