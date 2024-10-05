/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i:number = m - 1;
    let j:number = n - 1;
    let k:number = m + n - 1;
    while(k>=0){
      if(i>= 0 && j>= 0){
          if(nums1[i] <= nums2[j]){
              nums1[k] = nums2[j];
              j = j - 1;
              k = k - 1;
          }else{
              nums1[k] = nums1[i];
              i = i - 1;
              k = k - 1;
          }
      }else{
          if(j>=0){
              nums1[k] = nums2[j];
              j = j - 1;
              k = k - 1;
          }else if (i>=0){
              nums1[k] = nums1[i];
              i = i - 1;
              k = k - 1;
          }
      }
    }
  };

  /**
   * 
    AI Advice:

    Your implementation of the merge function in TypeScript looks good overall! Here are some observations and suggestions for improvement:

    Strengths:
    Two-Pointer Approach: You've correctly implemented the two-pointer technique, which is efficient for merging sorted arrays.
    In-Place Modification: The function adheres to the requirement of modifying nums1 in-place.
    Suggestions for Improvement:
    Simplify Conditions: The outer while(k >= 0) loop is good, but you could simplify the conditions inside by first checking if either pointer has reached the start of its respective array. This could make the logic a bit clearer.

    Reduce Redundancy: The checks for i >= 0 and j >= 0 can be combined. Instead of nesting conditions, you can check for remaining elements in a single block after the primary logic.

    Code Readability: Adding comments or more descriptive variable names can enhance readability. For instance, you could name k something like mergeIndex for clarity.
   */