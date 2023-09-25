Modified version of well-known clangd LSP server from LLVM project

## Problem

The one-to-one client-server model imposed by the LSP specification (and by existing implementations, e.g. clangd itself) limits scalability of the applications and makes it hard to implement and use in a cloud native environment. The LSP server should be statefull according to the specification as it has to track files opened and modified by the client. Even usage of stdin/stdout as the most common LSP transport shows this is hardly scalable. Usually it means that there should be one LSP server instance running per each client session.

## Solution

Modify the existing clangd LSP server to make it almost stateless. It still needs to track files opened by the clients, but now it can do this for multiple user sessions and multiple projects. A single clangd instance can serve any number of clients and is limited only by the available system resources. It also does not need to have a local copy of the project repository thanks to Sudu DVFS. And it does not need to build and maintain a local copy of the project's code model thanks to Sudu Code Model backend. This means that time needed to deploy and launch a new instance of clangd LSP server becomes neglible. And this greatly improves scalability of the resulting solution because new stateless instances of clangd can be launched and stopped on demand depending on the current load and the number of active client sessions.

## Features

- Works with Sudu Distributed File System
- Code/project models provided by Sudu backend
- Stateless to support multiple IDE sessions
- Querying of historical data from code model 
{% if jekyll.environment == "internal" %}{% include projects-internal/sudu-clangd-features.md %}{% endif %}
