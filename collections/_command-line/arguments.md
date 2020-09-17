---
title: Arguments
layout: topic
order: 113
---

The arguments or parameters are extra information you are passing into the
command. Use spaces to separate commands from the argument.

   python3 hello.py

This runs the program "python3" with the argument "hello.py"

If you leave the space out and type

   python3hello.py

...the computer will look for a command called `python3hello`. You must use
spaces as separators on the command line.

To rename the file `apple.txt` to `banana.txt`, use the `mv` (move) command:

   mv apple.txt banana.txt

The command is `mv`, the first argument is `apple.txt` and the second argument
i `banana.txt`.

If you have a file called `I am a file.txt` you have a problem:

   mv I am a file.txt banana.txt

...because your computer will try to rename the file called `I` — and that file
probably doesn't exist. You can fix this either using quotation marks or by
"escaping" the space:

   mv "I am a file.txt" banana.txt

If you're going to study computer science, make you life easier and never put
spaces (or other special characters) into filenames. Of course you _can_ put
fancy things into your filenames, but you can avoid a world of pain by sticking
to numbers, lowercase letters, hypehn (`-`), underscore (`_`) and dot (`.`).
For similar reasons, it's usually simpler to keep everything lower case. For
more detail, see the intro about file systems.

Sometimes you _must_ use capital letters in filenames: if there's a good reason
(because the programming language you are using requires it) then of course,
that's what you do.
