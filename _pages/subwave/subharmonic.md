---
layout: single
author_profile: false
permalink: /subwave/subharmonic

sidebar:
  nav: "subwave"

title: "Subharmonic creation"
excerpt: "How to create a subharmonic from an input signal"
action: false
classes: wide

---
{% include math %}

Let's consider a sine wave, represented by the formula:

\\[f_{in} = cos(x), x = 2πft\\]

The subharmonic version of the wave is simply the same sine wave with half the frequency:

\\[f_{sub} = cos(\dfrac{x}{2})\\]

The graph below depicts these two waves: the red \\(f_{in}\\) and the blue \\(f_{sub}\\).
{% include waveform2 wave="Math.cos(x/2)" wave2="Math.cos(x)" %}

The Boss OC-2 method offsets the amplitude of this waveform so it's minimum is zero, halfs the amplitude and multiplies it with a square wave with half the frequency. This square wave should flip at the peaks of the original waveform.

\\[f_{sub} = \dfrac{cos(x)+1}{2} * sign(cos(\dfrac{x}{2}))\\]

These two waveforms are depicted below, and the resulting waveform below that one. It does resemble the subharmonic waveform, but needs to be filtered.

{% include waveform2 wave="Math.sign(Math.cos(x/2))" wave2="(Math.cos(x)+1)/2" %}
{% include waveform2 wave="(Math.cos(x)+1)*Math.sign(Math.cos(x/2))/2" %}

The ValveWizard U-Boat method rectifies the waveform and multiplies it with a square wave with half the frequency. This square wave should flip at the zero crossing of the original waveform.

\\[f_{sub} = \vert cos(x) \vert * sign(cos(\dfrac{x-π/2}{2}))\\]

These two waveforms are depicted below, and the resulting waveform below that one. It does resemble the subharmonic waveform, but needs to be filtered. The advantage of the ValveWizard approach is that it is much simpler to achieve: rectifying a waveform is easy and the square wave generator only needs a zero crossing detector (ZCD). To detect the peaks of a waveform (as in the Boss OC-2), you need a 90 degrees phase shift before the ZSD (as a 90 degrees phase shift will have the zero crossing at the original peaks). However, the resulting waveform will have a 90 degrees phase shift with respect to the original wave form.

{% include waveform2 wave="Math.sign(Math.cos(((x-Math.PI/2)/2)))" wave2="Math.abs(Math.cos(x))" %}
{% include waveform2 wave="Math.abs(Math.cos(x))*Math.sign(Math.cos(((x-Math.PI/2)/2)))" %}

The square root method starts with the same function as the Boss OC-2: offsetting the amplitude of the waveform so it's minimum is zero and halfs the amplitude. After this, the result is square rooted. This actually is the correct mathematical formula for creating the subharmonic, but we need to recreate the correct sign (as a square root only gives positive numbers). This is again done in the same way as in the Boss OC-2 case. So the square root method is actually the Boss OC-2 method, with an extra step.

\\[f_{sub} = \sqrt{\dfrac{cos(x)+1}{2}} * sign(cos(\dfrac{x}{2}))\\]

These two waveforms are depicted below, and the resulting waveform below that one. As it follows the correct mathematical formula, it doesn't need filtering.

{% include waveform2 wave="Math.sign(Math.cos(x/2))" wave2="Math.sqrt((Math.cos(x)+1)/2)" %}
{% include waveform2 wave="Math.sign(Math.cos(x/2))*Math.sqrt((Math.cos(x)+1)/2)" %}

There are, however, some caveats. These calculations only hold for pure sine waves. But the actual signal that we need to use, will have harmonic overtones. These overtones will mess up the resulting waveform, as these waveform will be shopped by the square wave at the incorrect positions (you will get a kind of wavefolding). We need to filter the input and output. This means that the square root method will probably not be that much different than the other two methods, but to make sure, we need to hear how an actual circuit sounds!
