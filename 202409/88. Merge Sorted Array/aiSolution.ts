function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i: number = m - 1;
    let j: number = n - 1;
    let mergeIndex: number = m + n - 1;

    while (j >= 0) { // Only need to check j since we can ignore leftover nums1 elements
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[mergeIndex] = nums1[i];
            i--;
        } else {
            nums1[mergeIndex] = nums2[j];
            j--;
        }
        mergeIndex--;
    }
}
