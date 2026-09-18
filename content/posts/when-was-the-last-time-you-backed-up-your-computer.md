---
title: "When Was the Last Time You Backed Up Your Computer?"
date: "2026-09-18T00:00:00.000Z"
categories:
  - "technology"
  - "linux"
tags:
  - "homelab"
  - "self-hosting"
  - "proxmox"
  - "backups"
slug: "when-was-the-last-time-you-backed-up-your-computer"
draft: false
---

When was the last time you backed up your computer? Most people don't even think about backups until they are needed, and by then, it might be too late.

I am going to call myself out here and say that my backup strategy was beyond terrible. If I felt like I had made enough changes to files on my drive, about once every 3 or 4 months, I'd pull out an external drive and copy my home directory over to it. There was zero naming consistency when doing this, so I couldn't begin to tell you which backup was current. Lucky for me, I have never had any real issues with that...until last weekend.

If you have read any of my other recent articles, you will know that I am redoing my homelab. I am self-hosting a lot of services in LXCs in Proxmox. Last Friday night, I was working on this stuff late for about 3 hours. While working, I was taking notes about these containers in Obsidian. I would make a note of the hardware for each container and the IP address I set for it as a quick way to look at this later and see the hardware information for any of these containers.

On Saturday, I needed to look at something, so I looked at the note on my phone and saw that I hadn't been updating it for quite a while. I pay for Obsidian Sync, so this should be done in the background. I began investigating why my phone wasn't syncing.

Somehow, my Obsidian vault had copied itself into itself and caused some kind of sync loop in the cloud, hence it not correctly syncing to my phone. Not sure how that happened, but it needed to be fixed. I stopped the sync and began to create a safe copy of my vault to get this problem solved. In doing so, I managed to delete the current note in my vault that had this information about my containers.

While this isn't a huge deal, this data can be gathered again and collected the same way I did before and put in a note just like before. It may just take a bit of work. I had a thought: "What if this data was not so easily recoverable? What would you do?"

It was at this moment that I decided I needed to get a backup plan set up and running. What did I do? I did what any person would do when they aren't sure which direction to go. I asked Claude.

Claude recommended that I use Restic. It is a terminal-based backup utility that uses deduplication, so it doesn't eat away at all of your disk space.

I got this set up on my computer and running fairly easily. I created the repository on a secondary drive and set up a scheduler to run a backup every 24 hours. Restic checks for changes since the previous backup and only adds the data that has changed to the repository. I also have it periodically run a check of the repository to make sure everything is stored correctly.

This is better than nothing, but what would I do if my computer were ever destroyed in a fire or hurricane, or if it gets stolen? All of my data is on that one computer. So the only thing I am able to recover from is drive failure. My next step in this process is to research offsite backups and figure out a method for backing up offsite.

That is my PC covered, but what about my server? I currently have containers in the double digits and a few VMs that have taken me several hours to set up and get running. If I were to lose these, it would be tough to deal with. What was my solution? Proxmox Backup Server.

Proxmox Backup Server works in a similar way to Restic in that it uses deduplication and sends only the data that has changed since the previous backup. Each backup still represents the complete state of my containers, while the deduplication keeps the amount of storage required much lower. I've watched several videos this week about Proxmox Backup Server, and many people say it does an outstanding job. There is hardly any wasted space compared to the amount of data I actually have backed up. That's great news! I have a Zimaboard, which was my old Proxmox server before I built the new one, sitting here not doing anything at all. It also has 10 TB of drive space attached to it. I can't think of a better job for it.

I got this set up and went through a backup and a test restore, and then scheduled the backups and pruning so my drive space doesn't get wiped out as quickly. I also have it set to send me an email if any failures occur, so I know right away if something goes wrong.

This is something that I should have been doing for a long time now. So far, I have been lucky, but that could change at any minute. At least now I have the start of a backup system in place. I need to get an offsite backup solution in place next.

Don't be like me and lose your data! Set up a backup system! Now I am at least protected from drive failure until I get something set up away from my house.

Thank you for reading.

Until next time.

-Shane