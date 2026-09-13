---
title: "The Home Server Journey Begins"
date: "2026-09-12T00:00:00.000Z"
categories:
  - "technology"
  - "linux"
tags:
  - "homelab"
  - "self-hosting"
  - "proxmox"
slug: "the-home-server-journey-begins"
draft: false
---

I got my hardware moved into the new case. The home server is live! I'm still waiting on some drives, but I've started getting services up and running. This is going to be a learning process — hopefully a beneficial one.
This isn't my first home server, but it's my first one that isn't a single-board computer. Nothing wrong with Raspberry Pis or Zimaboards — I still use and support both. In fact, the Zimaboard 832 that used to be my Proxmox server is getting a new job as my Proxmox Backup Server.
My roadmap has already changed, and it'll keep changing as I go — I'll probably write about that along the way. Case in point: one of the apps I've already got running might get replaced, or paired with something else.
The apps in question are Linkwarden and Readeck. Their functions overlap, but I might end up running both. Linkwarden is set up and working — I plan to use it as a full-scale bookmark manager. Readeck, on the other hand, strips articles down to a distraction-free reading view, which sounds great for someone who struggles to focus like I do.
Honestly, I originally thought Linkwarden alone would cover article management too. But I need both. It's not unusual for me to have 25 tabs open in Zen Browser, all articles I'll "read eventually." Same story on my phone — 22 tabs open in Firefox, mostly articles.
Another new addition is Navidrome. I stream most of my music, but there's a chunk I own that isn't on any streaming service — a tribute album I can't find on Apple Music or Spotify, plus some other local stuff. Might as well have somewhere to play it. I may even discover I already own most of what I listen to and can drop streaming altogether.
I also added Jellystat — nothing exciting, just fun to track, and it's light enough on resources that there's no reason not to. And Uptime Kuma, which gives me a simple up/down status for my containers. I've got my eye on a couple of more in-depth monitoring tools too, just haven't set those up yet.
I just got the renewal notice for Todoist — it's been a great service, and it was my saving grace when I switched from Apple to Android (I still lean on Apple Reminders more than anything else on my iPhone). But that renewal isn't happening. NextCloud already has task lists built in, so there's no reason to pay for a redundant service. I'm not against paying for software — I've had a Proxmox enterprise license for years — but paying for a feature I'm already self-hosting doesn't make sense.
Same logic applies to NextCloud Notes. About a month ago I spent a full Saturday setting up ntfy on my old Proxmox server, and it's still genuinely useful — but the note-sending feature I built it for has now been replaced by NextCloud Notes, which lets me jot something on my phone and have it show up on my computer's dashboard, ready to copy and paste.
ntfy isn't going anywhere, though. I've got Watchtower baked into every Docker Compose file except NextCloud (which manages itself), and Watchtower pings me through ntfy whenever a container has an update. From there it's just docker compose up -d.
That's enough of a home server update for now. This post jumped around a bit, but it covers the start of the journey — the decisions so far and the thinking behind them.
I like mixing in life updates with the technical stuff. These posts are fun to write — basically journaling out loud.
I don't have a huge audience, but if you're reading this and want to say hi, reach out through one of the contact links — I'd genuinely like to hear what you think. I tried comments back when this site ran on WordPress, and as you'd expect, every single one was spam, unrelated to the content. Turned that off fast.
There will be more of these as time goes on — I'm trying to be more consistent with posts like this than with the purely technical ones.
If you're still here, thank you for reading.
Until next time.
—Shane
