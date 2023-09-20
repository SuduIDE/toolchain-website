---
title: Cooddy+UTBot
description: Integration of a Cooddy static analyzer with a UTBot-KLEE symbolic execution virtual machine.
permalink: /projects/cooddy_utbot.html
category: quality
stage: development
reason: Some reason
languages:
  - java
  - cpp
  - python
  - typescript
integrations: Project 2, Project 3
---

## Purpose
The purpose of this project is to come up with a static analyzer for C/C++ which could automatically report many types of program defects while having low false positive rate.
The idea is to quickly find a lot of defects by a fast imprecise approach of the Cooddy and then filter out false positives by a robust precise approach of the UTBot-KLEE.

## Value, Benefits, Advantages
High false positive rate of static analyzers is one of the most important problems of the field.
Software engineers spend weeks tracing static analysis reports and in most cases end up concluding that reported traces are false positives. That is, a lot of time and money is spent on investigating static analysis results which in most cases are just thrown away.

Thus, the ultimate benefit of this project emerges from the fact that UTBot-KLEE handles the complex task of investigating static analysis reports and cuts off irreproducible traces. As UTBot-KLEE is completely automatic, **expensive time of software engineers is not wasted**.

Furthermore, if some trace is too complex and UTBot-KLEE does not handle it in the specified amount of time, you still get something from its run, so it is not wasteful. In such cases UTBot-KLEE reports accumulated *confidence rate* in percents, which tells how strongly is UTBot-KLEE confident that the trace is a false positive. On irreproducible traces the confidence rate will be high and on complex yet reproducible ones it would be low.
That is, for the traces which UTBot-KLEE was not given enough time to analyze it still **produces information, which could greatly simplify the process of manual trace investigation**. A software engineer can sort all the remaining traces by the confidence and investigate only traces with a low confidence rate, which are more likely to be real bugs.

## Technologies

Cooddy relies on a combination of a data-flow analysis and basic symbolic execution.
UTBot-KLEE is a turbocharged enhancement of a classic KLEE symbolic execution engine with the following extra features.

## UTBot-KLEE Features for Integration with Static Analyzers
1. Can be started in *reproduce static analyzer traces* mode on a set of traces in [SARIF format](https://github.com/UnitTestBot/klee/blob/main/test/Industry/test.c.sarif)
2. User can provide [annotations](https://github.com/UnitTestBot/klee/discussions/92) for functions missing in the binary or any function of user preference
3. UTBot-KLEE reports for each trace whether it is a False Positive or a True Positive with its confidence rate as described above
4. UTBot-KLEE also reports False Negatives, i.e., errors missed by the checked static analyzer

## UTBot-KLEE Other Technical Features Beyond Vanilla KLEE
1. Trace-guided execution strategy based on approximate distance on an interprocedural control flow graph
2. Coverage-guided search mode with three code block coverage criteria
3. Error-guided search mode with confirmation or refutation of traces optimized by a prefix tree of traces
4. Mocking of any unspecified external calls and global variables
5. Reporting confidence rate for each trace
6. Limitation of execution based on time, instruction and program branch coverage, analysis depth
7. Lazy initialization of symbolic memory
8. Support of undefined behavior sanitizers
9. Handling functions in parallel processes
10. Floating point calculations support
11. I/O operations support
12. Assembly language insertions support
13. Support of LLVM and C++ type systems, based on timestamps and types, respectively
14. Symcretization of symbolic expressions
15. Symcretization of addresses of lazy initialized objects
16. Variable size objects allocation support
17. Updating symbolic memory based on recalculated values of symcretic expressions
18. Solver-based value minimization
19. Bidirectional symbolic execution
21. Execution of any isolated code fragment (by register lazy initialization)
22. Weakest precondition calculation for program paths
23. Smart initialization of points for execution in isolation with the efficient reuse of the symbolic execution results
24. Complete bidirectional state choosing strategy for preventing divergence
25. Bidirectional execution strategy parameterized by discrete distribution
26. Lemma generation for any code fragment
27. Incremental lemma database
28. Optimization of forward symbolic execution based on lemmas which reduces the number of logical solver calls
29. Detecting conflicts during expression simplification
30. Detecting conflicting code sections from unsatisfiable cores
31. Caching of unsatisfiable cores optimization
32. Symbolic expression interning
33. Sparse storage for formula models
34. Symcretization of extern function execution results
35. LLVM code generation for a symbolic expression
36. Fuzzy solver based on libAFL fuzzer for executing code with extern function calls
37. Tree-incremental solver wrapper based on stack-incrementality for more optimal handling of symbolic execution specific queries

## Use cases
Tools can be used in the following way.
1. Run Cooddy on your project source code in the cloud, on some server or locally. Cooddy will produce a binary file and a report with suspicious traces.
2. Run UTBot-KLEE on Cooddy results in the cloud, on some server or locally. UTBot-KLEE will report for each Cooddy trace whether it is a false positive or a true positive. If some trace is claimed to be a false positive UTBot-KLEE will also report its confidence in this result.
3. Investigate traces reported by UTBot-KLEE as true positives.
4. Investigate traces reported by UTBot-KLEE as false positives starting with those with the lowest confidence.

## Future plans
- Add support of all types of program defects reported by Cooddy to UTBot-KLEE.
- Add support of all types of program annotations used by Cooddy to UTBot-KLEE.
- Use information collected by Cooddy during analysis (such as a call graph) to speed up UTBot-KLEE.
