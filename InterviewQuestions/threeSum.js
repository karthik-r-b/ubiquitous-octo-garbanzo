const threeSumClosest=(A,B)=>{
let n = A.length;
// Test case if the array length is less than 3
if(n<3){
    return null;
}
A.sort((a,b)=>a-b);
// Two pointer approach
let result = 0;
let min = Number.MAX_VALUE;
for (let index = 0; index < n-2; index++) {
    let low = index+1;
    let high = n-1;
    while(low<high){
        let sum = A[index]+A[low]+A[high];
        let diff = B-sum;
        if(diff === 0){
            return sum;
        }
        else if(diff<min){
            min = diff;
            result = sum;
        }
        if (sum <= B){
        low++;
        }
        else{
            high--;
        }
    }
    
}
return result;

}
const arr = [-5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5, -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6, -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10, 1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9, -2, 7, 0, -4, -3, 1, 6, -3];
const target = -1
console.log(threeSumClosest(arr,target));


