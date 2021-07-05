---
title: Newlines
layout: topic
order: 106
---

One of the most significant 
[control characters]({{ site.baseurl }}/text-files/control-chars) is the
_newline_. It's used to indicate the **line ending** in the file. On Unix
systems, this is character 10 ("line feed", or `LF`).

A text file is _really_ simply long sequence of characters. It might be a very
long sequence, but nonetheless it's just a sequence of one character followed
by another.

For example, a text file containing different fruit on each line might look
like this. Notice how there is a &crarr; character (that you don't normally
see) at the end of every line:

<div class="text-file">
  <div>
    <div>a<span>97</span></div>
    <div>p<span>112</span></div>
    <div>p<span>112</span></div>
    <div>l<span>108</span></div>
    <div>e<span>101</span></div>
    <div>s<span>115</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>b<span>98</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>a<span>97</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>a<span>97</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>c<span>99</span></div>
    <div>h<span>104</span></div>
    <div>e<span>101</span></div>
    <div>r<span>114</span></div>
    <div>r<span>113</span></div>
    <div>y<span>121</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>d<span>100</span></div>
    <div>u<span>117</span></div>
    <div>r<span>114</span></div>
    <div>i<span>105</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>m<span>109</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>g<span>103</span></div>
    <div>o<span>111</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    &nbsp;
  </div>
</div>

<p class="js-only">
  Click or hover on the characters to see their underlying codes.
</p>

Only when you display it does the computer start a new line after each
_newline_ character. So really the content of the file is more like this:

<div class="text-file">
  <div>
    <div>a<span>97</span></div>
    <div>p<span>112</span></div>
    <div>p<span>112</span></div>
    <div>l<span>108</span></div>
    <div>e<span>101</span></div>
    <div>s<span>115</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
    <div>b<span>98</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>a<span>97</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
    <div>a<span>97</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>c<span>99</span></div>
    <div>h<span>104</span></div>
    <div>e<span>101</span></div>
    <div>r<span>114</span></div>
    <div>r<span>113</span></div>
    <div>y<span>121</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
    <div>d<span>100</span></div>
    <div>u<span>117</span></div>
    <div>r<span>114</span></div>
    <div>i<span>105</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
    <div>m<span>109</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>g<span>103</span></div>
    <div>o<span>111</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
    &nbsp;
  </div>
</div>

This shows how the line ending is effectively a _separator_. It serves
to separate items in the file. If the file consists of data records, this
means the line ending is operating as a record separator.

This is why the newline at the very end of the file is not always necessary —
unlike the others, it's not separating anything.

A blank line is effectively what you get when two line endings are adjacent to
each other.

### Different line endings

Different operating systems use different characters to mark the end of a line.
Two characters are especially relevant. They are sometimes abbreviated as
`LF` and `CR`:

| ASCII code  | Abbreviation | Meaning                      | Operating system  |
|-------------|--------------|------------------------------|-------------------|
| `10`        | `LF`         | Line feed                    | Unix              |
| `13` & `10` | `CR` `LF`    | Carriage return & line feed  | Windows           |

Early Apple computers just used `CR` but you're unlikely to see that today
(MacOS uses Unix line endings now).

Here's the same fruit file, but with Windows line endings:

<div class="text-file">
  <div>
    <div>a<span>97</span></div>
    <div>p<span>112</span></div>
    <div>p<span>112</span></div>
    <div>l<span>108</span></div>
    <div>e<span>101</span></div>
    <div>s<span>115</span></div>
    <div class="invisible">&darr;<span>13</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>b<span>98</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>a<span>97</span></div>
    <div class="invisible">&darr;<span>13</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>a<span>97</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>c<span>99</span></div>
    <div>h<span>104</span></div>
    <div>e<span>101</span></div>
    <div>r<span>114</span></div>
    <div>r<span>113</span></div>
    <div>y<span>121</span></div>
    <div class="invisible">&darr;<span>13</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>d<span>100</span></div>
    <div>u<span>117</span></div>
    <div>r<span>114</span></div>
    <div>i<span>105</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div class="invisible">&darr;<span>13</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>m<span>109</span></div>
    <div>a<span>97</span></div>
    <div>n<span>110</span></div>
    <div>g<span>103</span></div>
    <div>o<span>111</span></div>
    <div class="invisible">&darr;<span>13</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    &nbsp;
  </div>
</div>


### You don't see the codes

When you look at the contents of the text file, if there are newlines in it,
you'll simply see the text starting on a new line.

However, this can catch you out if you have problems with newlines. Depending on
where the file came from (for example, was it made on Windows or Unix?) — this
display might go wrong if the file is using the "other" system's line endings.
On Unix systems, the extra character from Windows will sometimes appear as
`^M`. On Windows systems, the file's lines might not all stay on the same line.

It's important to know this because _sometimes_ it will explain why you're
having problems with a file or program that otherwise is working fine.


### Changing line endings

If you need to change the line endings (that is, switch between `LF` and
`CR`+`LF`) you can usually find an option (maybe when you choose "Save as...")
to _force_ the line endings to be the ones you want. By default, your editor
will be using the correct line endings for your operating system.

Some systems — such as git (version control) — can be configured to change
line endings automatically to stop them being mixed in the same project.

Having both types of line endings in the same file is always wrong. This can
happen if different programmers are editing the same file on different systems.

### In programs

This can be a problem when you write programs: you probably want your Python
program to work with both kinds of file (maybe when you're reading or writing
a data file). In general, you can use `\n` to indicate "newline" and the
program will do the _right thing_ depending on what operating system it's 
running on. That is, `\n` can be a little "magic" and represent both kinds of
line ending.


### A little history

On paper printers ("line printers") _line feed_ advances the paper up one
line. _Carriage return_ returns the carriage the print head is riding on
to the beginning of the line.

So the combined action of _line feed_ **and** _carriage return_ describe the
control characters for starting a newline.

In fact the situation is a little more complicated because historically there
are other characters which can indicate line (or record) endings too. Unicode
does support these even though they are uncommon. They include vertical tab
(`VT`), line feed (`LF`), and form feed (`FF`). Today you're unlikely to
encounter them unless you're working with old files.
