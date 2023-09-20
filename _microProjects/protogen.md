---
name: Generation of high-level client code for GRPC clients/services in Java
presentation: Presentation
description: short overview
---
<details>
    <summary>short description</summary>
Many (if not majority) of protobuf message specifications resemble domain entity descriptions very much. However the code that is generated by Java gRPC framework from protobuf specifications isn't suitable for purposes other than network interaction. While domain entites still need to be expressed in the code in consise and convenient manner, there is a need of transforming domain objects into protobuf objects and vice-versa. That implies writing straightforward, but repeatitive and annoying code, which both error-prone and hard to maintain. This is where Protogen comes to help.

Protogen is the tool that relieves developers from writing boilerplate code for protobuf models and gRPC clients by generating high-level domain object Java classes with concise API suitable for business logic. It's easy to configure and integrate into a simple project with gRPC.

</details>
![github]({{ "/assets/images/github_icon.png" | relative_url }})[Source code](https://github.com/SuduIDE/sudu/tree/master/protogen)