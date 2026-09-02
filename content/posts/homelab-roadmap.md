---
title: "My Homelab Roadmap"
date: "2026-09-02T00:00:00.000Z"
categories:
  - "technology"
  - "linux"
tags:
  - "homelab"
  - "proxmox"
  - "self-hosting"
slug: "homelab-roadmap"
draft: false
---

After building my new PC, I had my old AM4 build sitting under my desk. I had plans for it but wasn't quite sure what that would come to. Ultimately I made the decision to use that as my new home server and get rid of the multiple smaller devices and external hard drives I have plugged in.

This is the first post in what's going to be a series documenting that build — from planning through however many mistakes I make along the way. Consider this the "why" post. The "what actually happened" posts will follow as I go.

## Where do I even start?

I have all the hardware here, with the exception of storage media — the expensive part. This PC is an AM4 system with an MSI X570 ACE MAX motherboard, an AMD Ryzen 9 5950X, 64GB of RAM, and an AMD Radeon RX 6900 XT.

Some people may ask, with that setup, why did I even bother upgrading in the first place. I ask myself that question too. Ultimately I found myself liking a new case, and buying a few parts here and there, and I ended up just a few parts away from a complete build anyway.

There's still a lot of life left in this old hardware, so I migrated it out of its current case into a Fractal Design Meshify 2 XL — the biggest PC case I've ever seen.

I was initially going to go with one of the smaller square cases and build a dedicated NAS, because my current setup isn't redundant, and if something happened, I'd lose a lot of important data. That's where the plan changed direction. Instead of just a NAS, I decided to build a full home server. Once I made that call, the hard questions started coming in.

What OS should I use? How do I manage the disks? Can I add more disks later — because who can afford to buy the 18 drives this case supports right out of the gate? What services do I actually want to run? How do I set those up? What monitoring do I want? The list goes on.

## Choosing the OS

For the hypervisor, I went with the undefeated champion: Proxmox VE. I'm already familiar with it, I've been running it for years, and I even have an enterprise license I can migrate over from my current host in a matter of minutes. Not a hard choice.

The storage OS took more thought. I currently use OpenMediaVault, which has been outstanding — it sits on top of a base Debian install and just works, and it's never failed me. But ZFS is a second-class citizen on OMV, and it's rarely even mentioned in that context. Most people talk about TrueNAS Scale or Unraid instead.

I talked this through with Claude before landing on a decision, and I ended up going with TrueNAS Scale, mainly because of how much better its ZFS support and tooling are compared to OMV. I'm planning to start with 6×12TB drives in a RAIDZ2 configuration for parity. If my math is right, that leaves roughly 48TB usable, with the other 24TB going to parity — enough to survive two drive failures before losing data. Redundancy. Love it.

The plan is to start with that initial pool, use it for what I need, and add a second pool later once it fills up, rather than trying to buy everything up front. I'm also planning to add an HBA down the line for expansion, but that's on hold for now — partly because of drive costs, and partly because I still need to confirm one will physically fit once this GPU is in place. One problem at a time.

Each pool will have datasets underneath it — movies/TV, music, images, files — structured so other services can access them cleanly.

## What's actually going to run on this thing

**Jellyfin** is the big one. I have a large collection of movies I've digitized over the years, sitting on a hard drive so my kids can watch them when they want. That service is non-negotiable.

A lot of the rest is new territory for me — this is where the learning happens.

I want **photo backup** running locally. I already use Google Drive and iCloud, but redundancy means having a second copy at home, accessible without the internet. In the same spirit, I'm setting up **NextCloud** to replace some of what I currently use Google Drive for, since the integration with my computer has never quite clicked, and I'd rather have that running on my own hardware.

I'm also planning to self-host **music**, **audiobooks**, and **ebooks**. I use Spotify day to day, but I have local music that isn't available anywhere else — including small local bands and a tribute album I ripped years ago that I've never seen on a streaming service. Same idea with audiobooks and ebooks: I want my collection (including old college textbooks and a pile of Humble Bundle ebooks) available to my family, internet or not.

On the more infrastructure-y side: I already self-host **ntfy** for push notifications — things like alerting myself when a long-running task on my computer finishes, or when Claude Code wraps up a task. I'm also working on a script for my laptop and Steam Deck that'll notify me when the battery gets low. Not as critical on the laptop since the battery icon is always visible, but I've definitely paused a game on the Deck and come back to 10% more than once.

Once all of this is running — Tuxwire, this blog, everything else — I want proper **automated backups** instead of the manual, occasional backups I do now. Being able to add drives as I go is part of why that matters; backups eat space fast.

I'm also planning to run **Syncthing** for a project folder, so I can work from my laptop outside the office and have things sync automatically without needing both devices manually online at the same time. Might look into self-hosting git repos eventually too — haven't decided yet.

## And, of course, gaming

A few things here purely for fun. I'd like to set up something like RetroArch for a handful of SNES games I used to rent as a kid — some of them are technically abandonware at this point, and it'd be fun to show my kids what games looked like when I was their age.

I also want to run a **Minecraft server** for my oldest son and me to play together, with friends and cousins if their parents are on board — better than him playing with strangers on a random public server. Along the same lines, a modded **Stardew Valley server**, since a coworker's been telling me about some mods worth trying, away from my normal save.

Last one: if it's feasible, a **Windows VM** for the handful of sim racing league events that require games without Linux support. I'd rather not do this, but if I want to join those events, it may be necessary. Whether it plays nicely with my sim rig is untested — results will probably vary by game, but I'll find out.

## Where this leaves things

All of this ended up pointing toward a full home server rather than a simple NAS. Right now I have the hardware and two external drives holding some of this data in the meantime — putting the actual pieces together is the challenge ahead, and this post is just the plan.

Next up will be the actual build — TrueNAS Scale install, pool creation, and getting the first few services running. This isn't the start of my homelab, just the next chapter.

Thanks for reading.

Until next time.

—Shane
