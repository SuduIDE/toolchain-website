---
title: UnitTestBot
description: Automated unit test generation and precise code analysis.
permalink: /projects/utbot.html
category: quality
stage: prototype-ready
languages:
   - java
   - kotlin
   - cpp
   - python
   - javascript
   - go
repository: https://github.com/UnitTestBot/UTBotJava
tags:
   - cooperation
   - opensource
website: https://www.utbot.org
---

👉 Find UnitTestBot on [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/19445-unittestbot).

👉 Visit the [official UnitTestBot website](https://www.utbot.org/).

# What is UnitTestBot?

UnitTestBot is the tool for **automated unit test generation** and **precise code analysis**. It produces ready-to-use 
test 
cases for 
Java — with 
valid inputs and comments. It can even predict whether the tests fail or pass. You can analyze them, run them, show coverage — as if you've created them personally.

The **symbolic execution engine** paired with a **smart fuzzing technique** constitutes the core of UnitTestBot. It helps to **find errors** and **prevent regressions** in the code in a much more efficient way — UnitTestBot **maximizes path coverage** while **minimizing the number of tests and false positives**.

UnitTestBot represents all the test summaries in a **human-readable format**. The intelligible test method names and comments help you to control the whole testing process. Test failed? The summary refers you to the related branch or the condition under test.

# Get started

Try the **[online demo](https://www.utbot.org/demo)** to generate unit tests with one click.

Get to know the **full version** of UnitTestBot plugin with this quick guide:

<details>
  <summary>Install UnitTestBot plugin for IntelliJ IDEA</summary>

Try the most straightforward path to start using UnitTestBot plugin.
1. Please check the [system requirements](https://github.com/UnitTestBot/UTBotJava/wiki/Check-system-requirements).
2. Open your IntelliJ IDEA.
3. Go to **File > Settings... > Plugins > Marketplace**.
4. In the search field type *UnitTestBot* — you'll see the UnitTestBot plugin page.
5. Press the **Install** button and wait until it changes to **Installed**, then click **OK**.

Now you can find the UnitTestBot plugin enabled in the **File > Settings > Plugins** window.

Do you want to manually choose the build or to update the plugin? Please refer to [Install or update plugin](https://github.com/UnitTestBot/UTBotJava/wiki/Install-or-update-plugin) in our user guide.

____________
</details>

<details>
  <summary>Generate tests with default configuration</summary>

Proceed to generating unit tests for the existing Java project. If you don't have one, create it using the [JetBrains tutorial](https://www.jetbrains.com/help/idea/creating-and-running-your-first-java-application.html).

1. Open your Java project in IntelliJ IDEA. 
2. Right-click the required package or a file in the Project tool window, scroll the menu down to the bottom and 
   choose **Generate Tests with UnitTestBot...**
3. In the **Generate Tests with UnitTestBot** window tick the classes or methods you'd like to cover with unit tests and 
   press **Generate Tests** or **Generate and Run**.

Now you can see the resulting test class or classes in the Editor tool window.

Need to configure testing framework, mocking strategy or parameterization? Please check all [configuration options](https://github.com/UnitTestBot/UTBotJava/wiki/Fine-tune-test-generation).

____________
</details>

<details>
  <summary>Make use of generated tests</summary>

What can you do with the output?

1. To *find and fix the errors* in your code:

* Run the generated tests: right-click the test class or a folder with tests and choose **Run**.

* In the Run tool window you can see the tests failed with the brief failure explanation.

* Fix your errors if needed.

2. To *prevent regressions*:

* Having your errors fixed, run the tests again. "Passed"? Commit them as the regression suite.

* Introduce changes in the code and run your tests as often as needed!

* Tests failed? Decide whether it is a bug or a feature and generate new tests if necessary.

3. To *view coverage*:

Right-click the test class, choose **More Run/Debug > Run ... with Coverage**.

Want to know more about test descriptions or SARIF reports? Please learn how to [Get use of test results](https://github.com/UnitTestBot/UTBotJava/wiki/Get-use-of-test-results).

____________
</details>

# Contribute to UnitTestBot

UnitTestBot is an open source project. We welcome everyone who wants to make UnitTestBot better — introduce a new feature or report a bug. We have only one kind request for our contributors: we expect you to prove the necessity and quality of the suggested changes.

How can you do this? Refer to our [Contributing guide](https://github.com/UnitTestBot/UTBotJava/blob/main/CONTRIBUTING.md).

Feel free to join the [Discussions](https://github.com/UnitTestBot/UTBotJava/discussions)!

And thank you for your time and effort! ⭐

# Find support

Having troubles with using UnitTestBot? Contact us [directly](https://www.utbot.org/about).


# UTBot for C++

UTBot C/C++ generates test cases by code, trying to cover a maximum number of statements and execution paths. We treat source code as a source of truth, assuming that behavior is correct and corresponds to initial user demand. Generated tests are placed in the so-called regression suite. Thus, we fix current behavior with the help of generated test cases. Using UTBot for C/C++, developers obtain full control of their code. No future change can break the code without being noticed once it's covered with tests generated by UTBot. This way, modifications made by developers to an existing code are much safer. Hence, with the help of generated unit tests, UTBot provides dramatic code quality improvement.

Features demonstration in 5 min (click to see on [YouTube](https://www.youtube.com/watch?v=bDJyWEeYhvk)):

[![UTBot C/C++ Demo](https://img.youtube.com/vi/bDJyWEeYhvk/0.jpg)](https://www.youtube.com/watch?v=bDJyWEeYhvk "UTBot C/C++ Demo")

Try UTBot demo online [here](https://www.utbot.org/demo/?language=C)!

More info on [wiki](https://github.com/UnitTestBot/UTBotCpp/wiki)
