/*
Time complexity - O(n)
Space complexity - O(n)
*/
const redudantBraces=(A)=>{
    let n = A.length;
    // If the length of the string is 0 or 1 return false.
    if (n === 0) {
        return 1;
    }

    if ((!A.includes('(') && !A.includes(')'))) {
        return 0;
    }

    let top = ""; //top of the stack.
    // using stack data-structure to store the characters.
    let stack = [];
    for (let i = 0; i < n; i++) {
       if(A[i] === ')'){
        let count = 0;
        while(stack[stack.length-1] !== '('){
            let operand = stack[stack.length-1];
            stack.pop();
            if(operand === '+' || operand === '-' || operand === '/' || operand === '*')
            count++;
        }
        if(count === 0)
        return 1;   
        stack.pop();
       }
       else{
           stack.push(A[i]);
       }
    }
    return 0;
}

console.log(redudantBraces('(a+((b*c)+c))'));

