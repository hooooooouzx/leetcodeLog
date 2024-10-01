function removeDuplicates(nums: number[]): number {
    if(nums.length <= 2){
        return 2;
    }

    let i:number = 2;
    let k:number = 2;
    while(i < nums.length){
        if(nums[i] != nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
        i++;
    }
    return k;
};

/**
 * Your solution to remove duplicates from a sorted array is generally good, but there are a few areas for improvement based on the constraints and the specific requirements of the problem:

    ### Analysis and Suggestions:

    1. **Base Case Handling**: 
    - The condition `if(nums.length <= 2) { return 2; }` is incorrect. If the array has 1 or 2 elements, you should return `nums.length`, which could be either 1 or 2. Returning 2 would not accurately reflect the number of elements in arrays of length 1.

    2. **Initialization of `k`**:
    - The variable `k` should start at 2 since you want to allow at most two occurrences of each unique element. It's correctly initialized, but just ensure you handle it properly when returning the result.

    3. **Correct Element Check**:
    - Your check `if(nums[i] != nums[k-2])` correctly checks if the current element can be added to the result. This ensures that each unique number appears at most twice.

    4. **Use of `while` Loop**:
    - The use of a `while` loop is fine here, but a `for` loop might make the intent clearer since you are iterating through the array in a single pass.

    5. **Time Complexity**:
    - Your approach runs in O(n) time complexity, which is optimal for this problem given that you need to examine each element at least once.

    ### Revised Code:
    Here’s a revised version of your code with the suggestions applied:

    ```typescript
    function removeDuplicates(nums: number[]): number {
        if (nums.length <= 2) {
            return nums.length; // Return the actual length for 1 or 2 elements
        }

        let k: number = 2; // Allow at most two occurrences
        for (let i: number = 2; i < nums.length; i++) {
            // Check if current number is different from the one two positions back
            if (nums[i] !== nums[k - 2]) {
                nums[k] = nums[i]; // Place the current number in the correct position
                k++;
            }
        }
        return k; // Return the count of unique elements
    }
    ```

    ### Summary:
    This version clarifies the base case handling and maintains the same efficient logic for processing the array. Overall, your original approach was solid, but these adjustments ensure that it meets the problem's requirements more accurately. Would you like to explore any other aspects of this problem?
 */