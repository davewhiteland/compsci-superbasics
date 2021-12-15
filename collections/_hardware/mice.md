---
title: Mice
layout: topic
order: 106
---

A mouse is a pointing device — it allows you to indicate a target (actually in
terms of the coordinate position on the display) and an action by clicking.

### Mouse connected by a cable

The cable provides a route for the power supply, and the signals indicating
the movements and actions you've made with the mouse. Mice that connect using
[USB]({{ site.baseurl }}/hardware/usb) are common.

If your computer uses a dedicated mouse port (PS/2), by convention it will
be coloured green. 

> If your cable mouse isn't working, check that the cable is connected
> _at both ends_. 

### Wireless mouse

This must have a its own power (typically AA or AAA batteries).
Some mice have a small light indicating that the power is on, and
sometimes there is a small switch too.

The power supply of a wireless mouse drives the transmission of data to the
computer (typically using [Bluetooth]({{ site.baseurl }}/hardware/wifi-and-bluetooth)).
When the batteries start to run out, the signal will be weaker, and the range
will decrease until it can no longer connect.

> If your wireless mouse isn't working, check that it is switched on, and
> that it has batteries that have not run out. You might require a
> [dongle]({{ site.baseurl }}/hardware/dongles) to be connected to the
> computer.

### Actions performed by mouse

Most mice support different types of action:

* left click (the "default" click)
* right click
* double click
* drag

See also [modifier keys]({{ site.baseurl }}/keyboard/modifier-keys),
which make more actions possible.

## Mouse events

In programming, you can respond to mouse actions using _event listeners_.
These are functions that are executed when the mouse reports specific actions
as they happen.

For example, if you use JavaScript to program how a web page reacts to the
mouse, you can use events like these:

* `click`
* `dblclick` (double click)
* `mousedown` (the mouse button is pressed down)
* `mouseup` (the mouse button is released)
* `mousemove` (the mouse has changed position)
* `mouseenter` (the pointer has entered the boundary of an element)
* `mouseout` (the pointer has left the boundary of an element)

Note how some of these are components of the others. Dragging can be detected
by the position (`x` and `y` coordinates) of the mouse changing between
`mousedown` and `mouseup` events, which would also trigger a `mousemove`
event.

Some mice have a scrollwheel too. These generate separate events.

Writing programs that respond to interface events such as these is called
_event-driven programming_ and has some unique challenges.



