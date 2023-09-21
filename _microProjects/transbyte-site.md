---
title: Encoding java-bytecode in CIRCUIT-SAT for solving program equivalence problems
presentation: 
summary: short overview
tags:
github: https://github.com/eqimd/transbyte
---
The Code Clone detection problem consists in finding the fragments of code, that implement identical functionality. It has numerous applications in practice, but is hard to solve, especially when the considered fragments are not similar to each other.

This problem has evident ties with the Logical Equivalence Checking (LEC) problem - for two Boolean circuits to decide whether they are pointwise equivalent.

The goal of the project is to reduce the Code Clone detection problem for java-bytecode programs from a certain class (with the support of operators from a restricted set) to LEC, and further encode it to Boolean satisfiability problem (SAT), in order to apply modern SAT solvers for its solving.


Site with demo repo: https://github.com/eqimd/transbyte-site