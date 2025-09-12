export const problems = [
  {
    id: 2,
    title: "Add Two Numbers",
    description: "Write a program that takes two integers as input from the user and computes their sum. The integers can be positive or negative, and the program should output the result as an integer. Ensure the program handles valid integer inputs within the range of typical 32-bit integer limits (-2^31 to 2^31 - 1).",
    testCases: [
      { input: "3 5", output: "8" },
      { input: "10 20", output: "30" }
    ],
    languages: {
      c: {
        testCases: [
          { input: "3 5", output: "8" },
          { input: "10 20", output: "30" }
        ]
      },
      cpp: {
        testCases: [
          { input: "3 5", output: "8" },
          { input: "10 20", output: "30" }
        ]
      },
      java: {
        testCases: [
          { input: "3 5", output: "8" },
          { input: "10 20", output: "30" }
        ]
      }
    }
  },
  {
    id: 3,
    title: "Check Even or Odd",
    description: "Create a program to determine whether a given integer is even or odd. The program should take a single integer input and output 'Even' if the number is divisible by 2, or 'Odd' otherwise. Handle both positive and negative integers within the range of -10^9 to 10^9.",
    testCases: [
      { input: "7", output: "Odd" },
      { input: "12", output: "Even" }
    ]
  },
  {
    id: 4,
    title: "Maximum of Two Numbers",
    description: "Design a program that accepts two integers as input and outputs the larger of the two. If the numbers are equal, output either number. The integers can be positive or negative, and the program should handle values within the range of -10^9 to 10^9.",
    testCases: [
      { input: "10 20", output: "20" },
      { input: "5 3", output: "5" }
    ]
  },
  {
    id: 5,
    title: "Maximum of Three Numbers",
    description: "Write a program that takes three integers as input and outputs the largest among them. If multiple numbers are equal and maximum, output any one of them. The input integers can range from -10^9 to 10^9.",
    testCases: [
      { input: "3 7 5", output: "7" },
      { input: "1 4 2", output: "4" }
    ]
  },
  {
    id: 6,
    title: "Leap Year Check",
    description: "Develop a program to determine if a given year is a leap year. A year is a leap year if it is divisible by 4, except for century years (divisible by 100), which must also be divisible by 400. Input will be a positive integer representing a year (1 to 10^5), and output 'Leap Year' or 'Not a Leap Year'.",
    testCases: [
      { input: "2000", output: "Leap Year" },
      { input: "1900", output: "Not a Leap Year" }
    ]
  },
  {
    id: 7,
    title: "Factorial of Number",
    description: "Write a program to compute the factorial of a non-negative integer n (0 ≤ n ≤ 20). The factorial of n is the product of all positive integers less than or equal to n (n! = n × (n-1) × ... × 1). For n = 0, the factorial is 1. Output the result as a string to handle large numbers.",
    testCases: [
      { input: "5", output: "120" },
      { input: "0", output: "1" }
    ]
  },
  {
    id: 8,
    title: "Prime Number Check",
    description: "Create a program to check if a given positive integer is a prime number. A prime number is greater than 1 and divisible only by 1 and itself. Input will be a positive integer (2 to 10^9), and output 'Prime' or 'Not Prime'. Optimize for efficiency in checking divisibility.",
    testCases: [
      { input: "11", output: "Prime" },
      { input: "9", output: "Not Prime" }
    ]
  },
  {
    id: 9,
    title: "Multiplication Table",
    description: "Write a program that takes a positive integer n (1 ≤ n ≤ 20) and prints its multiplication table up to 10 terms (n × 1, n × 2, ..., n × 10). Output the results as a space-separated string.",
    testCases: [
      { input: "2", output: "2 4 6 8 10 12 14 16 18 20" },
      { input: "3", output: "3 6 9 12 15 18 21 24 27 30" }
    ]
  },
  {
    id: 10,
    title: "Fibonacci Series",
    description: "Generate the Fibonacci series up to n terms, where n is a positive integer (1 ≤ n ≤ 45). The Fibonacci sequence starts with 0, 1, and each subsequent number is the sum of the previous two. Output the series as space-separated integers.",
    testCases: [
      { input: "5", output: "0 1 1 2 3" },
      { input: "7", output: "0 1 1 2 3 5 8" }
    ]
  },
  {
    id: 11,
    title: "Sum of Natural Numbers",
    description: "Calculate the sum of the first n natural numbers (1 + 2 + ... + n), where n is a positive integer (1 ≤ n ≤ 10^5). Use an efficient formula or method to compute the sum and output the result.",
    testCases: [
      { input: "10", output: "55" },
      { input: "5", output: "15" }
    ]
  },
  {
    id: 12,
    title: "Reverse a Number",
    description: "Write a program to reverse the digits of a positive integer (1 ≤ n ≤ 10^9). For example, if the input is 1234, the output should be 4321. Remove leading zeros in the result, if any.",
    testCases: [
      { input: "1234", output: "4321" },
      { input: "100", output: "1" }
    ]
  },
  {
    id: 13,
    title: "Palindrome Number",
    description: "Determine if a given positive integer (1 ≤ n ≤ 10^9) is a palindrome, i.e., it reads the same forwards and backwards (e.g., 121 is a palindrome). Output 'Palindrome' or 'Not Palindrome'.",
    testCases: [
      { input: "121", output: "Palindrome" },
      { input: "123", output: "Not Palindrome" }
    ]
  },
  {
    id: 14,
    title: "Armstrong Number (3-digit)",
    description: "Check if a 3-digit positive integer (100 ≤ n ≤ 999) is an Armstrong number. A number is an Armstrong number if the sum of the cubes of its digits equals the number itself (e.g., 153 = 1^3 + 5^3 + 3^3). Output 'Armstrong' or 'Not Armstrong'.",
    testCases: [
      { input: "153", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" }
    ]
  },
  {
    id: 15,
    title: "Swap Two Numbers",
    description: "Swap the values of two integers without using a temporary variable. Take two integers as input (-10^9 ≤ a, b ≤ 10^9) and output the swapped values as a space-separated string.",
    testCases: [
      { input: "3 5", output: "5 3" },
      { input: "10 20", output: "20 10" }
    ]
  },
  {
    id: 16,
    title: "Simple Interest",
    description: "Calculate the simple interest given the principal amount (P), rate of interest per annum (R), and time in years (T). Use the formula: SI = (P × R × T) / 100. Inputs are positive numbers (P ≤ 10^5, R ≤ 100, T ≤ 100), and output the result rounded to one decimal place.",
    testCases: [
      { input: "1000 5 2", output: "100.0" },
      { input: "1500 3 1", output: "45.0" }
    ]
  },
  {
    id: 17,
    title: "Area of Circle",
    description: "Compute the area of a circle given its radius (r). Use the formula: Area = π × r^2, where π ≈ 3.14159. The radius is a positive number (1 ≤ r ≤ 100), and output the result rounded to two decimal places.",
    testCases: [
      { input: "2", output: "12.57" },
      { input: "5", output: "78.54" }
    ]
  },
  {
    id: 18,
    title: "Count Digits",
    description: "Count the number of digits in a given non-negative integer (0 ≤ n ≤ 10^18). For example, the number 12345 has 5 digits. Output the count as an integer.",
    testCases: [
      { input: "12345", output: "5" },
      { input: "0", output: "1" }
    ]
  },
  {
    id: 19,
    title: "Sum of Digits",
    description: "Calculate the sum of the digits of a non-negative integer (0 ≤ n ≤ 10^18). For example, for input 123, the sum is 1 + 2 + 3 = 6. Output the sum as an integer.",
    testCases: [
      { input: "123", output: "6" },
      { input: "456", output: "15" }
    ]
  },
  {
    id: 20,
    title: "Check Positive or Negative",
    description: "Determine whether a given integer is positive, negative, or zero. The input integer ranges from -10^9 to 10^9. Output 'Positive', 'Negative', or 'Zero' accordingly.",
    testCases: [
      { input: "0", output: "Zero" },
      { input: "-3", output: "Negative" },
      { input: "5", output: "Positive" }
    ]
  },
  {
    id: 21,
    title: "Find HCF",
    description: "Find the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two positive integers (1 ≤ a, b ≤ 10^9) using an efficient algorithm, such as the Euclidean algorithm. Output the HCF as an integer.",
    testCases: [
      { input: "12 18", output: "6" },
      { input: "8 32", output: "8" }
    ]
  },
  {
    id: 22,
    title: "Find LCM",
    description: "Calculate the Least Common Multiple (LCM) of two positive integers (1 ≤ a, b ≤ 10^9). Use the formula: LCM(a, b) = (a × b) / GCD(a, b). Ensure the program handles large numbers efficiently and outputs the LCM as an integer.",
    testCases: [
      { input: "4 5", output: "20" },
      { input: "3 7", output: "21" }
    ]
  },
  {
    id: 23,
    title: "Check Alphabet",
    description: "Determine if a given character is an alphabet letter (a-z or A-Z). The input is a single character, and the program should output 'Alphabet' if it is a letter, or 'Not Alphabet' otherwise.",
    testCases: [
      { input: "A", output: "Alphabet" },
      { input: "1", output: "Not Alphabet" }
    ]
  },
  {
    id: 24,
    title: "Check Vowel or Consonant",
    description: "Check if a given alphabet character is a vowel (a, e, i, o, u, case-insensitive) or a consonant. The input is a single alphabet character, and the output should be 'Vowel' or 'Consonant'.",
    testCases: [
      { input: "e", output: "Vowel" },
      { input: "z", output: "Consonant" }
    ]
  },
  {
    id: 25,
    title: "ASCII Value",
    description: "Find the ASCII value of a given character. The input is a single character (any printable ASCII character), and the output is its corresponding ASCII value as an integer (0 to 127).",
    testCases: [
      { input: "A", output: "65" },
      { input: "a", output: "97" }
    ]
  },
  {
    id: 26,
    title: "Sum of Even Numbers",
    description: "Calculate the sum of all even numbers from 1 to n, where n is a positive integer (1 ≤ n ≤ 10^5). For example, if n = 10, sum the even numbers 2 + 4 + 6 + 8 + 10 = 30. Output the sum as an integer.",
    testCases: [
      { input: "10", output: "30" },
      { input: "5", output: "6" }
    ]
  },
  {
    id: 27,
    title: "Sum of Odd Numbers",
    description: "Compute the sum of all odd numbers from 1 to n, where n is a positive integer (1 ≤ n ≤ 10^5). For example, if n = 10, sum the odd numbers 1 + 3 + 5 + 7 + 9 = 25. Output the sum as an integer.",
    testCases: [
      { input: "5", output: "9" },
      { input: "10", output: "25" }
    ]
  },
  {
    id: 28,
    title: "Check Divisibility",
    description: "Determine if a positive integer (1 ≤ n ≤ 10^9) is divisible by both 2 and 3. Output 'Divisible' if the number is divisible by both, or 'Not Divisible' otherwise.",
    testCases: [
      { input: "6", output: "Divisible" },
      { input: "10", output: "Not Divisible" }
    ]
  },
  {
    id: 29,
    title: "Count Vowels in String",
    description: "Count the number of vowels (a, e, i, o, u, case-insensitive) in a given string. The input string contains lowercase and/or uppercase letters and has a length of 1 to 100 characters. Output the count as an integer.",
    testCases: [
      { input: "hello", output: "2" },
      { input: "aeiou", output: "5" }
    ]
  },
  {
    id: 30,
    title: "Check String Palindrome",
    description: "Check if a given string (containing lowercase letters, length 1 to 100) is a palindrome, i.e., reads the same forwards and backwards. Output 'Palindrome' or 'Not Palindrome'.",
    testCases: [
      { input: "madam", output: "Palindrome" },
      { input: "hello", output: "Not Palindrome" }
    ]
  },
  {
    id: 31,
    title: "Count Words in String",
    description: "Count the number of words in a given sentence. Words are sequences of characters separated by a single space, with no leading or trailing spaces. The input string (length 1 to 100) contains letters, spaces, and possibly punctuation. Output the word count as an integer.",
    testCases: [
      { input: "Hello world", output: "2" },
      { input: "This is Python", output: "3" }
    ]
  },
  {
    id: 32,
    title: "Reverse String",
    description: "Reverse a given string (length 1 to 100, containing lowercase letters). For example, if the input is 'hello', the output should be 'olleh'. Preserve the case of the input string.",
    testCases: [
      { input: "hello", output: "olleh" },
      { input: "Python", output: "nohtyP" }
    ]
  },
  {
    id: 33,
    title: "Uppercase String",
    description: "Convert a given string (length 1 to 100, containing letters) to uppercase. For example, if the input is 'python', the output should be 'PYTHON'. Handle both lowercase and mixed-case inputs.",
    testCases: [
      { input: "python", output: "PYTHON" }
    ]
  },
  {
    id: 34,
    title: "Lowercase String",
    description: "Convert a given string (length 1 to 100, containing letters) to lowercase. For example, if the input is 'PYTHON', the output should be 'python'. Handle both uppercase and mixed-case inputs.",
    testCases: [
      { input: "PYTHON", output: "python" }
    ]
  },
  {
    id: 35,
    title: "Square of Number",
    description: "Calculate the square of a given integer (-10^4 ≤ n ≤ 10^4). The square is n × n. Output the result as an integer.",
    testCases: [
      { input: "5", output: "25" },
      { input: "9", output: "81" }
    ]
  },
  {
    id: 36,
    title: "Cube of Number",
    description: "Compute the cube of a given integer (-10^4 ≤ n ≤ 10^4). The cube is n × n × n. Output the result as an integer.",
    testCases: [
      { input: "3", output: "27" },
      { input: "4", output: "64" }
    ]
  },
  {
    id: 37,
    title: "Check Armstrong (n-digit)",
    description: "Determine if a positive integer (1 ≤ n ≤ 10^18) is an Armstrong number. A number is an Armstrong number if the sum of its digits raised to the power of the number of digits equals the number itself (e.g., 9474 = 9^4 + 4^4 + 7^4 + 4^4). Output 'Armstrong' or 'Not Armstrong'.",
    testCases: [
      { input: "9474", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" }
    ]
  },
  {
    id: 38,
    title: "Sum of Natural Numbers (Recursion)",
    description: "Calculate the sum of the first n natural numbers (1 + 2 + ... + n) using recursion, where n is a positive integer (1 ≤ n ≤ 10^4). Output the sum as an integer.",
    testCases: [
      { input: "5", output: "15" },
      { input: "10", output: "55" }
    ]
  },
  {
    id: 39,
    title: "Calculate Power",
    description: "Compute x raised to the power y, where x is a positive integer (1 ≤ x ≤ 100) and y is a non-negative integer (0 ≤ y ≤ 20). Output the result as an integer.",
    testCases: [
      { input: "2 3", output: "8" },
      { input: "5 2", output: "25" }
    ]
  },
  {
    id: 40,
    title: "Find Largest Element",
    description: "Find the largest number in a list of integers. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output the largest integer.",
    testCases: [
      { input: "1 2 3 4 5", output: "5" },
      { input: "10 7 11", output: "11" }
    ]
  },
  {
    id: 41,
    title: "Find Smallest Element",
    description: "Find the smallest number in a list of integers. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output the smallest integer.",
    testCases: [
      { input: "1 2 3 4 5", output: "1" },
      { input: "10 7 11", output: "7" }
    ]
  },
  {
    id: 42,
    title: "Check Armstrong (2-digit)",
    description: "Check if a 2-digit positive integer (10 ≤ n ≤ 99) is an Armstrong number. Note that no 2-digit number is an Armstrong number (sum of squares of digits does not equal the number). Output 'Not Armstrong' for all valid inputs.",
    testCases: [
      { input: "10", output: "Not Armstrong" }
    ]
  },
  {
    id: 43,
    title: "Find GCD using Recursion",
    description: "Calculate the Greatest Common Divisor (GCD) of two positive integers (1 ≤ a, b ≤ 10^9) using a recursive implementation of the Euclidean algorithm. Output the GCD as an integer.",
    testCases: [
      { input: "36 60", output: "12" }
    ]
  },
  {
    id: 44,
    title: "Find ASCII Range",
    description: "Print all lowercase letters from 'a' to 'z' along with their ASCII values in the format 'letter value'. Output as a space-separated string (e.g., 'a 97 b 98 ... z 122'). No input is required.",
    testCases: [
      { input: "", output: "a 97 b 98 c 99 ... z 122" }
    ]
  },
  {
    id: 45,
    title: "Generate Random Number",
    description: "Generate a random integer between 1 and 100 (inclusive). No input is required, and the output should be a single integer. Ensure the randomness is uniform.",
    testCases: [
      { input: "", output: "Random number between 1 to 100" }
    ]
  },
  {
    id: 46,
    title: "Print Pattern *",
    description: "Print a pattern of stars forming a right-angled triangle with n rows (1 ≤ n ≤ 10). Each row i has i stars, with no spaces between stars in a row. Output the pattern as a string representation.",
    testCases: [
      { input: "3", output: "* ** ***" }
    ]
  },
  {
    id: 47,
    title: "Find Average of Numbers",
    description: "Calculate the average (mean) of a list of integers. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output the average rounded to one decimal place.",
    testCases: [
      { input: "2 4 6", output: "4.0" }
    ]
  },
  {
    id: 48,
    title: "List All Prime in Range",
    description: "Print all prime numbers in the range from 1 to n, where n is a positive integer (1 ≤ n ≤ 1000). A prime number is greater than 1 and divisible only by 1 and itself. Output the primes as a space-separated string.",
    testCases: [
      { input: "10", output: "2 3 5 7" }
    ]
  },
  {
    id: 49,
    title: "Reverse a List",
    description: "Reverse the order of elements in a list of integers. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output the reversed list as a space-separated string.",
    testCases: [
      { input: "1 2 3 4", output: "4 3 2 1" }
    ]
  },
  {
    id: 50,
    title: "Remove Duplicates",
    description: "Remove all duplicate elements from a list of integers, keeping only the first occurrence of each number. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output the resulting list as a space-separated string in the order of first appearance.",
    testCases: [
      { input: "1 2 2 3 4 4", output: "1 2 3 4" }
    ]
  },
  {
    id: 51,
    title: "Check if Number is Perfect",
    description: "Determine if a positive integer (1 ≤ n ≤ 10^6) is a perfect number. A perfect number equals the sum of its proper divisors (excluding itself). For example, 6 is perfect because 1 + 2 + 3 = 6. Output 'Yes' or 'No'.",
    testCases: [
      { input: "6", output: "Yes" },
      { input: "10", output: "No" }
    ]
  },
  {
    id: 52,
    title: "Count Words in a Sentence",
    description: "Count the total number of words in a given sentence. Words are sequences of characters separated by a single space, with no leading or trailing spaces. The input string (length 1 to 100) contains letters, spaces, and possibly punctuation. Output the word count as an integer.",
    testCases: [
      { input: "Hello world from Python", output: "4" },
      { input: "Count these words please", output: "4" }
    ]
  },
  {
    id: 53,
    title: "Check if String is Anagram",
    description: "Check if two strings are anagrams, meaning they contain the same characters (lowercase letters only, length 1 to 100) with the same frequency but possibly in a different order. Output 'Yes' if they are anagrams, 'No' otherwise.",
    testCases: [
      { input: "listen silent", output: "Yes" },
      { input: "hello world", output: "No" }
    ]
  },
  {
    id: 54,
    title: "Calculate Compound Interest",
    description: "Calculate the compound interest for a principal amount (P), annual interest rate (R), and time in years (T). Use the formula: A = P × (1 + R/100)^T, and CI = A - P. Inputs are positive numbers (P ≤ 10^5, R ≤ 100, T ≤ 20). Output the result rounded to two decimal places.",
    testCases: [
      { input: "1000 5 2", output: "1102.5" },
      { input: "1500 4.3 6", output: "1938.84" }
    ]
  },
  {
    id: 55,
    title: "Convert Decimal to Binary",
    description: "Convert a non-negative integer (0 ≤ n ≤ 10^9) to its binary representation as a string. For example, 10 in binary is '1010'. Output the binary string without leading zeros (except for 0, which outputs '0').",
    testCases: [
      { input: "10", output: "1010" },
      { input: "255", output: "11111111" }
    ]
  },
  {
    id: 56,
    title: "Check if Number is Armstrong",
    description: "Check if a positive integer (1 ≤ n ≤ 10^18) is an Armstrong number. A number is an Armstrong number if the sum of its digits raised to the power of the number of digits equals the number itself (e.g., 153 = 1^3 + 5^3 + 3^3). Output 'Yes' or 'No'.",
    testCases: [
      { input: "153", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },
  {
    id: 57,
    title: "Calculate Power Using Recursion",
    description: "Calculate x raised to the power y using recursion, where x is a positive integer (1 ≤ x ≤ 100) and y is a non-negative integer (0 ≤ y ≤ 20). Output the result as an integer.",
    testCases: [
      { input: "2 3", output: "8" },
      { input: "5 0", output: "1" }
    ]
  },
  {
    id: 58,
    title: "Find Largest Element in List",
    description: "Find the largest number in a list of integers. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output the largest integer.",
    testCases: [
      { input: "1 3 5 7 9", output: "9" },
      { input: "-10 -5 -1", output: "-1" }
    ]
  },
  {
    id: 59,
    title: "Check if List is Sorted",
    description: "Check if a list of integers is sorted in ascending order. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output 'Yes' if sorted, 'No' otherwise.",
    testCases: [
      { input: "1 2 3 4 5", output: "Yes" },
      { input: "5 3 2 1", output: "No" }
    ]
  },
  {
    id: 60,
    title: "Remove Duplicates from List",
    description: "Remove all duplicate elements from a list of integers, keeping only the first occurrence of each number. The list contains 1 to 100 integers, each in the range -10^9 to 10^9. Output the resulting list as a space-separated string in the order of first appearance.",
    testCases: [
      { input: "1 2 2 3 4 4 5", output: "1 2 3 4 5" },
      { input: "7 7 7 7", output: "7" }
    ]
  },
  {
    id: 61,
    title: "Find Common Elements in Two Lists",
    description: "Find the common elements present in two lists of integers. Each list contains 1 to 100 integers in the range -10^9 to 10^9. Output the common elements as a space-separated string in ascending order. If no common elements exist, output an empty string.",
    testCases: [
      { input: "1 2 3 4\n3 4 5 6", output: "3 4" },
      { input: "7 8 9\n10 11 12", output: "" }
    ]
  },
  {
    id: 62,
    title: "Count Frequency of Elements in List",
    description: "Count the frequency of each element in a list of integers. The list contains 1 to 100 integers in the range -10^9 to 10^9. Output the frequencies in the format 'element:count' for each unique element, sorted by element in ascending order.",
    testCases: [
      { input: "1 2 2 3 3 3", output: "1:1 2:2 3:3" },
      { input: "4 4 4 4", output: "4:4" }
    ]
  },
  {
    id: 63,
    title: "Calculate Factorial Using Recursion",
    description: "Compute the factorial of a non-negative integer n (0 ≤ n ≤ 20) using recursion. The factorial of n is n × (n-1) × ... × 1, with 0! = 1. Output the result as a string to handle large numbers.",
    testCases: [
      { input: "4", output: "24" },
      { input: "6", output: "720" }
    ]
  },
  {
    id: 64,
    title: "Print Pattern - Right Triangle Star",
    description: "Print a right-angled triangle star pattern with n rows (1 ≤ n ≤ 10). Row i contains i stars, with no spaces between stars in a row. Output the pattern as a string with rows separated by newlines.",
    testCases: [
      { input: "3", output: "*\n**\n***" },
      { input: "5", output: "*\n**\n***\n****\n*****" }
    ]
  },
  {
    id: 65,
    title: "Print Pattern - Pyramid",
    description: "Print a pyramid star pattern with n rows (1 ≤ n ≤ 10). Each row i has 2i-1 stars, centered with leading spaces. Output the pattern as a string with rows separated by newlines.",
    testCases: [
      { input: "3", output: "  *\n ***\n*****" }
    ]
  },
  {
    id: 66,
    title: "Calculate Sum of Natural Numbers",
    description: "Calculate the sum of the first n natural numbers (1 + 2 + ... + n) using an iterative method, where n is a positive integer (1 ≤ n ≤ 10^5). Output the sum as an integer.",
    testCases: [
      { input: "5", output: "15" },
      { input: "10", output: "55" }
    ]
  },
  {
    id: 67,
    title: "Check Palindrome Number",
    description: "Check if a positive integer (1 ≤ n ≤ 10^9) is a palindrome without converting it to a string. A number is a palindrome if it reads the same forwards and backwards. Output 'Yes' or 'No'.",
    testCases: [
      { input: "121", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },
  {
    id: 68,
    title: "Find Second Largest Number",
    description: "Find the second largest number in a list of integers. The list contains 2 to 100 integers in the range -10^9 to 10^9. If all elements are equal, output the largest number. Output the result as an integer.",
    testCases: [
      { input: "10 20 30 40 50", output: "40" },
      { input: "5 5 5 5", output: "5" }
    ]
  },
  {
    id: 69,
    title: "Count Digits in a Number",
    description: "Count the number of digits in a non-negative integer (0 ≤ n ≤ 10^18). For example, 12345 has 5 digits. Output the count as an integer.",
    testCases: [
      { input: "12345", output: "5" },
      { input: "1000", output: "4" }
    ]
  },
  {
    id: 70,
    title: "Check if List Contains Element",
    description: "Check if a given integer exists in a list of integers. The list contains 1 to 100 integers in the range -10^9 to 10^9, followed by a target integer. Output 'Yes' if the element exists, 'No' otherwise.",
    testCases: [
      { input: "1 2 3 4 5\n3", output: "Yes" },
      { input: "7 8 9\n5", output: "No" }
    ]
  },
  {
    id: 71,
    title: "Find Sum of Digits of a Number",
    description: "Calculate the sum of the digits of a non-negative integer (0 ≤ n ≤ 10^18). For example, for input 123, the sum is 1 + 2 + 3 = 6. Output the sum as an integer.",
    testCases: [
      { input: "123", output: "6" },
      { input: "456", output: "15" }
    ]
  },
  {
    id: 72,
    title: "Find Factors of a Number",
    description: "Print all positive factors of a given positive integer (1 ≤ n ≤ 10^6) in ascending order. A factor is a number that divides n without leaving a remainder. Output the factors as a space-separated string.",
    testCases: [
      { input: "12", output: "1 2 3 4 6 12" },
      { input: "7", output: "1 7" }
    ]
  },
  {
    id: 73,
    title: "Check if Number is Palindrome",
    description: "Check if a positive integer (1 ≤ n ≤ 10^9) is a palindrome without converting it to a string. A number is a palindrome if it reads the same forwards and backwards. Output 'Yes' or 'No'.",
    testCases: [
      { input: "121", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },
  {
    id: 74,
    title: "Find Average of List",
    description: "Calculate the average (mean) of a list of integers. The list contains 1 to 100 integers in the range -10^9 to 10^9. Output the average rounded to one decimal place.",
    testCases: [
      { input: "10 20 30 40", output: "25.0" },
      { input: "5 10", output: "7.5" }
    ]
  },
  {
    id: 75,
    title: "Convert Celsius to Fahrenheit",
    description: "Convert a temperature from Celsius to Fahrenheit using the formula: F = (C × 9/5) + 32. The input is an integer Celsius value (-100 ≤ C ≤ 100). Output the Fahrenheit value as an integer.",
    testCases: [
      { input: "0", output: "32" },
      { input: "100", output: "212" }
    ]
  },
  {
    id: 76,
    title: "Remove Vowels from String",
    description: "Remove all vowels (a, e, i, o, u, case-insensitive) from a given string (length 1 to 100, containing letters and spaces). Output the resulting string.",
    testCases: [
      { input: "hello world", output: "hll wrld" },
      { input: "python", output: "pythn" }
    ]
  },
  {
    id: 77,
    title: "Find Length of String Without len()",
    description: "Calculate the length of a string (length 1 to 100, containing letters) without using the built-in len() function. Output the length as an integer.",
    testCases: [
      { input: "hello", output: "5" },
      { input: "world", output: "5" }
    ]
  },
  {
    id: 78,
    title: "Check if String Contains Only Digits",
    description: "Check if a given string (length 1 to 100) contains only numeric digits (0-9). Output 'Yes' if all characters are digits, 'No' otherwise.",
    testCases: [
      { input: "12345", output: "Yes" },
      { input: "123a5", output: "No" }
    ]
  },
  {
    id: 79,
    title: "Concatenate Two Lists",
    description: "Concatenate two lists of integers into a single list. Each list contains 1 to 100 integers in the range -10^9 to 10^9. Output the concatenated list as a space-separated string in the order of the first list followed by the second.",
    testCases: [
      { input: "1 2 3\n4 5 6", output: "1 2 3 4 5 6" }
    ]
  },
  {
    id: 80,
    title: "Find Intersection of Two Lists",
    description: "Find the common elements in two lists of integers. Each list contains 1 to 100 integers in the range -10^9 to 10^9. Output the common elements in ascending order as a space-separated string. If no common elements exist, output an empty string.",
    testCases: [
      { input: "1 2 3\n2 3 4", output: "2 3" }
    ]
  },
  {
    id: 81,
    title: "Calculate Sum of Squares",
    description: "Calculate the sum of squares of the first n natural numbers (1^2 + 2^2 + ... + n^2), where n is a positive integer (1 ≤ n ≤ 10^4). Output the sum as an integer.",
    testCases: [
      { input: "3", output: "14" },
      { input: "5", output: "55" }
    ]
  },
  {
    id: 82,
    title: "Find Unique Elements in List",
    description: "Print only the elements that appear exactly once in a list of integers. The list contains 1 to 100 integers in the range -10^9 to 10^9. Output the unique elements in ascending order as a space-separated string.",
    testCases: [
      { input: "1 2 2 3 4 4", output: "1 3" }
    ]
  },
  {
    id: 83,
    title: "Convert Binary to Decimal",
    description: "Convert a binary number given as a string (length 1 to 64, containing only 0s and 1s) to its decimal equivalent. Output the decimal number as a string to handle large values.",
    testCases: [
      { input: "1010", output: "10" },
      { input: "1111", output: "15" }
    ]
  },
  {
    id: 84,
    title: "Convert Decimal to Octal",
    description: "Convert a non-negative integer (0 ≤ n ≤ 10^9) to its octal representation as a string. Output the octal number without leading zeros (except for 0, which outputs '0').",
    testCases: [
      { input: "8", output: "10" },
      { input: "64", output: "100" }
    ]
  },
  {
    id: 85,
    title: "Count Uppercase and Lowercase Letters",
    description: "Count the number of uppercase and lowercase letters in a given string (length 1 to 100, containing letters and spaces). Output in the format 'Uppercase: X, Lowercase: Y'.",
    testCases: [
      { input: "Hello World", output: "Uppercase: 2, Lowercase: 8" }
    ]
  },
  {
    id: 86,
    title: "Find Largest Word in a Sentence",
    description: "Find the longest word in a sentence. Words are sequences of letters separated by a single space (sentence length 1 to 100). If multiple words have the maximum length, output the first one. Output the longest word as a string.",
    testCases: [
      { input: "Python programming is fun", output: "programming" }
    ]
  },
  {
    id: 87,
    title: "Check if String is Palindrome",
    description: "Check if a given string (length 1 to 100, containing lowercase letters) is a palindrome, i.e., reads the same forwards and backwards. Output 'Yes' or 'No'.",
    testCases: [
      { input: "racecar", output: "Yes" },
      { input: "hello", output: "No" }
    ]
  },
  {
    id: 88,
    title: "Replace Spaces with Underscore",
    description: "Replace all spaces in a given string (length 1 to 100, containing letters and spaces) with underscores. Output the modified string.",
    testCases: [
      { input: "hello world", output: "hello_world" }
    ]
  },
  {
    id: 89,
    title: "Print Prime Numbers in Range",
    description: "Print all prime numbers in the range [a, b], where a and b are positive integers (1 ≤ a ≤ b ≤ 10^5). A prime number is greater than 1 and divisible only by 1 and itself. Output the primes as a space-separated string.",
    testCases: [
      { input: "1 10", output: "2 3 5 7" }
    ]
  },
  {
    id: 90,
    title: "Check if String is Numeric",
    description: "Check if a given string (length 1 to 100) contains only numeric digits (0-9). Output 'Yes' if all characters are digits, 'No' otherwise.",
    testCases: [
      { input: "12345", output: "Yes" },
      { input: "12a45", output: "No" }
    ]
  },
  {
    id: 91,
    title: "Find Sum of Elements in List",
    description: "Calculate the sum of all elements in a list of integers. The list contains 1 to 100 integers in the range -10^9 to 10^9. Output the sum as an integer.",
    testCases: [
      { input: "1 2 3 4 5", output: "15" }
    ]
  },
  {
    id: 92,
    title: "Sort List Using Bubble Sort",
    description: "Sort a list of integers using the bubble sort algorithm. The list contains 1 to 100 integers in the range -10^9 to 10^9. Output the sorted list in ascending order as a space-separated string.",
    testCases: [
      { input: "5 3 8 6 2", output: "2 3 5 6 8" }
    ]
  },
  {
    id: 93,
    title: "Find Factorial Using Iteration",
    description: "Calculate the factorial of a non-negative integer n (0 ≤ n ≤ 20) using iteration. The factorial is n × (n-1) × ... × 1, with 0! = 1. Output the result as a string to handle large numbers.",
    testCases: [
      { input: "4", output: "24" }
    ]
  },
  {
    id: 94,
    title: "Check if String Contains Substring",
    description: "Check if a given substring exists in a string. The string and substring contain lowercase letters (length 1 to 100). Output 'Yes' if the substring exists, 'No' otherwise.",
    testCases: [
      { input: "hello world\nworld", output: "Yes" },
      { input: "hello world\npython", output: "No" }
    ]
  },
  {
    id: 95,
    title: "Find Number of Vowels and Consonants",
    description: "Count the number of vowels (a, e, i, o, u, case-insensitive) and consonants (other alphabet letters) in a string (length 1 to 100, containing letters). Output in the format 'Vowels: X, Consonants: Y'.",
    testCases: [
      { input: "hello", output: "Vowels: 2, Consonants: 3" }
    ]
  },
  {
    id: 96,
    title: "Remove All Whitespaces from String",
    description: "Remove all whitespace characters (spaces) from a given string (length 1 to 100, containing letters and spaces). Output the resulting string.",
    testCases: [
      { input: " h e l l o ", output: "hello" }
    ]
  },
  {
    id: 97,
    title: "Find Second Smallest Number",
    description: "Find the second smallest number in a list of integers. The list contains 2 to 100 integers in the range -10^9 to 10^9. If all elements are equal, output the smallest number. Output the result as an integer.",
    testCases: [
      { input: "10 5 3 8 3", output: "5" }
    ]
  },
  {
    id: 98,
    title: "Calculate Power Using Loop",
    description: "Calculate x raised to the power y using a loop, where x is a positive integer (1 ≤ x ≤ 100) and y is a non-negative integer (0 ≤ y ≤ 20). Output the result as an integer.",
    testCases: [
      { input: "2 4", output: "16" }
    ]
  },
  {
    id: 99,
    title: "Find Sum of Even Numbers in List",
    description: "Calculate the sum of all even numbers in a list of integers. The list contains 1 to 100 integers in the range -10^9 to 10^9. Output the sum as an integer. If no even numbers exist, output 0.",
    testCases: [
      { input: "1 2 3 4 5 6", output: "12" }
    ]
  },
  {
    id: 100,
    title: "Find Sum of Odd Numbers in List",
    description: "Calculate the sum of all odd numbers in a list of integers. The list contains 1 to 100 integers in the range -10^9 to 10^9. Output the sum as an integer. If no odd numbers exist, output 0.",
    testCases: [
      { input: "1 2 3 4 5 6", output: "9" }
    ]
  },
  {
    id: 101,
    title: "Longest Common Subsequence",
    description: "Find the length of the longest common subsequence (LCS) between two strings. A subsequence is a sequence of characters that can be derived by deleting some or no elements without changing the order of the remaining elements. The strings contain lowercase letters (length 1 to 1000). Output the length of the LCS as an integer.",
    testCases: [
      { input: "ABCDGH AEDFHR", output: "4" },
      { input: "XYZ ABC", output: "0" }
    ]
  },
  {
    id: 102,
    title: "Matrix Spiral Traversal",
    description: "Given a 2D matrix of integers (m rows, n columns, 1 ≤ m, n ≤ 100), traverse it in a spiral order (clockwise from top-left) and output the elements as a space-separated string. Each element is in the range -10^9 to 10^9.",
    testCases: [
      { input: "3 3\n1 2 3\n4 5 6\n7 8 9", output: "1 2 3 6 9 8 7 4 5" }
    ]
  },
  {
    id: 103,
    title: "Minimum Path Sum in Grid",
    description: "Find the minimum path sum from the top-left to the bottom-right of a grid (m rows, n columns, 1 ≤ m, n ≤ 100). You can move only right or down. Each cell contains a non-negative integer (0 to 10^4). Output the minimum sum as an integer.",
    testCases: [
      { input: "2 2\n1 2\n3 4", output: "7" }
    ]
  },
  {
    id: 104,
    title: "Knapsack Problem (0/1)",
    description: "Given n items with weights and values, and a knapsack capacity W, find the maximum value achievable without exceeding the capacity. Each item can be taken or not (0/1). Inputs: n (1 ≤ n ≤ 100), W (1 ≤ W ≤ 10^4), weights and values (1 to 10^4). Output the maximum value.",
    testCases: [
      { input: "3 50\n10 60\n20 100\n30 120", output: "160" }
    ]
  },
  {
    id: 105,
    title: "Longest Palindromic Substring",
    description: "Find the longest palindromic substring in a given string (length 1 to 1000, lowercase letters). A palindrome reads the same forwards and backwards. Output the substring. If multiple exist, output the first one encountered.",
    testCases: [
      { input: "babad", output: "bab" },
      { input: "cbbd", output: "bb" }
    ]
  },
  {
    id: 106,
    title: "Binary Tree Inorder Traversal",
    description: "Given a binary tree, perform an inorder traversal (left, root, right) and output the node values as a space-separated string. The tree has 1 to 100 nodes, each with a value from -10^4 to 10^4. Input is provided as a level-order array (null for empty children).",
    testCases: [
      { input: "1 2 3", output: "2 1 3" }
    ]
  },
  {
    id: 107,
    title: "Validate Binary Search Tree",
    description: "Determine if a given binary tree is a valid binary search tree (BST). In a BST, for each node, all nodes in the left subtree have values less than the node, and all in the right subtree have greater values. The tree has 1 to 100 nodes, values from -10^9 to 10^9. Output 'Yes' or 'No'.",
    testCases: [
      { input: "2 1 3", output: "Yes" },
      { input: "5 1 4 null null 3 6", output: "No" }
    ]
  },
  {
    id: 108,
    title: "Shortest Path in Unweighted Graph",
    description: "Given an unweighted undirected graph with n nodes (1 ≤ n ≤ 1000) and m edges (1 ≤ m ≤ 10^4), find the shortest path length from node 1 to node n using BFS. Input: n, m, followed by m pairs of nodes. Output the path length or -1 if no path exists.",
    testCases: [
      { input: "4 4\n1 2\n2 3\n3 4\n1 4", output: "1" }
    ]
  },
  {
    id: 109,
    title: "Merge Intervals",
    description: "Given a list of intervals [start, end], merge overlapping intervals and output the merged intervals as a space-separated string of start-end pairs. The list has 1 to 10^4 intervals, each with start and end values from 0 to 10^9.",
    testCases: [
      { input: "1 3 2 6 8 10 15 18", output: "1 6 8 10 15 18" }
    ]
  },
  {
    id: 110,
    title: "Word Ladder",
    description: "Given a start word, end word, and a list of words, find the shortest transformation sequence length from start to end, changing one letter at a time, where each intermediate word exists in the list. All words are lowercase, length 1 to 10, and the list has 1 to 1000 words. Output the length or 0 if impossible.",
    testCases: [
      { input: "hit cog\nhot dot dog lot log cog", output: "5" }
    ]
  },
  {
    id: 111,
    title: "Next Permutation",
    description: "Given a list of integers (length 1 to 100, values 0 to 100), find the next lexicographically greater permutation. If none exists, rearrange to the smallest permutation. Output the permutation as a space-separated string.",
    testCases: [
      { input: "1 2 3", output: "1 3 2" },
      { input: "3 2 1", output: "1 2 3" }
    ]
  },
  {
    id: 112,
    title: "Rotate Matrix",
    description: "Rotate a square matrix (n × n, 1 ≤ n ≤ 100) by 90 degrees clockwise in-place. Each element is an integer (-10^9 to 10^9). Output the rotated matrix as a space-separated string of rows.",
    testCases: [
      { input: "3\n1 2 3\n4 5 6\n7 8 9", output: "7 4 1 8 5 2 9 6 3" }
    ]
  },
  {
    id: 113,
    title: "Longest Increasing Subsequence",
    description: "Find the length of the longest increasing subsequence (LIS) in a list of integers (length 1 to 1000, values -10^9 to 10^9). An increasing subsequence has elements in strictly increasing order. Output the length as an integer.",
    testCases: [
      { input: "10 22 9 33 21 50 41 60", output: "5" }
    ]
  },
  {
    id: 114,
    title: "Subset Sum Problem",
    description: "Determine if there exists a subset of a list of integers (length 1 to 100, values 1 to 10^4) that sums to a given target sum (1 to 10^4). Output 'Yes' if such a subset exists, 'No' otherwise.",
    testCases: [
      { input: "5 11\n1 2 3 5 7", output: "Yes" },
      { input: "3 10\n1 2 3", output: "No" }
    ]
  },
  {
    id: 115,
    title: "Maximum Subarray Sum",
    description: "Find the maximum sum of a contiguous subarray in a list of integers (length 1 to 10^5, values -10^9 to 10^9). Output the maximum sum as an integer.",
    testCases: [
      { input: "-2 1 -3 4 -1 2 1 -5 4", output: "6" }
    ]
  },
  {
    id: 116,
    title: "Trie-based Word Search",
    description: "Given a list of words (1 to 1000, each length 1 to 100, lowercase letters) and a prefix, find all words that start with the given prefix. Output the matching words in lexicographical order as a space-separated string. If none, output an empty string.",
    testCases: [
      { input: "cat cap car\nca", output: "cap car cat" }
    ]
  },
  {
    id: 117,
    title: "Detect Cycle in Directed Graph",
    description: "Given a directed graph with n nodes (1 ≤ n ≤ 1000) and m edges (0 ≤ m ≤ 10^4), determine if it contains a cycle. Input: n, m, followed by m directed edges. Output 'Yes' if a cycle exists, 'No' otherwise.",
    testCases: [
      { input: "4 4\n1 2\n2 3\n3 4\n4 2", output: "Yes" }
    ]
  },
  {
    id: 118,
    title: "Minimum Spanning Tree",
    description: "Given an undirected weighted graph with n nodes (1 ≤ n ≤ 100) and m edges (0 ≤ m ≤ 10^4), find the total weight of the minimum spanning tree using Kruskal’s or Prim’s algorithm. Edge weights are from 1 to 10^4. Output the total weight or -1 if no MST exists.",
    testCases: [
      { input: "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 3\n1 4 4", output: "6" }
    ]
  },
  {
    id: 119,
    title: "Reverse Linked List",
    description: "Reverse a singly linked list of integers (length 1 to 1000, values -10^9 to 10^9). Input is a list of integers representing the linked list. Output the reversed list as a space-separated string.",
    testCases: [
      { input: "1 2 3 4 5", output: "5 4 3 2 1" }
    ]
  },
  {
    id: 120,
    title: "Kth Smallest Element in BST",
    description: "Find the kth smallest element in a binary search tree (BST) with n nodes (1 ≤ n ≤ 1000, values -10^9 to 10^9). Input: level-order array of the BST and k (1 ≤ k ≤ n). Output the kth smallest value as an integer.",
    testCases: [
      { input: "3 1 4 null 2\n2", output: "2" }
    ]
  },
  {
    id: 121,
    title: "N-Queens Problem",
    description: "Solve the N-Queens problem for a given n (1 ≤ n ≤ 10). Place n queens on an n×n chessboard such that no two queens threaten each other. Output one possible configuration as a space-separated string of column indices (0-based) for each row.",
    testCases: [
      { input: "4", output: "1 3 0 2" }
    ]
  },
  {
    id: 122,
    title: "Longest Valid Parentheses",
    description: "Given a string of parentheses (length 1 to 10^5, containing only '(' and ')'), find the length of the longest valid parentheses substring. A valid substring is properly nested. Output the length as an integer.",
    testCases: [
      { input: "(()", output: "2" },
      { input: ")()())", output: "4" }
    ]
  },
  {
    id: 123,
    title: "Edit Distance",
    description: "Calculate the minimum number of operations (insert, delete, replace) required to convert one string to another. Both strings contain lowercase letters (length 1 to 1000). Output the minimum number of operations as an integer.",
    testCases: [
      { input: "sunday saturday", output: "3" }
    ]
  },
  {
    id: 124,
    title: "Top K Frequent Elements",
    description: "Given a list of integers (length 1 to 10^5, values -10^9 to 10^9) and an integer k (1 ≤ k ≤ number of unique elements), find the k most frequent elements. Output them in descending order of frequency, then by value if frequencies are equal, as a space-separated string.",
    testCases: [
      { input: "1 1 1 2 2 3\n2", output: "1 2" }
    ]
  },
  {
    id: 125,
    title: "Lowest Common Ancestor in Binary Tree",
    description: "Given a binary tree (1 to 1000 nodes, values -10^9 to 10^9) and two node values, find the value of their lowest common ancestor (LCA). Input: level-order array of the tree and two node values. Output the LCA value as an integer.",
    testCases: [
      { input: "3 5 1 6 2 0 8 null null 7 4\n5 1", output: "3" }
    ]
  },
  {
    id: 126,
    title: "Sliding Window Maximum",
    description: "Given a list of integers (length 1 to 10^5, values -10^9 to 10^9) and a window size k (1 ≤ k ≤ list length), find the maximum value in each sliding window of size k. Output the maximums as a space-separated string.",
    testCases: [
      { input: "1 3 -1 -3 5 3 6 7\n3", output: "3 3 5 5 6 7" }
    ]
  },
  {
    id: 127,
    title: "LRU Cache Implementation",
    description: "Implement a Least Recently Used (LRU) cache with capacity n (1 ≤ n ≤ 1000). Support get(key) and put(key, value) operations. Input: a sequence of operations ('get key' or 'put key value') and capacity. Output the results of get operations as a space-separated string (-1 if key not found).",
    testCases: [
      { input: "2\nput 1 1\nput 2 2\nget 1\nput 3 3\nget 2", output: "1 -1" }
    ]
  },
  {
    id: 128,
    title: "Serialize and Deserialize Binary Tree",
    description: "Serialize a binary tree (1 to 1000 nodes, values -10^9 to 10^9) into a string and deserialize it back. Input: level-order array of the tree. Output the serialized string (use any valid format, e.g., level-order with nulls).",
    testCases: [
      { input: "1 2 3 null null 4 5", output: "1 2 3 null null 4 5" }
    ]
  },
  {
    id: 129,
    title: "Regular Expression Matching",
    description: "Implement regular expression matching with support for '.' (matches any single character) and '*' (matches zero or more of the preceding character). Given a string (length 1 to 100) and a pattern (length 1 to 100), output 'Yes' if the string matches the pattern, 'No' otherwise.",
    testCases: [
      { input: "aa a*", output: "Yes" },
      { input: "ab .*", output: "Yes" }
    ]
  },
  {
    id: 130,
    title: "Course Schedule",
    description: "Given n courses (0 to n-1) and m prerequisites (as pairs [a, b] meaning course b must be taken before a), determine if all courses can be completed. Input: n (1 ≤ n ≤ 1000), m (0 ≤ m ≤ 10^4), and m prerequisite pairs. Output 'Yes' if possible, 'No' if a cycle exists.",
    testCases: [
      { input: "2 1\n0 1", output: "Yes" },
      { input: "2 2\n0 1\n1 0", output: "No" }
    ]
  },
  {
    id: 131,
    title: "Kth Largest Element in Array",
    description: "Find the kth largest element in an unsorted list of integers (length 1 to 10^5, values -10^9 to 10^9) without sorting the entire list. Input: list and k (1 ≤ k ≤ list length). Output the kth largest value as an integer.",
    testCases: [
      { input: "3 2 1 5 6 4\n2", output: "5" }
    ]
  },
  {
    id: 132,
    title: "Trapping Rain Water",
    description: "Given a list of non-negative integers (length 1 to 10^5, values 0 to 10^4) representing heights of bars, calculate how much water can be trapped between them after raining. Output the total units of water as an integer.",
    testCases: [
      { input: "0 1 0 2 1 0 1 3 2 1 2 1", output: "6" }
    ]
  },
  {
    id: 133,
    title: "Number of Islands",
    description: "Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is a group of '1's connected vertically or horizontally. The grid has 1 to 100 rows and columns. Output the number of islands as an integer.",
    testCases: [
      { input: "3 3\n1 1 0\n1 0 0\n0 0 1", output: "2" }
    ]
  },
  {
    id: 134,
    title: "Palindrome Partitioning",
    description: "Given a string (length 1 to 100, lowercase letters), find the minimum number of cuts needed to partition it into palindromic substrings. Output the minimum number of cuts as an integer.",
    testCases: [
      { input: "aab", output: "1" },
      { input: "aba", output: "0" }
    ]
  },
  {
    id: 135,
    title: "Maximal Square",
    description: "Given a 2D binary matrix filled with '0's and '1's (1 to 100 rows and columns), find the area of the largest square containing only '1's. Output the area as an integer.",
    testCases: [
      { input: "4 5\n1 0 1 0 0\n1 0 1 1 1\n1 1 1 1 1\n1 0 0 1 0", output: "4" }
    ]
  },
  {
    id: 136,
    title: "Word Break",
    description: "Given a string (length 1 to 100) and a dictionary of words (1 to 1000 words, each length 1 to 100, lowercase letters), determine if the string can be segmented into a space-separated sequence of dictionary words. Output 'Yes' or 'No'.",
    testCases: [
      { input: "leetcode\nleet code", output: "Yes" },
      { input: "applepen\napple pen", output: "Yes" }
    ]
  },
  {
    id: 137,
    title: "Clone Graph",
    description: "Given an undirected graph with n nodes (1 ≤ n ≤ 1000) labeled 1 to n, clone the graph and output the adjacency list of the cloned graph as a space-separated string. Input: adjacency list representation.",
    testCases: [
      { input: "4\n1:2,4 2:1,3 3:2,4 4:1,3", output: "1:2,4 2:1,3 3:2,4 4:1,3" }
    ]
  },
  {
    id: 138,
    title: "Maximum Product Subarray",
    description: "Find the maximum product of a contiguous subarray in a list of integers (length 1 to 10^5, values -10 to 10). Output the maximum product as an integer.",
    testCases: [
      { input: "2 3 -2 4", output: "6" }
    ]
  },
  {
    id: 139,
    title: "Decode Ways",
    description: "Given a string (length 1 to 100) containing digits, determine the number of ways to decode it where each digit or pair of digits maps to a letter (1='A', 2='B', ..., 26='Z'). Output the number of ways as an integer.",
    testCases: [
      { input: "12", output: "2" },
      { input: "226", output: "3" }
    ]
  },
  {
    id: 140,
    title: "Find Median in Two Sorted Arrays",
    description: "Given two sorted arrays of integers (lengths m and n, 1 ≤ m, n ≤ 1000, values -10^9 to 10^9), find the median of the combined sorted array. Output the median as a double (rounded to one decimal place if necessary).",
    testCases: [
      { input: "1 3\n2 4", output: "2.5" }
    ]
  },
  {
    id: 141,
    title: "Longest Consecutive Sequence",
    description: "Given an unsorted list of integers (length 1 to 10^5, values -10^9 to 10^9), find the length of the longest consecutive sequence (e.g., [1, 2, 3, 4] is consecutive). Output the length as an integer.",
    testCases: [
      { input: "100 4 200 1 3 2", output: "4" }
    ]
  },
  {
    id: 142,
    title: "Min Cost to Connect All Points",
    description: "Given n points on a plane (1 ≤ n ≤ 1000, coordinates -10^6 to 10^6), find the minimum cost to connect all points using edges (Manhattan distance). Output the minimum cost as an integer.",
    testCases: [
      { input: "3\n0 0\n0 1\n1 0", output: "2" }
    ]
  },
   
];