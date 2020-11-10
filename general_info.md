# THIS IS GENERAL DEVELOPMENT INFO

* Nano: allows us to edit files from the CLI

* Node.js: Allows us to run JavaScript files on our own devices
    * Example is server-side code running on a dedicated device/server

* JavaScript: 
    * A coding language, primarily used on the internet
        * It can be used for front and back end development which means there aren't any issues passing data from front to back-end
        * It is flexible, which means that it can be used to create many different web-applications or websites. It CAN be used for many different tasks
        * Loosely typed: we dont have to get granular with the code (in comparison to most other languages)
        * Standardization & populartiy make it super useful 
        * Multi paradigm: JavaScript can be functional or object oriented 

* NPM: Node Package Manager - used to download packages that are associated with Node.js

* Brew: Mac-Specific, handles packages that interact with the Mac OS

* Bash: a command processor that typically runs in a text window where the user types commands that cause actions, it can also read and execute commands from a file, called a shell script.
    * Git Bash: used on Windows environments, it provides an emulation layer for a Git command line experience

* Powershell: a cross-platform task automation and configuration management framework, consisting of a command-line shell and scripting language. Unlike most shells, which accept and return text, PowerShell is built on top of the .NET Common Language Runtime (CLR), and accepts and returns .NET objects.

* Git: distributed version-control system for tracking changes in source code during software development

* GitHub: Sharing code, specfically versioning software. It keeps track of older versions of our applications

* SOME COMMON CLI COMMANDS:
    * Change directory: cd <folder name>
    * Go back a directory: cd ..
    * List: ls
    * List all: ls -a
    * Print working directory: pwd
    * Make directory: mkdir <folder name>
    * Make file: touch <filename> 
    * Remove: rm <filename>
    * Remove forcefully: rm -rf <filename or folder name>
    * Move: mv <file or folername to be moved> <location to receive file>
    * Clear the CLI: clear
    * Show previous commands: history
    * (Not a command) `.` means current, `..` means back or up
    * Kill a process or infinite process: control-c
    * Go to first character: control-a
    * Go to last character: control-e
    * Get previous command: press up
    * Open node envioronment: node
    * Run JS file: node <JS filename>

* Using console log to check the file is working
    * This is code that goes within a JS file 
        * console.log('Hello World!');

* What is pseudo-code?
    * "Fake" or practice or placeholder code (Frequently comments are used for this)

* What is a dynamic solution?
    * Dynamic solutions are solutions to a question that can be re-used
    * Dynamic Programming is a method for solving a complex problems by breaking them down into a collection of simpler subproblems, and solving each of those subproblems just once and re-using code when necessary.

* Variable naming conventions:
    * camelCase: thisIsCamelCase, each new word has a capital letter
    * snake_case: this_is_snake_case, underscores between words
    * PascalCase: ThisIsPascalCase, every new word has a capital, including the first (which can cause problems in JS)

* Comments:
    * Every language has comments 
        * JS: // Comments go after slashes, these slashes need to be before any comment 
        * HTML: <-- Comments go here, can be multi-line -->
        * CSS: /* Comments go here */

* Punctuation Names:
    * Parentheses: () 
    * Curly Braces: {}
    * Square Brackets: []
    * Hard Brackets: [] (less-common)
    * Bracket: [] (uncommon)
    * Brace: {} (uncommon)
    * Comma: ,
    * Quotes: '' or ""
    * Single Quotes: ''
    * Double Quotes: ""
    * Backticks: ``
    * Semi-Colon: ;
    * Colon: :
    * Slash: /
    * Forward Slash: /
    * Back Slash: \
    * Dash: - 
    * Underscore: _ 
    * tilde: ~

* Hoisting
    * The way that JavaScript executes a file
    * It quickly looks for all functions and variables and makes them available at the top of their scope
        * Note: just the variable declaration is hoisted, not the value

* Scope 
    * Definition: What is accessible from within a specific block of code 
        * Global: declared outside anything else (function or curly braces)
        * Functional: declared within a function
        * Block: declared within a pair of curly braces

* Types of variables:
    * var
        * ES5
        * Functional scope
    * let 
        * ES6
        * Block scope
        * Intended to be replacement for var
    * const
        * ES6
        * Block scope
        * cannot be re-assigned. As a result, this improves run-time efficiency slightly