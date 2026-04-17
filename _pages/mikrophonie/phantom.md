---
layout: single
author_profile: false
permalink: /mikrophonie/phantom

sidebar:
  nav: "mikrophonie"

title: "Phantom power and balanced signals"
excerpt: "How phantom power works, and how it can be used with balanced signals"
action: false
classes: wide

---
Phantom power is a technique to supply power to a device (typically an active microphone or DI). The standard supply voltage is 48V.

![](/assets/images/mikrophonie/phantom-power.svg)

Phantom power usually is not transmitted on TRS input sockets, only XLR input sockets. The reason is that using an unbalanced (mono) jack would cause a short, even inserting or withdrawing a balanced (stereo) jack might cause a temporal short.

Phantom power only works with balanced signals. Where an unbalanced signal only has one signal line (and a ground line), a balanced signal contains two signal lines (and a ground line). The "hot" or "positive" signal is the original audio signal. The "cold" or "negative" signal is the inverse. The original audio signal is retrieved by the difference between these two signals. The input is AC-coupled via the input capacitors, so the DC 48V is not present at the differential amplifier.

A balanced signal is less susceptible for interference, as most noise will effect both signals the same way, thus there will be no difference between the two signals due to noise, only due to the actual signal. For balanced signals, it is necessary that the impedance of both signals is the same.

> As the signal is retrieved by the difference between the two signals, this means that when the cold signal is effectively zero with regard to the hot signal, this will still works. This will reduce the gain (as the difference between the signals is now not twice the original signal, but just ones), thus have an effect on the SNR (sound-to-noise ratio). Because the signals are not the same any more, noise might effect the signals differently, which will not be filtered out. Also, you cannot directly ground the cold signal as this will create a short between the 48V Phantom power on the cold signal and ground. As the 48V power contains a 6.81k Ohm resistor, this is not a direct short, but also something you want to avoid. The easiest way to do this, is to connect the cold signal to ground via a capacitor (so the AC signal is grounded, and the DC signal is unconnected). This approach has been taken in the [Oktava MK-12 microphone](http://localhost:4000/oktava-mk12/).

![](/assets/images/mikrophonie/xlr-pinout.png)

The XLR pin standard is as follows:
- *Pin 1: Ground/Shield* - connects to the cable shielding and equipment ground;
- *Pin 2: Hot/Positive* - Carries the original in-phase audio signal;
- *Pin 3: Cold/Negative* - Carries the inverse audio signal;

A dynamic microphone will only use pin 2 and 3 (signal runs between these two pins). Because both pins have the same 48V voltage, it cannot be detected (the voltage difference between the two pins is zero).

To actually use the phantom power, you would use the difference between one of the two pins (doesn't really matter which, as they are symmetrical) and pin 1 (actual ground).
