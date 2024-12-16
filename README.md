# Incorrect usage of $inc operator in MongoDB update
This example demonstrates an uncommon error in MongoDB update operations involving the `$inc` operator.  The `$inc` operator is used to increment a numerical field.  However, if a string is provided as the increment value, it will not increment correctly and might lead to unexpected results or errors.
The bug involves using a string instead of a number with the $inc operator. The solution shows the correct usage, ensuring the increment value is a number.
## How to reproduce the error
1. Ensure you have a MongoDB instance running.
2. Create a collection named `myCollection` with at least one document containing a numerical field named `count`.
3. Run the code snippet provided in the `bug.js` file.
4. Observe that the `count` field is not incremented as expected. 
## Solution
The solution is to provide a numerical value to the `$inc` operator. The corrected code is demonstrated in `bugSolution.js`.