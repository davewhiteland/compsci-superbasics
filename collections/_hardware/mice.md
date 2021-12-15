---
title: Mice
layout: topic
order: 106
---

A mouse is a pointing device — it allows you to indicate a target (actually in
terms of the coordinate position on the display) and an action by clicking.

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



