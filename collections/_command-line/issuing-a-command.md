---
title: Issuing a command
layout: topic
order: 107
---

If you type a command and press enter:

* the command line interpreter checks to see if it's a command it knows
* if it is, it runs the command
* if it isn't, it looks to see if it can find a program with that name that it can run instead
* if it can't, it does nothing (that's also what happens when you just press enter)

When it's finished — the command has run, or the program finishes what it was
doing — the computer throws up a new prompt for you.

For example, in Unix there is a `sleep` command:

    sleep 2
    
This tells the command interpreter to sleep for 2 seconds. When you press
enter, nothing appears to happen (it's sleeping). Two seconds later, it's
finished: the sleep command has run to completion, and a new prompt appears.

Every command has a name. To run that command you type its name. Remember that
just typing it on the command line doesn't do anything: the command line
interpreter won't do anything with it until you press enter.

So, to run a command, type its name and press enter.