---
title: IdeaLS
description: An Intellij IDEA plugin that is intended to turn IntelliJ IDEA into an LSP server and deliver the power of IDEA's language support to LSP clients.
permalink: /projects/ideals.html
category: productivity
stage: in progress
repository: https://github.com/SuduIDE/ideals
---

[LSP](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/)
is a protocol that allows decoupling the editor and the language support logic,
so you can (theoretically) use any editor supporting LSP client functionality
(like Visual Studio Code, Sublime Text, Vim, Emacs, Eclipse, etc.) with any LSP server.

There are a lot of LSP servers with different feature sets for different languages.
This one differs from the others in that it doesn't define its own language logic
but rather translates LSP requests into IDEA API calls.
So it does what your IDEA does, with the languages your IDEA supports, but with your favorite editor.
If you are working on a multi-language project you don't need many language-specific LSP servers anymore.
Just install IntelliJ IDEA with appropriate set of plugins and turn it into one LSP server for all the languages you need.

IdeaLS is designed to be as much language agnostic as possible.
However, for a better user experience some parts are still dependent on language-specific API.

The project was heavily inspired by [intellij-lsp-server](https://github.com/Ruin0x11/intellij-lsp-server)

## Requirements
- IntelliJ IDEA (Community or Ultimate) or IDEA Platform based IDE 2022.3 or higher

## Caveats
- The project is in a very early stage and really unstable.
- The server is tested with Visual Studio Code only.
- There are conflicts with the Android plugin on startup, so you have to disable it in the IDEA.
- There is A LOT of work yet to be done, please be indulgent.

## Feature list

| Name                          | Method                               |                    | VSCode Action                                         |
| ----------------------------- | ------------------------------------ | ------------------ | ----------------------------------------------------- |
| Workspace Symbols             | `workspace/symbol`                   | :heavy_check_mark: | `Ctrl + T`                                            |
| Execute Command               | `workspace/executeCommand`           | :x:                |                                                       |
| Diagnostics                   | `textDocument/publishDiagnostics`    | :heavy_check_mark: | N/A                                                   |
| Completion                    | `textDocument/completion`            | :heavy_check_mark: | `Ctrl + Space`                                        |
| Hover                         | `textDocument/hover`                 | :x:                |                                                       |
| Signature Help                | `textDocument/signatureHelp`         | :heavy_check_mark: |                                                       |
| Goto Declaration              | `textDocument/declaration`           | :x:                |                                                       |
| Goto Definition               | `textDocument/definition`            | :heavy_check_mark: | `Ctrl + Left mouse click`                             |
| Goto Type Definition          | `textDocument/typeDefinition`        | :heavy_check_mark: | `Right mouse click -> Go to -> Type defintion`        |
| Goto Implementation           | `textDocument/implementation`        | :x:                |                                                       |
| Find References               | `textDocument/references`            | :heavy_check_mark: | `Right mouse click -> Go To -> References`            |
| Document Highlights           | `textDocument/documentHighlight`     | :heavy_check_mark: | `Left mouse click on symbol`                          |
| Document Symbols              | `textDocument/documentSymbol`        | :heavy_check_mark: | `Ctrl + O`                                            |
| Code Action                   | `textDocument/codeAction`            | :heavy_check_mark: | `Ctrl + .`                                            |
| Code Lens                     | `textDocument/codeLens`              | :x:                |                                                       |
| Document Formatting           | `textDocument/formatting`            | :heavy_check_mark: | `Ctrl + Shift + P -> Format Document`                 |
| Document Range Formatting     | `textDocument/rangeFormatting`       | :heavy_check_mark: | `Select text -> Ctrl + Shift + P -> Format Selection` |
| Document on Type Formatting   | `textDocument/onTypeFormatting`      | :heavy_check_mark: | N/A                                                   |
| Rename                        | `textDocument/rename`                | :heavy_check_mark: | N/A                                                   |
| Prepare Call Hierarchy        | `textDocument/prepareCallHierarchy`  | :x:                |                                                       |
| Call Hierarchy Incoming Calls | `callHierarchy/incomingCalls`        | :x:                |                                                       |
| Call Hierarchy Outgoing Calls | `callHierarchy/outgoingCalls`        | :x:                |                                                       |
| Prepare Type Hierarchy        | `textDocument/prepareTypeHierarchy’` | :x:                |                                                       |
| Type Hierarchy Supertypes     | `typeHierarchy/supertypes`           | :x:                |                                                       |
| Type Hierarchy Subtypes       | `typeHierarchy/subtypes`             | :x:                |                                                       |
| Document Link                 | `textDocument/documentLink`          | :x:                |                                                       |
| Folding Range                 | `textDocument/foldingRange`          | :x:                |                                                       |
| Selection Range               | `textDocument/selectionRange`        | :x:                |                                                       |
| Semantic Tokens               | `textDocument/semanticTokens`        | :x:                |                                                       |
| Inline Value                  | `textDocument/inlineValue`           | :x:                |                                                       |
| Inlay Hint                    | `textDocument/inlayHint`             | :x:                |                                                       |
| Monikers                      | `textDocument/moniker`               | :x:                |                                                       |
| Document Color                | `textDocument/documentColor`         | :x:                |                                                       |
| Linked Editing Range          | `textDocument/linkedEditingRange`    | :x:                |                                                       |

## Contact

Sergey Anchipolevsky - [@serganch](https://t.me/serganch)

Project Link: [https://github.com/SuduIDE/ideals](https://github.com/SuduIDE/ideals)
