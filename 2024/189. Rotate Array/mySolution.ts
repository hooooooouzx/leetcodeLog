/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
};

function reverse(nums:number[],start:number,end:number) :void{
    while(start < end){
        let temp:number = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start++;
        end--;
    }
}

/**
 * Your solution effectively rotates the array in-place using a three-step reversal approach, which is both time-efficient and space-efficient. Here’s a brief breakdown of your implementation and some suggestions:

    ### Code Review:
    1. **Clarity:** The function names (`rotate` and `reverse`) are clear and convey their purpose well.
    2. **In-Place Modification:** You correctly modify the array without using additional space, adhering to the problem constraints.
    3. **Modulus Operation:** Using `k = k % nums.length` is essential to handle cases where `k` exceeds the length of the array.

    ### Suggestions:
    - **Edge Cases:** Consider adding checks for edge cases, like when `k` is `0` or when `nums` is empty, though your current implementation handles it well since reversing an empty array or a single-element array has no effect.
    - **Commenting:** You might want to add comments within the code for clarity, especially in the `reverse` function, to explain the swapping process.

    ### Example Usage:
    You could also include a simple example usage for testing:
    ```typescript
    let nums = [1, 2, 3, 4, 5, 6, 7];
    let k = 3;
    rotate(nums, k);
    console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
    ```

    Overall, your solution is solid! If you have specific areas you'd like feedback on or any questions, let me know!
 */