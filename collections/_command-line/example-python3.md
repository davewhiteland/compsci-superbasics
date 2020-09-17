---
title: Example — python3
layout: topic
---

Python is a programming language, but your computer doesn't _natively_ understand Python. Instead it has a program (called the Python interpreter) that does. So when you want to run talk some Python, you need to type the name of that program.

For example if you type `python3` on the command line two things might happen:

* if your computer can't find the `python3` program, it will fail (and return to the prompt)

* if you computer can find it, it will run the `python3` program:

This looks like this:

    >>>

That program is now waiting for you to type Python. (See how the prompt is different from the command line's prompt?).

You can't issue commands on your command line until you _exit_ that program, and get back to the command prompt. Anything you type now is interpreted as Python.

For example, if you type `pwd` (that was the "print working directory" command you used before), it won't work:

    >>> pwd
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'pwd' is not defined
    >>> 

What's happened there is Python — not your command interpreter — has tried to understand you command. Python thinks you're refering to something with the name `pwd` but in Python you
must declare things before you use their name.

One way to exit that situation is to type the Python command `quit`:

    >>> quit()

Than the python3 program finishes, and _then_ control passes back to your command line interpreter, and the prompt re-appears.