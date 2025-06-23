---
layout: single
author_profile: false
permalink: /somfy/configuration

sidebar:
  nav: "somfy"

title: "Somfy RTS configuration"
excerpt: "Howto configure the new Somfy ESP32 RTS module"
action: false
classes: wide

---
After the initial setup, we need to add our screens (or "shades" in the terminology of Somfy) to the module, follow the procedure in [Configuring the software](https://github.com/rstrouse/ESPSomfy-RTS/wiki/Configuring-the-Software#shademotor-setup).

We currently have a Telis-4 remote, and to add a new "remote", we are following the regulare procedure to add a new remote as explained at the [somfy site](https://www.somfysystems.com/en-us/support/faq?question=if-i-already-have-a-control-programmed-to-my-motorized-product-how-do-i-add-another-control).

So we need to:
1. Go to the pairing window (by pressing pair shade in the shade edit window)
2. Select the appropriate channel on the Telis-4 (if that channel controls multiple motors, we might want to disconnect some motors from power, so we can have all individual motors controlled from the software, as the software can control much more that 5 channels!)
3. Press the PROG button on the back of the remote until the shade jogs.
4. Press PROG in the pairing window of the software, the shade should jog again (exactly ones, if it jogs twice, it had deregistred the particular remote!)

The configuration starts with types and stuff, I used these values:
- Protocol, Bit length as defaults (RTS, 56-BIT);
- Type: Roller Shade;
- Address: as presented;
- Room: Home (default);
- Name: as described below, starting with "Screen";
- Up time (ms): 33160, Down time (ms): 30610;
- Other values are left default (no checks in the boxes, no repeats).

All channels on all remotes should have a unique address that is stored in the motors of the shades. As the motors keep a counter as a safety protection, you can't have remotes using the same channel. By examining the logs, we can find the current settings for the remote:

|Channel|Screens|Address|
|-------|-------|-------|
|&#x25cf; &#x25CB; &#x25CB; &#x25CB;|1, 2, 3|9381699|
|&#x25CB; &#x25cf; &#x25CB; &#x25CB;|4|9447235|
|&#x25CB; &#x25CB; &#x25cf; &#x25CB;|5, 6|9512771|
|&#x25CB; &#x25CB; &#x25CB; &#x25cf;|6, 7|9578307|
|&#x25cf; &#x25cf; &#x25cf; &#x25cf;|All|9643843|

We actually want to control 7 screens, so we need to configure seven screens (these addresses will be stored in the motors, so we need to backup these, in case they get lost...). Left & Right are from the in-house viewpoint.

|Channel|Screen|Software address|
|-------|------|----------------|
|&#x25cf; &#x25CB; &#x25CB; &#x25CB;|1 (left most)||
|&#x25cf; &#x25CB; &#x25CB; &#x25CB;|2||
|&#x25cf; &#x25CB; &#x25CB; &#x25CB;|3||
|&#x25CB; &#x25cf; &#x25CB; &#x25CB;|4|8447235|
|&#x25CB; &#x25CB; &#x25cf; &#x25CB;|5|8512771|
|&#x25CB; &#x25CB; &#x25cf; &#x25cf;|6|8578300|
|&#x25CB; &#x25CB; &#x25CB; &#x25cf;|7 (right most)|8578307|

Screen 6 is controlled with both channels 3 and 4, we will use channel 4 to pair. We will start with pairing screens 4 and 5, which are easiest: screen 4 has a unique channel, and if we unplug screens 6 and 7, screen 5 also has a unique channel.
