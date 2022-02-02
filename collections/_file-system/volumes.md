---
title: Volumes
layout: topic
order: 116
---

The idea that root is at the top of the file structure is true for a single
disk, but what happens if you add another disk to your system? Each disk has
its own directory structure, so each disk has its own root.

When describing file systems, disks are called _volumes_. This is because not
all storage devices (that is, volumes of data) are disks: they might be USB
sticks, DVD drives, storage on the network, or even (common in the 1970s and
80s) tape drives.

* Adding a new volume to a file system is called _mounting_ it.

* Removing a volume is _unmounting_ it.

### Volumes on Unix

On Unix systems, mounted volumes appear as directories _within_ the root of your
main system. The place when the files appear is called the _mount point_. The
directory structure of that volume appears — just like the other directory
trees — as subdirectories of that mount point. The mount point is effectively
the root of that volume.

Mount points are conventionally stored in either the `/mnt` or `/media`
directories of the system they've been mounted on.

The Unix `mount` and `unmount` commands are used to do this — in normal
operation you probably won't need to do this because it's done by the system
administrators. If you're running Unix on your own laptop (or a Mac) then the
chances are the operating system will automatically do this for you when it
detects you've plugged in a new storage device (such as a USB stick).


### Volumes on Windows

Windows does things differently, and doesn't mount volumes in this way. Instead
it uses drive letters, followed by a colon (`:`). The main drive is
conventionally called `C:`.

Other volumes each have a different drive letter.

This means that you need to explicitly specify drive letters when referencing
other volumes on Windows; they are present as discrete file systems. On Unix
everything is presented as a single file system.
