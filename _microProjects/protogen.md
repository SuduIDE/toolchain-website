---
title: Domain classes generator for protobuf models
presentation: /pdfs/protogen.pdf
summary: Relieve developers from writing boilerplate code for protobuf models and gRPC clients   
tags:
github: https://github.com/SuduIDE/protogen
---
Protogen is the tool that relieves developers from writing boilerplate code for protobuf models and gRPC clients by generating high-level domain object Java classes with concise API suitable for business logic. It's easy to configure and integrate into a simple project with gRPC.

Many (if not the majority) of protobuf message specifications resemble domain entity descriptions very much. However, the code that is generated by the Java gRPC framework from protobuf specifications isn't suitable for purposes other than network interaction. While domain entities still need to be expressed in the code concisely, there is a need to transform domain objects into protobuf objects and vice-versa. That implies writing straightforward, but repetitive and annoying code, which is both error-prone and hard to maintain. This is where Protogen comes to help.
