function removeDuplicates(nums: number[]): number {
    let left:number = 1;
    let right:number = 1;
    while(left < nums.length){
        if(nums[left] != nums[left - 1]){
            nums[right] = nums[left];
            right++;
        }
        left++;
    }
    return right;
};

/**
 * 
 * Thanks for the clarification! Given the constraints that the array is always non-empty and has a length between 1 and 30,000, you don't need to worry about handling the empty array case. This simplifies things, and your approach is already optimal.

    ### **Key Observations:**
    - Since the array is guaranteed to be sorted and always has at least one element, your current approach is well-suited for the problem.
    - The constraints ensure that the input will be valid, so you can focus on maintaining clean and efficient code.

    ### **Updated Suggestions Without Edge Case Handling**:

    1. **Variable Names**: 
    - As mentioned earlier, you could still consider more descriptive names for readability, like `current` and `writeIndex`, which indicate their purpose more clearly than `left` and `right`.

    Example:
    ```typescript
    function removeDuplicates(nums: number[]): number {
        let current: number = 1;
        let writeIndex: number = 1;
        while (current < nums.length) {
            if (nums[current] !== nums[current - 1]) {
                nums[writeIndex] = nums[current];
                writeIndex++;
            }
            current++;
        }
        return writeIndex;
    }
    ```

    2. **Commenting**: 
    - Adding comments for better code readability can help future maintainability, even though it's a simple algorithm.

    ### **Final Code Suggestion**:

    ```typescript
    function removeDuplicates(nums: number[]): number {
        let current: number = 1;       // Start checking from the second element
        let writeIndex: number = 1;    // This tracks where to write the next unique element

        // Traverse the array from the second element to the end
        while (current < nums.length) {
            // If current element is different from the previous one, it's unique
            if (nums[current] !== nums[current - 1]) {
                nums[writeIndex] = nums[current];  // Place the unique element at writeIndex
                writeIndex++;                      // Move the write index to the next position
            }
            current++;  // Move to the next element
        }
        
        // Return the number of unique elements
        return writeIndex;
    }
    ```

    ### **Explanation**:
    - **O(n) Time Complexity**: The array is traversed once, making the solution optimal.
    - **O(1) Space Complexity**: The algorithm uses constant extra space, which fits the problem requirements.

    ### **Conclusion**:
    Your solution is already well-optimized, and since you're working within well-defined constraints, no need to overcomplicate. The main recommendation is improving variable naming for clarity, but functionally your solution is spot-on.
 */