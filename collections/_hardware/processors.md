---
title: Processors
layout: topic
order: 103
---

The processor is the circuitry responsible for running the computer: ultimately
it's where the programs that you run are executed.

Although the circuits you can most easily see are _printed circuit boards_,
processors are implemented as _integrated circuits_. Instead of circuits made
of wire, the electricity flows along tiny etched channels in a semiconductor
chip.

It's not uncommon for computers to have more than one processor on a single
chip: these are called _multicore_ processors, and the number of cores is the
number of processors.

Processors are, by necessity, immensely complex devices but there are a few
of critical aspects that define their behaviour.

Because processors are performing millions of calculations to execute tasks, the
speed of a processor is a critically important feature. However, the efficiency
of the processor (and hence, ultimately, its speed) is dependent on a number of
different factors.

* word size
* clock rate
* instruction set

There are other important factors too, including dedicated caches and
parallelism.

### Word size

The _word size_ is the size, in binary digits, of the numbers that the
processor's arithmetic circuits can handle. These are binary digits, called
_bits_, because in practice the numbers are being represented by the presence
(1) or absence (0) of charge.

This is a critical limit because those numbers effectively limit the size of
of the memory the processor can efficiently access.

Today, 64-bit machines are common.

Note that architectures with smaller word sizes _can_ process bigger numbers,
but less efficiently. The complexity of processors — and hence the difficulty
of designing and implementing them — increases as their word size increases.

### Clock rate

The clock rate is effectively the speed of the processor's "heartbeat", roughly
a measure of how fast it's running. This alone doesn't tell you how fast it can
work, because that depends on the other factors including how powerful a
single instruction can be, and what optimisations (like caches) are built-in.

### Instruction set

The _instruction set_ is the collection of all the instructions that the
processor can execute. This is "close to the metal" because every instruction
effectively requires circuitry for running it, on the chip. So the design of
instruction sets is a balance between having a large set of complex,
expressive instructions or a small, set of simple, fast ones. The extremes of
these two approaches are sometimes described as
_complex instruction set computers_ (CISC) and 
_reduced instruction set computers_ (RISC) respectively.

 having a lot of powerful commands that
might take longer to run and are more complex to design (and maybe even take up
valuable space on the chip), and having a
fast cut-down collection of basic instructions that can run very fast.

## Programmers and the processor

When you first learn to write programs, you do so in _high level languages_
which another program (a compiler or interpreter) turns into commands that
match the processor's instruction set. That is, the translation into _machine
code__ is done for you. It's common for professional programmers to only ever
work with high level languages.

In industrial applications where optimal efficiency is required, programmers
may need to write in _low level_ languages. This is where knowing how to
exploit the characteristics of the processor on which the program will run
(the "target device") becomes a consideration.

