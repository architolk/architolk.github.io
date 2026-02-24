---
layout: single
author_profile: false
permalink: /geomatron/euclydian

sidebar:
  nav: "geomatron"

title: "Euclydian rythms"
excerpt: "About euclydian rythms"
action: false
classes: wide

---


The Euclidean rhythm in music was discovered by Godfried Toussaint in 2004 and is described in a 2005 paper "The Euclidean Algorithm Generates Traditional Musical Rhythms". The greatest common divisor of two numbers is used rhythmically giving the number of beats and silences, generating almost all of the most important world music rhythms.

The Euclidean algorithm that he used, was first described by the Greek mathematician Euclid, hence the name.

The beauty of his discovery is that you can describe any rhythm using only two variables: the number of measures and the number of beats. The rhythm will be the even spacing of the beats of the measures. This 2 beats in 4 measures will give the rhythm |x . x .|x . x .|. If the beats don't fit evenly in the number of measure, the algorithm does it's best, creating an asynchronous rhythm, for example 2 beats in 5 measures: |x . . x .|x . . x .|

Polyrhythms can be created by combining more than one rhythm, for example when you want to combine the kick with a snair in a rock rhythm. In that case, you want to offset the snair rhythm by one, creating a |. x . x|. x . x| rhythm. This means that we need three numbers: measures, beats and offset.
