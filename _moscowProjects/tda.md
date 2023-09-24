---
title: Topological Data Analysis
presentation: 
summary: We have applied TDA to speech processing, analyzing the HuBERT Transformer and finding excellent features from its attention maps
tags:
github: 
---
TDA finds very informative features based on topological invariants. We apply topological data analysis (TDA) to speech classification problems and to the introspection of a pretrained speech model, HuBERT. To this end, we introduce a number of topological and algebraic features derived from Transformer attention maps and embeddings. We show that a simple linear classifier built on top of such features outperforms a fine-tuned classification head. In particular, we achieve an improvement of about  accuracy and  ERR on four common datasets; on CREMA-D, the proposed feature set reaches a new state of the art performance with accuracy . We also show that topological features are able to reveal functional roles of speech Transformer heads; e.g., we find the heads capable to distinguish between pairs of sample sources (natural/synthetic) or voices without any downstream fine-tuning. Our results demonstrate that TDA is a promising new approach for speech analysis, especially for tasks that require structural prediction.

