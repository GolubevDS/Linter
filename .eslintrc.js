module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Possible Errors
    'array-callback-return': [2, { checkForEach: true }], // Enforce return statements in callbacks of array methods
    'constructor-super': 2, // Require super() calls in constructors
    'for-direction': 1, // Enforce "for" loop update clause moving the counter in the right direction
    'getter-return': 2, // Enforce return statements in getters
    'no-async-promise-executor': 2, // Disallow using an async function as a Promise executor
    'no-await-in-loop': 1, // Disallow await inside of loops
    'no-class-assign': 2, // Disallow reassigning class members
    'no-compare-neg-zero': 2, // Disallow comparing against -0
    'no-cond-assign': 1, // Disallow assignment operators in conditional expressions
    'no-const-assign': 2, // Disallow reassigning const variables
    'no-constant-binary-expression': 2, // Disallow expressions where the operation doesn't affect the value
    'no-constant-condition': 1, // Disallow constant expressions in conditions
    'no-constructor-return': 2, // Disallow returning value from constructor
    'no-debugger': 2, // Disallow the use of debugger
    'no-dupe-args': 2, // Disallow duplicate arguments in function definitions
    'no-dupe-class-members': 2, // Disallow duplicate class members. It’s also safe to disable this rule when using TypeScript
    'no-dupe-else-if': 2, // Disallow duplicate conditions in if-else-if chains
    'no-dupe-keys': 2, // Disallow duplicate keys in object literals
    'no-duplicate-case': 2, // Disallow duplicate case labels
    'no-duplicate-imports': [2, { includeExports: true }], // Disallow duplicate module imports
    'no-empty-pattern': 2, // Disallow empty destructuring patterns
    'no-ex-assign': 2, // Disallow reassigning exceptions in catch clauses
    'no-fallthrough': 2, // Disallow fallthrough of case statements
    'no-func-assign': 2, // Disallow reassigning function declarations
  }
}
