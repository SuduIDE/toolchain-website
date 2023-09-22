---
title: Symbolic execution + RL
presentation: /pdfs/RL_based_path_selection.pdf
summary: Improvement of path selection strategy efficiency for symbolic execution by using Machine Learning/Reinforcement Learning
tags: 
github: https://github.com/UnitTestBot/ML-path-selection
---

In this work, we propose a novel learning-based strategy able to effectively select promising states for symbolic execution to optimize specific metric (it might be test coverage, instruction coverage, etc.).
We have used RL algorithms for learning policy, because path selection problem is naturally formulated in terms agent-environment interaction and getting reward. 
Also we have used sophisticated method for encoding world state - combination of hand crafted features, GNN embeddings and RNN memory.

