---
title: "Niri, AMD, and a Suspend Bug That Sent Me Back to Hyprland"
date: "2026-09-12T00:00:00.000Z"
categories:
  - "technology"
  - "linux"
  - "3d-printing"
tags:
  - "niri"
  - "hyprland"
  - "amd"
  - "cachyos"
slug: "niri-wm-and-problems-with-amd-gpus"
draft: true
---

I recently built a new computer. I had some components in my older system that I wanted to upgrade, so I got those. I only needed a few more parts to build a brand new PC, so that's what I decided to do.

I had an AM4 system that I am going to convert into a server over the next few months, but I still need to find a few more parts to make that happen.

After building this computer, I installed my OS of choice, which is CachyOS. I had been daily driving CachyOS for a while now on my old system, but I wanted to try a new window manager I had been testing a little in the background. This window manager is the Niri scrolling window manager with the Noctalia shell.

This OS is fantastic, and Niri is as well, but I ran into a problem with a piece of software that pulled me away from using Niri full-time. Otherwise, I would still be running it today and probably would continue to do so for a long time. I switched back to Hyprland, though, and the problem I was having doesn't occur there.

One of my main hobbies outside of computers, if not my primary one, is 3D printing. I own three Prusa printers: an MK4S, a CoreONE+, and a CoreONEL, the last of which I picked up a few months ago. I use them all the time — making things for friends, fixing things around the house, making stuff for my kids, a little bit of everything.

If you have ever done any 3D printing, you know it is not the fastest process. Printers have come a long way, but prints still often take several hours, sometimes longer, especially for someone like me who prefers detail over speed. I was in the middle of a multi-part print, and I had three or four build plates worth of parts that I needed to print for a project. My goal was to start the first one, wait for it to complete, then come back and get the second one started, and so on. That was not an issue at all. While doing so, I noticed that PrusaSlicer would close after I woke my computer up from suspend. I would open it back up, change my settings back to what I was using for this project, and get the next build plate printing. This happened again once the second build plate finished, and I wanted to know what was going on.

I don't often change much, but depending on the brand and material I'm printing with, I do have to make some changes. Often it is the infill percentage, supports, number of perimeters, top and bottom layers, and possibly even the temperature of the hotend or the bed, and in rare situations, the extrusion multiplier. Changing all of this every time I woke my computer up was getting annoying, so I decided to figure out what the issue was.

I had recently started using Claude, and I used this as a test to see how Claude Code performed — up to that point, I had only used Google's Gemini. I was interested in trying an agentic model, so I used this as a chance to try one out while solving the issue.

