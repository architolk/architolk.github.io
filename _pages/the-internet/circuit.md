---
layout: single
author_profile: false
permalink: /the-internet/circuit

sidebar:
  nav: "the-internet"

title: "Circuit"
excerpt: "Circuit for the Internet from the IT-crowd"
action: false
classes: wide

---
{% include math %}

![](/assets/images/the-internet/design.svg)

# On/off toggle
The circuit below gives the on/off toggle part of the circuit \\(V_{bat}\\) is the voltage directly from the battery (4xAA = 6V). \\(V_{cc}\\) is the voltage from the on/off toggle. The theory behind this circuit is explained in [latching circuit](latching).

![](/assets/images/the-internet/circuit-onoff.svg){:width="300px"}

In its "off" position, the circuit doesn't draw any current. In its "on" position, the circuit draws very little current via R5. We can leave this resistor out of the circuit, as the circuit is also discharged via the load (the latched motion detector, see below).

# Blinking circuit

The circuit below gives the blinking part of the circuit. The circuit consists of the regular astable multivibrator circuit around transistors Q3 and Q4, transistor Q6 buffers the multivibrator from the load. Transistor Q5 is used to change the frequency (bypassing R10).

![](/assets/images/the-internet/circuit-blinking.svg){:width="600px"}

The frequency of the circuit is dictated by R7+R10/R8+R10 and C2/C3: 250k and 4.7u. As explained in [LED blinking](blinking), this gives use a frequency of 0.6Hz (almost a second ON and a second OFF). Without R10, the frequency is 1.5Hz.

We might use Q5 for some other part of the circuit, making it part of the motion detector instead of the blinking circuit. Q5 has a pull-up resistor, because signal is actually a switch (we don't want the base of Q5 floating).

# Latched Motion Dectector

The circuit below gives the latching motion detector part of the circuit. Only the NPN transistor is displayed, this transistor gives a path to ground for the PNP transistors. The feedback circuit is also not displayed (from the PNP back to the base of the NPN). As the motion detector switch is NC (normally closed), we need an inverted signal. This is realised by pull the NPN down to ground via the motion detector (switching it off). The voltage at the base of the NPN should be below 0.7V. So R21 must be large with respect to R20.

![](/assets/images/the-internet/circuit-detector.svg){:width="300px"}

R20 and R21 and the motion detector give C1 a path to ground, so this capacitor can be discharged via these resistors (so we don't need R5).

# Siren

The circuit below gives the siren part of the circuit. A typical NE555 circuit is used for driving the buzzer at a certain frequency. The CV pin is used to change this frequency from the blinking circuit.

![](/assets/images/the-internet/circuit-siren.svg){:width="600px"}

The PNP part of the circuit might not be needed here, as we might combine this with the blinking circuit (making the motion detector circuit more a component). In both cases its function is to provide Vcc power...

When no Vcc is present, the internal construction of the NE555 makes it that the CV voltage is also present at the Vcc output. We don't want that! This can easily be fixed by using a diode so the voltage can only go to the Vcc pin and not from the Vcc pin to the rest of the circuit.

Maybe we need to get the CV from the load part, and not directly from the blinking circuit?
