// export const problems = [
//   // Day 1: Basic Arithmetic

//   {
//     id: 1,
//     title: "Sum of two numbers",
//     description: "You are working as a cashier at a grocery store. When a customer buys two items, you need to quickly calculate the total cost to provide the correct bill. Write a program that takes the prices of two items and outputs their total sum.",
//     testCases: [
//       { input: "2 3", output: "5" },
//       { input: "10 20", output: "30" },
//       { input: "-5 5", output: "0" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Find area of circle",
//     description: "You are designing a circular garden and need to know how much land it will occupy. Given the radius of the garden, calculate the area so you can plan the fencing and planting accordingly. Use π = 3.14 for your calculation.",
//     testCases: [
//       { input: "5", output: "78.5" },
//       { input: "1", output: "3.14" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Swap two numbers",
//     description: "You are programming a robot arm that needs to rearrange two boxes on a conveyor belt. However, the robot can only use its two arms and cannot use a third temporary holding area. Write a program to swap the positions of two numbers (representing the boxes) without using a third variable.",
//     testCases: [
//       { input: "4 5", output: "5 4" },
//       { input: "10 20", output: "20 10" },
//     ],
//   },
//   {
//     id: 57,
//     title: "Rotate Array",
//     description: "You are working on a photo slideshow app. To create a looping effect, you want to rotate the order of photos by a certain number of positions to the right each time the user presses 'next'. Write a program that takes an array of photo IDs and rotates them by K positions to the right.",
//     testCases: [
//       { input: "1 2 3 4 5\n2", output: "4 5 1 2 3" }
//     ]
//   },
//   {
//     id: 58,
//     title: "Find Missing Number",
//     description: "You are organizing a raffle where each participant receives a unique numbered ticket from 1 to N. After collecting all the tickets, you notice one is missing. Write a program that takes the list of ticket numbers and finds the missing one.",
//     testCases: [
//       { input: "1 2 4 5", output: "3" }
//     ]
//   },
//   {
//     id: 59,
//     title: "Two Sum",
//     description: "You are developing a shopping app that helps users find two products whose prices add up to a specific gift card amount. Given a list of product prices, write a program to find the indices of the two products that together match the target amount.",
//     testCases: [
//       { input: "2 7 11 15\n9", output: "0 1" }
//     ]
//   },
//   {
//     id: 60,
//     title: "Longest Substring Without Repeating Characters",
//     description: "You are building a password strength checker. One of the criteria is that the password should have the longest possible sequence of unique characters without any repeats. Write a program that takes a string and finds the length of the longest substring without repeating characters.",
//     testCases: [
//       { input: "abcabcbb", output: "3" },
//       { input: "bbbb", output: "1" }
//     ]
//   },
//   {
//     id: 61,
//     title: "String to Integer (atoi)",
//     description: "You are developing a delivery route planner for a city. The city is divided into a grid, and each cell has a cost to travel through. Write a program that finds the minimum cost path from the top-left corner to the bottom-right corner of the grid.",
//     testCases: [
//       { input: "   42", output: "42" },
//       { input: "-123", output: "-123" }
//     ]
//   },
//   {
//     id: 62,
//     title: "Word Break",
//     description: "You are building a text messaging app with smart suggestions. To help users type faster, your app checks if a string can be split into valid words from a dictionary. Write a program that determines if a given string can be segmented into dictionary words.",
//     testCases: [
//       { input: "applepenapple\napple pen", output: "true" },
//       { input: "catsandog\ncats dog sand and cat", output: "false" }
//     ]
//   },
//   {
//     id: 63,
//     title: "Merge Sort",
//     description: "You are developing a contact management system for a company. To display contacts in alphabetical order, you need to sort a list of names efficiently. Implement the merge sort algorithm to sort an array of names or numbers.",
//     testCases: [
//       { input: "5 2 8 1 9", output: "1 2 5 8 9" }
//     ]
//   },
//   {
//     id: 64,
//     title: "Binary Search",
//     description: "You are working on an e-commerce website. When a user searches for a product by its ID, you want to quickly find it in a sorted list of product IDs. Write a program that uses binary search to efficiently locate the product in the list.",
//     testCases: [
//       { input: "1 2 3 4 5\n3", output: "2" }
//     ]
//   },
//   {
//     id: 65,
//     title: "First and Last Position of Element",
//     description: "You are analyzing website traffic logs. For a given user ID, you want to find the first and last time they visited your site, represented as positions in a sorted list of log entries. Write a program that finds the first and last occurrence of a target value in a sorted array.",
//     testCases: [
//       { input: "1 2 2 2 3\n2", output: "1 3" }
//     ]
//   },
//   {
//     id: 66,
//     title: "Power Function",
//     description: "You are developing a scientific calculator app. Users often need to calculate exponents, such as squaring or cubing numbers. Write a program that uses recursion to compute x raised to the power n, allowing users to perform advanced calculations.",
//     testCases: [
//       { input: "2 3", output: "8" },
//       { input: "5 2", output: "25" }
//     ]
//   },
//   {
//     id: 67,
//     title: "Generate Subsets",
//     description: "You are designing a fashion app that helps users mix and match outfits. To show all possible combinations, you need to generate every subset of a set of clothing items. Write a program that uses recursion to generate all possible subsets of a given set.",
//     testCases: [
//       { input: "1 2", output: "[] [1] [2] [1,2]" }
//     ]
//   },
//   {
//     id: 68,
//     title: "Tower of Hanoi",
//     description: "You are working at a moving company that needs to transfer a stack of fragile plates from one shelf to another, using a third shelf as temporary storage. The plates must be moved one at a time, and a larger plate can never be placed on top of a smaller one. Write a program to solve this problem, known as the Tower of Hanoi, for N disks.",
//     testCases: [
//       { input: "2", output: "Move disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C" }
//     ]
//   },
//   {
//     id: 69,
//     title: "Reverse Linked List",
//     description: "You are developing a music playlist app. Users want to listen to their playlist in reverse order, starting from the last song to the first. The playlist is implemented as a singly linked list. Write a program to reverse the linked list so the songs play in reverse.",
//     testCases: [
//       { input: "1 2 3 4", output: "4 3 2 1" }
//     ]
//   },
//   {
//     id: 70,
//     title: "Detect Cycle in Linked List",
//     description: "You are building a navigation app that tracks a user's route as a linked list of locations. Sometimes, due to a GPS glitch, the route may loop back on itself, creating a cycle. Write a program to detect if there is a cycle in the linked list representing the route.",
//     testCases: [
//       { input: "1 2 3 4 2", output: "Yes" },
//       { input: "1 2 3", output: "No" }
//     ]
//   },
//   {
//     id: 71,
//     title: "Merge Two Sorted Lists",
//     description: "You are developing a job application portal. Applicants can upload their resumes, and the system keeps two sorted lists: one for candidates with technical backgrounds and another for non-technical backgrounds. To create a master list for recruiters, write a program that merges these two sorted linked lists into a single sorted list of all candidates.",
//     testCases: [
//       { input: "1 2 3\n2 4 6", output: "1 2 2 3 4 6" }
//     ]
//   },
//   {
//     id: 18,
//     title: "Find common elements",
//     description: "You are building a social networking app. To suggest new friends, the app finds users who are common friends between two people. Write a program that takes two lists of user IDs and outputs the IDs that appear in both lists.",
//     testCases: [
//       { input: "1 2 3 4\n3 4 5 6", output: "3 4" },
//     ],
//   },

//   // Day 7: Sets and Tuples
//   {
//     id: 19,
//     title: "Convert list to tuple",
//     description: "You are working on a data analysis tool that needs to store a list of sensor readings in a format that cannot be changed accidentally. Write a program that takes a list of readings and converts it into a tuple for safe storage.",
//     testCases: [
//       { input: "1 2 3", output: "(1, 2, 3)" },
//     ],
//   },
//   {
//     id: 20,
//     title: "Set operations (union, intersection)",
//     description: "You are developing a library management system. To recommend books, you want to find all unique books borrowed by two users (union) and also the books both users have read (intersection). Write a program that takes two lists of book IDs and outputs their union and intersection.",
//     testCases: [
//       { input: "1 2 3\n2 3 4", output: "Union: 1 2 3 4\nIntersection: 2 3" },
//     ],
//   },

//   // Day 8: Dictionaries

//   {
//     id: 21,
//     title: "Frequency count",
//     description: "You are developing an online survey tool. After collecting responses, you want to analyze how many times each answer was chosen. Write a program that takes a list of responses and outputs the frequency of each unique response.",
//     testCases: [
//       { input: "1 2 2 3 3 3", output: "1:1 2:2 3:3" },
//     ],
//   },
//   {
//     id: 22,
//     title: "Find keys with max value",
//     description: "You are building a leaderboard for a gaming app. Each player has a score, and you want to highlight all players who have achieved the highest score. Write a program that takes a list of player names and their scores, and outputs the names of those with the maximum score.",
//     testCases: [
//       { input: "a 10\nb 20\nc 20", output: "b c" },
//     ],
//   },
//   {
//     id: 23,
//     title: "Merge dictionaries",
//     description: "You are managing inventory for two branches of a store. Each branch keeps its own record of items and quantities. Write a program that merges the two inventories, updating quantities for items that appear in both branches.",
//     testCases: [
//       { input: "a 1\nb 2\n\nb 3\nc 4", output: "{'a': 1, 'b': 3, 'c': 4}" },
//     ],
//   },

//   // Day 9: Strings
//   {
//     id: 24,
//     title: "Palindrome",
//     description: "You are developing a text editor with a fun feature: it can check if a word or phrase is a palindrome, which reads the same forwards and backwards. Write a program that takes a string and determines if it is a palindrome.",
//     testCases: [
//       { input: "madam", output: "Yes" },
//       { input: "hello", output: "No" },
//     ],
//   },
//   {
//     id: 25,
//     title: "Anagram checker",
//     description: "You are creating a word game where players must form new words by rearranging the letters of a given word. To validate their answers, write a program that checks if two strings are anagrams of each other.",
//     testCases: [
//       { input: "listen silent", output: "Yes" },
//       { input: "hello world", output: "No" },
//     ],
//   },
//   {
//     id: 26,
//     title: "Count vowels/consonants",
//     description: "You are building a speech therapy app. To help users improve their pronunciation, the app analyzes words and counts the number of vowels and consonants. Write a program that takes a string and outputs the count of vowels and consonants.",
//     testCases: [
//       { input: "hello", output: "Vowels: 2, Consonants: 3" },
//     ],
//   },

//   // Day 10: Number Theory
//   {
//     id: 27,
//     title: "Prime checker",
//     description: "You are developing a security system that uses prime numbers as part of its encryption keys. To ensure the keys are valid, write a program that checks if a given number is prime.",
//     testCases: [
//       { input: "7", output: "Prime" },
//       { input: "8", output: "Not prime" },
//     ],
//   },
//   {
//     id: 28,
//     title: "Fibonacci using recursion",
//     description: "You are designing a puzzle game where each level unlocks based on the Fibonacci sequence. To determine which level to unlock next, write a program that calculates the Nth Fibonacci number using recursion.",
//     testCases: [
//       { input: "5", output: "5" },
//     ],
//   },
//   {
//     id: 29,
//     title: "GCD/LCM",
//     description: "You are working on a scheduling app that needs to find common meeting times for two people with different schedules. To do this, you need to calculate the greatest common divisor (GCD) and least common multiple (LCM) of their available time slots. Write a program that takes two numbers and outputs their GCD and LCM.",
//     testCases: [
//       { input: "12 18", output: "GCD: 6, LCM: 36" },
//     ],
//   },

//   // Day 11: File Handling
//   {
//     id: 30,
//     title: "Read a file",
//     description: "You are developing a document viewer application. Users can upload text files, and your app should display the contents for them to read. Write a program that reads a text file and prints its content.",
//     testCases: [
//       { input: "file.txt (contains: Hello World)", output: "Hello World" }
//     ],
//   },

//   {
//     id: 31,
//     title: "Count words in file",
//     description: "You are developing a writing assistant tool. To help users track their writing progress, your tool should count the number of words in a document they upload. Write a program that reads a file and outputs the total number of words.",
//     testCases: [
//       { input: "file.txt (contains: Hello World from AI)", output: "4" }
//     ],
//   },
//   {
//     id: 32,
//     title: "Copy content",
//     description: "You are building a file management system. Users want to back up important documents by copying their contents from one file to another. Write a program that copies the content of one file into a new file.",
//     testCases: [
//       { input: "source.txt (contains: Backup Data)\ndest.txt", output: "dest.txt contains: Backup Data" }
//     ],
//   },

//   // Day 12: Exception Handling
//   {
//     id: 33,
//     title: "Divide by zero",
//     description: "You are creating a calculator app. Sometimes, users may accidentally try to divide a number by zero, which is not allowed. Write a program that handles this situation gracefully and displays an appropriate error message instead of crashing.",
//     testCases: [
//       { input: "10 0", output: "Error: Division by zero" },
//       { input: "10 2", output: "5.0" },
//     ],
//   },
//   {
//     id: 34,
//     title: "Invalid input handler",
//     description: "You are developing a form for users to enter their age. Sometimes, users might enter invalid data, such as text instead of a number. Write a program that handles invalid integer input and displays a helpful error message.",
//     testCases: [
//       { input: "abc", output: "Invalid input" },
//     ],
//   },
//   {
//     id: 35,
//     title: "Try-except demo",
//     description: "You are teaching programming to beginners. To demonstrate how error handling works, write a program that uses try-except blocks to catch and handle different types of exceptions.",
//     testCases: [
//       { input: "10 0", output: "Error: Division by zero" },
//       { input: "abc", output: "Error: Invalid input" }
//     ],
//   },

//   // Day 13: Classes and Objects
//   {
//     id: 36,
//     title: "Create class for student",
//     description: "You are building a school management system. To keep track of student information, you need to create a Student class that stores each student's name and age. Write a program that defines this class.",
//     testCases: [
//       { input: "Student('Alice', 15)", output: "Name: Alice, Age: 15" }
//     ],
//   },
//   {
//     id: 37,
//     title: "Add methods",
//     description: "You are extending your school management system. Now, you want to add a method to the Student class that displays a student's details in a readable format. Write a program that adds this method to the class.",
//     testCases: [
//       { input: "Student('Bob', 16).display()", output: "Name: Bob, Age: 16" }
//     ],
//   },
//   {
//     id: 38,
//     title: "Constructor demo",
//     description: "You are developing a library system. When creating a new Book object, you want to automatically set default values for certain attributes if they are not provided. Write a program that demonstrates how to use a constructor with default values.",
//     testCases: [
//       { input: "Book('1984')", output: "Title: 1984, Author: Unknown" }
//     ],
//   },

//   // Day 14: Inheritance
//   {
//     id: 39,
//     title: "Inheritance with Animal class",
//     description: "You are creating an educational app about animals. To show how inheritance works in programming, define a base class Animal and a derived class Dog that inherits from Animal. Demonstrate how properties and methods are shared and extended.",
//     testCases: [
//       { input: "Dog('Buddy').speak()", output: "Woof!" }
//     ],
//   },
//   {
//     id: 40,
//     title: "Method overriding",
//     description: "You are building a simulation game with different types of vehicles. Each vehicle has a move method, but different vehicles move in different ways. Demonstrate how to override a method in a derived class to provide specific behavior.",
//     testCases: [
//       { input: "Car().move()", output: "Driving" },
//       { input: "Boat().move()", output: "Sailing" }
//     ],
//   },

//   // Day 15: Mixed Problems

//   {
//     id: 41,
//     title: "Revision - Mixed problems",
//     description: "You are preparing for a coding interview and want to practice a variety of problems. Solve 10 mixed problems that involve using functions, manipulating strings, and working with loops, just like you might encounter in a real-world coding test.",
//     testCases: [
//       { input: "2 3\nhello\n5", output: "5\nolleh\n25" }
//     ],
//   },

//   // Day 16: Advanced Numbers
//   {
//     id: 42,
//     title: "Check perfect number",
//     description: "You are developing a math quiz app. One of the challenges asks users to identify perfect numbers, which are numbers equal to the sum of their proper divisors. Write a program that checks if a given number is perfect, helping users learn about this special property.",
//     testCases: [
//       { input: "6", output: "Yes" },
//       { input: "10", output: "No" },
//     ],
//   },
//   {
//     id: 43,
//     title: "Right triangle star pattern",
//     description: "You are designing a digital greeting card app. To add a creative touch, you want to display a right triangle star pattern of a given size. Write a program that prints this pattern, which can be used for decorative purposes in the app.",
//     testCases: [
//       { input: "3", output: "\n\n" },
//     ],
//   },
//   {
//     id: 44,
//     title: "Sort list without built-in",
//     description: "You are building a simple educational tool to teach students how sorting algorithms work. Without using any built-in sort functions, write a program that sorts a list of numbers using the bubble sort algorithm, so students can see each step of the process.",
//     testCases: [
//       { input: "3 1 4 2", output: "1 2 3 4" },
//     ],
//   },

//   // Day 17: String Manipulation
//   {
//     id: 45,
//     title: "Find substring occurrences",
//     description: "You are developing a plagiarism checker for essays. To detect repeated phrases, your tool needs to count how many times a specific substring appears in a larger string. Write a program that takes a string and a substring, and outputs the number of occurrences.",
//     testCases: [
//       { input: "ababab ab", output: "3" },
//     ],
//   },
//   {
//     id: 46,
//     title: "Display current time",
//     description: "You are creating a productivity app that helps users track their work sessions. To display the current time to users, write a program that fetches and shows the current system time using the datetime module.",
//     testCases: [
//       { input: "(run at 14:30)", output: "14:30" }
//     ],
//   },
//   {
//     id: 47,
//     title: "Random password generator",
//     description: "You are developing a secure password manager. To help users create strong passwords, your app should generate a random password of a specified length, including letters, digits, and symbols. Write a program that generates such a password.",
//     testCases: [
//       { input: "8", output: "A1b2C3d$" }
//     ],
//   },

//   // Day 18: File and Data Handling
//   {
//     id: 48,
//     title: "Read CSV",
//     description: "You are building a data analysis tool for small businesses. Users can upload CSV files containing sales data, and your tool should read and display the content for review. Write a program that reads and prints the content of a CSV file.",
//     testCases: [
//       { input: "sales.csv (contains: name,amount\nAlice,100\nBob,200)", output: "name,amount\nAlice,100\nBob,200" }
//     ],
//   },
//   {
//     id: 49,
//     title: "Lambda function tasks",
//     description: "You are teaching a workshop on functional programming. To demonstrate the use of lambda functions, write a program that uses a lambda to square each number in a list, showing how concise and powerful this feature can be.",
//     testCases: [
//       { input: "1 2 3", output: "1 4 9" },
//     ],
//   },
//   {
//     id: 50,
//     title: "Operator overloading",
//     description: "You are designing a custom class for complex numbers in a scientific calculator app. To make arithmetic operations intuitive, implement operator overloading so that users can add two complex number objects using the + operator.",
//     testCases: [
//       { input: "Complex(1,2) + Complex(3,4)", output: "4+6i" }
//     ],
//   },

//   // Day 19: Data Structures
//   {
//     id: 51,
//     title: "Stack using list",
//     description: "You are developing an undo feature for a text editor. Every time a user makes a change, you need to store the previous state so they can undo their last action. Use a stack data structure (implemented with a list) to manage the sequence of changes, allowing users to push new states and pop the most recent one when they hit undo.",
//     testCases: [
//       { input: "push 1\npush 2\npop", output: "2" }
//     ],
//   },
//   {
//     id: 52,
//     title: "Simple Calculator",
//     description: "You are building a basic calculator app for students to help them practice arithmetic. The calculator should allow users to enter two numbers and select an operation (addition, subtraction, multiplication, or division). Use functions for each operation and loops to let users perform multiple calculations until they choose to exit.",
//     testCases: [
//       { input: "2 + 3", output: "5" },
//       { input: "10 / 2", output: "5" }
//     ],
//   },
//   {
//     id: 53,
//     title: "Contact book (CRUD operations using dictionary)",
//     description: "You are designing a digital contact book for your phone. Users should be able to add new contacts, search for existing ones, update contact details, and delete contacts they no longer need. Use a dictionary to store contact names and their information, and implement all CRUD (Create, Read, Update, Delete) operations.",
//     testCases: [
//       { input: "add John 12345\nsearch John", output: "12345" }
//     ],
//   },

//   // Day 20: Applications
//   {
//     id: 54,
//     title: "Student result management (with file handling)",
//     description: "You are managing exam results for a school. Teachers need to store students' scores, retrieve them for report cards, and update results if there are corrections. Implement a system that saves student results to a file, allows searching for a student's result, and updates the file when changes are made.",
//     testCases: [
//       { input: "add Alice 95\nget Alice", output: "95" }
//     ],
//   },
//   {
//     id: 55,
//     title: "To-do list app",
//     description: "You are creating a personal productivity app to help users manage their daily tasks. The app should let users add new tasks, remove completed ones, mark tasks as done, and save the list to a file so it can be loaded the next time the app is opened.",
//     testCases: [
//       { input: "add Buy milk\ndone Buy milk\nlist", output: "No tasks left" }
//     ],
//   },
//   {
//     id: 56,
//     title: "Final Revision & Test",
//     description: "You are preparing for your final programming exam. To review, you want to randomly select 15 problems from all the topics you've studied and solve them as a practice test. Write a program that picks 15 random problems from your problem set and presents them for you to solve.",
//     testCases: [
//       { input: "(random selection)", output: "Problem 1: ... Problem 15: ..." }
//     ],
//   },

//   // Day 21: Intermediate Arrays
//   {
//     id: 57,
//     title: "Rotate Array",
//     description: "You are working on a photo slideshow app. To create a looping effect, you want to rotate the order of photos by a certain number of positions to the right each time the user presses 'next'. Write a program that takes an array of photo IDs and rotates them by K positions to the right.",
//     testCases: [
//       { input: "1 2 3 4 5\n2", output: "4 5 1 2 3" }
//     ]
//   },
//   {
//     id: 58,
//     title: "Find Missing Number",
//     description: "You are organizing a raffle where each participant receives a unique numbered ticket from 1 to N. After collecting all the tickets, you notice one is missing. Write a program that takes the list of ticket numbers and finds the missing one.",
//     testCases: [
//       { input: "1 2 4 5", output: "3" }
//     ]
//   },
//   {
//     id: 59,
//     title: "Two Sum",
//     description: "You are developing a shopping app that helps users find two products whose prices add up to a specific gift card amount. Given a list of product prices, write a program to find the indices of the two products that together match the target amount.",
//     testCases: [
//       { input: "2 7 11 15\n9", output: "0 1" }
//     ]
//   },

//   // Day 22: String Algorithms
//   {
//     id: 60,
//     title: "Longest Substring Without Repeating Characters",
//     description: "You are building a password strength checker. One of the criteria is that the password should have the longest possible sequence of unique characters without any repeats. Write a program that takes a string and finds the length of the longest substring without repeating characters.",
//     testCases: [
//       { input: "abcabcbb", output: "3" },
//       { input: "bbbb", output: "1" }
//     ]
//   },
//   {
//     id: 61,
//     title: "String to Integer (atoi)",
//     description: "You are developing a delivery route planner for a city. The city is divided into a grid, and each cell has a cost to travel through. Write a program that finds the minimum cost path from the top-left corner to the bottom-right corner of the grid.",
//     testCases: [
//       { input: "   42", output: "42" },
//       { input: "-123", output: "-123" },
//     ],
//   },
//   {
//     id: 62,
//     title: "Word Break",
//     description: "You are building a text messaging app with smart suggestions. To help users type faster, your app checks if a string can be split into valid words from a dictionary. Write a program that determines if a given string can be segmented into dictionary words.",
//     testCases: [
//       { input: "applepenapple\napple pen", output: "true" },
//       { input: "catsandog\ncats dog sand and cat", output: "false" }
//     ]
//   },

//   // Day 23: Sorting and Searching
//   {
//     id: 63,
//     title: "Merge Sort",
//     description: "You are developing a contact management system for a company. To display contacts in alphabetical order, you need to sort a list of names efficiently. Implement the merge sort algorithm to sort an array of names or numbers.",
//     testCases: [
//       { input: "5 2 8 1 9", output: "1 2 5 8 9" }
//     ]
//   },
//   {
//     id: 64,
//     title: "Binary Search",
//     description: "You are working on an e-commerce website. When a user searches for a product by its ID, you want to quickly find it in a sorted list of product IDs. Write a program that uses binary search to efficiently locate the product in the list.",
//     testCases: [
//       { input: "1 2 3 4 5\n3", output: "2" }
//     ]
//   },
//   {
//     id: 65,
//     title: "First and Last Position of Element",
//     description: "You are analyzing website traffic logs. For a given user ID, you want to find the first and last time they visited your site, represented as positions in a sorted list of log entries. Write a program that finds the first and last occurrence of a target value in a sorted array.",
//     testCases: [
//       { input: "1 2 2 2 3\n2", output: "1 3" }
//     ]
//   },
//   {
//     id: 66,
//     title: "Power Function",
//     description: "You are developing a scientific calculator app. Users often need to calculate exponents, such as squaring or cubing numbers. Write a program that uses recursion to compute x raised to the power n, allowing users to perform advanced calculations.",
//     testCases: [
//       { input: "2 3", output: "8" },
//       { input: "5 2", output: "25" }
//     ]
//   },
//   {
//     id: 67,
//     title: "Generate Subsets",
//     description: "You are designing a fashion app that helps users mix and match outfits. To show all possible combinations, you need to generate every subset of a set of clothing items. Write a program that uses recursion to generate all possible subsets of a given set.",
//     testCases: [
//       { input: "1 2", output: "[] [1] [2] [1,2]" }
//     ]
//   },
//   {
//     id: 68,
//     title: "Tower of Hanoi",
//     description: "You are working at a moving company that needs to transfer a stack of fragile plates from one shelf to another, using a third shelf as temporary storage. The plates must be moved one at a time, and a larger plate can never be placed on top of a smaller one. Write a program to solve this problem, known as the Tower of Hanoi, for N disks.",
//     testCases: [
//       { input: "2", output: "Move disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C" }
//     ]
//   },
//   {
//     id: 69,
//     title: "Reverse Linked List",
//     description: "You are developing a music playlist app. Users want to listen to their playlist in reverse order, starting from the last song to the first. The playlist is implemented as a singly linked list. Write a program to reverse the linked list so the songs play in reverse.",
//     testCases: [
//       { input: "1 2 3 4", output: "4 3 2 1" }
//     ]
//   },
//   {
//     id: 70,
//     title: "Detect Cycle in Linked List",
//     description: "You are building a navigation app that tracks a user's route as a linked list of locations. Sometimes, due to a GPS glitch, the route may loop back on itself, creating a cycle. Write a program to detect if there is a cycle in the linked list representing the route.",
//     testCases: [
//       { input: "1 2 3 4 2", output: "Yes" },
//       { input: "1 2 3", output: "No" }
//     ]
//   },
//   {
//     id: 71,
//     title: "Merge Two Sorted Lists",
//     description: "You are developing a job application portal. Applicants can upload their resumes, and the system keeps two sorted lists: one for candidates with technical backgrounds and another for non-technical backgrounds. To create a master list for recruiters, write a program that merges these two sorted linked lists into a single sorted list of all candidates.",
//     testCases: [
//       { input: "1 2 3\n2 4 6", output: "1 2 2 3 4 6" }
//     ]
//   },

//   // Day 26: Stacks and Queues
//   {
//     id: 72,
//     title: "Valid Parentheses",
//     description: "You are building a code editor that helps programmers catch syntax errors. One common mistake is mismatched parentheses, brackets, or braces. Write a program that checks if a string containing these characters is valid, meaning every opening symbol has a matching closing symbol in the correct order.",
//     testCases: [
//       { input: "()", output: "Yes" },
//       { input: "({[})", output: "No" }
//     ]
//   },
//   {
//     id: 73,
//     title: "Implement Queue using Stacks",
//     description: "You are designing a ticketing system for a concert. Tickets are issued in the order people arrive (first-in, first-out), but your system only supports stack operations (last-in, first-out). Write a program to implement a queue using two stacks so that tickets are processed in the correct order.",
//     testCases: [
//       { input: "enqueue 1\nenqueue 2\ndequeue", output: "1" }
//     ]
//   },
//   {
//     id: 74,
//     title: "Min Stack",
//     description: "You are developing a stock trading app. Users want to know the lowest stock price at any point in their transaction history. Design a stack that allows users to push and pop prices, view the current price, and instantly retrieve the minimum price seen so far.",
//     testCases: [
//       { input: "push 3\npush 2\ngetMin", output: "2" }
//     ]
//   },

//   // Day 27: Trees
//   {
//     id: 75,
//     title: "Binary Tree Inorder Traversal",
//     description: "You are creating a genealogy app that displays family trees. To show relatives in a specific order, you need to traverse the family tree using the inorder method. Write a program that performs an inorder traversal of a binary tree, listing family members in the correct sequence.",
//     testCases: [
//       { input: "1 2 3", output: "2 1 3" },
//     ],
//   },
//   {
//     id: 76,
//     title: "Maximum Depth of Binary Tree",
//     description: "You are building a file explorer for a computer system. Folders and files are organized in a tree structure, and you want to display how deeply nested the deepest file is. Write a program that finds the maximum depth of a binary tree representing the folder structure.",
//     testCases: [
//       { input: "1 2 3 4 5", output: "3" },
//     ],
//   },
//   {
//     id: 77,
//     title: "Validate Binary Search Tree",
//     description: "You are developing a database indexing system. To ensure fast searches, the index must be structured as a binary search tree (BST), where each node follows the BST property. Write a program that checks if a given binary tree is a valid BST.",
//     testCases: [
//       { input: "2 1 3", output: "Yes" },
//       { input: "5 1 4 3 6", output: "No" },
//     ],
//   },

//   // Day 28: Graphs
//   {
//     id: 78,
//     title: "Depth First Search (DFS)",
//     description: "You are developing a maze-solving robot. The maze is represented as a graph, and the robot needs to explore all possible paths to find the exit. Write a program that uses Depth First Search (DFS) to traverse the maze, represented as an adjacency list.",
//     testCases: [
//       { input: "A-B,B-C,C-D", output: "A B C D" }
//     ],
//   },
//   {
//     id: 79,
//     title: "Breadth First Search (BFS)",
//     description: "You are building a navigation app that helps users find the shortest route between two locations in a city. The city map is represented as a graph. Write a program that uses Breadth First Search (BFS) to find the shortest path from a starting point to a destination.",
//     testCases: [
//       { input: "A-B,B-C,C-D", output: "A B C D" }
//     ],
//   },
//   {
//     id: 80,
//     title: "Detect Cycle in Graph",
//     description: "You are managing a project with multiple tasks, some of which depend on each other. The dependencies are represented as an undirected graph. To prevent scheduling issues, write a program that detects if there is a cycle in the graph, indicating circular dependencies among tasks.",
//     testCases: [
//       { input: "A-B,B-C,C-A", output: "Yes" },
//       { input: "A-B,B-C", output: "No" }
//     ],
//   },

//   // Day 29: Dynamic Programming
//   {
//     id: 81,
//     title: "Fibonacci Number (DP)",
//     description: "You are developing a financial forecasting tool for a startup. To predict future sales growth, your tool uses the Fibonacci sequence as a simple model for compounding growth. Write a program that computes the Nth Fibonacci number using dynamic programming to ensure fast and efficient calculations, even for large N.",
//     testCases: [
//       { input: "5", output: "5" },
//     ],
//   },
//   {
//     id: 82,
//     title: "Longest Common Subsequence",
//     description: "You are building a plagiarism detection system for academic institutions. To measure the similarity between two research papers, your system needs to find the length of the longest common subsequence of words or characters between the two documents. Write a program that calculates this value to help identify potential cases of copied content.",
//     testCases: [
//       { input: "ABCD EFGH", output: "2" },
//     ],
//   },
//   {
//     id: 83,
//     title: "Knapsack Problem",
//     description: "You are helping a hiker pack for a multi-day trek. Each item has a weight and a value (usefulness), and the backpack can only carry a limited weight. Write a program that selects the most valuable combination of items to carry, using the 0/1 knapsack algorithm, so the hiker is best prepared without exceeding the weight limit.",
//     testCases: [
//       { input: "10 20 30\n60 100 120\n50", output: "220" },
//     ],
//   },

//   // Day 30: Advanced Algorithms
//   {
//     id: 84,
//     title: "Longest Increasing Subsequence",
//     description: "You are analyzing stock market data for an investment firm. To help investors identify the best times to buy and sell, you want to find the longest period where stock prices continuously increase. Write a program that finds the length of the longest increasing subsequence in an array of daily stock prices.",
//     testCases: [
//       { input: "10 22 9 33 21 50 41 60", output: "5" },
//     ],
//   },
//   {
//     id: 85,
//     title: "Minimum Path Sum",
//     description: "You are developing a delivery route planner for a logistics company. The city is divided into a grid, and each cell has a cost to travel through (such as traffic or tolls). Write a program that finds the minimum cost path from the warehouse (top-left) to the delivery destination (bottom-right) in the grid.",
//     testCases: [
//       { input: "1 3 1\n1 5 1\n4 2 1", output: "7" },
//     ],
//   },
//   {
//     id: 86,
//     title: "Word Break",
//     description: "You are building a text messaging app with smart suggestions. To help users type faster, your app checks if a string can be split into valid words from a dictionary. Write a program that determines if a given string can be segmented into dictionary words, enabling real-time word suggestions as users type.",
//     testCases: [
//       { input: "leetcode\nleet code", output: "Yes" },
//     ],
//   },

//   // Day 31: Bit Manipulation
//   {
//     id: 87,
//     title: "Count Set Bits",
//     description: "You are working on a hardware diagnostics tool for a smart home system. To check the status of a device, you need to count how many features are enabled, represented by set bits (1s) in a binary number. Write a program that counts the number of set bits in a given number to help with device diagnostics.",
//     testCases: [
//       { input: "7", output: "3" },
//       { input: "8", output: "1" },
//     ],
//   },
//   {
//     id: 88,
//     title: "Single Number",
//     description: "You are developing a fraud detection system for online transactions. In a list of transaction IDs, every ID appears twice except for one unique transaction. Write a program to find the transaction ID that appears only once, helping to quickly spot anomalies in transaction logs.",
//     testCases: [
//       { input: "2 2 1", output: "1" },
//     ],
//   },
//   {
//     id: 89,
//     title: "Reverse Bits",
//     description: "You are working on a data transmission protocol for a telecommunications company. To ensure compatibility with different systems, you need to reverse the bits of a 32-bit unsigned integer before sending it over the network. Write a program that performs this bit reversal for efficient data transmission.",
//     testCases: [
//       { input: "000000101001", output: "100101000000" },
//     ],
//   },

//   // Day 32: Advanced Strings
//   {
//     id: 90,
//     title: "Longest Palindromic Substring",
//     description: "You are developing a DNA analysis tool for biologists. Certain DNA sequences are palindromic and have special significance in genetic research. Write a program that finds the longest palindromic substring in a given DNA sequence or string to assist researchers in identifying these important patterns.",
//     testCases: [
//       { input: "babad", output: "bab" },
//       { input: "cbbd", output: "bb" },
//     ],
//   },
//   {
//     id: 91,
//     title: "Regular Expression Matching",
//     description: "You are building a document search feature for a large online library. Users want to search for patterns in text using regular expressions, including the special characters '.' (any character) and '*' (zero or more of the preceding element). Write a program that implements regular expression matching to help users find exactly what they need in millions of documents.",
//     testCases: [
//       { input: "aa a*", output: "Yes" },
//       { input: "ab .*", output: "Yes" },
//     ],
//   },
//   {
//     id: 92,
//     title: "String Compression",
//     description: "You are developing a file compression tool for cloud storage. To save space, your tool replaces repeated characters in a string with the character followed by the count of repetitions. Write a program that performs this string compression, making files smaller and uploads faster for users.",
//     testCases: [
//       { input: "aabcccccaaa", output: "a2b1c5a3" },
//     ],
//   },

//   // Day 33: Advanced Data Structures

//   {
//     id: 93,
//     title: "LRU Cache",
//     description: "You are designing a memory management system for a web browser. The browser needs to store recently visited web pages in a cache for quick access, but space is limited. When the cache is full and a new page is loaded, the least recently accessed page should be removed. Implement an LRU (Least Recently Used) cache with get and put operations to ensure users always have fast access to their most important pages.",
//     testCases: [
//       { input: "put 1 A\nput 2 B\nget 1\nput 3 C\nget 2", output: "-1" }
//     ],
//   },
//   {
//     id: 94,
//     title: "Trie Implementation",
//     description: "You are building an autocomplete feature for a search engine. To provide instant suggestions as users type, you need to efficiently store and retrieve a large set of words and their prefixes. Implement a Trie (prefix tree) data structure with methods to insert words, search for exact matches, and check if any word starts with a given prefix, enabling fast and responsive search experiences.",
//     testCases: [
//       { input: "insert apple\nsearch apple\nstartsWith app", output: "true true" }
//     ],
//   },
//   {
//     id: 95,
//     title: "Min Heap",
//     description: "You are developing a real-time task scheduler for a hospital's patient monitoring system. The scheduler must always process the most urgent (lowest value) task first, such as responding to critical alerts. Use a Min Heap data structure to efficiently manage and retrieve the minimum element, ensuring patient safety and timely responses.",
//     testCases: [
//       { input: "push 3\npush 1\ngetMin\npop\ngetMin", output: "1 3" }
//     ],
//   },

//   // Day 34: Graph Algorithms
//   {
//     id: 96,
//     title: "Dijkstra’s Algorithm",
//     description: "You are building a GPS navigation system for drivers. To help users find the fastest route between two locations, your system must find the shortest path in a weighted map of roads, where each road has a different travel time or distance. Implement Dijkstra’s algorithm to solve this real-world routing problem.",
//     testCases: [
//       { input: "A-B:1,B-C:2,A-C:4", output: "A B C (cost: 3)" }
//     ],
//   },
//   {
//     id: 97,
//     title: "Topological Sort",
//     description: "You are developing a project management tool for a construction company. Some tasks must be completed before others can begin, forming a dependency graph. Write a program that performs a topological sort on this directed acyclic graph to determine a valid order for completing all tasks, ensuring the project runs smoothly and efficiently.",
//     testCases: [
//       { input: "A->B,B->C", output: "A B C" }
//     ],
//   },
//   {
//     id: 98,
//     title: "Minimum Spanning Tree",
//     description: "You are designing a network for a new office building. To minimize wiring costs, you want to connect all rooms with the least total cable length. Write a program that finds the minimum spanning tree of the network using Kruskal’s algorithm, ensuring every room is connected with the minimum possible expense.",
//     testCases: [
//       { input: "A-B:1,B-C:2,A-C:3", output: "A-B,B-C (cost: 3)" }
//     ],
//   },

//   // Day 35: Final Challenges
//   {
//     id: 99,
//     title: "N-Queens Problem",
//     description: "You are developing a chess puzzle app for enthusiasts. One classic challenge is to place N queens on an NxN chessboard so that no two queens threaten each other. Write a program to solve the N-Queens problem and display a valid arrangement, helping users improve their chess and logic skills.",
//     testCases: [
//       { input: "4", output: ".Q..\n...Q\nQ...\n..Q." },
//     ],
//   },
//   {
//     id: 100,
//     title: "Sudoku Solver",
//     description: "You are building a Sudoku helper app for puzzle enthusiasts. Users can input a partially filled 9x9 Sudoku board, and your app should solve it using backtracking. Write a program that fills in the board with a valid solution, making it easier for users to enjoy and learn from challenging puzzles.",
//     testCases: [
//       { input: "(partial board)", output: "(solved board)" }
//     ],
//   },
// ];



export const problems = [
 
  
{
  id: 2,
  title: "Add Two Numbers",
  description: "Take two integers as input and print their sum.",
  testCases: [
    // Common test cases for all languages
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
    description: "Determine whether a given number is even or odd.",
    testCases: [
      { input: "7", output: "Odd" },
      { input: "12", output: "Even" }
    ]
  },
  {
    id: 4,
    title: "Maximum of Two Numbers",
    description: "Take two numbers and print the greater one.",
    testCases: [
      { input: "10 20", output: "20" },
      { input: "5 3", output: "5" }
    ]
  },
  {
    id: 5,
    title: "Maximum of Three Numbers",
    description: "Take three numbers and print the maximum.",
    testCases: [
      { input: "3 7 5", output: "7" },
      { input: "1 4 2", output: "4" }
    ]
  },
  {
    id: 6,
    title: "Leap Year Check",
    description: "Check whether the given year is a leap year.",
    testCases: [
      { input: "2000", output: "Leap Year" },
      { input: "1900", output: "Not a Leap Year" }
    ]
  },
  {
    id: 7,
    title: "Factorial of Number",
    description: "Find the factorial of a number.",
    testCases: [
      { input: "5", output: "120" },
      { input: "0", output: "1" }
    ]
  },
  {
    id: 8,
    title: "Prime Number Check",
    description: "Check whether a number is a prime number.",
    testCases: [
      { input: "11", output: "Prime" },
      { input: "9", output: "Not Prime" }
    ]
  },
  {
    id: 9,
    title: "Multiplication Table",
    description: "Print the multiplication table of a number up to 10 terms.",
    testCases: [
      { input: "2", output: "2 4 6 8 10 12 14 16 18 20" },
      { input: "3", output: "3 6 9 12 15 18 21 24 27 30" }
    ]
  },
  {
    id: 10,
    title: "Fibonacci Series",
    description: "Print Fibonacci series up to n terms.",
    testCases: [
      { input: "5", output: "0 1 1 2 3" },
      { input: "7", output: "0 1 1 2 3 5 8" }
    ]
  },
  {
    id: 11,
    title: "Sum of Natural Numbers",
    description: "Find the sum of first n natural numbers.",
    testCases: [
      { input: "10", output: "55" },
      { input: "5", output: "15" }
    ]
  },
  {
    id: 12,
    title: "Reverse a Number",
    description: "Reverse the digits of a given number.",
    testCases: [
      { input: "1234", output: "4321" },
      { input: "100", output: "1" }
    ]
  },
  {
    id: 13,
    title: "Palindrome Number",
    description: "Check if a number is a palindrome.",
    testCases: [
      { input: "121", output: "Palindrome" },
      { input: "123", output: "Not Palindrome" }
    ]
  },
  {
    id: 14,
    title: "Armstrong Number",
    description: "Check whether a number is an Armstrong number (3-digit).",
    testCases: [
      { input: "153", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" }
    ]
  },
  {
    id: 15,
    title: "Swap Two Numbers",
    description: "Swap values of two variables without using a third variable.",
    testCases: [
      { input: "3 5", output: "5 3" },
      { input: "10 20", output: "20 10" }
    ]
  },
  {
    id: 16,
    title: "Simple Interest",
    description: "Calculate simple interest given principal, rate and time.",
    testCases: [
      { input: "1000 5 2", output: "100.0" },
      { input: "1500 3 1", output: "45.0" }
    ]
  },
  {
    id: 17,
    title: "Area of Circle",
    description: "Calculate the area of a circle given the radius.",
    testCases: [
      { input: "2", output: "12.57" },
      { input: "5", output: "78.54" }
    ]
  },
  {
    id: 18,
    title: "Count Digits",
    description: "Count the number of digits in a given number.",
    testCases: [
      { input: "12345", output: "5" },
      { input: "0", output: "1" }
    ]
  },
  {
    id: 19,
    title: "Sum of Digits",
    description: "Find the sum of digits in a number.",
    testCases: [
      { input: "123", output: "6" },
      { input: "456", output: "15" }
    ]
  },
  {
    id: 20,
    title: "Check Positive or Negative",
    description: "Determine if a number is positive, negative or zero.",
    testCases: [
      { input: "0", output: "Zero" },
      { input: "-3", output: "Negative" },
      { input: "5", output: "Positive" }
    ]
  },
  {
    id: 21,
    title: "Find HCF",
    description: "Find the Highest Common Factor (HCF) of two numbers.",
    testCases: [
      { input: "12 18", output: "6" },
      { input: "8 32", output: "8" }
    ]
  },
  {
    id: 22,
    title: "Find LCM",
    description: "Find the Least Common Multiple (LCM) of two numbers.",
    testCases: [
      { input: "4 5", output: "20" },
      { input: "3 7", output: "21" }
    ]
  },
  {
    id: 23,
    title: "Check Alphabet",
    description: "Check if a character is an alphabet or not.",
    testCases: [
      { input: "A", output: "Alphabet" },
      { input: "1", output: "Not Alphabet" }
    ]
  },
  {
    id: 24,
    title: "Check Vowel or Consonant",
    description: "Check if an input alphabet is a vowel or consonant.",
    testCases: [
      { input: "e", output: "Vowel" },
      { input: "z", output: "Consonant" }
    ]
  },
  {
    id: 25,
    title: "ASCII Value",
    description: "Print the ASCII value of a character.",
    testCases: [
      { input: "A", output: "65" },
      { input: "a", output: "97" }
    ]
  },
  {
    id: 26,
    title: "Sum of Even Numbers",
    description: "Find the sum of even numbers from 1 to n.",
    testCases: [
      { input: "10", output: "30" },
      { input: "5", output: "6" }
    ]
  },
  {
    id: 27,
    title: "Sum of Odd Numbers",
    description: "Find the sum of odd numbers from 1 to n.",
    testCases: [
      { input: "5", output: "9" },
      { input: "10", output: "25" }
    ]
  },
  {
    id: 28,
    title: "Check Divisibility",
    description: "Check if a number is divisible by 2 and 3.",
    testCases: [
      { input: "6", output: "Divisible" },
      { input: "10", output: "Not Divisible" }
    ]
  },
  {
    id: 29,
    title: "Count Vowels in String",
    description: "Count the number of vowels in a given string.",
    testCases: [
      { input: "hello", output: "2" },
      { input: "aeiou", output: "5" }
    ]
  },
  {
    id: 30,
    title: "Check String Palindrome",
    description: "Check if a string is a palindrome.",
    testCases: [
      { input: "madam", output: "Palindrome" },
      { input: "hello", output: "Not Palindrome" }
    ]
  },
  {
    id: 31,
    title: "Count Words in String",
    description: "Count the number of words in a given sentence.",
    testCases: [
      { input: "Hello world", output: "2" },
      { input: "This is Python", output: "3" }
    ]
  },
  {
    id: 32,
    title: "Reverse String",
    description: "Reverse a given string.",
    testCases: [
      { input: "hello", output: "olleh" },
      { input: "Python", output: "nohtyP" }
    ]
  },
  {
    id: 33,
    title: "Uppercase String",
    description: "Convert a string to uppercase.",
    testCases: [
      { input: "python", output: "PYTHON" }
    ]
  },
  {
    id: 34,
    title: "Lowercase String",
    description: "Convert a string to lowercase.",
    testCases: [
      { input: "PYTHON", output: "python" }
    ]
  },
  {
    id: 35,
    title: "Square of Number",
    description: "Find the square of a given number.",
    testCases: [
      { input: "5", output: "25" },
      { input: "9", output: "81" }
    ]
  },
  {
    id: 36,
    title: "Cube of Number",
    description: "Find the cube of a given number.",
    testCases: [
      { input: "3", output: "27" },
      { input: "4", output: "64" }
    ]
  },
  {
    id: 37,
    title: "Check Armstrong (n-digit)",
    description: "Check if a number is an Armstrong number for any digit length.",
    testCases: [
      { input: "9474", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" }
    ]
  },
  {
    id: 38,
    title: "Sum of Natural Numbers (Recursion)",
    description: "Calculate sum of n natural numbers using recursion.",
    testCases: [
      { input: "5", output: "15" },
      { input: "10", output: "55" }
    ]
  },
  {
    id: 39,
    title: "Calculate Power",
    description: "Calculate x raised to power y.",
    testCases: [
      { input: "2 3", output: "8" },
      { input: "5 2", output: "25" }
    ]
  },
  {
    id: 40,
    title: "Find Largest Element",
    description: "Find the largest number from a list.",
    testCases: [
      { input: "1 2 3 4 5", output: "5" },
      { input: "10 7 11", output: "11" }
    ]
  },
  {
    id: 41,
    title: "Find Smallest Element",
    description: "Find the smallest number from a list.",
    testCases: [
      { input: "1 2 3 4 5", output: "1" },
      { input: "10 7 11", output: "7" }
    ]
  },
  {
    id: 42,
    title: "Check Armstrong (2-digit)",
    description: "Check if a 2-digit number is Armstrong (Note: no 2-digit Armstrong exists).",
    testCases: [
      { input: "10", output: "Not Armstrong" }
    ]
  },
  {
    id: 43,
    title: "Find GCD using Recursion",
    description: "Find the GCD of two numbers using recursion.",
    testCases: [
      { input: "36 60", output: "12" }
    ]
  },
  {
    id: 44,
    title: "Find ASCII Range",
    description: "Print characters from a to z with ASCII values.",
    testCases: [
      { input: "", output: "a 97 b 98 c 99 ... z 122" }
    ]
  },
  {
    id: 45,
    title: "Generate Random Number",
    description: "Generate a random number between 1 to 100.",
    testCases: [
      { input: "", output: "Random number between 1 to 100" }
    ]
  },
  {
    id: 46,
    title: "Print Pattern *",
    description: "Print pattern of stars with given number of rows.",
    testCases: [
      { input: "3", output: "* * **" }
    ]
  },
  {
    id: 47,
    title: "Find Average of Numbers",
    description: "Find the average of given numbers.",
    testCases: [
      { input: "2 4 6", output: "4.0" }
    ]
  },
  {
    id: 48,
    title: "List All Prime in Range",
    description: "Print all prime numbers in a given range.",
    testCases: [
      { input: "10", output: "2 3 5 7" }
    ]
  },
  {
    id: 49,
    title: "Reverse a List",
    description: "Reverse the list elements.",
    testCases: [
      { input: "1 2 3 4", output: "4 3 2 1" }
    ]
  },
  {
    id: 50,
    title: "Remove Duplicates",
    description: "Remove duplicates from a list.",
    testCases: [
      { input: "1 2 2 3 4 4", output: "1 2 3 4" }
    ]
  },
  {
    id: 51,
    title: "Check if Number is Perfect",
    description: "A perfect number is a number that is equal to the sum of its proper divisors (excluding itself). Write a program to check if a given number is perfect.",
    testCases: [
      { input: "6", output: "Yes" },
      { input: "10", output: "No" }
    ]
  },
  {
    id: 51,
    title: "Count Words in a Sentence",
    description: "Given a sentence, count the total number of words in it.",
    testCases: [
      { input: "Hello world from Python", output: "4" },
      { input: "Count these words please", output: "4" }
    ]
  },
  {
    id: 52,
    title: "Check if String is Anagram",
    description: "Two strings are anagrams if they contain the same characters in a different order. Write a program to check if two given strings are anagrams.",
    testCases: [
      { input: "listen silent", output: "Yes" },
      { input: "hello world", output: "No" }
    ]
  },
  {
    id: 53,
    title: "Calculate Compound Interest",
    description: "Given principal amount, rate of interest, and time in years, calculate the compound interest.",
    testCases: [
      { input: "1000 5 2", output: "1102.5" },
      { input: "1500 4.3 6", output: "1938.84" }
    ]
  },
  {
    id: 54,
    title: "Find ASCII Value of Character",
    description: "Given a character, find its ASCII value.",
    testCases: [
      { input: "A", output: "65" },
      { input: "z", output: "122" }
    ]
  },
  {
    id: 55,
    title: "Convert Decimal to Binary",
    description: "Convert a decimal number to its binary representation.",
    testCases: [
      { input: "10", output: "1010" },
      { input: "255", output: "11111111" }
    ]
  },
  {
    id: 56,
    title: "Check if Number is Armstrong",
    description: "Check if a number is an Armstrong number (sum of cubes of digits equals the number).",
    testCases: [
      { input: "153", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },
  {
    id: 57,
    title: "Calculate Power Using Recursion",
    description: "Calculate x raised to the power n using recursion.",
    testCases: [
      { input: "2 3", output: "8" },
      { input: "5 0", output: "1" }
    ]
  },
  {
    id: 58,
    title: "Find Largest Element in List",
    description: "Find the largest number in a given list.",
    testCases: [
      { input: "1 3 5 7 9", output: "9" },
      { input: "-10 -5 -1", output: "-1" }
    ]
  },
  {
    id: 59,
    title: "Check if List is Sorted",
    description: "Check if a given list is sorted in ascending order.",
    testCases: [
      { input: "1 2 3 4 5", output: "Yes" },
      { input: "5 3 2 1", output: "No" }
    ]
  },
  {
    id: 60,
    title: "Remove Duplicates from List",
    description: "Remove duplicate elements from a list and print the resulting list.",
    testCases: [
      { input: "1 2 2 3 4 4 5", output: "1 2 3 4 5" },
      { input: "7 7 7 7", output: "7" }
    ]
  },
  {
    id: 61,
    title: "Find Common Elements in Two Lists",
    description: "Given two lists, print the common elements.",
    testCases: [
      { input: "1 2 3 4\n3 4 5 6", output: "3 4" },
      { input: "7 8 9\n10 11 12", output: "" }
    ]
  },
  {
    id: 62,
    title: "Count Frequency of Elements in List",
    description: "Count the frequency of each element in the list and print the counts.",
    testCases: [
      { input: "1 2 2 3 3 3", output: "1:1 2:2 3:3" },
      { input: "4 4 4 4", output: "4:4" }
    ]
  },
  {
    id: 63,
    title: "Calculate Factorial Using Recursion",
    description: "Calculate factorial of a number using a recursive function.",
    testCases: [
      { input: "4", output: "24" },
      { input: "6", output: "720" }
    ]
  },
  {
    id: 64,
    title: "Print Pattern - Right Triangle Star",
    description: "Print a right-angled triangle star pattern of given height.",
    testCases: [
      { input: "3", output: "\n\n**" },
      { input: "5", output: "\n\n*\n*\n***" }
    ]
  },
  {
    id: 65,
    title: "Print Pattern - Pyramid",
    description: "Print a pyramid star pattern with a given number of rows.",
    testCases: [
      { input: "3", output: "  \n *\n**" }
    ]
  },
  {
    id: 66,
    title: "Calculate Sum of Natural Numbers",
    description: "Calculate the sum of first N natural numbers.",
    testCases: [
      { input: "5", output: "15" },
      { input: "10", output: "55" }
    ]
  },
  {
    id: 67,
    title: "Check Palindrome Number",
    description: "Check if a number is a palindrome (reads the same forwards and backwards).",
    testCases: [
      { input: "121", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },
  {
    id: 68,
    title: "Find Second Largest Number",
    description: "Find the second largest number in a list.",
    testCases: [
      { input: "10 20 30 40 50", output: "40" },
      { input: "5 5 5 5", output: "5" }
    ]
  },
  {
    id: 69,
    title: "Count Digits in a Number",
    description: "Count the number of digits in an integer.",
    testCases: [
      { input: "12345", output: "5" },
      { input: "1000", output: "4" }
    ]
  },
  {
    id: 70,
    title: "Check if List Contains Element",
    description: "Check whether a given element exists in a list or not.",
    testCases: [
      { input: "1 2 3 4 5\n3", output: "Yes" },
      { input: "7 8 9\n5", output: "No" }
    ]
  },
  {
    id: 71,
    title: "Find Sum of Digits of a Number",
    description: "Calculate sum of digits of a number.",
    testCases: [
      { input: "123", output: "6" },
      { input: "456", output: "15" }
    ]
  },
  {
    id: 72,
    title: "Find Factors of a Number",
    description: "Print all factors of a given number.",
    testCases: [
      { input: "12", output: "1 2 3 4 6 12" },
      { input: "7", output: "1 7" }
    ]
  },
  {
    id: 73,
    title: "Check if Number is Palindrome",
    description: "Check if a number is palindrome without converting it to string.",
    testCases: [
      { input: "121", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },
  {
    id: 74,
    title: "Find Average of List",
    description: "Calculate the average (mean) of elements in a list.",
    testCases: [
      { input: "10 20 30 40", output: "25" },
      { input: "5 10", output: "7.5" }
    ]
  },
  {
    id: 75,
    title: "Convert Celsius to Fahrenheit",
    description: "Convert temperature from Celsius to Fahrenheit.",
    testCases: [
      { input: "0", output: "32" },
      { input: "100", output: "212" }
    ]
  },
  {
    id: 76,
    title: "Remove Vowels from String",
    description: "Remove all vowels from a given string.",
    testCases: [
      { input: "hello world", output: "hll wrld" },
      { input: "python", output: "pythn" }
    ]
  },
  {
    id: 77,
    title: "Find Length of String Without len()",
    description: "Calculate length of a string without using built-in len() function.",
    testCases: [
      { input: "hello", output: "5" },
      { input: "world", output: "5" }
    ]
  },
  {
    id: 78,
    title: "Check if String Contains Only Digits",
    description: "Check if a string contains only numeric digits.",
    testCases: [
      { input: "12345", output: "Yes" },
      { input: "123a5", output: "No" }
    ]
  },
  {
    id: 79,
    title: "Concatenate Two Lists",
    description: "Concatenate two lists into a single list.",
    testCases: [
      { input: "1 2 3\n4 5 6", output: "1 2 3 4 5 6" }
    ]
  },
  {
    id: 80,
    title: "Find Intersection of Two Lists",
    description: "Find common elements present in two lists.",
    testCases: [
      { input: "1 2 3\n2 3 4", output: "2 3" }
    ]
  },
  {
    id: 81,
    title: "Calculate Sum of Squares",
    description: "Calculate sum of squares of first N natural numbers.",
    testCases: [
      { input: "3", output: "14" },
      { input: "5", output: "55" }
    ]
  },
  {
    id: 82,
    title: "Find Unique Elements in List",
    description: "Print only the unique elements from a list.",
    testCases: [
      { input: "1 2 2 3 4 4", output: "1 3" }
    ]
  },
  {
    id: 83,
    title: "Convert Binary to Decimal",
    description: "Convert a binary number (as string) to decimal number.",
    testCases: [
      { input: "1010", output: "10" },
      { input: "1111", output: "15" }
    ]
  },
  {
    id: 84,
    title: "Convert Decimal to Octal",
    description: "Convert decimal number to octal representation.",
    testCases: [
      { input: "8", output: "10" },
      { input: "64", output: "100" }
    ]
  },
  {
    id: 85,
    title: "Count Uppercase and Lowercase Letters",
    description: "Count number of uppercase and lowercase letters in a string.",
    testCases: [
      { input: "Hello World", output: "Uppercase: 2, Lowercase: 8" }
    ]
  },
  {
    id: 86,
    title: "Find Largest Word in a Sentence",
    description: "Find the longest word in a sentence.",
    testCases: [
      { input: "Python programming is fun", output: "programming" }
    ]
  },
  {
    id: 87,
    title: "Check if String is Palindrome",
    description: "Check if a string reads the same forwards and backwards.",
    testCases: [
      { input: "racecar", output: "Yes" },
      { input: "hello", output: "No" }
    ]
  },
  {
    id: 88,
    title: "Replace Spaces with Underscore",
    description: "Replace all spaces in a string with underscores.",
    testCases: [
      { input: "hello world", output: "hello_world" }
    ]
  },
  {
    id: 89,
    title: "Print Prime Numbers in Range",
    description: "Print all prime numbers in a given range.",
    testCases: [
      { input: "1 10", output: "2 3 5 7" }
    ]
  },
  {
    id: 90,
    title: "Check if String is Numeric",
    description: "Check if a string represents a numeric value.",
    testCases: [
      { input: "12345", output: "Yes" },
      { input: "12a45", output: "No" }
    ]
  },
  {
    id: 91,
    title: "Find Sum of Elements in List",
    description: "Calculate sum of all elements in a list.",
    testCases: [
      { input: "1 2 3 4 5", output: "15" }
    ]
  },
  {
    id: 92,
    title: "Sort List Using Bubble Sort",
    description: "Sort a list of numbers using bubble sort algorithm.",
    testCases: [
      { input: "5 3 8 6 2", output: "2 3 5 6 8" }
    ]
  },
  {
    id: 93,
    title: "Find Factorial Using Iteration",
    description: "Calculate factorial of a number using iteration.",
    testCases: [
      { input: "4", output: "24" }
    ]
  },
  {
    id: 94,
    title: "Check if String Contains Substring",
    description: "Check if a substring exists in a given string.",
    testCases: [
      { input: "hello world\nworld", output: "Yes" },
      { input: "hello world\npython", output: "No" }
    ]
  },
  {
    id: 95,
    title: "Find Number of Vowels and Consonants",
    description: "Count vowels and consonants in a string.",
    testCases: [
      { input: "hello", output: "Vowels: 2, Consonants: 3" }
    ]
  },
  {
    id: 96,
    title: "Remove All Whitespaces from String",
    description: "Remove all whitespace characters from a string.",
    testCases: [
      { input: " h e l l o ", output: "hello" }
    ]
  },
  {
    id: 97,
    title: "Find Second Smallest Number",
    description: "Find the second smallest number in a list.",
    testCases: [
      { input: "10 5 3 8 3", output: "5" }
    ]
  },
  {
    id: 98,
    title: "Calculate Power Using Loop",
    description: "Calculate x raised to the power n using a loop.",
    testCases: [
      { input: "2 4", output: "16" }
    ]
  },
  {
    id: 99,
    title: "Find Sum of Even Numbers in List",
    description: "Calculate sum of all even numbers in a list.",
    testCases: [
      { input: "1 2 3 4 5 6", output: "12" }
    ]
  },
  {
    id: 100,
    title: "Find Sum of Odd Numbers in List",
    description: "Calculate sum of all odd numbers in a list.",
    testCases: [
      { input: "1 2 3 4 5 6", output: "9" }
    ]
  }
];
