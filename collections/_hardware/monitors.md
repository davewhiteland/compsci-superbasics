---
title: Monitors
layout: topic
order: 102
---

A **computer monitor** is a screen which displays information. Technically the monitor is the whole assembly including the screen, the circuitry that drives it, and sometimes the stand or mounting that holds it up.

It's not unusual for a computer to be connected to more than one monitor.

Monitors are usually either built-in (such as on laptops, or machines
where the screen and processor is in the same unit) or receive the data to display via a specialised graphics
[cable]({{ site.baseurl }}/hardware/connections).

Monitors typically require their own power supply too, which is provided by a
separate power cable.

> Note that monitors often have their own "on/off" button, so if the screen
> is blank, check that it's switched on (as well as the computer it's connected
> to).

### Pixels and resolution

The monitor screen is comprised of tightly-packed dots, arranged in a grid,
whose colours can be individually set. These dots are called _pixels_ and
are usually implemented as tiny liquid crystals in front of a backlit 
light-emitting diode (LED) screen. The number (or, more accurately, the density)
of those pixels is the display's _resolution_.

High-resolution screens whose pixels are too small to be individually
distinguished by the human eye are called _retina displays_.


### Aspect ratio & orientation

![comparison of aspect ratios]({{ site.baseurl }}/images/display-aspect-ratios.svg)

The relative dimensions of the display — the width:height ratio — is its
_aspect ratio_. This is independent of the resolution. There are different
ratios available but 16:9 is common. It's also possible to get ultra-wide
screens.

![examples of landscape and portrait orientation]({{ site.baseurl }}/images/display-orientation.svg)

Most monitors are viewed in _landscape_ orientation, which means the display is
wider than it is tall. _Portrait_ orientation is taller than it is wide.

### Refresh rate

The monitor refreshes its display many times a second. The actual speed is
called its _refresh rate_. Most computer monitors aim to "paint" the whole
screen up to 60 times a second (this is considerably faster than earlier TV or
cinema technology). Refreshing the screen display requires that the monitor
determines the precise colour for every single pixel. Calculating this is an
intensive task (especially if there are millions of pixels), which is why
today's monitors have their own dedicated
[graphics processing units]({{ site.baseurl }}/hardware/gpu) (GPUs).


### Video cables

There are a number of different types of
[video cable]({{ site.baseurl }}/hardware/connections). If you need to connect
a computer to a monitor, you need to know what kind of connectors each has in
order to choose a cable that will work between them.

### Computers without monitors?

Monitors are an essential component for desktop or laptop computers. But not
all computers need them all the time: remote servers (such as as webservers)
that spend all their time responding to requests from other computers, or
embedded devices operate without them. Examples include robotic controllers,
the SIM in your phone, an engine management system, or the chip on a credit
card.
