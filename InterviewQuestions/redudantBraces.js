/*
Time complexity - O(n)
Space complexity - O(n)
*/
const redudantBraces = (A) => {
    let n = A.length;
    // If the length of the string is 0 or 1 return false.
    if (n === 0 || n === 1) {
        return 1;
    }
   
    let top = ""; //top of the stack.
    // using stack data-structure to store the characters.
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (A[i] === ')') {
            // checking the top of the stack.
            top = A[stack.length - 1];
            while (top !== '(') {
                top = A[stack.length - 1];
                stack.pop();
            }
        }
        // pushing the characters to the stack if the character is not ')'
        else {
            stack.push(A[i]);
        }
    }
    return stack.length > 0 ? 1 : 0;
}

console.log(redudantBraces('(a + (a + b))'))

