---
title: "From Buster to Bookwork: Updating Debian"
date: "2024-04-20T00:56:08.000Z"
categories: 
  - "linux"
slug: "from-buster-to-bookwork-updating-debian"
---

Recently while updating my Raspberry Pi that I use for a simple home server, I broke something for the first time ever using Linux. My Raspberry Pi is running Rasbian Lite and I use it for Open Media Vault and Jellyfin. I was using Plex Media Server, but I switched to Jellyfin recently to try something new.

I set this up several years ago while in the process of looking for a NAS to use to easily share and move files between my computers. I was initially going to go with a well known companies NAS device but the cost was outrageous. Additionally, I like the fact that I can setup something on my own.

I watched two YouTube videos while doing this the first time and it helped simply things considering at that time I had never done anything like this. The videos I watched were setting up a NAS using a Raspberry Pi by both NetworkChuck, and LearnLinuxTV. If you are even remotely interested in IT and Linux content and you don’t already follow those channels, Id recommend that you do so.

The bulk of my setup was following NetworkChuck’s video and a few things that he went over quickly I used LearnLinuxTV’s video to fill in the gaps. That is the reason why I installed Plex Media Server. Now that I am more familiar with all of this stuff and similar services from other companies, I switched to Jellyfin because it is open source. That should not be a surprise to you if you know me at all.

Anyway, I have been using SSH to access my Pi a lot lately, creating new directories to use on the very large external drive that I am using for Jellyfin. And in doing so, I ran my update script on it and I was getting an error about Debian Buster Back ports.

I honestly had not realized that I had set this server up that long ago that two new versions of Debian have been released since. That is saying something! Anyway, I got an error about the back ports and read that the web link in the /etc/apt/sources.list.d file for Open Media Vault needed to be changed to archive.debian.org.

After I updated that URL, the error message went away but now I was getting a message about missing keys. I read a little bit trying to find a solution to adding the keys again but ultimately, This version of Rasbian was several years old, I should probably update it to Bookworm.

The only problem with that was how difficult is it to add my current drives to that setup without reformatting them. But why not? What I had was a bit of a mess anyway. I powered down the Pi and installed the new version of Lite. Once that was done and I made the IP address reservation, I installed Open Media Vault.

The new web interface of Open Media Vault looks so much better than it did before. It took a bit of trial and error getting everything setup and functioning as it should but I enjoy that more than anything in this field.

I went through the process of adding the file systems and mounting the drives. Then setting up the shared folders. Then I had to setup NFS and SMB for use on Linux and Windows. I had all of that setup and I could see my shared folders on my desktop computer but I could not access them. I forgot to create an account for that. Once that was done I was able to access my files.

That process was not nearly as bad as I thought it was going to be. I had maybe an hour and a half in this process. Quite a bit of that was running the Open Media Vault script. Then I setup Jellyfin again and that is something that I literally did last weekend while migrating so it was fresh.

I finally have all of that setup so I can transfer files between my computers and the big media drive that I can combine all of my media from every drive in all of my computers and several external drives as well. I am migrating all of my stuff to the one large drive temporarily so it is all in one place.

I realize that I need to setup a RAID for all of this in the event that this drive fails, I do not lose all of my data. This is a new drive that I first plugged in last weekend so it should have quite a bit of life left in it but I do not want to take any chances.

I have spent a great deal of time working on all of these files and migrating and naming everything so it is clean and neat and sorted so it can be easily found. I do not want to lose everything because of a drive failure. I could go with the NAS that is already setup and just add my drives but I want to build something for that process as well. I was once looking at getting an old Dell Workstation that had 4 hard drive bays in it that I was going to put 8TB drives in or something similar. Once I have that setup I will setup a RAID 5 or something similar.

I also want a pretty decent GPU in that computer so I can use it to pass through to virtual machines. Id ultimately like to have a Windows virtual machine setup in Proxmox or something rather than having a full Windows machine that is powered off most of the time. All I really need Windows for is for signing PDFs in Adobe for work, and using Global Protect to connect to my computer at work if I need to.

I need the GPU pass through for using Fusion 360. I have not even started looking at using that software or even started my class on it but I will get there at some point. I should also learn Blender so I can use free and open source software for 3D modeling for my 3D printing hobby but it is not the same based on what I hear. There are add-ins for Blender that allow it to do parametric designs better but the community built around Fusion 360 is great and I at least want to give that a try since it is mostly free.

There are a lot of other things that I can learn while having a Proxmox machine setup to host them. There is nothing stopping me from doing it now but having your storage space connected via USB is not ideal. I will get there at some point.

Until then, please stick around for the ride.

Thank you for reading, until next time!
