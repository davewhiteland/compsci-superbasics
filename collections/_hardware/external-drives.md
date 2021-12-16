---
title: External drives
layout: topic
order: 112
---

Your computer has its own storage where files are saved. But _external storage_
is also possible.

A simple example is a [USB]({{ site.baseurl }}/hardware/usb) memory stick.
When you connect it to your machine, the operating system _mounts_ it and
makes it available as a [volume]({{ site.baseurl }}/files/volumes) on the
file system. The convenience of the memory stick is that it's an easy way to
transfer files from one machine to another (provided you have physical access
to both).

Other devices may work the same way, including read-only devices like optical
disks.

USB is not the only way to connect external storage devices to your computer.
The _thunderbolt_ protocol, from Intel, is suitable for fast exchange of data
and can connect physically using a USB, lightning or display ports.
(Incidentally, this is why _display port_ is not always a video connection.)


### Network-attached storage (NAS)

If your computer is connected to the local network (whether by 
[Ethernet]({{ site.baseurl }}/hardware/connections) or
[WiFi]({{ site.baseurl }}/hardware/wifi-and-bluetooth)) it's also possible
to access storage devices that are attached to that, instead of your computer.

These are often useful as backup devices. For example, you might configure your
computer to copy its files onto the NAS overnight whenever it is connected to
the network. The advantage of a NAS backup is that your backup is made
conveniently and separately from the computer itself.

Note that NAS devices are not the same as storage in "the cloud". That is
external storage on the internet, not the local network (although there are
ways to mount such remote stores so they appear to be local volumes).


### Disconnecting

Unlike built-in storage, remember that external devices can be disconnected too.

In general, it's good practice to never disconnect a mounted drive _suddenly_.
You should choose to **eject** it first, within the operating system. This
gives your computer the opportunity to manage any open connections neatly,
rather than them abruptly disappearing.


