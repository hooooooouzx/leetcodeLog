function hIndex(citations: number[]): number {
    citations.sort((a,b) => a-b);
    let length:number = citations.length;
    for(let index:number = 0;index<length;index++){
        if(length - index <= citations[index]){
            return length - index;
        }
    }
    
    return 0;
};


/**
 * Your implementation of the `hIndex` function is quite good! Here are a few suggestions for improvement:

    1. **Clarify Variable Names**: While `length` is clear, you might consider using `n` for consistency with common algorithm practices. It makes the purpose clearer, especially in the context of an algorithm.

    2. **Reduce Sorting Complexity**: If you're looking to optimize, consider using a counting sort approach given the constraints (0 to 1000 for citations). This could potentially improve performance, especially for larger arrays.

    3. **Add Comments**: Adding comments to your code can help others (or your future self) understand your logic better. Explain the purpose of the loop and what the condition checks.

    4. **Edge Cases**: Consider handling edge cases explicitly, such as when the input array is empty or contains all zero citations. While your current logic covers most cases, being explicit can enhance readability.

    Here’s a slightly revised version with comments and a potential variable name change:

    ```typescript
    function hIndex(citations: number[]): number {
        citations.sort((a, b) => a - b); // Sort citations in ascending order
        const n: number = citations.length; // Get the number of papers

        for (let index: number = 0; index < n; index++) {
            // Check if the number of papers left is less than or equal to citations at this index
            if (n - index <= citations[index]) {
                return n - index; // Return the h-index
            }
        }
        
        return 0; // Return 0 if no h-index is found
    }
    ```

    Overall, your implementation is effective and meets the problem's requirements!
 */