---
title: Automatic inference of recursive invariants based on catamorphisms
presentation: Presentation
summary: short overview
tags:
github: https://github.com/ndreuu/adt-solver
---
Complex data structures such as binary trees are particularly challenging for program analysis techniques. For example, many symbolic execution tools have little support for them. Those that do support them quickly take up all the RAM and as a result cannot generate test coverage or reach the desired points in the code. Automatic inference of invariants for complex data structures will help such tools by taking on the burden of analyzing code fragments with complex structures. Since complex data structures are often arranged recursively, their systematic support requires the inference of recursive invariants. Catamorphisms are recursive functions with a simple schema which, on the one hand, allow systematic support of complex data structures, and, on the other hand, are simpler for automatic inference.

