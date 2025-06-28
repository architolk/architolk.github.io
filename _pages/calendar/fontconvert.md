---
layout: single
author_profile: false
permalink: /calendar/fontconvert

sidebar:
  nav: "calendar"

title: "AdafruitGFX fontconvert"
excerpt: "Compiling the AdafruitGFX fontconvert"
action: false
classes: wide

---
The [Adafruit library](https://learn.adafruit.com/adafruit-gfx-graphics-library/using-fonts) has a nice utility to add new fonts. To use this utility, you need to get the code from github:

```
git clone git@github.com:adafruit/Adafruit-GFX-Library.git
```

You need to install the freetype library, for example using [homebrew](https://formulae.brew.sh/formula/freetype)

```
brew install freetype
```

You might have to change the makefile to point to the right place for the library (change accordingly):

```
CFLAGS = -Wall -I/usr/local/include/freetype2 -I/usr/include/freetype2 -I/usr/include -I/opt/homebrew/Cellar/freetype/2.13.3/include/freetype2
LIBS = /opt/homebrew/Cellar/freetype/2.13.3/lib/libfreetype.dylib
```

Go to the `fontconvert` folder and compile:

```
make
```

Make sure the `fontconvert` executable and the truetype file are in the same folder and execute:

```
fontconvert myfont.ttf 12 > myfont12pt7b.h
```

This wil give the font array for size 12. You may also add an ASCII range to minimize the number of characters in the array, for example to convert only numbers:

```
fontconvert myfont.ttf 12 48 57 > myfont12pt0-9.h
```

The following table gives all the instructions for the fonts we will use (7b means ASCII characters from 32 to 127):

|Font size|Characters|Instruction|
|---------|----------|-----------|
|14|0-9 :|./fontconvert FreeSans.ttf 12 48 58 > FreeSans14pt0-9.h|
|14 Bold|A-Z|./fontconvert FreeSansBold.ttf 14 65 90 > FreeSansBold14ptA-Z.h|
|16|7b|./fontconvert FreeSans.ttf 16 > FreeSans16pt7b.h|
|20|7b|./fontconvert FreeSans.ttf 20 > FreeSans20pt7b.h|
|24|7b|./fontconvert FreeSans.ttf 24 > FreeSans24pt7b.h|
|30|7b|./fontconvert FreeSans.ttf 30 > FreeSans30pt7b.h|
|30 bold|0-9 :|./fontconvert FreeSansBold.ttf 30 48 58 > FreeSansBold30pt0-9.h|
|80|0-9|./fontconvert FreeSans.ttf 80 48 57 > FreeSans80pt0-9.h|

The weather icons are created from their SVG using the [icomoon.io](https://icomoon.io/app/#/select) online converter. The characters are from A (sunny) to O (night cloudy). Three font sizes are used:

|Font size|Instruction|
|---------|-----------|
|48|./fontconvert WeatherIcons.ttf 48 65 79 > WeatherIcons48pt.h|
|64|./fontconvert WeatherIcons.ttf 64 65 79 > WeatherIcons64pt.h|
|80|./fontconvert WeatherIcons.ttf 80 65 79 > WeatherIcons80pt.h|
