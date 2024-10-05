function removeElement(nums: number[], val: number): number {
    let left:number = 0;
    let right:number = nums.length - 1;
    
    while(left<=right){
        if(nums[left] != val){
            left++;
        }else{
            if(nums[right] == val){
                right--;
            }else{
                let temporaryNum:number = nums[left];
                nums[left] = nums[right];
                nums[right] = temporaryNum;
                left++;
                right--;
            }
        }
    }
    
    let k:number = right+1;
    return k;
};

/**
 * Your implementation of the removeElement function uses a two-pointer technique, which is a good approach. Here’s an analysis along with some suggestions for improvement:

    Analysis
    Logic:

    You have a left pointer (left) that scans from the start of the array and a right pointer (right) that scans from the end.
    If the element at left is not equal to val, it simply increments left.
    If the element at left is equal to val, it checks the right pointer. If right points to another val, it decrements right.
    If right points to a different value, you swap the values at left and right, then move both pointers inward.
    Final Value of k:

    You calculate k as right + 1, which gives the count of elements not equal to val. This is correct because right stops at the last non-val index.
    Suggestions for Improvement
    Redundant Checks:

    You can simplify the code by removing the second else condition. When you find a val at left, you can swap directly with right, and handle both pointer increments together. This will make the code cleaner.
    End Condition:

    Since you’re using a while loop with the condition left <= right, you should ensure that right doesn’t go below left. You can simplify by checking the condition on the next loop iteration.
    Code Readability:

    Adding comments or improving variable names can help others (and your future self) understand the code more quickly.
 */