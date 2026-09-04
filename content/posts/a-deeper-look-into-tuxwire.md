---
title: "A Deeper Look Into Tuxwire"
date: "2026-09-03T00:00:00.000Z"
categories:
  - "linux"
  - "technology"
tags:
  - "linux"
  - "rust"
  - "rss"
slug: "a-deeper-look-into-tuxwire"
draft: false
---

The first question I should answer is why did I name it Tuxwire? Initially I didn't plan on building an RSS reader. I just wanted a way to read all of the sources related to Linux news in a single place. I didn't even pick the name Tuxwire — it came out as I was walking through my thoughts and getting a layout put together.

Tux, the Linux mascot, is the penguin's name, and "wire" pulls from news history — the telephone and telegraph machines used to transmit news. I heard it and thought it was a perfect fit.

I chose the figlet-style title because that style fits the terminal user interface better than an ordinary title. Why the specific interface? I'm a big fan of the terminal user interface. I prefer this over a full graphical user interface as long as the application works. That's how I wanted to set up my RSS reader. I'm familiar with Newsboat and think it's great, but I needed some additional functions and features for what I want to do.

While I was doing my initial testing of tuxwire, I realized there was a big issue. I use a tiling window manager and have a certain window layout, so I found that I was constantly changing between workspaces to read articles. It felt broken initially. I use a 49" ultrawide monitor, so my initial thought was to split the bulk of the content into three columns: a smaller one on the left with the categories and key, a slightly larger middle one that lists the articles, and the largest space on the right as an area to open the article and read it.

I talked this out with Claude Code trying to figure out the best way to do this, and I was recommended to drop that idea entirely and use a terminal web browser instead. I was reluctant to do this, but after using it, I've realized that doing it this way was the best option. Why do I think that? Well, it fits the window regardless of its size. If I have tuxwire open in fullscreen mode or split in a master-stack layout, w3m fits the window. Just imagine how that would render trying to have three separate columns in a half-screen window — it would look terrible and probably not even be readable.

The other huge benefit — possibly the biggest advantage of opening articles in w3m — is that it sends the application essentially behind the browser. You may be asking why that's so special. Because it gives you absolute focus on the article and nothing else. For people like myself, that is necessary even when you think you don't need it.

The color scheme was also not typically a choice I would have made. I would typically have picked something like Gruvbox or Everforest, not Catppuccin. I don't mind the color palette, but I prefer a sharper contrast.

I chose to make this a config-driven application because that's how I do everything. To be honest, I wanted people to be able to choose their own sources and theme, to better fit their needs and wants while using the app. Baking this stuff in isn't my style — hence the config customization.

Initially, the app had multiple categories for feeds, and I felt that made things messy. There was also the possibility of repeating articles, so I made the change early on to list each feed under a single specific category to make things cleaner. This is also when I decided to list the categories in a tree with their feeds underneath, to make navigation a lot better.

I chose to leave the key on the left side all the time so it's easier to remember how to navigate around and create notes. There's nothing lost in leaving it there permanently. It's small and fits well under the categories, so it can stay put and really shouldn't bother anyone. If someone wants to remove it, they can — but I'm choosing to leave it there.

I chose to use SQLite for this project because of the save feature I wanted. It was the best option I felt, due to nothing more than being a single file that fits well into a single-user architecture.

## The Why Nots

While working the details of this project out, Claude suggested that based on my saves and ignores, this application could "learn" what kind of articles I would like to read over time. I opted out of this right away.

The reason I chose not to implement this machine learning is because the sources I am adding to my feed are all personally selected. This is not random news coming from unwanted sources, so I felt it was unnecessary. There may be one or two articles from a source that I want to skip, but the machine learning could just as easily start skipping an article I actually want to read in the future.

That's the risk with keyword-based learning specifically — it works by matching words in an article's title. If I skip one article about, say, Ubuntu that I just wasn't in the mood for, the system doesn't know I only meant that one story. It could start quietly deprioritizing anything else with "Ubuntu" in the title too, including things I'd genuinely want to read. It can't tell "I don't care about this specific article" from "I don't care about this topic ever," and I didn't like the idea of tuxwire silently hiding things from me based on a guess like that.

This is the entire reason I choose to read from RSS feeds and not so much from social media. Curated sources are a far better fit for me personally than some algorithm. I already did the filtering — I chose which sites to follow. Skip-weighting solves a problem that mostly doesn't exist once your sources are trusted, and simply pressing `x` to recolor an article and move on already does the job I actually need it to do.

Initially, auto-discovery was talked about, and I felt it was unnecessary complexity that didn't really need to be there. Pulling from a real RSS feed URL directly, and letting tuxwire validate it by simply trying to parse it, already did exactly what I was trying to do — without adding a whole HTML-scraping system to the codebase just to save myself from typing in the actual feed link.

I thought about trying to implement some form of in-text highlighting but determined that note-taking was already enough, without having to pull text out of an article to change a background color. More unnecessary complication removed from the plan.

## Rust + Claude Code as a Learning Tool

I built this project using Claude Code — this was a test run for me, the first time using an agentic model and seeing how they perform and react. I wanted to use one of these agentic models because I've been in situations before where I'm trying to solve a Linux problem and want to explain what's going on, and have the model go look at my files (within reason) and help solve the problem.

This application was an idea I shared with Claude to see what it would be like to build. I had fully planned to use Python for this project, since it's the only programming language I have any familiarity with, but Claude suggested Rust instead. I said that was fine with me, but when building it, I wanted it heavily documented, so I could read and understand what each segment of code does without being well-versed in Rust.

This is a passion project that's both a tool I'll use daily and a way to educate myself on a new programming language — while also testing the abilities of agentic models.

One thing I didn't expect going in: the documentation standard I set for myself — every function explains why, not just what — turned into something more useful than I planned. Rust ships with a built-in command, `cargo doc --open`, that reads every one of those comments and builds a real, browsable documentation site out of them, the same kind you'd see for any official crate like `tokio` or `ratatui`. Run it, and suddenly my own project has a clickable reference — every module, every function, every design decision I bothered to explain in a comment, organized and searchable instead of buried in source files I'd have to grep through to find again.

That turned out to matter more than I expected for someone learning the language through their own codebase. Instead of just writing code and moving on, every comment I wrote became something I could actually go back and read later — a personal reference built as a side effect of just trying to leave good notes for myself.

## Branching to Protect What Works

While working through this project, I left the main branch as-is while working out the browser issue I mentioned earlier. I made a separate git branch to implement the w3m browser, to see if I would like it that way or if it was a waste of time. It ended up being a great decision, so I merged it into the main branch.

One of the last things I worked on was browser fallback. I thought about having a small window come up letting the user know that w3m would give them the best browsing experience. I came to the conclusion that would get annoying, even if it only displayed on the first launch of the application, so I opted out. Instead, the browser fallback will use the default browser if w3m isn't installed, or if the reader simply chooses not to use w3m. This way, everyone has the freedom of choice. Isn't that why we all use Linux? We don't like options forced on us.

I also felt like this would be the best option for phone use (for now!), as a terminal browser on a phone isn't really feasible.

## F-Droid

So what's next? After I do some more testing and gather feedback on the project to see if there are any bugs that need to be worked out, I'm going to release it into the Arch User Repository and the Fedora COPR repository. I apologize to the Debian users, but there are still options available to install tuxwire on Debian.

After that, tuxwire phase 2: a fully functional Android app. I want to get my hands dirty with Kotlin, so that's the grand finale to this project.

Not the end of the road by any stretch, as I plan to use and maintain this app for a long time and let it grow along the way. That's just the big milestone I'm aiming for as I work on this project.

I recently discovered the open-source F-Droid app store. Putting my application into that store is my new end goal. The F-Droid store is fantastic, by the way — I have some thoughts on that coming soon. I'm writing this post on HeliBoard, which replaced Gboard on my Pixel phone. I'm also writing this article's draft in Markleaf, a markdown editor I found on F-Droid.

## What's Genuinely Different About Tuxwire?

What makes tuxwire different? It's a terminal-based feed reader with built-in notes. I'm only aware of one other terminal-based RSS reader, and it doesn't offer a notes feature like tuxwire does.

The SQLite database behind this allows for history and searching, to help resolve the "I forgot to save that article" problem. This is an added benefit without any overhead, using data that's already being kept.

I'll still find things that need to be changed and updated over time, I'm sure. And if there's something I find that could be beneficial that I haven't thought of yet, I'll be happy to add it. This is still a growing project.

This is a project that I am pretty happy with. Not only to use, but to share.

Please give it a try, and if you do, reach out to me via one of the methods on my contact page and let me know what you think.

Thank you for reading.

Until next time.

-Shane
