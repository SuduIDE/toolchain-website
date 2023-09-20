---
title: Sudu Editor
description: Lightweight code editor with built-in support for C++ and Java code models.
permalink: /projects/sudu-editor.html
category: productivity
stage: development
reason: Run fast and identically in browser and desktop
languages:
  - java
  - cpp
integrations: Project 2, Project 3
repository: https://github.com/SuduIDE/sudu-editor
tags:
  - collaboration
  - open source
---
It is designed and implemented from scratch with focus on portability and performance
and with ability to run identically well from single codebase
-	on Desktop in pure JVM
-	and in WEB environment

**As a result** - it is easy and convenient to develop using fast desktop JVM, but targeting WEB

**Sudu Editor** is not based on any existent heavy frameworks like Chromium or Swing which means:
-	there is no need to merge upstream and there are no unexpected conflicts
-	it is easy portable to run on mobile platforms

<div id="editor"></div>

{% include sudu-editor-demo.html %}

[Full Screen Demo](https://kirillp.github.io/)


**Diff View**

Sudu Editor can be also used as a diff tool:

<div id="diff"></div>

[Full Screen Demo](https://kirillp.github.io/#diffDemo)
