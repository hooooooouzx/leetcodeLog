function removeDuplicates(nums: number[]): number {
    let writeIndex = 1;

    // Loop from the second element and check for unique values
    for (let current = 1; current < nums.length; current++) {
        // Check if the current value is different from the previous one
        if (nums[current] !== nums[current - 1]) {
            nums[writeIndex++] = nums[current];  // Write the unique element and increment
        }
    }
    
    return writeIndex;
}

/**
 * Changes and Explanation:
    For Loop:

    I replaced the while loop with a for loop to avoid the extra overhead of manually incrementing the left variable. This is a micro-optimization and typically runs faster in most JavaScript engines.
    Inline Increment:

    The writeIndex++ inside the assignment is an inline operation, which may provide minor performance benefits in terms of reduced instruction count.
    Readability and Simplicity:

    The code is simplified, which reduces overhead in terms of maintenance without sacrificing performance.
    Final Consideration:
    For arrays of large sizes, you won’t be able to reduce the complexity beyond O(n) since every element has to be checked at least once. The current implementation is optimal under the problem's constraints. Any further speed increase would depend on how efficiently JavaScript's runtime handles loops and memory, which is out of your control.
 */