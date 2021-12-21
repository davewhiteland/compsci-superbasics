---
title: WiFi & Bluetooth
layout: topic
order: 111
---

WiFi and Bluetooth are two of the most common ways of connecting devices
**wirelessly** — that is, without being connected by a physical cable. Both
enable you to send and receive data, but differ in their scope and how they
work.

## WiFi

>
> ![WiFi logo]({{site.baseurl}}/images/wifi-symbol.svg)
>
> To join a WiFi network, your computer either needs built-in hardware that can
> receive and transmit the necessary signals, or a
> [dongle]({{ site.baseurl }}/hardware/dongles) that can.
>

WiFi is used to connect to a network. The physical location you are connecting
to is provided by a WiFi _access point_ (or _hotspot_), which is itself
connected to the network router. In domestic settings, the router and access
point are often the same physical device. Effectively, WiFi is the wireless
alternative to using an [Ethernet cable]({{ site.baseurl }}/hardware/connections).

There are different versions of WiFi, but they are all managed by a consortium
of manufacturers who comply with agreed standards in order to display the WiFi
Alliance logo.

Although you're technically connecting to the _local area network_, often you
join the WiFi in order to access the internet. If this works, it is because the
local network is itself connected, via its router, to the external services of
an ISP (Internet Service Provider). It follows that it's possible to connect to
the WiFi but be unable to access the internet. This might happen if the local
network's outgoing connection is broken, or its firewall is preventing traffic
flowing back to your machine.


## Bluetooth

>
> ![Bluetooth logo]({{site.baseurl}}/images/bluetooth-symbol.svg)
>
> For your computer to connect to another device over Bluetooth, both
> must have Bluetooth capability, and the Bluetooth must be enabled at _both_
> ends of the connection. Similarly to WiFi, if your computer doesn't have
> Bluetooth, you can connect a [dongle]({{ site.baseurl }}/hardware/dongles)
> that does.
>

Bluetooth operates over a shorter range than WiFi, and is used to connect two
devices by _pairing_ them. Once connection has been established, they can send
data to and from each other.

When you need to connect wirelessly, make sure your Bluetooth or WiFi is
switched on. 

It's potentially troublesome if _any_ device can connect to your computer
without your permission, because that second device might behave maliciously.
This is why it's common for Bluetooth to require your confirmation (and possibly
an identifying passcode) before a connection will be established.

### Discoverability and spoofing

Typically you can join a WiFi network because it broadcasts its presence
publicly. There might be more than one network available, so you pick the one
you want to join using the name it identifies itself with. You might be
required to provide authorisation (such as a username and password).

Bluetooth works in a similar way, but often it's your own computer that is
broadcasting its availability. When you aren't inviting other devices to
connect, you don't need to make your machine "discoverable". Not broadcasting
your Bluetooth availability does not affect any connections you have already
established, or _paired_, with other devices.

In both cases, a malicious device can exploit your trust by tricking you into
allowing a connection by presenting itself with a misleading name (including
"spoofing" by using the name of a device or network you already trust). Be
careful when making connections in public places where this might be happening.


