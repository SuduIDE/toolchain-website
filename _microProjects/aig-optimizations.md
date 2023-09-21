---
title: SMT-solver for bit vector and array theory
presentation: https://docs.google.com/presentation/d/1ishaW3YSSljV_HYvhdbcuZ3HZQZZmZTw/edit#slide=id.p1
summary: Performance tuning of SMT solvers for symbolic execution engines.
tags:
github: https://github.com/malodetz/ksmt/tree/aig-optimizations
---
State-of-the-art SMT solvers are strikingly efficient in solving logical constraints of various theories: from linear integer arithmetic to algebraic data types and quantifiers. They provide rich API used by researchers in numerous domains. However, symbolic execution demands only limited theories: quantifier-free theories of integer and double bit-vectors and arrays. The goal of this project is to investigate how SMT solvers can be tuned to achieve better performance for specific needs of symbolic execution engines.

