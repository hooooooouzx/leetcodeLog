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
