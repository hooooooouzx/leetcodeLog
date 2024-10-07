function canJump(nums: number[]): boolean {
    let gas:number = 0;

    for(let index:number = 0 ; index < nums.length ; index++){
        if(gas < 0){
            return false;
        }else if(nums[index] > gas){
            gas = nums[index];
        }
        gas--;
    }
    
    return true;
};

/**
 * Intuition
    Imagine you have a car, and you have some distance to travel (the length of the array). This car has some amount of gasoline, and as long as it has gasoline, it can keep traveling on this road (the array). Every time we move up one element in the array, we subtract one unit of gasoline. However, every time we find an amount of gasoline that is greater than our current amount, we "gas up" our car by replacing our current amount of gasoline with this new amount. We keep repeating this process until we either run out of gasoline (and return false), or we reach the end with just enough gasoline (or more to spare), in which case we return true.
    Note: We can let our gas tank get to zero as long as we are able to gas up at that immediate location (element in the array) that our car is currently at.

    Complexity
    Time complexity: O(n)
    Space complexity: O(1)
 * 
 */


/**
 * Your solution has a good approach, but it contains a logical issue that may lead to incorrect results in some cases. Here’s a review and some suggestions for improvement:

    ### Current Logic
    1. You are using a variable `gas` to track how many jumps you can still make.
    2. For each index, if `gas` is negative, you return `false`, indicating you can't progress.
    3. If `nums[index]` is greater than `gas`, you update `gas` to `nums[index]`.
    4. You decrement `gas` in each iteration.

    ### Issues
    - The way you handle `gas` can lead to a situation where you incorrectly determine you can or cannot reach the end. Specifically, you only update `gas` when `nums[index]` is greater than `gas`, which may not accurately represent the maximum reachable index.

    ### Suggested Approach
    Instead of managing `gas`, a more straightforward approach is to maintain the furthest index you can reach. Here’s a revised solution:

    compare the maximum reachable and the maximum array index

    ```typescript
    function canJump(nums: number[]): boolean {
        let maxReachable: number = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i > maxReachable) {
                return false; // If the current index is beyond the maximum reachable index
            }
            maxReachable = Math.max(maxReachable, i + nums[i]); // Update the furthest reachable index
            if (maxReachable >= nums.length - 1) {
                return true; // If we can reach the last index
            }
        }
        
        return false; // If we finish the loop without reaching the last index
    }
    ```

    ### Explanation of the Revised Solution
    1. **maxReachable:** This variable keeps track of the furthest index you can reach.
    2. **Iteration:** For each index, you check if you're at a position that's beyond `maxReachable`. If yes, you cannot proceed, and you return `false`.
    3. **Update Logic:** Update `maxReachable` to the maximum of its current value or the furthest point you can reach from the current index.
    4. **Early Exit:** If at any point `maxReachable` reaches or exceeds the last index, you return `true`.

    ### Complexity
    - **Time Complexity:** O(n), where n is the length of the `nums` array.
    - **Space Complexity:** O(1), since you're using a constant amount of space.

    This revised solution should give you the correct results for all edge cases.
 * 
 * 
 * 
 */