- **Question 1**

let greeting;\
greetign = {};\
console.log(greetign);\

 A: {}\
 B: ReferenceError: greetign is not defined\
 C: undefined\

 Answer: A: {}\
 Cause: This code will log an empty object {} to the console. because the variable greeting declared and assigned an empty object.\


- **Question 2**

 function sum(a, b) {\
    return a + b;\
}\

 sum(1, "2");\
 A: NaN\
 B: TypeError\
 C: "12"\
 D: 3\

 Answer: C: "12"\
 Cause: If input give a string and a number JavaScript concatenates them. As the string "2" with the string representation of the number 1.\


- **Question 4**
 const food = ["🍕", "🍫", "🥑", "🍔"];\
 const info = { favoriteFood: food[0] };\

 info.favoriteFood = "🍝";\
 console.log(food);\

 A: ['🍕', '🍫', '🥑', '🍔']\
 B: ['🍝', '🍫', '🥑', '🍔']\
 C: ['🍝', '🍕', '🍫', '🥑', '🍔']\
 D: ReferenceError\

 Answer: A: ['🍕', '🍫', '🥑', '🍔']\
 Cause: An array food is declared and initialized with four food. The value of info > favoriteFood is reassigned to "🍝". \
 The reason why changing the info.favoriteFood property doesn't affect the original food array is because of how JavaScript handles primitive values and object references.\

- **Question 4**
 function sayHi(name) {\
   return `Hi there, ${name}`;\
 }\
 console.log(sayHi());\

 A: Hi there,\
 B: Hi there, undefined\
 C: Hi there, null\
 D: ReferenceError\

 Answer: B: Hi there, undefined\
 Cause: The sayHi() function call results in "Hi there, undefined" because the name parameter inside the function is not provided with a value.\


- **Question 5**
 let count = 0;\
 const nums = [0, 1, 2, 3];\

 nums.forEach((num) => {\
   if (num) count += 1;\
 });\

 console.log(count);\
 A: 1\
 B: 2\
 C: 3\
 D: 4\

 Answer: C: 3\
Cause: The forEach method iterates through each element of the nums array. For each element, the code checks if the element is truthy (if (num)). In JavaScript, 0 is considered falsy, and any other non-zero number is considered truthy.\
Thats why the output of console.log(count); will be 3, as there are three elements (1, 2, 3) in the array\