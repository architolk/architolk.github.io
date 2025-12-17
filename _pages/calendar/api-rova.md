---
layout: single
author_profile: false
permalink: /calendar/api-weerlive

sidebar:
  nav: "calendar"

title: "Weerlive API"
excerpt: "Description of the KNMI (weerlive) API"
action: false
classes: wide

---
Example of the weerlive API can be found here: [rova-api-example.json](/assets/tables/calendar/rova-api-example.json).

This is the result of the following API style:
https://www.rova.nl/api/waste-calendar/upcoming?postalcode=1000AA&houseNumber=1&addition=&take=5

(postalcode and houseNumber are pretty obvious, take is the number of returned items)

The following waste collection types are currently known:

|ID|Code|Icon|Description|
|--|----|----|-----------|
|2|GFT|gft|Gft|
|3|PAP|papier-karton|Oud papier en karton|
|6|PMD|pmd|Pmd|
