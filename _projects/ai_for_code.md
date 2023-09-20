---
title: AI for code
description: It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using 
permalink: /projects/aiforcode.html
category: productivity
stage: design
reason: Some reason
languages: 
  - java
  - cpp
  - python
  - typescript
integrations: Project 1
tags:
  - collaboration
  - open source
---

# AI for CODE
### Formal Analysis Enhancement on AI LLM for Code
---
## General idea:
Modern AI-powered solutions demonstrate incredible performance in a wide variety of areas, including natural language processing, image generation and recognition, and more. Large Language Models (LLMs) have enabled an unprecedented level of understanding of software code. However, this ability was demonstrated mainly for relatively short code snippets, like one function or a single code file. There is a significant issue of the current LLM algorithms, which restricts their practical application in the code area. In practice, program analysis usually should utilize project-level rather than file-level context. Code-specific data and techniques are required to improve the performance of neural networks in order to support project-level processing.

---

## Project objectives:
Explore novel engineering technology of combination general AI LLM with program analysis methods as killer enhancement, to lift the availability of LLM tech and application on actual large scale software development process.

---

## Project background:
Program analysis methods can go far beyond simply providing RLHF-style feedback to LLMs, as program analysis tools solve a subset of problems that LLMs are not well suited for. We believe that the correct route is to combine the strengths of both approaches, and in the proposed project we explore possible directions to achieve this combination.

##### There are 3 directions:
1. Novel approaches to integrate project-level context – topic for academic cooperation.
2. Formal methods as a feedback for LLMs in Text-to-Code task.
3. Formal Code Specification as Intermediate Representation in Text-to-Code and Code-to-Text Tasks.

![AI for Code directions]({{ "/assets/images/ai_for_code/directions.png" | relative_url }})

Project-level context means high-level information about software structure.
For example, dependencies between functions (call graph), files, classes;
information about used libraries; type information; program analysis structures; etc.

---

## Three Directions of Works:
#### 1. Formal methods as a feedback for LLMs in Text-to-Code task.
Goals:
1.	Reduce by 20% compared to ChatGPT the number of vulnerabilities of type AO (arithmetic overflow), BO(buffer overflow), ABV(array bound violation), DFN (dereference of null pointer) in C code, using FormAI dataset. (FormAI is the dataset of ChatGPT generated code snippets labelled with vulnerabilities types https://arxiv.org/pdf/2307.02192.pdf)
2.	Collect the dataset of 100 000 code snippets with vulnerabilities labelling for Java.
3.	Achieve vulnerability rate 20% less compared to Codex on the collected dataset.

#### 2. Formal Code Specification as Intermediate Representation in Text-to-Code and Code-to-Text Tasks.
Goals:
1.	Increase pass@1 rate by 10% compared with base model (PanGu Coder) on HumanEval+ benchmark. (HumanEval+ is the novel updated version of HumanEval dataset, where more attention is payed to edge cases and code vulnerabilities https://arxiv.org/pdf/2305.01210.pdf)
2.	Increase pass rate pass@1 on docstring generation task on HumanEval benchmark by 10% compared with base model (PanGu Coder).

#### 3. Novel approaches to integrate project-level context.
Goals:
1.	Collect code-to-text dataset with 1-10 MLoC project context for C++ and Java.
2.	Increase project context from 2k tokens to 1-10 MLoC.
3.	Increase pass rate pass@1 by 10% compared to ChatGPT (and CopilotX) on the collected dataset.
