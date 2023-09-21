---
title: Cooddy + UTBot
summary: Integration of a Cooddy static analyzer with a UTBot-KLEE symbolic execution virtual machine.
---
The purpose of this project is to come up with a static analyzer for C/C++ which could automatically report many types of program defects while having low false positive rate. The idea is to quickly find a lot of defects by a fast imprecise approach of the Cooddy and then filter out false positives by a robust precise approach of the UTBot-KLEE.
