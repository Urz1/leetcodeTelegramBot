const cron = require("node-cron");
var problemNumber = 0;
var day = 1;

var problemList = [
  {
    acRate: 51.07128462717362,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "1",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Two Sum",
    titleSlug: "two-sum",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 59.80717101235123,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "13",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Roman to Integer",
    titleSlug: "roman-to-integer",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 41.787795817380385,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "14",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Longest Common Prefix",
    titleSlug: "longest-common-prefix",
    topicTags: [
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Trie",
        id: "VG9waWNUYWdOb2RlOjI3",
        slug: "trie",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 40.21203411421978,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "20",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Valid Parentheses",
    titleSlug: "valid-parentheses",
    topicTags: [
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Stack",
        id: "VG9waWNUYWdOb2RlOjE1",
        slug: "stack",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 63.403994523256955,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "21",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Merge Two Sorted Lists",
    titleSlug: "merge-two-sorted-lists",
    topicTags: [
      {
        name: "Linked List",
        id: "VG9waWNUYWdOb2RlOjc=",
        slug: "linked-list",
      },
      {
        name: "Recursion",
        id: "VG9waWNUYWdOb2RlOjMx",
        slug: "recursion",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 53.68857210809526,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "26",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Remove Duplicates from Sorted Array",
    titleSlug: "remove-duplicates-from-sorted-array",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 40.93650236146621,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "28",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Find the Index of the First Occurrence in a String",
    titleSlug: "find-the-index-of-the-first-occurrence-in-a-string",
    topicTags: [
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "String Matching",
        id: "VG9waWNUYWdOb2RlOjYxMDUy",
        slug: "string-matching",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 44.422525764112706,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "66",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Plus One",
    titleSlug: "plus-one",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 38.10963520129751,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "69",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Sqrt(x)",
    titleSlug: "sqrtx",
    topicTags: [
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "Binary Search",
        id: "VG9waWNUYWdOb2RlOjEx",
        slug: "binary-search",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 52.24589339702532,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "70",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Climbing Stairs",
    titleSlug: "climbing-stairs",
    topicTags: [
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "Dynamic Programming",
        id: "VG9waWNUYWdOb2RlOjEz",
        slug: "dynamic-programming",
      },
      {
        name: "Memoization",
        id: "VG9waWNUYWdOb2RlOjMz",
        slug: "memoization",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 48.30202044454366,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "88",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Merge Sorted Array",
    titleSlug: "merge-sorted-array",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "Sorting",
        id: "VG9waWNUYWdOb2RlOjYxMDQ5",
        slug: "sorting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 74.9549401657879,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "94",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Binary Tree Inorder Traversal",
    titleSlug: "binary-tree-inorder-traversal",
    topicTags: [
      {
        name: "Stack",
        id: "VG9waWNUYWdOb2RlOjE1",
        slug: "stack",
      },
      {
        name: "Tree",
        id: "VG9waWNUYWdOb2RlOjIw",
        slug: "tree",
      },
      {
        name: "Depth-First Search",
        id: "VG9waWNUYWdOb2RlOjIx",
        slug: "depth-first-search",
      },
      {
        name: "Binary Tree",
        id: "VG9waWNUYWdOb2RlOjYxMDU3",
        slug: "binary-tree",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 55.53915252173385,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "101",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Symmetric Tree",
    titleSlug: "symmetric-tree",
    topicTags: [
      {
        name: "Tree",
        id: "VG9waWNUYWdOb2RlOjIw",
        slug: "tree",
      },
      {
        name: "Depth-First Search",
        id: "VG9waWNUYWdOb2RlOjIx",
        slug: "depth-first-search",
      },
      {
        name: "Breadth-First Search",
        id: "VG9waWNUYWdOb2RlOjIy",
        slug: "breadth-first-search",
      },
      {
        name: "Binary Tree",
        id: "VG9waWNUYWdOb2RlOjYxMDU3",
        slug: "binary-tree",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 74.69261472514853,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "104",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Maximum Depth of Binary Tree",
    titleSlug: "maximum-depth-of-binary-tree",
    topicTags: [
      {
        name: "Tree",
        id: "VG9waWNUYWdOb2RlOjIw",
        slug: "tree",
      },
      {
        name: "Depth-First Search",
        id: "VG9waWNUYWdOb2RlOjIx",
        slug: "depth-first-search",
      },
      {
        name: "Breadth-First Search",
        id: "VG9waWNUYWdOb2RlOjIy",
        slug: "breadth-first-search",
      },
      {
        name: "Binary Tree",
        id: "VG9waWNUYWdOb2RlOjYxMDU3",
        slug: "binary-tree",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 70.89375490724696,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "108",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Convert Sorted Array to Binary Search Tree",
    titleSlug: "convert-sorted-array-to-binary-search-tree",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Divide and Conquer",
        id: "VG9waWNUYWdOb2RlOjEy",
        slug: "divide-and-conquer",
      },
      {
        name: "Tree",
        id: "VG9waWNUYWdOb2RlOjIw",
        slug: "tree",
      },
      {
        name: "Binary Search Tree",
        id: "VG9waWNUYWdOb2RlOjMw",
        slug: "binary-search-tree",
      },
      {
        name: "Binary Tree",
        id: "VG9waWNUYWdOb2RlOjYxMDU3",
        slug: "binary-tree",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 73.26114712479357,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "118",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Pascal's Triangle",
    titleSlug: "pascals-triangle",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Dynamic Programming",
        id: "VG9waWNUYWdOb2RlOjEz",
        slug: "dynamic-programming",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 53.47052802739382,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "121",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Best Time to Buy and Sell Stock",
    titleSlug: "best-time-to-buy-and-sell-stock",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Dynamic Programming",
        id: "VG9waWNUYWdOb2RlOjEz",
        slug: "dynamic-programming",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 46.08500563231425,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "125",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Valid Palindrome",
    titleSlug: "valid-palindrome",
    topicTags: [
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 71.83999836846,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "136",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Single Number",
    titleSlug: "single-number",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Bit Manipulation",
        id: "VG9waWNUYWdOb2RlOjE5",
        slug: "bit-manipulation",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 49.02797229244331,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "141",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Linked List Cycle",
    titleSlug: "linked-list-cycle",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Linked List",
        id: "VG9waWNUYWdOb2RlOjc=",
        slug: "linked-list",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 56.22578491900791,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "160",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Intersection of Two Linked Lists",
    titleSlug: "intersection-of-two-linked-lists",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Linked List",
        id: "VG9waWNUYWdOb2RlOjc=",
        slug: "linked-list",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 32.85739849925084,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "163",
    isFavor: false,
    paidOnly: true,
    status: null,
    title: "Missing Ranges",
    titleSlug: "missing-ranges",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 63.86706419207487,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "169",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Majority Element",
    titleSlug: "majority-element",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Divide and Conquer",
        id: "VG9waWNUYWdOb2RlOjEy",
        slug: "divide-and-conquer",
      },
      {
        name: "Sorting",
        id: "VG9waWNUYWdOb2RlOjYxMDQ5",
        slug: "sorting",
      },
      {
        name: "Counting",
        id: "VG9waWNUYWdOb2RlOjYxMDYy",
        slug: "counting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 63.04283768980535,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "171",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Excel Sheet Column Number",
    titleSlug: "excel-sheet-column-number",
    topicTags: [
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 56.60859952976306,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "190",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Reverse Bits",
    titleSlug: "reverse-bits",
    topicTags: [
      {
        name: "Divide and Conquer",
        id: "VG9waWNUYWdOb2RlOjEy",
        slug: "divide-and-conquer",
      },
      {
        name: "Bit Manipulation",
        id: "VG9waWNUYWdOb2RlOjE5",
        slug: "bit-manipulation",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 68.67791233744272,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "191",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Number of 1 Bits",
    titleSlug: "number-of-1-bits",
    topicTags: [
      {
        name: "Divide and Conquer",
        id: "VG9waWNUYWdOb2RlOjEy",
        slug: "divide-and-conquer",
      },
      {
        name: "Bit Manipulation",
        id: "VG9waWNUYWdOb2RlOjE5",
        slug: "bit-manipulation",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 55.48136408098087,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "202",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Happy Number",
    titleSlug: "happy-number",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 75.05499814698551,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "206",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Reverse Linked List",
    titleSlug: "reverse-linked-list",
    topicTags: [
      {
        name: "Linked List",
        id: "VG9waWNUYWdOb2RlOjc=",
        slug: "linked-list",
      },
      {
        name: "Recursion",
        id: "VG9waWNUYWdOb2RlOjMx",
        slug: "recursion",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 61.12426718904194,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "217",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Contains Duplicate",
    titleSlug: "contains-duplicate",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Sorting",
        id: "VG9waWNUYWdOb2RlOjYxMDQ5",
        slug: "sorting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 51.23927529152419,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "234",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Palindrome Linked List",
    titleSlug: "palindrome-linked-list",
    topicTags: [
      {
        name: "Linked List",
        id: "VG9waWNUYWdOb2RlOjc=",
        slug: "linked-list",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "Stack",
        id: "VG9waWNUYWdOb2RlOjE1",
        slug: "stack",
      },
      {
        name: "Recursion",
        id: "VG9waWNUYWdOb2RlOjMx",
        slug: "recursion",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 63.45084841954577,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "242",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Valid Anagram",
    titleSlug: "valid-anagram",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Sorting",
        id: "VG9waWNUYWdOb2RlOjYxMDQ5",
        slug: "sorting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 64.35061987409011,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "268",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Missing Number",
    titleSlug: "missing-number",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "Binary Search",
        id: "VG9waWNUYWdOb2RlOjEx",
        slug: "binary-search",
      },
      {
        name: "Bit Manipulation",
        id: "VG9waWNUYWdOb2RlOjE5",
        slug: "bit-manipulation",
      },
      {
        name: "Sorting",
        id: "VG9waWNUYWdOb2RlOjYxMDQ5",
        slug: "sorting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 61.43831730008601,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "283",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Move Zeroes",
    titleSlug: "move-zeroes",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 46.05226019992874,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "326",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Power of Three",
    titleSlug: "power-of-three",
    topicTags: [
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "Recursion",
        id: "VG9waWNUYWdOb2RlOjMx",
        slug: "recursion",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 77.35257609797162,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "344",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Reverse String",
    titleSlug: "reverse-string",
    topicTags: [
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 56.233292505872555,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "350",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Intersection of Two Arrays II",
    titleSlug: "intersection-of-two-arrays-ii",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "Binary Search",
        id: "VG9waWNUYWdOb2RlOjEx",
        slug: "binary-search",
      },
      {
        name: "Sorting",
        id: "VG9waWNUYWdOb2RlOjYxMDQ5",
        slug: "sorting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 60.293934225211345,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "387",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "First Unique Character in a String",
    titleSlug: "first-unique-character-in-a-string",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Queue",
        id: "VG9waWNUYWdOb2RlOjM0",
        slug: "queue",
      },
      {
        name: "Counting",
        id: "VG9waWNUYWdOb2RlOjYxMDYy",
        slug: "counting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 71.1877464578368,
    difficulty: "Easy",
    freqBar: null,
    frontendQuestionId: "412",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Fizz Buzz",
    titleSlug: "fizz-buzz",
    topicTags: [
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Simulation",
        id: "VG9waWNUYWdOb2RlOjYxMDU1",
        slug: "simulation",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 41.55325529270155,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "2",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Add Two Numbers",
    titleSlug: "add-two-numbers",
    topicTags: [
      {
        name: "Linked List",
        id: "VG9waWNUYWdOb2RlOjc=",
        slug: "linked-list",
      },
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "Recursion",
        id: "VG9waWNUYWdOb2RlOjMx",
        slug: "recursion",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 34.14395598614165,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "3",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Longest Substring Without Repeating Characters",
    titleSlug: "longest-substring-without-repeating-characters",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Sliding Window",
        id: "VG9waWNUYWdOb2RlOjU1ODIx",
        slug: "sliding-window",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 33.26269960044187,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "5",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Longest Palindromic Substring",
    titleSlug: "longest-palindromic-substring",
    topicTags: [
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Dynamic Programming",
        id: "VG9waWNUYWdOb2RlOjEz",
        slug: "dynamic-programming",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 27.989782144985664,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "7",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Reverse Integer",
    titleSlug: "reverse-integer",
    topicTags: [
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 16.82297262908743,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "8",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "String to Integer (atoi)",
    titleSlug: "string-to-integer-atoi",
    topicTags: [
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 54.313841371631575,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "11",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Container With Most Water",
    titleSlug: "container-with-most-water",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "Greedy",
        id: "VG9waWNUYWdOb2RlOjE3",
        slug: "greedy",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 33.572000223668304,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "15",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "3Sum",
    titleSlug: "3sum",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
      {
        name: "Sorting",
        id: "VG9waWNUYWdOb2RlOjYxMDQ5",
        slug: "sorting",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 58.99999869056644,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "17",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Letter Combinations of a Phone Number",
    titleSlug: "letter-combinations-of-a-phone-number",
    topicTags: [
      {
        name: "Hash Table",
        id: "VG9waWNUYWdOb2RlOjY=",
        slug: "hash-table",
      },
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Backtracking",
        id: "VG9waWNUYWdOb2RlOjE0",
        slug: "backtracking",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 42.995091157818415,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "19",
    isFavor: false,
    paidOnly: false,
    status: "ac",
    title: "Remove Nth Node From End of List",
    titleSlug: "remove-nth-node-from-end-of-list",
    topicTags: [
      {
        name: "Linked List",
        id: "VG9waWNUYWdOb2RlOjc=",
        slug: "linked-list",
      },
      {
        name: "Two Pointers",
        id: "VG9waWNUYWdOb2RlOjk=",
        slug: "two-pointers",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 73.6497099367532,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "22",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Generate Parentheses",
    titleSlug: "generate-parentheses",
    topicTags: [
      {
        name: "String",
        id: "VG9waWNUYWdOb2RlOjEw",
        slug: "string",
      },
      {
        name: "Dynamic Programming",
        id: "VG9waWNUYWdOb2RlOjEz",
        slug: "dynamic-programming",
      },
      {
        name: "Backtracking",
        id: "VG9waWNUYWdOb2RlOjE0",
        slug: "backtracking",
      },
    ],
    hasSolution: true,
    hasVideoSolution: true,
  },
  {
    acRate: 17.13216282574279,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "29",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Divide Two Integers",
    titleSlug: "divide-two-integers",
    topicTags: [
      {
        name: "Math",
        id: "VG9waWNUYWdOb2RlOjg=",
        slug: "math",
      },
      {
        name: "Bit Manipulation",
        id: "VG9waWNUYWdOb2RlOjE5",
        slug: "bit-manipulation",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
  {
    acRate: 40.118136911376226,
    difficulty: "Medium",
    freqBar: null,
    frontendQuestionId: "33",
    isFavor: false,
    paidOnly: false,
    status: null,
    title: "Search in Rotated Sorted Array",
    titleSlug: "search-in-rotated-sorted-array",
    topicTags: [
      {
        name: "Array",
        id: "VG9waWNUYWdOb2RlOjU=",
        slug: "array",
      },
      {
        name: "Binary Search",
        id: "VG9waWNUYWdOb2RlOjEx",
        slug: "binary-search",
      },
    ],
    hasSolution: true,
    hasVideoSolution: false,
  },
];

const TelegramBot = require("node-telegram-bot-api");
const token = "6960600664:AAGkO-__S5ON82E7y4zzlsprgCndX0yDP14";

const userList = [];

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  console.log("the starter name is: " + msg.from.first_name);

  const introduction =
    "📚 *Welcome to the LeetCode Daily Problems Bot!* 🚀\n\nAre you ready to supercharge your coding skills and tackle daily programming challenges? Look no further! This bot is here to provide you with a daily dose of brain-teasing LeetCode problems.\n\nEvery day, you'll receive a new problem carefully selected from the vast LeetCode collection. These problems cover a wide range of data structures, algorithms, and programming concepts, helping you sharpen your problem-solving abilities and prepare for technical interviews.\n\nHere's what you can expect from our bot:\n✅ Daily Delivery: Receive a fresh problem right in your Telegram chat every day.\n⚡️ Challenge Yourself: Solve the problem within the suggested time frame to enhance your coding speed and efficiency.\n🏆 Leaderboard: Compete with fellow enthusiasts and see who solves the most problems.\n🔔 Event Notifications: Stay informed about upcoming contests and coding events to further boost your skills.\n🎯 Random Recommendations: Get a surprise challenge from the LeetCode collection with a single command.\n\nTo get started, simply register with the bot using the /register command. Once registered, you'll automatically start receiving daily problems. Use the /help command to explore additional bot features and commands.\n\nSo, are you ready to embark on this coding adventure? Let's solve some LeetCode problems together and level up our programming prowess!\n\nIf you have any questions or need assistance, feel free to reach out. Happy coding! 🚀✨";
  bot.sendMessage(chatId, introduction, {
    parse_mode: "Markdown",
  });
  console.log(msg);
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpManual = `📚 *LeetCode Daily Problems Bot Help Manual* 🤖

Welcome to the help manual for the LeetCode Daily Problems Bot! This guide will provide you with an overview of the bot's features and commands.

1️⃣ /register - Register with the bot to start receiving daily coding problems. Once registered, you'll automatically receive a fresh problem every day.

2️⃣ /problem - Fetch the current daily problem directly in your chat. Use this command if you want to access the problem without waiting for the daily delivery.

3️⃣ /submit <solution> - Submit your solution to the current daily problem. Replace <solution> with your code or algorithmic approach. Be sure to double-check your solution before submitting.

4️⃣ /leaderboard - View the leaderboard and see the top performers who have solved the most problems. Compete with fellow enthusiasts and strive to climb up the ranks.

5️⃣ /recommend - Get a random recommendation from the vast LeetCode problem collection. Use this command when you want to tackle a challenge outside of the daily problem.

6️⃣ /events - Stay informed about upcoming coding contests and events. Get notifications about coding competitions, webinars, and other coding-related activities.

7️⃣ /help - Display this help manual. Use this command whenever you need a quick reminder of the available commands and features.

Remember, the bot is designed to help you enhance your coding skills, prepare for technical interviews, and have fun while solving LeetCode problems. Don't hesitate to reach out if you have any questions or need assistance.

Happy coding! 🚀✨`;
  bot.sendMessage(chatId, helpManual, {
    parse_mode: "Markdown",
  });
});

bot.onText(/\/register/, (msg) => {
  console.log(userList);
  const userId = msg.from.id;
  const chatId = msg.chat.id;
  if (userList.some((users) => users.id == userId)) {
    bot.sendMessage(chatId, "*You* are already registered.", {
      parse_mode: "Markdown",
    });
    return;
  }
  const user = {
    id: userId,
    Fname: msg.from.first_name,
    username: msg.from.username,
  };
  console.log(user);
  userList.push(user);
  bot.sendMessage(msg.from.id, "Successfully Registered!");
});

function fetchDailyProblem() {
  try {
    return problemList[problemNumber++];
  } catch (error) {
    console.log("Index out of range");
  }
  return {
    title: "Sorry, No questions for today!",
    description: "None",
    link: "",
    day: -1,
  };
}

function sendDailyProblem() {
  const problem = fetchDailyProblem();
  console.log(problem);

  userList.forEach((user) => {
    const message =
      "📚 *Daily LeetCode Problem*\n\n" +
      day++ +
      "\n\n" +
      "Title: " +
      problem.title +
      "\n\n" +
      "Link :\n\n" +
      "https://leetcode.com/problems/" +
      problem.titleSlug;
    bot.sendMessage(user.id, message, { parse_mode: "Markdown" });
  });
}

cron.schedule("26 10 * * *", () => {
  sendDailyProblem();
  console.log("sent!");
});
