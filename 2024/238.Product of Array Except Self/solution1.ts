function productExceptSelf(nums: number[]): number[] {
    // solution1:
    let n:number = nums.length;
    let pre:number[] = new Array(n);
    let suff:number[] = new Array(n);
    let ans:number[] = new Array(n);

    pre[0] = 1;
    suff[n-1] = 1;

    for(let index:number = 1;index<n;index++){
        pre[index] = pre[index-1] * nums[index-1];
    }

    for(let index:number = n-2;index>=0;index--){
        suff[index] = suff[index+1] * nums[index+1];
    }

    for(let index:number = 0;index<n;index++){
        ans[index] = pre[index] * suff[index];
    }
    return ans;
};