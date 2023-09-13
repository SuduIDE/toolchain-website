Next generation technology for C++ developers.
Its benefit from advanced distributed cloud native backend technologies.
It is compatible with tooling commonly used by C++ developers nowadays, like VsCode and Clangd.

## Support of big and hyper big C/C++ projects

Sudu backend services are distributed and horizontally scalable.
Sudu uses cloud native storages for its data. Additionally, Sudu applies incremental approach to data structures. So, for any change only tiny amount of data is stored even for huge projects.
As a result, Sudu can **serve codebase model for repositories with 10+ billions LOC altogether with its history of thousands of Git revisions**.
Another big benefit is that one can **quickly switch between Git revisions** w/o downloading full index database or running re-indexing.

## Precise code model for projects with cross compilation

Macro is a powerful tool to manage cross compilation in C++ projects. Side effect of its usage are possible issues in code navigation provided by IDE.
Sudu addresses code model precision issues by building **composite precise code model for all used combinations of compiler configuration options AKA “compilation profile”**.
User is being asked to define used compilation profiles in a file stored in Git repository.

![cpp-comp-profile]({{ "/assets/images/sudu/cpp-comp-profile.png" | relative_url }})

Taken this configuration Sudu runs Clangd for all defined profiles, stores its result (code model indexes) and supports aggregation of results.
Sudu also supports “compilation profiles” in C++ VsCode extension. Allowing to choose / switch currently used profile, search for usages across profiles.

![cpp-vscode]({{ "/assets/images/sudu/cpp-vscode-1.png" | relative_url }})

![cpp-vscode]({{ "/assets/images/sudu/cpp-vscode-2.png" | relative_url }})

![cpp-vscode]({{ "/assets/images/sudu/cpp-vscode-3.png" | relative_url }})

## Advanced code information based on Git historical data

Sudu VsCode extension uses historical data stored for code model elements (classes / methods) to display methods, classes age in UI.
Class history tool window provides overview of evolution for all class structure elements.

**!! SCREENSHOT NEEDED !!**

## AI-based context aware code summarization

{% include ai-code-summarization.md %}

{% if jekyll.environment == "internal" %}
{% include projects-internal/sudu-cpp-internal.md %}
{% endif %}
