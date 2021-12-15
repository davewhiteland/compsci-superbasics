---
title: GPUs
layout: topic
order: 104
---

A **graphics processing unit** (GPU) is circuitry optimised to perform the
calculations required to [display pixels]({{ site.baseurl }}/hardaware/monitors).
But GPUs are also used for other tasks that require many independent but
similar calculations.

High resolution screens have millions of pixels, and each one's colour needs to
be calculated over and over again, ideally 60 times a second. The massively
repetitive nature of the same calculations means this is a problem that can
been speeded up by parallelism: performing calculations separately but
simultaneously, and then combining them. GPUs have multiple
[processors]({{ site.baseurl }}/hardaware/monitors) built with specialised
instruction sets optimised for the kind of calculations they need to perform.
Common problems that GPUs need to solve rapidly include video decoding, and
manipulation of three-dimensional geometry to produce two-dimensional views.

The current state of GPU technology has arisen partly because of the gaming
industry. The computer's main processors manage the running of the game,
including maintaining the 3D model of the game world and the physics within it.
This gets passed to the GPU that turns it into realistic 2D images fast enough
to provide a smooth animation to the player. THE GPU is performing the
calculations needed to produce effects like perspective, occlusion, shadows,
and distance-fading, as well as managing particles such as sparks or blades of
grass.

### Hardware acceleration

It's increasingly common for a computer to have a GPU available to drive its
monitor, so some tasks that might otherwise be handled by code running in the
computer's main processor can be handed over to the GPU. This is _hardware
acceleration_: the task runs faster because the calculations are being done by
the GPU's hardware (that is, its specialised circuitry).

An example of this on the web is when animations are required (using CSS, or
cascading stylesheets). Your web browser (running in the computer's main
processor) may do the calculations itself, or, if it has a GPU available, it
may hand them over to benefit from hardware acceleration. You won't necessarily
know this is happening, but if it is you might notice that your machine doesn't
get bogged down, or that the animation is less choppy.

### OpenGL and Shaders

The Open Graphics Library (OpenGL) is a public specification of the things GPUs
can do. Most manufacturers make GPUs that support the OpenGL, which makes it
feasible to access their capabilities from any programming languages that can
access them. Specifically, _bindings_ are available that join programs to the
capabilities of the GPU hardware.

_Shaders_ are programs written specifically to run on GPUs.

### OpenGL on the web: WebGL

<canvas class="js-only" id="glcanvas" width="640" height="640"></canvas>

Web pages can contain shaders written in the OpenGL Shading Language (GLSL ES).
It's a lot like the programming language C, but specialised for graphics and
pixel-based calculations. The WebGL (Web Graphics Library) provides an
application programming interface (API) in JavaScript for webpages. HTML's
`canvas` element can be manipulated in this way.

<p id="webgl-capability" class="js-only"></p>

## Programmers and the GPU

As a consequence of their parallelism, GPUs can be _more efficient_ at certain
types of non-graphical calculations than the processors of the machines they
are connected to. Any calculation-based problem that can benefit from being run
in parallel is potentially suitable for running on a GPU. Fields where such an
approach is useful include machine learning (GPU manufacturer NVIDIA provides
the CUDA platform for running Python frameworks like Tensorflow or Pytorch on
GPUs) and cryptography (such as blockchain calculations, mining digital
currencies, or brute-force attacks on encrypted data).

<script src="{{ site.baseurl }}/js/gl-matrix-min.js"></script>
<script src="{{ site.baseurl }}/js/webgl-demo-custom.js"></script>
<script>
  const MAX_CANVAS_X = 600;
  const MAX_CANVAS_Y = 600;
  const webgl_paragraph = document.getElementById("webgl-capability");
  const canvas = document.getElementById("glcanvas");
  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (gl && gl instanceof WebGLRenderingContext) {
    webgl_paragraph.innerHTML =
      "Your browser supports WebGL: it’s driving the animation above. You can inspect the "
      + "<a href='{{ site.baseurl }}/js/webgl-demo-custom.js'>JavaScript that’s running it</a>. "
      + "The code is from <a href='https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial'>MDN’s WebGL tutorial</a>." ;
      // note: the MDN code is available under CC0 (public domain) license
    
  } else {
    webgl_paragraph.innerHTML = "Your browser does not support WebGL.";
  }

  let max_x = document.getElementsByClassName("main-content")[0].clientWidth * 0.9;
  let x = MAX_CANVAS_X;
  let y = MAX_CANVAS_Y;
  if (max_x < MAX_CANVAS_X) {
    x = max_x;
    y *= (x/MAX_CANVAS_X) // i.e., scaled same as x
  }
  canvas.width = x;
  canvas.height = y;
  canvas.style.width = x;
  canvas.style.height = y;
  main("{{ site.baseurl }}/images/cube-texture.png");
</script>
