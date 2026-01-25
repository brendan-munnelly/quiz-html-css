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
                question: "When adding external JavaScript files, what is the recommended approach?",
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
                question: "Which of the following is a benefit of using external JavaScript files?",
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
                question: "Which keyword should you use when declaring a variable whose value will NOT change when the program is run?",
                choices: [
                    "let",
                    "const",
                    "var",
                    "static"
                ],
                correctAnswer: "const"
            },
            {
                question: "Which of the following is a valid variable name in JavaScript?",
                choices: [
                    "first name",
                    "first-name",
                    "firstName",
                    "FIRST NAME"
                ],
                correctAnswer: "firstName"
            },
            {
                question: "Which one of the following is a valid way to declare a string variable in JavaScript?",
                choices: [
                    "let name = Smith;",
                    "let name = \"Smith\";",
                    "let name = Smith';",
                    "let 'name' = 'Smith';"
                ],
                correctAnswer: "let name = \"Smith\";"
            },
            {
                question: "What does the following code output: \nlet price = 42; \nconsole.log(typeof price);",
                choices: [
                    "string",
                    "number",
                    "integer",
                    "decimal"
                ],
                correctAnswer: "number"
            },
            {
                question: "What does the assignment operator = do in JavaScript?",
                choices: [
                    "Compares two values for equality",
                    "Places the value from the right side into the variable on the left side",
                    "Creates a new variable",
                    "Combines two variables together"
                ],
                correctAnswer: "Places the value from the right side into the variable on the left side"
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
                question: "What will be stored in the score variable after this code is run? \nlet score = null;",
                choices: [
                    "0",
                    "\"0\"",
                    "\"null\"",
                    "null"
                ],
                correctAnswer: "null"
            },
            {
                question: "Which statement about JavaScript's typing system is correct?",
                choices: [
                    "JavaScript is strongly-typed like Java",
                    "JavaScript is loosely-typed, automatically determining variable types",
                    "JavaScript requires explicit type declaration for all variables",
                    "JavaScript only allows one type per variable for its entire lifetime"
                ],
                correctAnswer: "JavaScript is loosely-typed, automatically determining variable types"
            },

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
        {
            question: "Which keyword is used to create a decision-making structure in JavaScript?",
            choices: [
                "for",
                "if",
                "while",
                "switch"
            ],
            correctAnswer: "if"
        },
        {
            question: "What is the correct syntax for an `if` statement in JavaScript?",
            choices: [
                "if condition { }",
                "if (condition) { }",
                "if { condition }",
                "if [condition] { }"
            ],
            correctAnswer: "if (condition) { }"
        },
        {
            question: "What does the `==` operator do?",
            choices: [
                "Assigns a value to a variable",
                "Checks if two values are equal",
                "Checks if two values are not equal",
                "Compares two objects"
            ],
            correctAnswer: "Checks if two values are equal"
        },
        {
            question: "Which operator is used to check if two values are NOT equal?",
            choices: [
                "==",
                "!=",
                ">",
                "<"
            ],
            correctAnswer: "!="
        },
        {
            question: "How do you write an `else if` statement in JavaScript?",
            choices: [
                "else if (condition) { }",
                "if else (condition) { }",
                "elseif (condition) { }",
                "else (condition) { }"
            ],
            correctAnswer: "else if (condition) { }"
        },
        {
            question: "Which operator represents the logical AND?",
            choices: [
                "||",
                "&",
                "&&",
                "!"
            ],
            correctAnswer: "&&"
        },
        {
            question: "What does the `else` statement do?",
            choices: [
                "Executes code if a condition is true",
                "Executes code if all conditions are true",
                "Executes code if no previous conditions are true",
                "Executes code only if an error occurs"
            ],
            correctAnswer: "Executes code if no previous conditions are true"
        },
        {
            question: "What is the purpose of the `||` operator?",
            choices: [
                "Logical AND",
                "Logical OR",
                "Logical NOT",
                "Comparison"
            ],
            correctAnswer: "Logical OR"
        },
        {
            question: "What will the following code output?\n\n`let x = 10;\nif (x > 5) {\n    console.log('Greater');\n} else {\n    console.log('Smaller');\n}`",
            choices: [
                "Greater",
                "Smaller",
                "undefined",
                "null"
            ],
            correctAnswer: "Greater"
        },
        {
            question: "Which of the following is NOT a valid comparison operator?",
            choices: [
                ">=",
                "===",
                "!==",
                "=>"
            ],
            correctAnswer: "=>"
        }
    ]
},

quiz7: {
    questions: [
        {
            question: "What does JavaScript's \"type coercion\" mean?",
            choices: [
                "Forcing a variable to stay the same type",
                "Automatically converting values from one data type to another",
                "Strictly enforcing data types",
                "Throwing an error when data types don't match"
            ],
            correctAnswer: "Automatically converting values from one data type to another"
        },
        {
            question: "What is the output of \"5 + '10'\"?",
            choices: [
                "15",
                "'15'",
                "510",
                "TypeError"
            ],
            correctAnswer: "510"
        },
        {
            question: "Which operator performs type coercion when comparing values?",
            choices: [
                "===",
                "!==",
                "==",
                "&&"
            ],
            correctAnswer: "=="
        },
        {
            question: "When using the + operator with a string and a number, JavaScript will:",
            choices: [
                "Convert the string to a number",
                "Convert the number to a string",
                "Throw an error",
                "Return NaN"
            ],
            correctAnswer: "Convert the number to a string"
        },
        {
            question: "What does \"undefined\" represent in JavaScript?",
            choices: [
                "A variable that hasn't been assigned a value",
                "An intentional absence of any value",
                "A mathematical error",
                "An empty string"
            ],
            correctAnswer: "A variable that hasn't been assigned a value"
        },
        {
            question: "Which of the following is a falsy value in JavaScript?",
            choices: [
                "42",
                "\"false\"",
                "0",
                "zero"
            ],
            correctAnswer: "0"
        },
        {
            question: "What value does an uninitialized variable contain?",
            choices: [
                "null",
                "undefined",
                "0",
                "NaN"
            ],
            correctAnswer: "undefined"
        },
        {
            question: "What is the result of 'hello' / 2?",
            choices: [
                "0",
                "undefined",
                "NaN",
                "'hello2'"
            ],
            correctAnswer: "NaN"
        },
        {
            question: "Which operator checks for both value and data type equality?",
            choices: [
                "==",
                "=",
                "===",
                "!=="
            ],
            correctAnswer: "==="
        },
        {
            question: "What happens when you use arithmetic operators (-, *, /) with strings containing numbers?",
            choices: [
                "JavaScript throws an error",
                "JavaScript concatenates the strings",
                "JavaScript converts strings to numbers",
                "JavaScript returns undefined"
            ],
            correctAnswer: "JavaScript converts strings to numbers"
        },
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
            question: "What does the `getElementById()` method return if no matching element is found?",
            choices: [
                "undefined",
                "null",
                "An empty string",
                "false"
            ],
            correctAnswer: "null"
        },
        
        {
            question: "Which event handler is triggered when a user clicks on a button?",
            choices: [
                "onhover",
                "onmousedown",
                "onclick",
                "ondblclick"
            ],
            correctAnswer: "onclick"
        },
        
        {
            question: "Which method is used to modify the HTML content of an element?",
            choices: [
                "innerHTML",
                "textContent",
                "setContent",
                "setHTML"
            ],
            correctAnswer: "innerHTML"
        },
        
        {
            question: "What is the correct way to change the background color of an element with `id='header'`?",
            choices: [
                "document.getElementById('header').style.bgcolor = 'blue';",
                "document.getElementById('header').backgroundColor = 'blue';",
                "document.getElementById('header').style.backgroundColor = 'blue';",
                "document.getElementById('header').color = 'blue';"
            ],
            correctAnswer: "document.getElementById('header').style.backgroundColor = 'blue';"
        },
        
        {
            question: "Which method is used to create a new HTML element in JavaScript?",
            choices: [
                "document.appendChild()",
                "document.createElement()",
                "document.newElement()",
                "document.addElement()"
            ],
            correctAnswer: "document.createElement()"
        },
        
        {
            question: "How do you add a new CSS class to an HTML element with JavaScript?",
            choices: [
                "element.style.addClass('newClass')",
                "element.className = 'newClass'",
                "element.classList.add('newClass')",
                "element.setClass('newClass')"
            ],
            correctAnswer: "element.classList.add('newClass')"
        },
        
        {
            question: "What will `innerText` update in an HTML element?",
            choices: [
                "Only the text content",
                "Both the text content and HTML tags",
                "Only the CSS properties",
                "The element's `id`"
            ],
            correctAnswer: "Only the text content"
        },
        
        {
            question: "Which of the following is NOT a valid event handler?",
            choices: [
                "onclick",
                "onmouseover",
                "onhover",
                "ondblclick"
            ],
            correctAnswer: "onhover"
        },
        
        {
            question: "What is the purpose of the `appendChild()` method?",
            choices: [
                "To remove an element from the DOM",
                "To add a new child element to a parent element",
                "To replace an existing element",
                "To create a new HTML element"
            ],
            correctAnswer: "To add a new child element to a parent element"
        },
        
        {
            question: "What does `classList.remove('myClass')` do?",
            choices: [
                "Deletes the element",
                "Adds the class 'myClass' to the element",
                "Removes the class 'myClass' from the element",
                "Resets the element's styles"
            ],
            correctAnswer: "Removes the class 'myClass' from the element"
        }
      
    ]
},
quiz10: {
    questions: [
        {
            question: "What is the recommended convention for naming objects in JavaScript?",
            choices: [
                "Start with 'obj' and use plural nouns",
                "Start with 'obj' and use singular nouns",
                "Use plural nouns without any prefix",
                "Use dashes between words"
            ],
            correctAnswer: "Start with 'obj' and use singular nouns"
        },
        {
            question: "Which keyword is recommended for declaring objects to prevent accidental overwriting?",
            choices: [
                "let",
                "var",
                "const",
                "static"
            ],
            correctAnswer: "const"
        },
        {
            question: "How do you access a property’s value using dot notation?",
            choices: [
                "object['property']",
                "object.property",
                "object::property",
                "object->property"
            ],
            correctAnswer: "object.property"
        },
        {
            question: "What operator is used to test if a property exists within an object?",
            choices: [
                "exists",
                "in",
                "has",
                "contains"
            ],
            correctAnswer: "in"
        },
        {
            question: "What character is used to separate key-value pairs within an object?",
            choices: [
                "Semicolon (;)",
                "Comma (,)",
                "Period (.)",
                "Colon (:)"
            ],
            correctAnswer: "Comma (,)"
        },
        {
            question: "How do you create an empty object in JavaScript?",
            choices: [
                "const obj = []",
                "const obj = null",
                "const obj = {}",
                "const obj = ''"
            ],
            correctAnswer: "const obj = {}"
        },
        {
            question: "What is each item in an object called?",
            choices: [
                "Element",
                "Property",
                "Item",
                "Value"
            ],
            correctAnswer: "Property"
        },
        {
            question: "Which operator is used to delete a property from an object?",
            choices: [
                "remove",
                "del",
                "delete",
                "pop"
            ],
            correctAnswer: "delete"
        },
        {
            question: "What technique allows you to extract properties from objects and assign them to variables?",
            choices: [
                "Object extraction",
                "Object destructuring",
                "Object decomposition",
                "Object splitting"
            ],
            correctAnswer: "Object destructuring"
        },
        {
            question: "How many parts does each item in an object have?",
            choices: [
                "One (just the value)",
                "Two (key and value)",
                "Three (name, key, and value)",
                "Four (name, key, value, and type)"
            ],
            correctAnswer: "Two (key and value)"
        }
    ]
},

quiz11: {
    questions: [
        {
        question: "What is the recommended naming convention for arrays in JavaScript?",
        choices: [
            "Start with 'arr' and use singular nouns",
            "Start with 'arr' and use plural nouns",
            "Use singular nouns without any prefix",
            "Use plural nouns without any prefix"
        ],
        correctAnswer: "Start with 'arr' and use plural nouns"
    },
    {
        question: "What is the index of the first element in a JavaScript array?",
        choices: [
            "1",
            "0",
            "-1",
            "null"
        ],
        correctAnswer: "0"
    },
    {
        question: "How do you access the last element of an array named 'arrNames'?",
        choices: [
            "arrNames[arrNames.length]",
            "arrNames[arrNames.length-1]",
            "arrNames[-1]",
            "arrNames.last()"
        ],
        correctAnswer: "arrNames[arrNames.length-1]"
    },
    {
        question: "What does the typeof operator return when used on an array?",
        choices: [
            "array",
            "object",
            "list",
            "collection"
        ],
        correctAnswer: "object"
    },
    {
        question: "Which method should you use to definitively check if a variable is an array?",
        choices: [
            "typeof",
            "isArray()",
            "Array.isArray()",
            "instanceof Array"
        ],
        correctAnswer: "Array.isArray()"
    },
    {
        question: "What happens when you use the toString() method on an array?",
        choices: [
            "It converts each element to a string type",
            "It returns the array length as a string",
            "It converts the array elements to a single string with commas between elements",
            "It throws an error"
        ],
        correctAnswer: "It converts the array elements to a single string with commas between elements"
    },
    {
        question: "Which keyword is recommended when declaring arrays that won't be reassigned?",
        choices: [
            "let",
            "var",
            "const",
            "static"
        ],
        correctAnswer: "const"
    },
    {
        question: "What is the relationship between an array's length and its highest index?",
        choices: [
            "They are the same number",
            "The length is one less than the highest index",
            "The length is one more than the highest index",
            "There is no fixed relationship"
        ],
        correctAnswer: "The length is one more than the highest index"
    },
    {
        question: "In array destructuring, what syntax is used to skip an element?",
        choices: [
            "Use null",
            "Leave an empty comma",
            "Use undefined",
            "Use the skip keyword"
        ],
        correctAnswer: "Leave an empty comma"
    },
    {
        question: "What is the preferred modern method for looping through array values?",
        choices: [
            "for loop",
            "while loop",
            "forEach()",
            "for...in loop"
        ],
        correctAnswer: "forEach()"
    }
]
},



quiz12: {
    questions: [
        {
            question: "In an array of objects, how do you access a specific property value?",
            choices: [
                "Using only the property key name",
                "Using the array name and property key",
                "Using the array index and property key",
                "Using only the array index"
            ],
            correctAnswer: "Using the array index and property key"
        },
        {
            question: "What symbols are used to contain an entire array of objects?",
            choices: [
                "Curly braces {}",
                "Parentheses ()",
                "Square brackets []",
                "Angle brackets <>"
            ],
            correctAnswer: "Square brackets []"
        },
        {
            question: "What is the key difference between a single object and objects within an array?",
            choices: [
                "Objects in an array cannot have properties",
                "Objects in an array do not have names",
                "Objects in an array cannot store numbers",
                "Objects in an array must be on one line"
            ],
            correctAnswer: "Objects in an array do not have names"
        },
        {
            question: "Which method is commonly used to loop through an array of objects?",
            choices: [
                "for...in loop",
                ".map()",
                ".forEach()",
                ".loop()"
            ],
            correctAnswer: ".forEach()"
        },
        {
            question: "What symbols are used to contain individual objects within an array of objects?",
            choices: [
                "Square brackets []",
                "Curly braces {}",
                "Parentheses ()",
                "Double quotes \"\""
            ],
            correctAnswer: "Curly braces {}"
        },
        {
            question: "What character is used to separate objects within an array?",
            choices: [
                "Semicolon ;",
                "Period .",
                "Comma ,",
                "Colon :"
            ],
            correctAnswer: "Comma ,"
        },
        {
            question: "Which string method can be used to remove extra spaces from property values?",
            choices: [
                ".clean()",
                ".trim()",
                ".remove()",
                ".space()"
            ],
            correctAnswer: ".trim()"
        },
        {
            question: "How are property values accessed in an array of objects named 'arrProducts'?",
            choices: [
                "arrProducts.productID",
                "arrProducts[0][productID]",
                "arrProducts[0].productID",
                "arrProducts.0.productID"
            ],
            correctAnswer: "arrProducts[0].productID"
        },
        {
            question: "What is a common use case for arrays of objects?",
            choices: [
                "Storing single pieces of data",
                "Creating HTML elements",
                "Storing collections of related data like product catalogues",
                "Defining CSS styles"
            ],
            correctAnswer: "Storing collections of related data like product catalogues"
        },
        {
            question: "When creating an array of objects, what must be consistent across all objects?",
            choices: [
                "The property values",
                "The property structure",
                "The number of properties",
                "The order of properties"
            ],
            correctAnswer: "The property structure"
        }
]
},



quiz14: {
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
        question: "How do you make an anonymous function execute immediately after its creation?",
        choices: [
            "Wrap the function in () and add another () at the end before the semicolon",
            "Use the immediate keyword",
            "Call it right after creating it",
            "Add a return statement"
        ],
        correctAnswer: "Wrap the function in () and add another () at the end before the semicolon"
    },
    {
        question: "What's another name for anonymous functions?",
        choices: [
            "Nameless functions",
            "Arrow functions",
            "Function expressions",
            "Immediate functions"
        ],
        correctAnswer: "Function expressions"
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
        question: "What happens when you try to call an anonymous function before it's defined in the code?",
        choices: [
            "It throws an error",
            "It works normally",
            "It gets hoisted automatically",
            "It returns undefined"
        ],
        correctAnswer: "It throws an error"
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

quiz15: {
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
        question: "To immediately invoke an arrow function, what syntax is required?",
        choices: [
            "Add () around the function and add () at the end before the semicolon",
            "Just call the function normally",
            "Add the execute() method",
            "Call it right after declaration"
        ],
        correctAnswer: "Add () around the function and add () at the end before the semicolon"
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
        question: "When is it NOT recommended to use arrow functions?",
        choices: [
            "When working with single statements",
            "When working with multiple parameters",
            "When working with multiple statements",
            "When working with single parameters"
        ],
        correctAnswer: "When working with multiple statements"
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
},

quiz16: {
    questions: [
        {
            question: "What is the default behavior when a form's Submit button is clicked?",
            choices: [
                "Only the form data is submitted",
                "Only the web page reloads",
                "Both the form is submitted and the web page reloads",
                "Nothing happens until JavaScript handles it"
            ],
            correctAnswer: "Both the form is submitted and the web page reloads"
        },
        {
            question: "What is the purpose of event.preventDefault() in form handling?",
            choices: [
                "To prevent form validation",
                "To prevent the form from being submitted and page from reloading",
                "To prevent JavaScript from running",
                "To prevent user input"
            ],
            correctAnswer: "To prevent the form from being submitted and page from reloading"
        },
        {
            question: "What type of validation is built into an input field with type='email'?",
            choices: [
                "Checks for correct email format including @ symbol",
                "Checks only for capital letters",
                "Verifies if the email actually exists",
                "Checks only for length requirements"
            ],
            correctAnswer: "Checks for correct email format including @ symbol"
        },
        {
            question: "How do you access the value entered in a form input field with JavaScript?",
            choices: [
                "document.querySelector('input')",
                "document.getElementById('inputId')",
                "document.getElementById('inputId').innerHTML",
                "document.getElementById('inputId').value"
            ],
            correctAnswer: "document.getElementById('inputId').value"
        },
        {
            question: "How do you clear all fields in a form after successful submission?",
            choices: [
                "form.clear()",
                "form.reset()",
                "form.empty()",
                "form.clearFields()"
            ],
            correctAnswer: "form.reset()"
        },
        {
            question: "Which attribute connects a label to its input field in a form?",
            choices: [
                "name",
                "id",
                "for",
                "type"
            ],
            correctAnswer: "for"
        },
        {
            question: "What is the correct way to specify a form submission handler in HTML?",
            choices: [
                "onsubmit='processForm'",
                "onsubmit='processForm()'",
                "onsubmit='processForm(event)'",
                "submit='processForm'"
            ],
            correctAnswer: "onsubmit='processForm(event)'"
        },
        {
            question: "What method is used to handle form data before it's submitted to a server?",
            choices: [
                "processForm()",
                "validateForm()",
                "preventDefault()",
                "submitForm()"
            ],
            correctAnswer: "preventDefault()"
        },
        {
            question: "When using getElementById() to access form input values, what property must you add at the end?",
            choices: [
                ".text",
                ".content",
                ".input",
                ".value"
            ],
            correctAnswer: ".value"
        },
        {
            question: "What is the primary purpose of form validation?",
            choices: [
                "To make the form look better",
                "To prevent users from submitting data",
                "To ensure user input meets requirements before processing",
                "To make the form submit faster"
            ],
            correctAnswer: "To ensure user input meets requirements before processing"
        }
    ]
},
quiz17: {
    
    questions: [
        {

    question: "What is a method in JavaScript?",
    choices: [
    "A property with a number value",
    "A function attached to an object",
    "A way to create new objects",
    "A type of event listener"
    ],
    correctAnswer: "A function attached to an object"
    },
    {
    question: "Which of the following is an advantage of using addEventListener()?",
    choices: [
    "It makes the code run faster",
    "It requires less memory",
    "You can add multiple event listeners to the same element",
    "It only works with button clicks"
    ],
    correctAnswer: "You can add multiple event listeners to the same element"
    },
    {
    question: "What is event delegation?",
    choices: [
    "A way to remove event listeners",
    "Adding event listeners to every element",
    "Adding a single event listener to a parent element to handle events on its children",
    "A method to stop event bubbling"
    ],
    correctAnswer: "Adding a single event listener to a parent element to handle events on its children"
    },
    {
    question: "How do you access the element that triggered an event?",
    choices: [
    "event.element",
    "event.trigger",
    "event.target",
    "event.source"
    ],
    correctAnswer: "event.target"
    },
    {
    question: "What is the correct format for a data attribute in HTML?",
    choices: [
    "data_name",
    "data.name",
    "data-name",
    "dataname"
    ],
    correctAnswer: "data-name"
    },
    {
    question: "What is event bubbling in JavaScript?",
    choices: [
    "When an event only triggers on the clicked element",
    "When an event triggers on an element and then bubbles up through its ancestors",
    "When multiple events happen at the same time",
    "When an event is prevented from triggering"
    ],
    correctAnswer: "When an event triggers on an element and then bubbles up through its ancestors"
    },
    {
    question: "Which method is used to stop event bubbling?",
    choices: [
    "event.stop()",
    "event.preventDefault()",
    "event.stopBubbling()",
    "event.stopPropagation()"
    ],
    correctAnswer: "event.stopPropagation()"
    },
    {
    question: "How do you access a data attribute in JavaScript using the dataset property?",
    choices: [
    "element.dataset.data-name",
    "element.dataset.name",
    "element.data.name",
    "element.getAttribute('data-name')"
    ],
    correctAnswer: "element.dataset.name"
    },
    {
    question: "Why is an anonymous function called 'anonymous'?",
    choices: [
    "Because it can only be used once",
    "Because it is defined without a name",
    "Because it's attached to an object",
    "Because it handles unknown events"
    ],
    correctAnswer: "Because it is defined without a name"
    },
    {
    question: "What are the two arguments required by the addEventListener() method?",
    choices: [
    "Element ID and function",
    "Event type and element ID",
    "Event type and callback function",
    "Element name and event type"
    ],
    correctAnswer: "Event type and callback function"
}
]
}
};

export default quizDataNew;