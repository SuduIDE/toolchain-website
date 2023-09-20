---
title: Cooddy
description: Source code analysis tool using Data-Flow Analysis and Static Symbolic Execution
permalink: /projects/cooddy.html
category: quality
stage: development
reason: Some reason
languages:
- java
- cpp
- python
- typescript
integrations: Project 2, Project 3
repository: https://github.com/program-analysis-team/cooddy
tags:
  - collaboration
  - open source
---

## Why to use Cooddy

Cooddy tool is source code analysis tool based on analysis of Abstract Syntax Tree, Control Flow and Call Graphs of program involving such techniques as Data-Flow Analysis and Static Symbolic Execution.

The main goal of the project is to create and engine providing features of program analysis to make it extensible for the needs of developers and QA teams.

## List of detected issues

There are a few groups of checkers, each of them have specific options, approaches and result representation

* CWE Checkers

    + BufferMaxSizeChecker
    + CliInjectionChecker
    + DivisionByZeroChecker
    + DoNotReturnAddrOfLocalVarChecker
    + FmtSpecMismatchChecker
    + FormatStringUsageChecker
    + IncompatiblePointerTypeChecker
    + IntegerOverflowChecker
    + LoopLimitTaintChecker
    + MemoryAllocationSizeChecker
    + MemoryAndResourceLeakChecker
    + MismatchedMemManagementChecker
    + NullPtrDereferenceChecker
    + OutOfBoundsChecker
    + TypeSizeMismatchChecker
    + UninitializedMemoryUsageChecker
    + UseAfterFreeChecker
    
* Unused Variable Checkers
    + UnusedMemberExpressionChecker
    + UnusedParamChecker
    + UnusedVariableChecker


### List of reporters

The presentation of result is depend on which reporter was used, during the analyses. The examples of the result of each reporter you can see below

#### Result in JSON
Result will be presented in cooddy_result.json, which is located in the current working directory by default or in location passed to argument results-path. This file contains list of problems, found in scope.

#### Result in human-readable format
By default, result will be printed in output of the console. If saving result in human-readable format in file is required, you need to pass path to location of result file to argument results-path. This file contains list of problems, found in scope.

#### Result in CSV format
Result will be presented in cooddy_result.csv, which is located in the current working directory by default or in location passed to argument results-path. This file contains list of problems, found in scope.

#### Result in CSV format with HTML report
Result will be presented in cooddy_result.csv, which is located in the current working directory by default or in location passed to argument results-path. This file contains list of problems, found in scope.

#### Result in HTML report
Result will be presented in cooddy_result.html, which is located in the current working directory by default or in location passed to argument results-path. This file contains list of problems, found in scope.

By calling following example of analyses

```bash
/mnt/d/work/Cooddy/build/release/cooddy --scope=/mnt/d/work/test --reporter=html
```

In HTML the content of result will be following:

![cooddy_report]({{ "/assets/images/cooddy/report_html.png" | relative_url }})
