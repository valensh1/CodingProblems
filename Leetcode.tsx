//? 88. Merge Sorted Array
const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void => {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1, 2, 3, 5, 9, 9, 13, 0, 0, 0], 7, [2, 5, 6, 8, 11, 20], 6));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

//? 27. Remove Element
const removeElement = (nums: number[], val: number): number => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = 999;
    } else {
      count++;
    }
  }
  nums.sort();
  console.log(nums);
  return count;
};
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(
  removeElement([0, 1, 2, 5, 5, 2, 5, 3, 0, 5, 5, 6, 3, 45, 4, 2], 5)
);

//? 26. Remove Duplicates from Sorted Array
const removeDuplicates = (nums: number[]): number => {
  let count = 0; // To keep track of unique elements

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If it's the first occurrence of this number, we keep it
    if (nums.indexOf(nums[i]) === i) {
      nums[count] = nums[i]; // Place it at the current position
      count++; // Increment count of unique elements
    }
  }

  console.log(nums);
  return count; // Return the count of unique numbers
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
