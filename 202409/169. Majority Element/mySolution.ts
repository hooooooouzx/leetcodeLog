function majorityElement(nums: number[]): number {
    let count:number = 0;
    let candidate:number = 0;

    for(let index = 0 ; index < nums.length ; index++){
        if(count == 0){
            candidate = nums[index];
        }

        if(nums[index] == candidate){
            count++;
        }else{
            count--;
        }
    }

    return candidate;
};


/**
 * 
 * Your solution implements the Boyer-Moore Voting Algorithm, which is efficient and meets the requirements for linear time and O(1) space. Here are a few points of advice and observations:

    1. **Clarity**: Your code is clear and straightforward. Consider adding comments to explain the logic, especially for those unfamiliar with the algorithm.

    2. **Type Safety**: Since TypeScript is used, you can specify the return type of the function directly in the function signature, which you already did. Good job!

    3. **Edge Cases**: While the problem states that a majority element always exists, you might consider validating inputs in real-world applications to ensure robustness.

    Here’s a slightly modified version with comments for clarity:

    ```typescript
    function majorityElement(nums: number[]): number {
        let count: number = 0;
        let candidate: number = 0;

        for (let index = 0; index < nums.length; index++) {
            if (count === 0) {
                candidate = nums[index]; // Set the new candidate
            }

            // Increase or decrease count based on the current candidate
            if (nums[index] === candidate) {
                count++;
            } else {
                count--;
            }
        }

        return candidate; // Return the candidate as the majority element
    }
    ```

    Overall, your implementation is solid! Great job!
 * 
 */