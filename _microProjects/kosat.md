---
title: KOSAT
presentation: /pdfs/kosat.pdf
summary: Fast and light SAT solver
tags:
github:
website: https://www.utbot.org/kosat/
---
A SAT solver is an algorithm for solving the instances of the Boolean satisfiability problem (SAT). Most of the successful SAT solvers today employ the Conflict-Driven Clause Learning (CDCL) paradigm, which implements the depth-first search in the decision tree of a SAT instance, augmented with a plethora of different heuristics. Usually, the CDCL solvers are written in C or C++ in order to squeeze out all possible performance.

The goal of the KOSAT project is to implement a full-featured CDCL SAT solver in Kotlin language. Not only it allows for multiplatform usage, it also makes the source code easier to read and modify, compared to C/C++ projects. Meanwhile, thanks to the support for many relevant heuristics, Kosat shows sufficient performance for most tasks, and can be configured to suite the user needs. An additional educational feature of Kosat is the support for visualization of the CDCL process, which helps in the understanding of the algorithm and the SAT solver internals.


