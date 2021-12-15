---
title: Trackpads & touch screens
layout: topic
order: 107
---

A trackpad, like a [mouse]({{ site.baseurl }}/hardware/mice), is a
_pointing device_. Specifically, it's a way of moving a pointer around on the
display. When you click on the trackpad, the computer uses the position (`x`,
`y`) on the screen to determine which element on the screen you're trying to
interact with.

Often you can use two or three fingers on a trackpad to indicate you want a
different effect from just using one.

### Why wet fingers won't work

There's more than one way the position of your finger (or fingers) is being
detected, but a common mechanism uses _capacitance_. The pad or screen is
sandwiched between two conductive layers. When you bring your finger close
enough it affects the capacitance in that location enough to be
detected.

This is why other materials between your finger and the screen (such
as rain drops on your mobile phone screen) mess this up. Similarly, tapping
with a pen won't have the same conductive effect as your finger. These
things interfere with the conductive characteristics the surface is trying to
detect.


### Programming touch devices

Like mice, trackpads and touch screens generate events that you can respond to
if you're programming interface behaviour.

Trackpads provide similar capabilities to mice, with the extra consideration
of using multiple fingers.

But there is a significant difference with touch screens. Touch screens
generally don't move a pointer around, but so there's no `hover` or similar
behaviour. Interfaces that change button colour when you mouse over them, or
have tool tips on hover, usually won't work the same way.

The JavaScript web API has a `Touch` interface. The `Pointer` interface applies
to both mouse and touch events.

