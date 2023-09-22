---
title: KLEEF
description: Symbolic Execution Engine.
permalink: /projects/kleef.html
category: quality
stage: integrated
languages:
- java
repository:
---

# Purpose
KLEEF is a complete overhaul of the KLEE symbolic execution engine for LLVM, fine-tuned for a robust analysis of industrial C/C++ code.
If you want to implement a symbolic execution for either static analysis traces verification or test coverage generation, you will need an enormous amount of work to make it work well.
Worse yet, as most problems you will face have a systematic scientific nature, you will likely end up with a goofy heuristic-based symbolic engine. It will waste a lot of resources and miss most false positives, leaving your users unsatisfied.
Good news for you is that you can reduce a false positive rate of your static analyzer by simply delegating all the pain to the battle-tested KLEEF symbolic execution engine.
KLEEF proved itself both on billions lines of the company code by greatly reducing a false positive rate of one static analyzer, and academic benchmarks of TEST-COMP competition, outperforming its winners.

# Value, Benefits, Advantages
Today, using a static analyzer in a product pipeline becomes a norm.
However, their users spend a lot of effort and resources on investigating static analysis reports because of a high false positive rate.
Software analyzers are usually advertised to be "blazingly fast" but their speed comes at a price of the high false positive rate.
After two minutes of static analyzer work, a software engineer can spend entire weeks tracing its reports – and if we add up these times we can no more call the entire process "fast".
Moreover, in most cases manual investigation of these reports ends up concluding that almost all reported traces are false positives. That is, investigating static analysis results requires a lot of time and money, and in the end most results together with all the effort are just thrown away.
Thus, the ultimate benefit of KLEEF is that it handles the complex task of investigating static analysis reports and cuts off irreproducible traces.
As KLEEF is completely automatic, expensive time of software engineers is not wasted.

# Technologies

Most static analyzers rely on a combination of a data-flow analysis and basic symbolic execution.
KLEEF is a turbocharged enhancement of a classic KLEE symbolic execution engine with the following extra features.

# KLEEF Features for Integration with Static Analyzers
1. Can be started in *reproduce static analyzer traces* mode on a set of traces in [SARIF format](https://github.com/UnitTestBot/klee/blob/main/test/Industry/test.c.sarif)
2. User can provide [annotations](https://github.com/UnitTestBot/klee/discussions/92) for functions missing in the binary or any function of user preference
3. KLEEF reports for each trace whether it is a False Positive or a True Positive with its confidence rate
4. KLEEF also reports False Negatives, i.e., errors missed by the checked static analyzer

# KLEEF Unique Technical Features Beyond Vanilla KLEE
KLEEF is a complete overhaul of KLEE indeed. The following features make it fast and precise even with dynamically allocated arrays and complex data structures, such as binary trees.

- Backward Symbolic Execution
- Bidirectional Symbolic Execution
- Integrated Fuzzer
- Lazy Initialization
- Symcretes
- Arrays with Symbolic Size
- Function Mocking
- Using Solver Incrementality

# Use cases
KLEEF can be used in the following way.
1. Run your static analyzer on a project source code in the cloud, on some server or locally, produce a binary file and a report with suspicious traces.
2. Run KLEEF on your static analyzer results in the cloud, on some server or locally. KLEEF will report for each trace whether it is a false positive or a true positive. If some trace is claimed to be a false positive KLEEF will also report its confidence in this result.
3. Show to the user the traces reported by KLEEF as true positives.
4. Show to the user the traces reported by KLEEF as false positives with a low confidence.

# Future plans
- Add support of all types of program defects reported by static analyzers to KLEEF.
- Add support of all types of program annotations used by static analyzers to KLEEF.
- Use information collected by static analyzers during analysis (such as a call graph) to speed up KLEEF.

For more details, see [paper](./pdfs/kleef.pdf).
