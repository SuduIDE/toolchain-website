---
title: Addition for Bear (C++)
presentation: /pdfs/bear.pdf
summary: Adding information about the project's linking structure to the result of Bear's work.
tags:
github: https://github.com/UnitTestBot/Bear/tree/main
---
There is a [JSON Compilation Database](https://clang.llvm.org/docs/JSONCompilationDatabase.html) that is used in clangd and parsers to determine how files are compiled in a project. But this information does not fully describe the structure of the project, which is often needed for more accurate analysis or, in the case of UTBotCpp, for rebuilding the project in llvm bitcode, so link_commands.json was also used in UTBotCpp [old description](https://github.com/Software- Analysis-Team/link-commands), but they were made for a very outdated python version of Bear; in this project, the export of this information is implemented on the new version of Bear, which is already written in C++.
