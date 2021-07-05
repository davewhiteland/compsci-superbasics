---
title: Characters
layout: topic
order: 104
---

A character is a single letter, or number, or space, or symbol.

A text file contains nothing but a series of numbers, where each number
represents a character. The number is the _character code_, which is a mapping
(for example, `65` for `A`, `66` for `B`).

To decode the numbers in a text file, you must know the mappings between those
numbers and the characters they represent. Today there is effectively one 
standard code for this, called [Unicode]({{ site.baseurl }}/text-files/unicode).
The first 126 characters in that code are very common and, historically, were
defined first as the [ASCII]({{ site.baseurl }}/text-files/ascii) code.

Some characters have special "non-printable" meanings and represent something
other than a shape you can see: these are called 
[control characters]({{ site.baseurl }}/text-files/control-chars).


### Accessing character codes programmatically

Most general programming languages let you access a character's underlying
character code. 

### In Python

In Python, use the `ord()` function:

```python
letter = "A"
ord(letter)   # => 65
```

### In Java

In Java, the underlying value of the primitive type `char` is its character code.
So casting it explicitly as an integer will give that code. For example:

```java
char letter  = 'A';
int char_code = letter;   // => 65
```

### In JavaScript

In JavaScript, use string's `charCodeAt()` with the index of the character
within the string (but for full Unicode support, use `codePointAt()` instead
because `charCodeAt()` is only good for codes up to 65536):

```javascript
let letters = "ABCZ";
letters.charCodeAt(0);   // A => 65
letters.charCodeAt(3);   // Z => 90
```

