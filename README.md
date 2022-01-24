# MUSA 611, Week 2

## Review

You can review the concepts raised in the Codecademy exercises in [review.md](review.md).

## Assignment

### Code Academy

* Complete Units 5 through 8 in the Codecademy Course
[Introductory Javascript](https://www.codecademy.com/learn/introduction-to-javascript)
  - Arrays
  - Loops
  - Iterators
  - Objects

> **NOTE:** All materials in this course are free by design. Any 'pro' sections
> in code academy are not assigned

## Exercise

### Tools

* A GitHub account
* A git client (e.g., the [`git` CLI](https://git-scm.com/downloads), or [GitHub Desktop](https://desktop.github.com/))
* A code editor with syntax highlighting, such as Atom, VS Code, or Sublime.
* A browser with a JavaScript console

### Exercises

#### Part 1

1.  Fork this repository to your own GitHub account, and clone it to your computer.
1.  Open the file _exercise/part1-types-variables-math/index.html_ in your browser.
1.  Open your JavaScript console ([Chrome](https://developer.chrome.com/docs/devtools/console/javascript/), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/javascript/), [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console), [Opera](https://dev.opera.com/extensions/testing/), [Safari](https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/mac)). You should see output such as:
    ```
    Task 1 failure!
    Task 2 failure!
    Task 3 failure!
    Task 4 failure!
    Task 5 failure!
    ```
1.  Open the file _exercise/part1-types-variables-math/index.js_ in your code editor of choice.
1.  Follow the instructions in the file.

#### Part 2

1.  Open the file _exercise/part2-abstracting-with-functions/index.html_ in your browser.
1.  Open the file _exercise/part2-abstracting-with-functions/index.js_ in your code editor of choice.
1.  Follow the instructions in the file. Remember to commit your code often as you go.

#### Submitting your code

When you submit your pull request, your code will be linted and tested automatically. If all of the tests pass you will see green check marks on the pull request. If any of the tests fail, you should see red X's. You can see what tests fail by clicking on the failed tasks and reading the logs. Edit your copy of the code until all the tests show green checks (_you do not have to re-submit a new PR to get the tests to re-run; as soon as you change your code on GitHub the tests will run_).

> **NOTE:** You can **run the tests on your computer** before submitting a pull request, or even before committing your code. You will have to install [Node.js](https://nodejs.org/en/) version 16 or later first. After you do, you can run the following in your terminal, working from the week folder:
> ```bash
> # Install test dependencies (this only has to be done once)
> npm install
>
> # Run the linter
> npx eslint exercise
>
> # Run the http server
> npx http-server --port 8000
> 
> # Open a new terminal and Run the tests
> npx jest
>  ```
