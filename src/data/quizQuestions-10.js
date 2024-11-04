export const quizQuestions_10 = {
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
};