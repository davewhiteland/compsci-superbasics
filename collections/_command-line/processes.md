---
title: Processes (or getting control back)
layout: topic
order: 122
---

When describing the command line, we've talked about the program finishing, and
_then_ you getting the prompt back. That means you can't type any more commands
until the command you issued has finished running.

Sometimes you want to set a command running, or launch a program, and then
continue with the next command.

You can do this by running the command as a _new process_. On Unix, add a `&`
on the end of the line.

The ampersand tells the command line to detach the command from the current
process (which is running your command line) and run it in its own process.

This is common on our Unix system when you launch the editor (e.g., `kate`).

    kate &

If you don't add an ampersand, you'll see the command window is not listening
to your typing... until you kill Kate's window.
