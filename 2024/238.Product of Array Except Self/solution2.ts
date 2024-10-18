function productExceptSelf(nums: number[]): number[] {
     // solution2
    let n:number = nums.length;
    let ans:number[] = new Array(n);
    ans.fill(1);

    let curr:number = 1;
    for(let index:number = 0;index<n;index++){
        ans[index] *= curr;
        curr *= nums[index];
    }

    curr = 1;
    for(let index:number = n-1;index>=0;index--){
        ans[index] *= curr;
        curr *= nums[index];
    }
    return ans;
};