---
title: Commands can be powerful
layout: topic
order: 120
---


On some computers, the commands you issue on the command line are effectively _system_ commands. 
This is different from some of the things you normally do through the graphical interface.

For example, if you delete a file by right-clicking on its icon on, it typically gets moved into Trash (so you can undo, and get it back). 

But if you issue the delete command:

    rm myfile.txt
    
That simply deletes the file, and it will be harder to recover: no undo, no "moved to trash".

It's the same for Windows `del` command:

    del myfile.txt

Be careful.
