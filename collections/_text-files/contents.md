---
title: What is a text file?
layout: topic
order: 101
---

A text file is a [file]({{ site.baseurl }}/files/contents})
that _only_ contains [characters]({{ site.baseurl }}/text-files/characters).

Specifically, the characters are represented by an agreed code (for example
`65` for `A`, `66` for `B`...).

Importantly this means there is _no formatting_ information encoded in the file
itself: only characters.

<div class="text-file">
  <div>
    <div>#<span>35</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>A<span>65</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>P<span>80</span></div>
    <div>y<span>121</span></div>
    <div>t<span>116</span></div>
    <div>h<span>104</span></div>
    <div>o<span>111</span></div>
    <div>n<span>110</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>p<span>112</span></div>
    <div>r<span>114</span></div>
    <div>o<span>111</span></div>
    <div>g<span>103</span></div>
    <div>r<span>114</span></div>
    <div>a<span>97</span></div>
    <div>m<span>109</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>#<span>65</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>i<span>105</span></div>
    <div>s<span>115</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>s<span>115</span></div>
    <div>t<span>116</span></div>
    <div>o<span>111</span></div>
    <div>r<span>114</span></div>
    <div>e<span>101</span></div>
    <div>d<span>100</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>a<span>97</span></div>
    <div>s<span>115</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>a<span>97</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>#<span>65</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>t<span>116</span></div>
    <div>e<span>101</span></div>
    <div>x<span>120</span></div>
    <div>t<span>116</span></div>
    <div>&nbsp;<span>32</span></div>
    <div>f<span>102</span></div>
    <div>i<span>105</span></div>
    <div>l<span>108</span></div>
    <div>e<span>101</span></div>
    <div>.<span>46</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div>p<span>112</span></div>
    <div>r<span>114</span></div>
    <div>i<span>105</span></div>
    <div>n<span>110</span></div>
    <div>t<span>116</span></div>
    <div>(<span>28</span></div>
    <div>"<span>34</span></div>
    <div>H<span>72</span></div>
    <div>E<span>45</span></div>
    <div>L<span>76</span></div>
    <div>L<span>76</span></div>
    <div>O<span>79</span></div>
    <div>!<span>21</span></div>
    <div>"<span>34</span></div>
    <div>)<span>29</span></div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    <div class="invisible">&crarr;<span>10</span></div>
  </div>
  <div>
    &nbsp;
  </div>
</div>

<p class="js-only">
  Click or hover on the characters to see their underlying codes.
</p>

If you open a text file, and see text in different formats, you're not _just_
seeing the text file's contents. Instead, you are seeing how a program is
choosing to display it. So if some words are red, and others are in big font —
those formatting features are not encoded _directly_ in the file but are being
added by the program you are using to look at it.

This is a subtle distinction. For example, a Word document _does_ contain extra
information that isn't represented in this way. So a Word document is _not_ a
text file, even if it only contains the word "hello".

It's also a very important distinction if you are going to be doing any
programming or using any command-line tools.


