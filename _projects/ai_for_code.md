---
title: AI for code
description: Boost Large Language Models by injecting structured code models and code analysis
permalink: /projects/aiforcode.html
category: productivity
stage: sketch
reason: Large Language Models (LLM) are now trained on unstructured streams of tokens; mixing information about code graphs and verification of LLM output by formal methods should improve LLM quality.  
languages: 
  - java
  - cpp
tags:
  - cooperation
---

# AI for CODE
---
## General idea:
Modern AI-powered solutions demonstrate incredible performance in a wide variety of areas, including natural language processing, image generation and recognition, and more. Large Language Models (LLMs) have enabled an unprecedented level of understanding of software code. 

However, there are a significant issues of the current LLM algorithms, which restricts their practical application in the code area. 
First of all, code comprehension ability was demonstrated mainly for relatively short code snippets, like one function or a single code file. In practice, software program have much more complex project structure than single code file.
Another critical issue is that LLM might generate vulnerable code, because train dataset contain it.

But well-known program analysis methods can help to solve a subset of these problems that LLMs are not well suited for.

We believe that the correct way is to combine the strengths of both approaches, and in the proposed project we explore possible directions to achieve this combination.

---

## Project objectives:
Explore novel engineering technology of combination general AI LLM with program analysis methods as killer enhancement, to lift the availability of LLM tech and application on actual large scale software development process.

---

## We selected 3 directions of research:


![AI for Code directions]({{ "/assets/images/ai_for_code/directions.png" | relative_url }})



#### 1. Formal methods as a feedback for LLMs in Text-to-Code task.
Goals:
1.	Reduce by 20% compared to ChatGPT the number of vulnerabilities of type AO (arithmetic overflow), BO(buffer overflow), ABV(array bound violation), DFN (dereference of null pointer) in C code, using FormAI dataset. (FormAI is the dataset of ChatGPT generated code snippets labelled with vulnerabilities types https://arxiv.org/pdf/2307.02192.pdf)
2.	Collect the dataset of 100 000 code snippets with vulnerabilities labelling for Java.
3.	Achieve vulnerability rate 20% less compared to Codex on the collected dataset.

#### 2. Formal Code Specification as Intermediate Representation in Text-to-Code and Code-to-Text Tasks.
Goals:
1.	Increase pass@1 rate by 10% compared with base model (PanGu Coder) on HumanEval+ benchmark. (HumanEval+ is the novel updated version of HumanEval dataset, where more attention is payed to edge cases and code vulnerabilities [https://arxiv.org/pdf/2305.01210.pdf](https://arxiv.org/pdf/2305.01210.pdf))
2.	Increase pass rate pass@1 on docstring generation task on HumanEval benchmark by 10% compared with base model (PanGu Coder).

#### 3. Novel approaches to integrate project-level context.
Goals:
1.	Collect code-to-text dataset with 1-10 MLoC project context for C++ and Java.
2.	Increase project context up to 1-10 MLoC.
3.	Increase pass rate pass@1 by 10% compared to ChatGPT (and CopilotX) on the collected dataset.

---
## Demo:
We're planning to prototype next use cases for demonstration of practical value of the research:
1. code summary generation
2. code refinement

---
## See also

<a href="{{ "/pages/moscow-nlp.html" | relative_url}}">Other Noah's Ark Moscow Projects</a>
