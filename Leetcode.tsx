//? LEETCODE TOP INTERVIEW 150

//! EASY QUESTIONS

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

//? 169. Marjority Element
const majorityElement = (nums: number[]): number => {
  const obj = {};
  let max = 0;
  let majority = nums[0];
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
  }

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number' && value > max) {
      max = value;
      majority = Number(key);
    }
  }
  return majority;
};
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

//? 121. Best Time to Buy and Sell Stock - Need to do this one again
const maxProfit = (prices: number[]): number => {
  let minBuyPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minBuyPrice) {
      minBuyPrice = prices[i];
    }
    if (prices[i] - minBuyPrice > maxProfit) {
      maxProfit = prices[i] - minBuyPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 50, 20, 23, 9, 1, 25, 44, 3]));

//? 13. Roman to Integer
const romanToInt = (s: string): number => {
  const romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const letterToEvaluate = romanNumerals[`${s[i]}${s[i + 1]}`];
    if (letterToEvaluate) {
      value += letterToEvaluate;
      i += 1;
    } else {
      value += romanNumerals[s[i]];
    }
  }
  return value;
};
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

//? 58. Length of Last Word
const lengthOfLastWord = (s: string): number => {
  let lastWord;
  const arr = s.split(' ');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') {
      lastWord = arr[i];
      break;
    }
  }
  return lastWord.length;
};
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));

//? 14. Longest Common Prefix
const longestCommonPrefix = (strs: string[]): string => {
  if (!strs.length) return '';
  if (strs.length === 1 && strs[0].length === 1) return strs[0];
  let commonPrefix = strs[0];
  let currentWord = '';
  for (let i = 1; i < strs.length; i++) {
    currentWord = strs[i];
    while (commonPrefix.indexOf(currentWord) !== 0) {
      currentWord = currentWord.slice(0, -1);
    }
    commonPrefix =
      commonPrefix.length < currentWord.length ? commonPrefix : currentWord;
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['cir', 'car']));
console.log(longestCommonPrefix(['', 'cbc', 'c', 'ca']));
console.log(longestCommonPrefix(['acc', 'aaa', 'aaba']));
console.log(longestCommonPrefix(['ab', 'a']));
console.log(longestCommonPrefix(['aaa', 'aa', 'aaa']));

//? 28. Find the Index of the First Occurrence in a String
const strStr = (haystack: string, needle: string): number => {
  return haystack.indexOf(needle);
};
console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('leetcode', 'abcleetcode'));
console.log(strStr('abcleetcode', 'leetcode'));
console.log(strStr('a', 'l'));

//? 125. Valid Palindrome
const isPalindrome = (s: string): boolean => {
  s = s.match(/[a-z0-9]/gi)?.join('') || '';
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome('hello'));
console.log(isPalindrome('hellos'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));

//? 392. Is Subsequence
const isSubsequence = (s: string, t: string): boolean => {
  if (!t.length && !s.length) return true;
  if (!t.length) return false;
  let currentIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const slicedString = t.slice(currentIndex);
    if (slicedString.indexOf(s[i]) >= 0) {
      currentIndex += slicedString.indexOf(s[i]) + 1;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.log(isSubsequence('', ''));
console.log(isSubsequence('', 'aaasgtv'));
console.log(isSubsequence('acb', 'ahbgdc'));
console.log(isSubsequence('aaaaaa', 'bbaaaa'));
console.log(isSubsequence('aza', 'abzba'));

//? Ransom Note
const canConstruct = (ransomNote: string, magazine: string): boolean => {
  let obj = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!(magazine[i] in obj)) {
      obj[magazine[i]] = 1;
    } else {
      obj[magazine[i]] += 1;
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (!(ransomNote[j] in obj)) {
      return false;
    } else if (obj[ransomNote[j]] > 0) {
      obj[ransomNote[j]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aa', 'cdbacfag'));
