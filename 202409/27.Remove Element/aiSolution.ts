function removeElement(nums: number[], val: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            // Swap with the element at 'right' if 'left' points to 'val'
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--; // Move 'right' pointer left
        } else {
            left++; // Move 'left' pointer right
        }
    }

    return left; // 'left' now points to the count of elements not equal to 'val'
}
