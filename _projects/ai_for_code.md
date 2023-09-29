---
title: AI for code
description: Boosting Large Language Models by structured code models and code analysis
permalink: /projects/aiforcode.html
category: productivity
stage: sketch
reason: Large Language Models (LLMs) are now trained on unstructured streams of tokens. To improve LLM quality for 
  code generation and code comprehension tasks, we plan to use code structure information to improve the model, and to verify the 
  LLM output by formal methods.  
languages: 
  - java
  - cpp
tags:
  - cooperation

---

# General approach

Modern AI-powered solutions demonstrate incredible performance in a wide variety of areas such as natural 
language processing or image generation and recognition. Using Large Language Models (LLMs) for code area is a hot 
topic, but there is still a large room for improvement both for code comprehension and code generation. We believe 
that the most promising direction is _combining LLMs with proven program analysis methods_ to get the most out of AI 
for developers. 

## Using larger project context

Current LLM algorithms show a high level of code comprehension but still suffer from using the narrow code context. 
Code comprehension ability is demonstrated mainly for relatively short code snippets, such as a function, or a 
single code file. In practice, software has a much more complex project structure.
To increase the quality of LLM output, we develop techniques _to make a LLM use the larger project context_. 

## Reducing code vulnerability and deficiency

Code generation tools become widespread, and they all have one critical issue: LLMs may generate vulnerable code.
We believe we can _make LLMs output less deficient by 
providing them with feedback from formal methods_.

# Project objectives

Our project is aimed at developing basic technologies to increase LLMs output quality for code domain.
The killer enhancement is leveraging LLMs with program analysis methods to make AI-based solutions reliable, safe, 
and applicable to real-life large-scale software projects.

# Research directions

Based on these ideas, we propose three research directions:

![AI for Code directions]({{ "/assets/images/ai_for_code/directions_v4.png.png" | relative_url }})

## Providing LLMs with project-level context

By project-level context, we mean structural code information such as call graphs, external dependencies, type information, etc. We are aimed at providing LLMs with the larger 
project contexts to gain higher LLM output quality for code-to-text tasks such as generating code summaries.

Our goals in this project are:
* to collect a _code-to-text_ dataset from large projects (1–10 MLoC) for C++ and Java;
* to extract relevant project-level context from large code bases (1-10 MLoC) and to make a LLM use it;
* to increase the LLM's _pass@1_ rate by 10% compared to [ChatGPT](https://chat.openai.com/) and [CopilotX]() on the collected dataset.

## Providing LLMs with feedback from formal methods

Program analysis methods such as symbolic execution are efficient in finding deeply-hidden bugs, 
so they can serve as feedback for a LLM to make the model's output less vulnerable.

Our goals in this project are:

* to reduce the number of vulnerabilities by 20% compared to [ChatGPT](https://chat.openai.com/) in generated C code, using [FormAI](https://arxiv.org/pdf/2307.02192.pdf) dataset,
which is the dataset of ChatGPT-generated code snippets labelled with vulnerability type such as:
    * arithmetic overflow (AO),
    * buffer overflow (BO),
    * array bound violation (ABV),
    * dereference of a null pointer (DFN);
* to collect the dataset of 100 000 Java code snippets labeled with vulnerability types; 
* to gain a vulnerability rate, which is 20% less compared to [Codex](https://arxiv.org/pdf/2307.02192.pdf) on the collected dataset.

## Providing LLMs with code invariants as intermediate representations

Program analysis tools based on formal methods such as symbolic execution can provide a LLM with code invariants. 
These code invariants can help a LLM to "understand" code and, thus, to generate more comprehensive summaries. 
Invariants can also help a LLM to generate functionally correct and less vulnerable code.

Our goals in this project are:
* to increase the _pass@1_ rate for a docstring generation task by 10% compared to a base model ([PanGu Coder](https://arxiv.org/abs/2307.14936)) on [HumanEval-X](https://arxiv.org/abs/2303.17568) benchmark, 
  which is the multi-language version of [HumanEval](https://github.com/openai/human-eval) dataset.

# Practical applications: demo

To demonstrate the real-life applications of our approach, we plan to prototype the following solutions:
* a code summarization tool that can help developers with code reviews;
* a code refinement tool, which allows developers to pass the defective code to a LLM, so that the model can generate the bug fix.

# Related projects

<a href="{{"/pages/moscow-nlp.html" | relative_url}}">Noah’s Ark Moscow Projects</a>
