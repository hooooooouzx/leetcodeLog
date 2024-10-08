function jump(nums: number[]): number {
    let jumps:number = 0;
    let left:number = 0;
    let right:number = 0;

    while(right < nums.length - 1){
        let farthest = 0;
        for(let index:number = left;index < right + 1 ; index++){
            farthest = Math.max(farthest,index+nums[index]);
        }
        left = right + 1;
        right = farthest;
        jumps++;
    }
    return jumps;
};


/**
 * Your solution for the Jump Game II problem is well-structured and effectively uses a greedy approach to find the minimum number of jumps. Here’s a breakdown of your code and some suggestions for improvement:

    ### Code Breakdown:
    1. **Initialization**:
    - `jumps`: Counter for the number of jumps.
    - `left` and `right`: These define the current range of indices you can reach with the current number of jumps.

    2. **While Loop**:
    - Continues until `right` reaches the last index of the array.
    - Inside the loop, you find the farthest point that can be reached from the current range (`left` to `right`).

    3. **Inner For Loop**:
    - Iterates through the current range to calculate the farthest reachable index.

    4. **Update Ranges**:
    - Sets `left` to `right + 1` and updates `right` to the `farthest` index calculated.

    5. **Increment Jumps**:
    - Increments the `jumps` counter after processing the current range.

    ### Suggestions for Improvement:
    1. **Avoid Unnecessary Checks**:
    - Instead of checking `while (right < nums.length - 1)`, you can use a condition that directly verifies the possibility of reaching the end. 

    2. **Refactor Inner Loop**:
    - You could combine the calculation of `farthest` into a single traversal without a separate loop for clarity and efficiency.

    3. **Type Annotations**:
    - While TypeScript type annotations are great, consider using them where they enhance readability. The current usage is good, but ensure consistency.

    ### Example Refactoring:
    Here's a slightly refactored version of your code for clarity:

    ```typescript
    function jump(nums: number[]): number {
        let jumps: number = 0;
        let currentEnd: number = 0;
        let farthest: number = 0;

        for (let i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);

            if (i === currentEnd) {
                jumps++;
                currentEnd = farthest;
            }
        }
        return jumps;
    }
    ```

    ### Key Changes:
    - **Single Loop**: The code uses a single loop to iterate through the array.
    - **Early Increment**: Jumps are incremented right when the current end is reached, which simplifies the logic.

    ### Conclusion:
    Your solution is correct and efficient with a time complexity of \(O(n)\). The suggestions mainly aim to enhance clarity and maintainability. Great job overall!
 */