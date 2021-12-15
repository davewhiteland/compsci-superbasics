---
title: About hardware
layout: topic
order: 101
---

You're already familiar with computer hardware — you're reading this using
it! But you might have learned to use your computer without knowing the
vocabulary and conventions of the hardware.

<object id="svg-hardware-diagram" data="{{ site.baseurl }}/images/hardware.svg"
  type="image/svg+xml">
</object>

These pages are about personal computing — desktop or laptop machines, and
the devices they connect to. At the simplest level this information is here
to help you confirm the meaning or context of some common terms.

If you're studying computing — and especially programming — it's useful to
appreciate that we understand complex systems by abstracting the layers at
which they operate, and hardware is a good example of this. Even something as
simple as "plugging in a cable" can only work because the devices are
communicating using software that implements protocols right down to
low-level concerns like voltages and timing. Some of this is exposed in
consumer-level products (for example, [USB]({{ site.baseurl }}/hardware/usb)
and [Bluetooth]({{ site.baseurl }}/hardware/wifi-and-bluetooth) are widely used
terms, even though most people don't need to know how extensive the
specifications for them are). The relationship between hardware and software is
a good place to start to appreciate things like protocols, standards, APIs, and
interfaces.


<script>
  // the keys are the respective click-area ids in the SVG
  // in this file so Jekyll will sort the URLs out for us
  let HARDWARE_LINKS = {
    cable: "{{ site.baseurl }}/hardware/connections",
    computer: "{{ site.baseurl }}/hardware/processors",
    keyboard: "{{ site.baseurl }}/hardware/keyboards",
    monitor: "{{ site.baseurl }}/hardware/monitors",
    mouse: "{{ site.baseurl }}/hardware/mice"
  };
</script>