// quizData.js

const quizDataNew = {
    quiz1: {
        questions: [
            {
                question: "What is the most efficient way to add JavaScript code DIRECTLY in an HTML file?",
                choices: [
                    "Add it anywhere in the HTML file",
                    "Add it in the <head> section without any attributes",
                    "Add it at the bottom just before the </body> tag",
                    "Add it at the top of the <body> section"
                ],
                correctAnswer: "Add it at the bottom just before the </body> tag"
            },
            {
                question: "When adding EXTERNAL JavaScript files, what is the recommended approach?",
                choices: [
                    "Add them in the <body> without any attributes",
                    "Add them in the <head> with the defer attribute",
                    "Add them at the end of the file",
                    "Add them anywhere with async attribute"
                ],
                correctAnswer: "Add them in the <head> with the defer attribute"
            },
            {
                question: "What keyboard combination opens DevTools in web browsers on Microsoft Windows?",
                choices: [
                    "Ctrl + Shift + i",
                    "Ctrl + Alt + Delete",
                    "Ctrl + P",
                    "Shift + Alt + i"
                ],
                correctAnswer: "Ctrl + Shift + i"
            },
            {
                question: "Which of the following is a benefit of using EXTERNAL JavaScript files?",
                choices: [
                    "They make the HTML file larger",
                    "They require more server requests",
                    "They separate HTML and JavaScript code",
                    "They must include <script> tags"
                ],
                correctAnswer: "They separate HTML and JavaScript code"
            },
            {
                question: "What is the purpose of the console.log() statement in JavaScript?",
                choices: [
                    "To create a new console window",
                    "To log users out of the application",
                    "To display or log information as part of the coding process",
                    "To clear the console history"
                ],
                correctAnswer: "To display or log information as part of the coding process"
            },
            {
                question: "Why is it beneficial to use the defer attribute with external JavaScript files?",
                choices: [
                    "It prevents the JavaScript from running at all",
                    "It makes the code run faster",
                    "It allows the code files to load 'in the background' and run after the web page is loaded",
                    "It reduces the file size"
                ],
                correctAnswer: "It allows the code files to load 'in the background' and run after the web page is loaded"
            },
            {
                question: "What's the correct way to add console.log() statements in your code?",
                choices: [
                    "console[log(\"Hello\")]",
                    "console.log(\"Hello\");",
                    "Console.Log(\"Hello\")",
                    "log.console(\"Hello\")"
                ],
                correctAnswer: "console.log(\"Hello\");"
            },
            {
                question: "What happens if JavaScript code tries to access HTML elements before the page is fully loaded?",
                choices: [
                    "Nothing, JavaScript will wait automatically",
                    "The web page page will crash",
                    "You may see errors in the Console because the elements don't exist yet",
                    "The JavaScript will execute but ignore those specific lines"
                ],
                correctAnswer: "You may see errors in the Console because the elements don't exist yet"
            },
            {
                question: "Which statement about external JavaScript files is FALSE?",
                choices: [
                    "They separate HTML and JavaScript code",
                    "They make code easier to maintain",
                    "They should include <script> tags inside the file",
                    "They can be cached to speed up page loads"
                ],
                correctAnswer: "They should include <script> tags inside the file"
            },
            {
                question: "What is a key feature of the JavaScript Console in DevTools?",
                choices: [
                    "It only works with external JavaScript files",
                    "It provides a real-time environment to try JavaScript code",
                    "It automatically fixes coding errors",
                    "It requires a separate installation"
                ],
                correctAnswer: "It provides a real-time environment to try JavaScript code"
            }
        ]
    },
    quiz2: {
        questions: [
            {
                question: "Which keyword should you use when declaring a variable whose value will NOT change when the progrm is run?",
                choices: [
                    "let",
                    "const",
                    "var",
                    "static"
                ],
                correctAnswer: "const"
            },
            {
                question: "What is the correct way to declare a variable name containing multiple words?",
                choices: [
                    "first name",
                    "first-name",
                    "firstName",
                    "FIRSTNAME"
                ],
                correctAnswer: "firstName"
            },
            {
                question: "Which one of the following is a valid way to declare a string variable in JavaScript?",
                choices: [
                    "let name = Smith;",
                    "let name = 'Smith';",
                    "let name = Smith';",
                    "let 'name' = 'Smith';"
                ],
                correctAnswer: "let name = 'Smith';"
            },
            {
                question: "What does the following code output: let price = 42; console.log(typeof price);",
                choices: [
                    "string",
                    "number",
                    "integer",
                    "decimal"
                ],
                correctAnswer: "number"
            },
            {
                question: "In JavaScript, what does the = operator represent?",
                choices: [
                    "Equal to",
                    "Comparison",
                    "Assignment",
                    "Mathematical equality"
                ],
                correctAnswer: "Assignment"
            },
            {
                question: "Which symbols can be used to create a string variable in JavaScript?",
                choices: [
                    "Only single quotes (')",
                    "Only double quotes (\")",
                    "Only backticks (`)",
                    "Single quotes, double quotes, or backticks"
                ],
                correctAnswer: "Single quotes, double quotes, or backticks"
            },
            {
                question: "What is the correct way to use template literals in JavaScript?",
                choices: [
                    "'Hello ${name}'",
                    "\"Hello ${name}\"",
                    "`Hello ${name}`",
                    "{Hello ${name}}"
                ],
                correctAnswer: "`Hello ${name}`"
            },
            {
                question: "Which statement about JavaScript variable names is TRUE?",
                choices: [
                    "They can contain spaces",
                    "They are not case-sensitive",
                    "They are case-sensitive",
                    "They must start with a number"
                ],
                correctAnswer: "They are case-sensitive"
            },
            {
                question: "What type of variable is commonly used to store true/false values in JavaScript?",
                choices: [
                    "String",
                    "Number",
                    "Boolean",
                    "Binary"
                ],
                correctAnswer: "Boolean"
            },
            {
                question: "When declaring a numeric variable in JavaScript, what should you NOT do?",
                choices: [
                    "Omit the quotes around the number",
                    "Use decimal points for floating numbers",
                    "Put quotes around the number",
                    "Use whole numbers"
                ],
                correctAnswer: "Put quotes around the number"
            }
        ]
    },
    quiz3: {
        questions: [
            {
                question: "In JavaScript string indexing, what is the index of the first character in a string?",
                choices: [
                    "1",
                    "0",
                    "-1",
                    "null"
                ],
                correctAnswer: "0"
            },
            {
                question: "Given the string let str = 'Hello, World!';, what would str.length return?",
                choices: [
                    "12",
                    "13",
                    "11",
                    "14"
                ],
                correctAnswer: "13"
            },
            {
                question: "Which method would you use to remove whitespace from both the beginning and end of a string?",
                choices: [
                    "strip()",
                    "trim()",
                    "clean()",
                    "removeSpace()"
                ],
                correctAnswer: "trim()"
            },
            {
                question: "What is the output of 'JavaScript'.slice(0, 4)?",
                choices: [
                    "Java",
                    "JavaS",
                    "Scri",
                    "Java "
                ],
                correctAnswer: "Java"
            },
            {
                question: "How can you check if a string starts with a specific substring?",
                choices: [
                    "string.beginsWith()",
                    "string.hasPrefix()",
                    "string.startsWith()",
                    "string.begins()"
                ],
                correctAnswer: "string.startsWith()"
            },
            {
                question: "What happens to the original string when you use string methods like toLowerCase()?",
                choices: [
                    "It is modified directly",
                    "It creates a new string and leaves the original unchanged",
                    "It deletes the original string",
                    "It throws an error"
                ],
                correctAnswer: "It creates a new string and leaves the original unchanged"
            },
            {
                question: "Which method would you use to replace all occurrences of a character in a string?",
                choices: [
                    "replace()",
                    "replaceAll()",
                    "replaceEvery()",
                    "changeAll()"
                ],
                correctAnswer: "replaceAll()"
            },
            {
                question: "What is the correct way to chain string methods in JavaScript?",
                choices: [
                    "str.trim().toLowerCase()",
                    "str.trim;str.toLowerCase",
                    "str.trim + str.toLowerCase",
                    "str(trim)(toLowerCase)"
                ],
                correctAnswer: "str.trim().toLowerCase()"
            },
            {
                question: "What would typeof return when used with a string variable?",
                choices: [
                    "text",
                    "String",
                    "string",
                    "character"
                ],
                correctAnswer: "string"
            },
            {
                question: "If you use the indexOf() method and the substring is not found, what is returned?",
                choices: [
                    "0",
                    "-1",
                    "undefined",
                    "null"
                ],
                correctAnswer: "-1"
            }
        ]
    },
    quiz4: {
        questions: [
            {
                question: "Which of the following variable assignments will create a numeric data type in JavaScript?",
                choices: [
                    "let num = '42';",
                    "let num = `42`;",
                    "let num = 42;",
                    "let num = \"42\";"
                ],
                correctAnswer: "let num = 42;"
            },
            {
                question: "What is the result of the expression: 5 + 2 * 3?",
                choices: [
                    "21",
                    "11",
                    "17",
                    "15"
                ],
                correctAnswer: "11"
            },
            {
                question: "Which of the following is NOT a valid number in JavaScript?",
                choices: [
                    "-6.3456",
                    ".2727",
                    "34,000",
                    "42"
                ],
                correctAnswer: "34,000"
            },
            {
                question: "What will typeof return when used with a numeric variable?",
                choices: [
                    "integer",
                    "float",
                    "number",
                    "numeric"
                ],
                correctAnswer: "number"
            },
            {
                question: "What is the result of (5 + 2) * 3?",
                choices: [
                    "11",
                    "21",
                    "17",
                    "15"
                ],
                correctAnswer: "21"
            },
            {
                question: "Which operator cannot be applied to literal values and can only be used with numeric variables?",
                choices: [
                    "Addition (+)",
                    "Multiplication (*)",
                    "Increment (++)",
                    "Division (/)"
                ],
                correctAnswer: "Increment (++)"
            },
            {
                question: "In JavaScript's operator precedence, which operation is performed first?",
                choices: [
                    "Addition",
                    "Subtraction",
                    "Division",
                    "Multiplication"
                ],
                correctAnswer: "Division"
            },
            {
                question: "What happens when you declare let someVar = '12';?",
                choices: [
                    "Creates a numeric variable with value 12",
                    "Creates a string variable with value '12'",
                    "Throws an error",
                    "Automatically converts to number 12"
                ],
                correctAnswer: "Creates a string variable with value '12'"
            },
            {
                question: "If you have let x = 5; what will be the value of x after --x?",
                choices: [
                    "6",
                    "4",
                    "5",
                    "undefined"
                ],
                correctAnswer: "4"
            },
            {
                question: "Which statement about JavaScript numbers is TRUE?",
                choices: [
                    "JavaScript has separate types for integers and decimals",
                    "JavaScript only has one main number data type for practical use",
                    "JavaScript cannot handle decimal numbers",
                    "JavaScript requires type declaration for numbers"
                ],
                correctAnswer: "JavaScript only has one main number data type for practical use"
            }
        ]
    },
    quiz5: {
        questions: [
            {
                question: "What happens when a function is declared with the function keyword?",
                choices: [
                    "It must be called immediately",
                    "It is hoisted and can be called before declaration",
                    "It throws an error if not called immediately",
                    "It can only be called once"
                ],
                correctAnswer: "It is hoisted and can be called before declaration"
            },
            {
                question: "Which of the following is NOT a valid function name in JavaScript?",
                choices: [
                    "calculateTax()",
                    "first-name()",
                    "updateTotal()",
                    "setFontSize()"
                ],
                correctAnswer: "first-name()"
            },
            {
                question: "What happens when you pass more arguments than parameters to a function?",
                choices: [
                    "The function throws an error",
                    "The extra arguments are stored in a special array",
                    "The function ignores the excess arguments",
                    "The function automatically creates new parameters"
                ],
                correctAnswer: "The function ignores the excess arguments"
            },
            {
                question: "What is the value of a parameter if no argument is passed to it and no default value is set?",
                choices: [
                    "null",
                    "undefined",
                    "0",
                    "false"
                ],
                correctAnswer: "undefined"
            },
            {
                question: "What is the difference between parameters and arguments in JavaScript functions?",
                choices: [
                    "They are exactly the same thing",
                    "Parameters are in function declaration, arguments are values passed when calling",
                    "Arguments are in function declaration, parameters are values passed when calling",
                    "Parameters are only for numbers, arguments are for strings"
                ],
                correctAnswer: "Parameters are in function declaration, arguments are values passed when calling"
            },
            {
                question: "What happens when a return statement is executed in a function?",
                choices: [
                    "The function continues to the next line",
                    "The function pauses execution temporarily",
                    "The function stops executing and returns a value",
                    "The function restarts from the beginning"
                ],
                correctAnswer: "The function stops executing and returns a value"
            },
            {
                question: "Which statement about function scope is correct?",
                choices: [
                    "All variables are always global",
                    "Variables declared inside a function are accessible everywhere",
                    "Variables declared inside a function are only accessible within that function",
                    "Function scope only applies to numbers"
                ],
                correctAnswer: "Variables declared inside a function are only accessible within that function"
            },
            {
                question: "What is the recommended naming convention for functions in JavaScript?",
                choices: [
                    "Start with a number",
                    "Use spaces between words",
                    "Start with an imperative verb using camelCase",
                    "Use all capital letters"
                ],
                correctAnswer: "Start with an imperative verb using camelCase"
            },
            {
                question: "How can you prevent a function parameter from being undefined if no argument is passed?",
                choices: [
                    "Use the required keyword",
                    "Add a default value in the parameter",
                    "You cannot prevent it",
                    "Use the mandatory operator"
                ],
                correctAnswer: "Add a default value in the parameter"
            },
            {
                question: "Where should function declarations NOT be used?",
                choices: [
                    "In the global scope",
                    "Inside other functions",
                    "Inside conditionals and loops",
                    "At the top of a file"
                ],
                correctAnswer: "Inside conditionals and loops"
            }
        ]
    },

quiz6: {
    questions: [
        // ... previous questions 1-6 remain the same ...
        {
            question: "What does HTMLHint do when you open a web page with errors in VS Code?",
            choices: [
                "Automatically corrects the errors",
                "Shows a warning with the number of errors and their line numbers",
                "Deletes invalid HTML tags",
                "Highlights the errors in the browser"
            ],
            correctAnswer: "Shows a warning with the number of errors and their line numbers"
        },
        {
            question: "What is the correct way to save an HTML file when using the web browser 'Save as...' command?",
            choices: [
                "Web Page, HTML Only",
                "Web Page, complete",
                "Text Document",
                "All Files"
            ],
            correctAnswer: "Web Page, HTML Only"
        },
        {
            question: "When uploading your work to Github, what method must be used if you're uploading both files and folders?",
            choices: [
                "File select method",
                "Drag-and-drop method",
                "Command line interface",
                "GitHub desktop application"
            ],
            correctAnswer: "Drag-and-drop method"
        },
        {
            question: "What is the correct way to ensure your web page is published on GitHub?",
            choices: [
                "Use a local file server",
                "Commit changes in your repository and wait a few minutes",
                "Send an email to GitHub support",
                "Only upload HTML files and avoid CSS or JS files"
            ],
            correctAnswer: "Commit changes in your repository and wait a few minutes"
        }
    ]
},

quiz7: {
    questions: [
        {
            question: "What happens when a function is declared with the function keyword?",
            choices: [
                "It must be called immediately",
                "It is hoisted and can be called before declaration",
                "It throws an error if not called immediately",
                "It can only be called once"
            ],
            correctAnswer: "It is hoisted and can be called before declaration"
        },
        {
            question: "Which of the following is NOT a valid function name in JavaScript?",
            choices: [
                "calculateTax()",
                "first-name()",
                "updateTotal()",
                "setFontSize()"
            ],
            correctAnswer: "first-name()"
        },
        {
            question: "What happens when you pass more arguments than parameters to a function?",
            choices: [
                "The function throws an error",
                "The extra arguments are stored in a special array",
                "The function ignores the excess arguments",
                "The function automatically creates new parameters"
            ],
            correctAnswer: "The function ignores the excess arguments"
        },
        {
            question: "What is the value of a parameter if no argument is passed to it and no default value is set?",
            choices: [
                "null",
                "undefined",
                "0",
                "false"
            ],
            correctAnswer: "undefined"
        },
        {
            question: "What is the difference between parameters and arguments in JavaScript functions?",
            choices: [
                "They are exactly the same thing",
                "Parameters are in function declaration, arguments are values passed when calling",
                "Arguments are in function declaration, parameters are values passed when calling",
                "Parameters are only for numbers, arguments are for strings"
            ],
            correctAnswer: "Parameters are in function declaration, arguments are values passed when calling"
        },
        {
            question: "What happens when a return statement is executed in a function?",
            choices: [
                "The function continues to the next line",
                "The function pauses execution temporarily",
                "The function stops executing and returns a value",
                "The function restarts from the beginning"
            ],
            correctAnswer: "The function stops executing and returns a value"
        },
        {
            question: "Which statement about function scope is correct?",
            choices: [
                "All variables are always global",
                "Variables declared inside a function are accessible everywhere",
                "Variables declared inside a function are only accessible within that function",
                "Function scope only applies to numbers"
            ],
            correctAnswer: "Variables declared inside a function are only accessible within that function"
        },
        {
            question: "What is the recommended naming convention for functions in JavaScript?",
            choices: [
                "Start with a number",
                "Use spaces between words",
                "Start with an imperative verb using camelCase",
                "Use all capital letters"
            ],
            correctAnswer: "Start with an imperative verb using camelCase"
        },
        {
            question: "How can you prevent a function parameter from being undefined if no argument is passed?",
            choices: [
                "Use the required keyword",
                "Add a default value in the parameter",
                "You cannot prevent it",
                "Use the mandatory operator"
            ],
            correctAnswer: "Add a default value in the parameter"
        },
        {
            question: "Where should function declarations NOT be used?",
            choices: [
                "In the global scope",
                "Inside other functions",
                "Inside conditionals and loops",
                "At the top of a file"
            ],
            correctAnswer: "Inside conditionals and loops"
        }
    ]
},



quiz8: {
    questions: [
        {
            question: "What happens when a function is declared with the function keyword?",
            choices: [
                "It must be called immediately",
                "It is hoisted and can be called before declaration",
                "It throws an error if not called immediately",
                "It can only be called once"
            ],
            correctAnswer: "It is hoisted and can be called before declaration"
        },
        {
            question: "Which of the following is NOT a valid function name in JavaScript?",
            choices: [
                "calculateTax()",
                "first-name()",
                "updateTotal()",
                "setFontSize()"
            ],
            correctAnswer: "first-name()"
        },
        {
            question: "What happens when you pass more arguments than parameters to a function?",
            choices: [
                "The function throws an error",
                "The extra arguments are stored in a special array",
                "The function ignores the excess arguments",
                "The function automatically creates new parameters"
            ],
            correctAnswer: "The function ignores the excess arguments"
        },
        {
            question: "What is the value of a parameter if no argument is passed to it and no default value is set?",
            choices: [
                "null",
                "undefined",
                "0",
                "false"
            ],
            correctAnswer: "undefined"
        },
        {
            question: "What is the difference between parameters and arguments in JavaScript functions?",
            choices: [
                "They are exactly the same thing",
                "Parameters are in function declaration, arguments are values passed when calling",
                "Arguments are in function declaration, parameters are values passed when calling",
                "Parameters are only for numbers, arguments are for strings"
            ],
            correctAnswer: "Parameters are in function declaration, arguments are values passed when calling"
        },
        {
            question: "What happens when a return statement is executed in a function?",
            choices: [
                "The function continues to the next line",
                "The function pauses execution temporarily",
                "The function stops executing and returns a value",
                "The function restarts from the beginning"
            ],
            correctAnswer: "The function stops executing and returns a value"
        },
        {
            question: "Which statement about function scope is correct?",
            choices: [
                "All variables are always global",
                "Variables declared inside a function are accessible everywhere",
                "Variables declared inside a function are only accessible within that function",
                "Function scope only applies to numbers"
            ],
            correctAnswer: "Variables declared inside a function are only accessible within that function"
        },
        {
            question: "What is the recommended naming convention for functions in JavaScript?",
            choices: [
                "Start with a number",
                "Use spaces between words",
                "Start with an imperative verb using camelCase",
                "Use all capital letters"
            ],
            correctAnswer: "Start with an imperative verb using camelCase"
        },
        {
            question: "How can you prevent a function parameter from being undefined if no argument is passed?",
            choices: [
                "Use the required keyword",
                "Add a default value in the parameter",
                "You cannot prevent it",
                "Use the mandatory operator"
            ],
            correctAnswer: "Add a default value in the parameter"
        },
        {
            question: "Where should function declarations NOT be used?",
            choices: [
                "In the global scope",
                "Inside other functions",
                "Inside conditionals and loops",
                "At the top of a file"
            ],
            correctAnswer: "Inside conditionals and loops"
        }
    ]
},
quiz9: {
    questions: [
        {
            question: "What is the main characteristic of an anonymous function?",
            choices: [
                "It must be called immediately",
                "It has no name",
                "It cannot have parameters",
                "It cannot return values"
            ],
            correctAnswer: "It has no name"
        },
        {
            question: "How can an anonymous function be called in a program?",
            choices: [
                "By using its name directly",
                "By assigning it to a variable and calling the variable",
                "By using the anonymous keyword",
                "It cannot be called, only executed immediately"
            ],
            correctAnswer: "By assigning it to a variable and calling the variable"
        },
        {
            question: "Which keyword is recommended when declaring a variable to store an anonymous function?",
            choices: [
                "let",
                "var",
                "const",
                "function"
            ],
            correctAnswer: "const"
        },
        {
            question: "What is the key difference between function declarations and anonymous functions regarding hoisting?",
            choices: [
                "Anonymous functions are hoisted, function declarations are not",
                "Both are hoisted",
                "Anonymous functions are not hoisted, function declarations are",
                "Neither are hoisted"
            ],
            correctAnswer: "Anonymous functions are not hoisted, function declarations are"
        },
        {
            question: "How do you make an anonymous function execute immediately?",
            choices: [
                "Add () at the end of the function before the semicolon",
                "Use the immediate keyword",
                "Call it right after creating it",
                "Add a return statement"
            ],
            correctAnswer: "Add () at the end of the function before the semicolon"
        },
        {
            question: "Which statement about anonymous functions is TRUE?",
            choices: [
                "They cannot have parameters",
                "They cannot return values",
                "They can be used as callback functions",
                "They must always be immediately invoked"
            ],
            correctAnswer: "They can be used as callback functions"
        },
        {
            question: "What happens when you assign an anonymous function to a variable?",
            choices: [
                "The function itself is stored in the variable",
                "Only the function's return value is stored in the variable",
                "The function is automatically executed",
                "The function becomes named"
            ],
            correctAnswer: "Only the function's return value is stored in the variable"
        },
        {
            question: "Which is a valid way to declare an anonymous function?",
            choices: [
                "function myFunc() {}",
                "const myFunc = function() {}",
                "anonymous function() {}",
                "let function = () {}"
            ],
            correctAnswer: "const myFunc = function() {}"
        },
        {
            question: "Where are anonymous functions commonly used?",
            choices: [
                "Only in global scope",
                "Only in loops",
                "In callbacks, arrays, objects, and event-handlers",
                "Only in conditional statements"
            ],
            correctAnswer: "In callbacks, arrays, objects, and event-handlers"
        },
        {
            question: "Which type of function CANNOT be immediately invoked?",
            choices: [
                "Anonymous functions",
                "Function declarations",
                "Arrow functions",
                "Callback functions"
            ],
            correctAnswer: "Function declarations"
        }
    ]
},
quiz10: {
    questions: [
        {
            question: "What is required to convert a regular anonymous function to an arrow function?",
            choices: [
                "Add the 'arrow' keyword",
                "Remove 'function' keyword and add => after ()",
                "Just add the => symbol anywhere",
                "Change 'function' to 'arrow'"
            ],
            correctAnswer: "Remove 'function' keyword and add => after ()"
        },
        {
            question: "When can you omit the parentheses () in an arrow function's parameters?",
            choices: [
                "When there are multiple parameters",
                "When there is exactly one parameter",
                "When there are no parameters",
                "Parentheses are always required"
            ],
            correctAnswer: "When there is exactly one parameter"
        },
        {
            question: "In a single-statement arrow function, what can be omitted?",
            choices: [
                "Only the curly braces",
                "Only the return keyword",
                "Both curly braces and return keyword",
                "The arrow (=>) symbol"
            ],
            correctAnswer: "Both curly braces and return keyword"
        },
        {
            question: "What is an implicit return in an arrow function?",
            choices: [
                "When the function automatically returns undefined",
                "When the return value is specified without using the return keyword",
                "When the function returns multiple values",
                "When the function has no return value"
            ],
            correctAnswer: "When the return value is specified without using the return keyword"
        },
        {
            question: "When is it NOT recommended to use arrow functions?",
            choices: [
                "With single parameters",
                "With implicit returns",
                "With multiple statements in the function body",
                "With callbacks"
            ],
            correctAnswer: "With multiple statements in the function body"
        },
        {
            question: "Which is a valid single-statement arrow function with implicit return?",
            choices: [
                "const add = (a,b) => { return a + b }",
                "const add = (a,b) => a + b",
                "const add = (a,b) => { a + b }",
                "const add = (a,b) => return a + b"
            ],
            correctAnswer: "const add = (a,b) => a + b"
        },
        {
            question: "How do you make an arrow function execute immediately?",
            choices: [
                "Add () at the end before the semicolon",
                "Use the immediate keyword",
                "Add the execute() method",
                "Call it right after declaration"
            ],
            correctAnswer: "Add () at the end before the semicolon"
        },
        {
            question: "What is true about hoisting with arrow functions?",
            choices: [
                "Arrow functions are hoisted",
                "Arrow functions must be created before being called",
                "Hoisting depends on the number of parameters",
                "Only single-line arrow functions are hoisted"
            ],
            correctAnswer: "Arrow functions must be created before being called"
        },
        {
            question: "Where are arrow functions commonly used?",
            choices: [
                "Only in global scope",
                "Only with multiple statements",
                "In callbacks, arrays, objects, and event-handlers",
                "Only with explicit returns"
            ],
            correctAnswer: "In callbacks, arrays, objects, and event-handlers"
        },
        {
            question: "What's the main advantage of using arrow functions?",
            choices: [
                "They can handle more parameters",
                "They provide more functionality",
                "They offer concise syntax for single-statement functions",
                "They are always faster than regular functions"
            ],
            correctAnswer: "They offer concise syntax for single-statement functions"
        }
    ]
}
};

export default quizDataNew;